import { expect, test, type Page } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

type State = {
  stage: 'rough' | 'cut'; progress: number; playing: boolean; speed: number;
  cameraMode: string; torch: boolean; exposure: number; frames: number; phase: string;
};

const SHOTS = path.resolve('docs/qa/phase3');

async function boot(page: Page): Promise<string[]> {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });
  await page.goto('/');
  await page.waitForFunction(() => document.documentElement.dataset.webgl === 'ready' && !!window.__jade);
  await frames(page, 2);
  return errors;
}

const state = (page: Page) => page.evaluate(() => window.__jade!.state() as unknown as State);
const frames = (page: Page, n: number) => page.evaluate((k) => window.__jade!.frames(k), n);

async function capture(page: Page, name: string, project: string): Promise<void> {
  // snap the guided camera so the picture shows the shot, not the glide towards it
  await page.evaluate(async () => { const j = window.__jade!; j.resetView(); await j.freeze(3); });
  fs.mkdirSync(SHOTS, { recursive: true });
  await page.screenshot({ path: path.join(SHOTS, `${project}-${name}.png`), timeout: 240_000 });
  await page.evaluate(() => window.__jade!.unfreeze());
}

test('boots into the rough-stone station with content and hotspots', async ({ page }, info) => {
  const errors = await boot(page);
  const s = await state(page);
  expect(s.stage).toBe('rough');
  expect(s.progress).toBe(0);
  await expect(page.locator('.story h1')).toContainText('开窗');
  await expect(page.getByRole('tab', { name: /原石观察/ })).toHaveAttribute('aria-selected', 'true');
  const visible = (await page.evaluate(() => window.__jade!.hotspots())).filter((h) => h.visible);
  expect(visible.length).toBeGreaterThanOrEqual(info.project.name === 'mobile' ? 2 : 3);
  await capture(page, 'rough', info.project.name);
  expect(errors).toEqual([]);
});

test('play, pause and resume the cutting timeline', async ({ page }) => {
  const errors = await boot(page);
  await page.getByRole('button', { name: /开始切割/ }).click();
  await expect.poll(async () => (await state(page)).stage).toBe('cut');
  await expect.poll(async () => (await state(page)).progress, { timeout: 90_000 }).toBeGreaterThan(0.005);
  await page.getByRole('button', { name: '暂停' }).click();
  const paused = await state(page);
  expect(paused.playing).toBe(false);
  await frames(page, 6);
  expect((await state(page)).progress).toBe(paused.progress);
  await page.getByRole('button', { name: '播放' }).click();
  await expect.poll(async () => (await state(page)).progress, { timeout: 90_000 }).toBeGreaterThan(paused.progress);
  expect(errors).toEqual([]);
});

test('speed control and scrubbing land on the requested state', async ({ page }) => {
  const errors = await boot(page);
  await page.evaluate(() => window.__jade!.setStage('cut'));
  await page.getByRole('button', { name: '2×' }).click();
  expect((await state(page)).speed).toBe(2);
  await page.getByRole('button', { name: '0.5×' }).click();
  expect((await state(page)).speed).toBe(0.5);
  // scrub with the range input
  await page.getByRole('slider', { name: '切割进度' }).fill('820');
  const s = await state(page);
  expect(s.playing).toBe(false);
  expect(s.progress).toBeCloseTo(0.82, 3);
  expect(s.phase).toBe('打开切面');
  expect(errors).toEqual([]);
});

test('jumping to a point renders the same frame however it was reached', async ({ page }) => {
  await boot(page);
  const shoot = async () => {
    await page.evaluate(async () => { const j = window.__jade!; j.resetView(); await j.freeze(4); });
    const buf = await page.locator('#stage').screenshot({ timeout: 240_000 });
    await page.evaluate(() => window.__jade!.unfreeze());
    return buf;
  };
  await page.evaluate(() => window.__jade!.seek(0.9));
  const a = await shoot();
  await page.evaluate(() => { const j = window.__jade!; j.seek(0.3); });
  await frames(page, 3);
  await page.evaluate(() => { const j = window.__jade!; j.seek(1); j.seek(0.9); });
  const b = await shoot();
  const diff = await page.evaluate(async ([x, y]) => {
    const load = (b64: string) => new Promise<ImageData>((res) => {
      const img = new Image();
      img.onload = () => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; const g = c.getContext('2d')!; g.drawImage(img, 0, 0); res(g.getImageData(0, 0, c.width, c.height)); };
      img.src = `data:image/png;base64,${b64}`;
    });
    const [p, q] = await Promise.all([load(x), load(y)]);
    let bad = 0;
    for (let i = 0; i < p.data.length; i += 4) {
      const d = Math.abs(p.data[i] - q.data[i]) + Math.abs(p.data[i + 1] - q.data[i + 1]) + Math.abs(p.data[i + 2] - q.data[i + 2]);
      if (d > 30) bad++;
    }
    return bad / (p.data.length / 4);
  }, [a.toString('base64'), b.toString('base64')]);
  // the blade's spin angle is free-running and may differ slightly; everything else must match
  expect(diff).toBeLessThan(0.01);
});

test('cut faces are revealed at the end of the timeline', async ({ page }, info) => {
  const errors = await boot(page);
  await page.evaluate(() => window.__jade!.seek(0.5));
  await capture(page, 'cut-050', info.project.name);
  await page.evaluate(() => window.__jade!.seek(1));
  await expect.poll(async () => (await page.evaluate(() => window.__jade!.hotspots())).map((h) => h.id)).toContain('cutface');
  await capture(page, 'cut-100', info.project.name);
  expect(errors).toEqual([]);
});

