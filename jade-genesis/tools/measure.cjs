// Dev helper: render cost per stage (draw calls, triangles, GPU objects).
// node tools/measure.cjs <url> [WxH]
const { chromium } = require('playwright');
const [url, size = '1440x900', cull = 'on'] = process.argv.slice(2);
const [w, h] = size.split('x').map(Number);
const MOMENTS = [0.7, 0.6, 0.6, 0.6, 0.9, 0.55, 0.85, 1, 0.6, 0.6, 0.6, 1];
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await p.goto(url);
  await p.waitForFunction(() => window.__jade, null, { timeout: 180000 });
  await p.evaluate((c) => { window.__jade.cull(c === 'on'); return window.__jade.frames(3); }, cull);
  const rows = [];
  for (let cycle = 0; cycle < 2; cycle++) {
    for (let i = 0; i < 12; i++) {
      const r = await p.evaluate(async ([k, m]) => {
        const j = window.__jade; j.goTo(k, false); j.seek(m); await j.frames(4);
        const s = j.state(); return { stage: s.stageId, ...s.render, ms: s.avgFrameMs };
      }, [i, MOMENTS[i]]);
      rows.push({ cycle, ...r });
    }
  }
  for (const r of rows.filter((x) => x.cycle === 0)) console.log([r.stage.padEnd(14), 'calls', String(r.calls).padStart(4), 'tris', String(r.triangles).padStart(8), 'geo', r.geometries, 'tex', r.textures, 'prog', r.programs].join(' '));
  const a = rows.filter((x) => x.cycle === 0).at(-1), z = rows.at(-1);
  console.log(`after cycle 1: geo ${a.geometries} tex ${a.textures} prog ${a.programs} | after cycle 2: geo ${z.geometries} tex ${z.textures} prog ${z.programs}`);
  await b.close();
})();
