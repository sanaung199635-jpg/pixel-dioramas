// Phase 8 mobile capture: same states and sizes before and after, plus layout checks.
// node tools/phase8-capture.cjs <url> <outDir> [vp,vp…|all] [only=state,…]
// Viewports are emulated in Chromium (touch + mobile UA); no WebKit here, so this
// is not a substitute for a real iPhone.
const { chromium, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

const [url, out, vpArg = 'all', ...rest] = process.argv.slice(2);
const opt = Object.fromEntries(rest.map((a) => a.split('=')));
const only = opt.only ? opt.only.split(',') : null;

const iphone = devices['iPhone 13'];
const VIEWPORTS = {
  p320: { width: 320, height: 568, mobile: true },   // iPhone SE (1st gen) class
  p390: { width: 390, height: 844, mobile: true },   // iPhone 13/14/15
  p430: { width: 430, height: 932, mobile: true },   // iPhone Pro Max class
  land: { width: 844, height: 390, mobile: true },   // iPhone landscape
  tab: { width: 768, height: 1024, mobile: true },   // iPad mini portrait
  desk: { width: 1440, height: 900, mobile: false },
};
const STATES = [
  { id: 'intro' },
  { id: 's01', stage: 0, p: 0.7 },
  { id: 's02', stage: 1, p: 0.6 },
  { id: 's06', stage: 5, p: 0.55 },
  { id: 's08', stage: 7, p: 1 },
  { id: 's12', stage: 11, p: 1 },
  { id: 's02-know', stage: 1, p: 0.6, know: 'half' },
  { id: 's02-know-full', stage: 1, p: 0.6, know: 'full' },
];

(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const report = {};
  for (const name of vpArg === 'all' ? Object.keys(VIEWPORTS) : vpArg.split(',')) {
    const v = VIEWPORTS[name];
    const ctx = await b.newContext({
      viewport: { width: v.width, height: v.height }, deviceScaleFactor: 1,
      ...(v.mobile ? { isMobile: true, hasTouch: true, userAgent: iphone.userAgent } : {}),
    });
    const p = await ctx.newPage();
    const errs = [];
    p.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
    p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    p.on('response', (r) => { if (r.status() >= 400) errs.push(`http ${r.status()}: ${r.url()}`); });
    await p.goto(url);
    await p.waitForFunction(() => window.__jade && window.__jade.state().frames > 0, null, { timeout: 240000 });
    fs.mkdirSync(path.join(out, name), { recursive: true });
    report[name] = { size: `${v.width}x${v.height}`, states: {} };
    for (const st of STATES) {
      if (only && !only.includes(st.id)) continue;
      await p.evaluate(async (st) => {
        const j = window.__jade;
        j.unfreeze();
        if (st.stage !== undefined) { j.goTo(st.stage, false); j.seek(st.p); }
        j.lightMode('gallery');
        j.resetView();
        await j.frames(2);
      }, st);
      // knowledge panel: the Phase 8 sheet has explicit sizes; v1.x only has the toggle
      const closeKnow = async () => p.evaluate(() => { document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); });
      await closeKnow();
      // a real tap first; if another element covers the button, record that and
      // trigger it programmatically so the screenshot set stays complete
      const tap = async (sel) => {
        const loc = p.locator(sel).first();
        if (!(await loc.count())) return 'missing';
        try { await loc.click({ timeout: 4000 }); return 'ok'; } catch { await loc.evaluate((el) => el.click()); return 'covered'; }
      };
      let knowTap = null;
      if (st.know) {
        knowTap = await tap('[data-action="knowledge"]:visible, .know-toggle:visible');
        if (st.know === 'full') knowTap += '/' + (await tap('[data-action="sheet-size"]:visible'));
      }
      // let the camera framing settle (it eases toward the free area as panels move)
      await p.evaluate((n) => window.__jade.freeze(n), st.know ? 16 : 6);
      await p.screenshot({ path: path.join(out, name, `${st.id}.png`), timeout: 300000 });
      // layout checks
      const m = await p.evaluate(() => {
        const W = innerWidth, H = innerHeight;
        const vis = (el) => { const s = getComputedStyle(el); const r = el.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0; };
        const btns = [...document.querySelectorAll('.ui button, .ui input')].filter(vis);
        const off = btns.filter((el) => { const r = el.getBoundingClientRect(); return r.right > W + 1 || r.bottom > H + 1 || r.left < -1 || r.top < -1; }).map((el) => el.getAttribute('aria-label') || el.className);
        const small = btns.filter((el) => { const r = el.getBoundingClientRect(); return (r.width < 44 || r.height < 44) && !el.classList.contains('pin') && el.type !== 'range'; }).map((el) => `${el.getAttribute('aria-label') || el.className} ${Math.round(el.getBoundingClientRect().width)}x${Math.round(el.getBoundingClientRect().height)}`);
        const panels = [...document.querySelectorAll('.ui > *')].filter(vis).filter((el) => !el.classList.contains('hots') && !el.classList.contains('sr-only'));
        const area = panels.reduce((a, el) => { const r = el.getBoundingClientRect(); const w = Math.max(0, Math.min(r.right, W) - Math.max(r.left, 0)); const h = Math.max(0, Math.min(r.bottom, H) - Math.max(r.top, 0)); return a + w * h; }, 0);
        const j = window.__jade.state();
        return { overflowX: document.documentElement.scrollWidth > W, offscreen: off, smallTargets: small, uiCoverPct: Math.round((area / (W * H)) * 100), stage: j.stageId, frame: window.__jade.frameRect ? window.__jade.frameRect() : null };
      });
      if (knowTap) m.knowTap = knowTap;
      report[name].states[st.id] = m;
      console.log(name, st.id, 'overflowX', m.overflowX, 'offscreen', m.offscreen.length, 'small', m.smallTargets.length, 'uiCover', m.uiCoverPct + '%', knowTap ? 'knowTap ' + knowTap : '');
      await p.evaluate(() => window.__jade.unfreeze());
    }
    report[name].errors = [...new Set(errs)];
    console.log(name, 'errors', report[name].errors.length, report[name].errors.join(' | '));
    await ctx.close();
  }
  fs.writeFileSync(path.join(out, `report${only ? '-partial' : ''}.json`), JSON.stringify(report, null, 1));
  await b.close();
})();
