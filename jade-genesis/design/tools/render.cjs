// PHASE 1 CONCEPT TOOL — renders concept frames with headless Chromium.
// node render.cjs <threeDir> [shot[:theme[:WxH[:ui]]] ...]
// threeDir = a local node_modules/three (CDN requests are served from it).
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const THREE_DIR = path.resolve(process.argv[2]);
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.json': 'application/json' };

const DEFAULT = [
  'hero:A', 'hero:B', 'hero:A:390x844', 'cut:A', 'cut:B', 'showcase:A', 'showcase:B', 'mine:A', 'grind:A',
  ...['mine', 'wash', 'inspect', 'window', 'plan', 'saw', 'slab', 'core', 'rough', 'fine', 'polish', 'showcase'].map((s, i) => `${s}:A:960x600:0:sb${String(i + 1).padStart(2, '0')}`),
];

const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  const f = path.join(ROOT, u);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});

(async () => {
  await new Promise((r) => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const jobs = process.argv.length > 3 ? process.argv.slice(3) : DEFAULT;
  for (const job of jobs) {
    const [shot, theme = 'A', size = '1440x900', ui = '1', name] = job.split(':');
    const [w, h] = size.split('x').map(Number);
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    const errs = [];
    page.on('pageerror', (e) => errs.push(e.message));
    page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
    await page.route('https://cdn.jsdelivr.net/npm/three@0.160.0/**', (route) => {
      const rel = route.request().url().split('three@0.160.0/')[1];
      route.fulfill({ path: path.join(THREE_DIR, rel), contentType: 'text/javascript' });
    });
    const t0 = Date.now();
    const dpr = w < 700 ? 2 : w < 1200 ? 1.5 : 1.5;
    await page.goto(`http://localhost:${port}/concepts/renderer/index.html?shot=${shot}&theme=${theme}&w=${w}&h=${h}&ui=${ui}&dpr=${dpr}`);
    try { await page.waitForFunction('window.__ready === true', null, { timeout: 240000 }); }
    catch (e) { console.log('TIMEOUT', job, errs.join('\n')); await page.close(); continue; }
    const out = name ? path.join(ROOT, 'storyboard/frames', `${name}-${shot}.png`) : path.join(ROOT, 'concepts/renders', `${shot}-${theme}${w < 700 ? '-mobile' : ''}.png`);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await page.screenshot({ path: out });
    console.log(`${job} -> ${path.relative(ROOT, out)} (${((Date.now() - t0) / 1000).toFixed(1)}s)${errs.length ? '\n  ERR: ' + errs.join('\n  ERR: ') : ''}`);
    await page.close();
  }
  await browser.close();
  server.close();
})();
