// Dev helper: screenshots of named states.
// node tools/shoot.cjs <url> <outDir> <WxH> [state ...]
// state = intro | s<stageIndex>:<progress>   e.g. s5:0.55
const { chromium } = require('playwright');
const path = require('path');
const [url, out, size = '1440x900', ...states] = process.argv.slice(2);
const [w, h] = size.split('x').map(Number);
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1, isMobile: w < 760, hasTouch: w < 760 });
  const errs = [];
  p.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.type() + ': ' + m.text()); });
  await p.goto(url);
  await p.waitForFunction(() => window.__jade, null, { timeout: 180000 });
  for (const st of states.length ? states : ['intro']) {
    const t0 = Date.now();
    await p.evaluate(async (st) => {
      const j = window.__jade;
      j.unfreeze();
      if (st !== 'intro') {
        const [s, prog] = st.slice(1).split(':');
        j.goTo(+s, false);
        j.seek(+prog);
      }
      j.resetView();
      await j.freeze(4);
    }, st);
    const f = path.join(out, `${st.replace(':', '-')}-${w}x${h}.png`);
    await p.screenshot({ path: f, timeout: 300000 });
    const s = await p.evaluate(() => window.__jade.state());
    console.log(path.basename(f), `${((Date.now() - t0) / 1000).toFixed(1)}s`, s.stageId, s.phase, s.avgFrameMs + 'ms');
  }
  if (errs.length) console.log('CONSOLE:\n' + [...new Set(errs)].join('\n'));
  await b.close();
})();
