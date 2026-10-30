// PHASE 1 CONCEPT TOOL — renders the storyboard and A/B boards (static HTML) to PNG.
const { chromium } = require('playwright');
const path = require('path');
const ROOT = path.resolve(process.argv[2] || path.join(__dirname, '..'));
(async () => {
  const b = await chromium.launch();
  for (const [src, out] of [['storyboard/storyboard.html', 'storyboard/storyboard.png'], ['concepts/ab-board.html', 'concepts/ab-board.png']]) {
    const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
    await p.goto('file://' + path.join(ROOT, src));
    await p.waitForLoadState('networkidle');
    await p.screenshot({ path: path.join(ROOT, out), fullPage: true });
    console.log(out); await p.close();
  }
  await b.close();
})();
