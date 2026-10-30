// Phase 7 before/after capture: the same states, camera, size and UI for every run.
// node tools/phase7-capture.cjs <url> <outDir> [desktop|mobile|both] [only=a,b]
// Writes <outDir>/<viewport>/<state>.png and <outDir>/stats-<viewport>.json.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const [url, out, which = 'both', ...rest] = process.argv.slice(2);
const opt = Object.fromEntries(rest.map((a) => a.split('=')));
const only = opt.only ? opt.only.split(',') : null;
// detail mode: same camera and state, rendered at 2x pixel density and cropped
const DETAIL = {
  'd-pit': { state: 's01', clip: [560, 250, 600, 360] },
  'd-digger': { state: 's01', clip: [690, 310, 340, 230] },
  'd-stone': { state: 's04', clip: [520, 230, 460, 360] },
  'd-cut': { state: 's06', clip: [520, 230, 460, 360] },
  'd-bangle': { state: 's12', clip: [600, 180, 440, 500] },
};

// Same moments as tools/measure.cjs (each stage's busiest pose).
const MOMENTS = [0.7, 0.6, 0.6, 0.6, 0.9, 0.55, 0.85, 1, 0.6, 0.6, 0.6, 1];
const STATES = [
  { id: 'intro' },
  ...MOMENTS.map((m, i) => ({ id: `s${String(i + 1).padStart(2, '0')}`, stage: i, p: m })),
  { id: 's12-back', stage: 11, p: 1, light: 'back' },
];
const VIEWPORTS = {
  desktop: { width: 1440, height: 900, isMobile: false, hasTouch: false },
  mobile: { width: 390, height: 844, isMobile: true, hasTouch: true },
};

(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  for (const vp of which === 'both' ? ['desktop', 'mobile'] : [which]) {
    const v = VIEWPORTS[vp];
    const dir = path.join(out, vp);
    fs.mkdirSync(dir, { recursive: true });
    const dsf = opt.detail ? 2 : 1;
    const p = await b.newPage({ viewport: { width: v.width, height: v.height }, deviceScaleFactor: dsf, isMobile: v.isMobile, hasTouch: v.hasTouch });
    const errs = [];
    p.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
    p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    p.on('response', (r) => { if (r.status() >= 400) errs.push(`http ${r.status()}: ${r.url()}`); });
    const t0 = Date.now();
    await p.goto(url);
    await p.waitForFunction(() => window.__jade && window.__jade.state().frames > 0, null, { timeout: 240000 });
    const loadMs = Date.now() - t0;
    const gpu = await p.evaluate(() => {
      const gl = document.querySelector('canvas').getContext('webgl2');
      const ext = gl && gl.getExtension('WEBGL_debug_renderer_info');
      return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'n/a';
    });
    const stats = { viewport: vp, size: `${v.width}x${v.height}`, loadMs, gpu, states: {} };
    const look = opt.tone || opt.env ? { ...(opt.tone ? { toneMapping: opt.tone } : {}), ...(opt.env ? { env: opt.env } : {}) } : undefined;
    const list0 = opt.detail
      ? opt.detail.split(',').map((id) => ({ ...STATES.find((s) => s.id === DETAIL[id].state), id, clip: DETAIL[id].clip }))
      : STATES;
    const list = list0.map((s) => ({ ...s, look }));
    for (const st of list) {
      if (only && !only.includes(st.id)) continue;
      const r = await p.evaluate(async (st) => {
        const j = window.__jade;
        j.unfreeze();
        if (st.stage !== undefined) { j.goTo(st.stage, false); j.seek(st.p); }
        j.lightMode(st.light || 'gallery');
        if (st.look && j.look) j.look(st.look);
        j.resetView();
        await j.freeze(4);
        const s = j.state();
        return { stage: s.stageId, phase: s.phase, ...s.render, quality: s.quality, dpr: s.dpr };
      }, st);
      const clip = st.clip && { x: st.clip[0], y: st.clip[1], width: st.clip[2], height: st.clip[3] };
      await p.screenshot({ path: path.join(dir, `${st.id}.png`), timeout: 300000, ...(clip ? { clip } : {}) });
      stats.states[st.id] = r;
      console.log(vp, st.id, r.stage, r.phase, 'calls', r.calls, 'tris', r.triangles);
    }
    const mem = await p.evaluate(() => (performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) : null));
    stats.jsHeapMB = mem;
    stats.errors = [...new Set(errs)];
    if (!opt.detail && !only) fs.writeFileSync(path.join(out, `stats-${vp}.json`), JSON.stringify(stats, null, 2));
    console.log(vp, 'load', loadMs, 'ms', 'heap', mem, 'MB', 'errors', stats.errors.length, stats.errors.join(' | '));
    await p.close();
  }
  await b.close();
})();
