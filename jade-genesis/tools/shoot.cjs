// Dev helper: screenshots of named states.
// node tools/shoot.cjs <url> <outDir> <WxH> [state ...]   state = rough | torch | cut:<progress>
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
  await p.waitForFunction(() => window.__jade, null, { timeout: 120000 });
  for (const st of states.length ? states : ['rough']) {
    const [kind, arg] = st.split(':');
    const t0 = Date.now();
    await p.evaluate(async ([k, a]) => {
      const j = window.__jade;
      j.unfreeze();
      if (k === 'rough') { j.setStage('rough'); j.torch(false); }
      if (k === 'torch') { j.setStage('rough'); j.torch(true); }
      if (k === 'cut') j.seek(+a);
      if (k === 'mat') { const [key, v, prog] = a.split('='); j.mat(key, +v); j.seek(+(prog ?? 0.5)); }
      if (k === 'field') { const [x, y, z] = a.split(',').map(Number); j.field(x, y, z); j.setStage('rough'); }
      j.resetView();
      if (k === 'torch') { while (j.state().exposure > 0.02) await j.frames(2); }
      await j.freeze(4);
    }, [kind, arg]);
    const f = path.join(out, `${st.replace(':', '-')}-${w}x${h}.png`);
    await p.screenshot({ path: f, timeout: 240000 });
    const s = await p.evaluate(() => window.__jade.state());
    console.log(path.basename(f), `${((Date.now() - t0) / 1000).toFixed(1)}s`, JSON.stringify(s));
  }
  if (errs.length) console.log('CONSOLE:\n' + [...new Set(errs)].join('\n'));
  await b.close();
})();