test('rapid station switching ends in a consistent state', async ({ page }) => {
  const errors = await boot(page);
  const rough = page.getByRole('tab', { name: /原石观察/ });
  const cut = page.getByRole('tab', { name: /水冷切片/ });
  for (let i = 0; i < 6; i++) { await cut.click(); await rough.click(); }
  await cut.click();
  await frames(page, 2);
  let s = await state(page);
  expect(s.stage).toBe('cut');
  expect(s.playing).toBe(true);
  await rough.click();
  await frames(page, 2);
  s = await state(page);
  expect(s).toMatchObject({ stage: 'rough', progress: 0, playing: false });
  await expect(page.locator('.story h1')).toContainText('开窗');
  expect(errors).toEqual([]);
});

test('torch inspection dims the room and shows the limitation note', async ({ page }, info) => {
  const errors = await boot(page);
  await page.getByRole('button', { name: /打灯观察/ }).click();
  await expect(page.locator('.story h1')).toContainText('打灯观察');
  await expect(page.locator('.toast')).toContainText('只是局部');
  await expect.poll(async () => (await state(page)).exposure, { timeout: 90_000 }).toBeLessThan(0.05);
  await capture(page, 'torch', info.project.name);
  await page.getByRole('button', { name: /打灯观察/ }).click();
  await expect.poll(async () => (await state(page)).exposure, { timeout: 90_000 }).toBeGreaterThan(0.95);
  expect(errors).toEqual([]);
});

test('hotspot opens an explanation popover', async ({ page }) => {
  const errors = await boot(page);
  const pin = page.locator('.pin[data-id="fissure"]');
  await expect(pin).toBeVisible();
  await pin.click();
  await expect(page.locator('.popover')).toBeVisible();
  await expect(page.locator('.popover h2')).toContainText('裂隙');
  await page.keyboard.press('Escape');
  await expect(page.locator('.popover')).toBeHidden();
  expect(errors).toEqual([]);
});

test('camera drag switches to free view; reset returns to the guide', async ({ page }) => {
  await boot(page);
  const box = (await page.locator('#stage').boundingBox())!;
  const cx = box.x + box.width * 0.6, cy = box.y + box.height * 0.55;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx + 120, cy + 10, { steps: 6 });
  await page.mouse.up();
  await expect.poll(async () => (await state(page)).cameraMode).toBe('free');
  await expect(page.locator('.cam-chip')).toHaveClass(/show/);
  await page.locator('.cam-chip').click();
  expect((await state(page)).cameraMode).toBe('auto');
});

test('keyboard shortcuts drive the same actions', async ({ page }, info) => {
  test.skip(info.project.name === 'mobile', 'keyboard shortcuts are a desktop feature');
  await boot(page);
  await page.locator('body').click({ position: { x: 5, y: 300 } });
  await page.keyboard.press('2');
  await expect.poll(async () => (await state(page)).stage).toBe('cut');
  await page.keyboard.press(' ');
  expect((await state(page)).playing).toBe(false);
  const p0 = (await state(page)).progress;
  await page.keyboard.press('ArrowRight');
  expect((await state(page)).progress).toBeCloseTo(Math.min(1, p0 + 0.02), 5);
  await page.keyboard.press('1');
  expect((await state(page)).stage).toBe('rough');
  await page.keyboard.press('t');
  expect((await state(page)).torch).toBe(true);
});

test('window resizing keeps the canvas matched to the viewport', async ({ page }) => {
  const errors = await boot(page);
  for (const [w, h] of [[1024, 768], [390, 844], [1920, 1080], [1440, 900]] as const) {
    await page.setViewportSize({ width: w, height: h });
    await frames(page, 2);
    const size = await page.evaluate(() => { const c = document.getElementById('stage') as HTMLCanvasElement; return [c.clientWidth, c.clientHeight]; });
    expect(size).toEqual([w, h]);
  }
  expect(errors).toEqual([]);
});

test('reloading starts from a clean state', async ({ page }) => {
  await boot(page);
  await page.evaluate(() => window.__jade!.seek(0.7));
  await page.reload();
  await page.waitForFunction(() => !!window.__jade);
  expect(await state(page)).toMatchObject({ stage: 'rough', progress: 0, playing: false });
});

test('lost WebGL context shows a notice and recovers', async ({ page }) => {
  await boot(page);
  await page.evaluate(() => {
    const ext = (document.getElementById('stage') as HTMLCanvasElement).getContext('webgl2')!.getExtension('WEBGL_lose_context')!;
    (window as unknown as { __lose: WEBGL_lose_context }).__lose = ext;
    ext.loseContext();
  });
  await expect(page.locator('.fallback')).toBeVisible();
  await expect(page.locator('.fallback h1')).toContainText('图形上下文已丢失');
  await page.evaluate(() => (window as unknown as { __lose: WEBGL_lose_context }).__lose.restoreContext());
  await expect(page.locator('.fallback')).toBeHidden();
  const f0 = (await state(page)).frames;
  await expect.poll(async () => (await state(page)).frames, { timeout: 90_000 }).toBeGreaterThan(f0 + 2);
});

test('without WebGL 2 the page explains what is needed', async ({ page }) => {
  await page.addInitScript(() => {
    const proto = HTMLCanvasElement.prototype as unknown as { getContext: (type: string, ...rest: unknown[]) => unknown };
    const orig = proto.getContext;
    proto.getContext = function (this: HTMLCanvasElement, type: string, ...rest: unknown[]) {
      if (type === 'webgl2' || type === 'webgl') return null;
      return orig.call(this, type, ...rest);
    };
  });
  await page.goto('/');
  await expect(page.locator('.fallback')).toBeVisible();
  await expect(page.locator('.fallback h1')).toContainText('无法启动三维场景');
  expect(await page.evaluate(() => document.documentElement.dataset.webgl)).toBe('unavailable');
});
