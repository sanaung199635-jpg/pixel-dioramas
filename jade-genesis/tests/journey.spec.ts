import { expect, test, type Page } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

type State = {
  stage: number; stageId: string; progress: number; playing: boolean; speed: number; guided: boolean;
  cameraMode: string; torch: boolean; exposure: number; sound: boolean; lightMode: string; compare: number;
  frames: number; phase: string; intro: boolean;
};

const SHOTS = path.resolve('docs/qa/phase8');
/** Representative moment of each stage for the screenshot record. */
const MOMENTS = [0.7, 0.6, 0.6, 0.6, 0.9, 0.55, 0.85, 1, 0.6, 0.6, 0.6, 1];
const TITLES = ['开采', '清洗', '打灯观察', '开窗', '切割规划', '水冷切片', '画圈', '套取镯坯', '粗加工', '精磨', '抛光', '检查展示'];

function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });
  return errors;
}

async function boot(page: Page): Promise<string[]> {
  const errors = watchErrors(page);
  await page.goto('/');
  await page.waitForFunction(() => document.documentElement.dataset.webgl === 'ready' && !!window.__jade);
  await frames(page, 2);
  return errors;
}

/** Phones put the stage list, speed and torch behind "更多控制"; desktops show them inline. */
const isCompact = (page: Page) => page.evaluate(() => document.querySelector('.ui')!.getAttribute('data-layout') === 'compact');
async function openMore(page: Page): Promise<void> {
  if (!(await isCompact(page))) return;
  const more = page.getByRole('button', { name: '更多控制' });
  if ((await more.getAttribute('aria-expanded')) !== 'true') await more.click();
}
/** Jump to a stage the way a user would on this layout. */
async function pickStage(page: Page, i: number): Promise<void> {
  if (await isCompact(page)) { await openMore(page); await page.locator('.nav-step').nth(i).click(); }
  else await page.locator('.timeline .step').nth(i).click();
}
const stageButton = async (page: Page, i: number) => ((await isCompact(page)) ? page.locator('.nav-step').nth(i) : page.locator('.timeline .step').nth(i));

const state = (page: Page) => page.evaluate(() => window.__jade!.state() as unknown as State);
const frames = (page: Page, n: number) => page.evaluate((k) => window.__jade!.frames(k), n);

async function capture(page: Page, name: string, project: string): Promise<void> {
  await page.evaluate(async () => { const j = window.__jade!; j.resetView(); await j.freeze(3); });
  fs.mkdirSync(SHOTS, { recursive: true });
  await page.screenshot({ path: path.join(SHOTS, `${project}-${name}.png`), timeout: 300_000 });
  await page.evaluate(() => window.__jade!.unfreeze());
}

test('opens on the intro with a 12-step timeline', async ({ page }, info) => {
  const errors = await boot(page);
  const s = await state(page);
  expect(s).toMatchObject({ stage: 0, progress: 0, playing: false, intro: true });
  await expect(page.locator('.intro h1')).toHaveText('翡翠诞生记');
  await expect(page.locator('.timeline .step')).toHaveCount(12);
  await capture(page, '00-intro', info.project.name);
  expect(errors).toEqual([]);
});

test('“开始旅程” starts the guided journey', async ({ page }) => {
  const errors = await boot(page);
  await page.getByRole('button', { name: '开始旅程' }).click();
  await expect(page.locator('.intro')).toBeHidden();
  const s = await state(page);
  expect(s).toMatchObject({ stage: 0, playing: true, guided: true });
  await expect.poll(async () => (await state(page)).progress, { timeout: 90_000 }).toBeGreaterThan(0.003);
  expect(errors).toEqual([]);
});

test('the guided journey continues into the next stage on its own', async ({ page }) => {
  const errors = await boot(page);
  await page.evaluate(() => window.__jade!.restore({ stage: 4, progress: 0.995, playing: true, guided: true }));
  await expect.poll(async () => (await state(page)).stage, { timeout: 90_000 }).toBe(5);
  const s = await state(page);
  expect(s.guided).toBe(true);
  expect(s.playing).toBe(true);
  await expect(page.locator('.story h1')).toContainText('水冷切片');
  // the last stage ends the journey instead of wrapping
  await page.evaluate(() => window.__jade!.restore({ stage: 11, progress: 0.999, playing: true, guided: true }));
  await expect.poll(async () => (await state(page)).playing, { timeout: 90_000 }).toBe(false);
  expect((await state(page)).stage).toBe(11);
  expect(errors).toEqual([]);
});

test('timeline steps and prev / next jump between stages', async ({ page }) => {
  const errors = await boot(page);
  await pickStage(page, 5);
  let s = await state(page);
  expect(s).toMatchObject({ stage: 5, playing: true, intro: false });
  // the jump lands at the start of the stage; it is already playing, so a frame
  // rendered between the click and this read may have advanced it slightly
  expect(s.progress).toBeLessThan(0.02);
  await expect(page.locator('.story h1')).toContainText('水冷切片');
  await expect(await stageButton(page, 5)).toHaveAttribute('aria-current', 'step');
  await page.getByRole('button', { name: '下一道工序' }).click();
  s = await state(page);
  expect(s.stage).toBe(6);
  await page.getByRole('button', { name: '上一道工序' }).click();
  await page.getByRole('button', { name: '上一道工序' }).click();
  expect((await state(page)).stage).toBe(4);
  expect(errors).toEqual([]);
});

test('pause holds the picture; play resumes', async ({ page }) => {
  const errors = await boot(page);
  await pickStage(page, 1);
  await expect.poll(async () => (await state(page)).progress, { timeout: 90_000 }).toBeGreaterThan(0.004);
  await page.getByRole('button', { name: '暂停' }).click();
  const paused = await state(page);
  expect(paused.playing).toBe(false);
  await frames(page, 6);
  expect((await state(page)).progress).toBe(paused.progress);
  await page.getByRole('button', { name: '播放' }).click();
  await expect.poll(async () => (await state(page)).progress, { timeout: 90_000 }).toBeGreaterThan(paused.progress);
  expect(errors).toEqual([]);
});

test('speed buttons and the scrubber', async ({ page }) => {
  const errors = await boot(page);
  await page.evaluate(() => window.__jade!.goTo(7));
  await openMore(page);
  for (const sp of ['2×', '0.5×', '1×']) {
    await page.getByRole('button', { name: sp, exact: true }).click();
    expect((await state(page)).speed).toBe(parseFloat(sp));
  }
  await page.getByRole('slider', { name: '本道工序进度' }).fill('600');
  const s = await state(page);
  expect(s.playing).toBe(false);
  expect(s.progress).toBeCloseTo(0.6, 3);
  expect(s.phase).toBe('钻内圈');
  expect(errors).toEqual([]);
});

test('any state renders the same however it was reached', async ({ page }) => {
  await boot(page);
  const shoot = async () => {
    await page.evaluate(async () => { const j = window.__jade!; j.resetView(); await j.freeze(4); });
    const buf = await page.locator('#stage').screenshot({ timeout: 300_000 });
    await page.evaluate(() => window.__jade!.unfreeze());
    return buf;
  };
  await page.evaluate(() => { const j = window.__jade!; j.goTo(7, false); j.seek(0.9); });
  const a = await shoot();
  await page.evaluate(() => { const j = window.__jade!; j.goTo(10, false); j.seek(0.4); });
  await frames(page, 3);
  await page.evaluate(() => { const j = window.__jade!; j.goTo(2, false); j.seek(0.5); });
  await frames(page, 3);
  await page.evaluate(() => { const j = window.__jade!; j.goTo(7, false); j.seek(0.2); j.seek(0.9); });
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
  // water drops and spin angles run on machine time and may differ slightly
  expect(diff).toBeLessThan(0.01);
});

test('all 12 stages render with their content and hotspots', async ({ page }, info) => {
  test.setTimeout(1_200_000);
  const errors = await boot(page);
  for (let i = 0; i < 12; i++) {
    await page.evaluate(([k, p]) => { const j = window.__jade!; j.goTo(k, false); j.seek(p); }, [i, MOMENTS[i]] as const);
    await frames(page, 2);
    const s = await state(page);
    expect(s.stage).toBe(i);
    await expect(page.locator('.story h1')).toContainText(TITLES[i]);
    const hs = await page.evaluate(() => window.__jade!.hotspots());
    expect(hs.length, `stage ${i + 1} hotspots`).toBeGreaterThan(0);
    await capture(page, `${String(i + 1).padStart(2, '0')}-${s.stageId}`, info.project.name);
  }
  expect(errors).toEqual([]);
});

test('the same stone becomes halves, slab, blank and bangle', async ({ page }) => {
  const errors = await boot(page);
  const ids = async (stage: number, p: number) => {
    await page.evaluate(([k, q]) => { const j = window.__jade!; j.goTo(k, false); j.seek(q); }, [stage, p] as const);
    await frames(page, 2);
    return (await page.evaluate(() => window.__jade!.hotspots())).map((h) => h.id);
  };
  expect(await ids(5, 0.55)).toEqual(expect.arrayContaining(['cutface', 'fissure-cut']));
  expect(await ids(6, 0.97)).toEqual(expect.arrayContaining(['slab', 'fissure-slab', 'marks']));
  expect(await ids(7, 1)).toEqual(expect.arrayContaining(['blank', 'core', 'offcut']));
  expect(await ids(11, 1)).toEqual(expect.arrayContaining(['edge', 'colour', 'lustre']));
  expect(errors).toEqual([]);
});

test('manual torch is offered only at stage 03 and dims the room', async ({ page }) => {
  const errors = await boot(page);
  await page.evaluate(() => window.__jade!.goTo(1, false));
  await expect(page.getByRole('button', { name: '手动打灯' })).toBeHidden();
  await page.evaluate(() => window.__jade!.goTo(2, false));
  await openMore(page);
  const btn = page.getByRole('button', { name: '手动打灯' });
  await expect(btn).toBeVisible();
  await btn.click();
  expect((await state(page)).torch).toBe(true);
  await expect(page.locator('.toast')).toContainText('只是局部');
  await expect.poll(async () => (await state(page)).exposure, { timeout: 60_000 }).toBe(0);
  await btn.click();
  expect((await state(page)).torch).toBe(false);
  expect(errors).toEqual([]);
});

test('showcase: lighting presets and before/after surface', async ({ page }, info) => {
  const errors = await boot(page);
  await page.evaluate(() => { const j = window.__jade!; j.goTo(11, false); j.seek(1); });
  const bar = page.locator('.showcase-bar');
  await expect(bar).toBeVisible();
  await bar.getByRole('button', { name: '背光' }).click();
  expect((await state(page)).lightMode).toBe('back');
  await page.getByRole('slider', { name: '表面对比' }).fill('0');
  expect((await state(page)).compare).toBe(0);
  await capture(page, 'showcase-before-backlight', info.project.name);
  await bar.getByRole('button', { name: '聚光' }).click();
  await page.getByRole('slider', { name: '表面对比' }).fill('100');
  expect(await state(page)).toMatchObject({ lightMode: 'gallery', compare: 1 });
  expect(errors).toEqual([]);
});

test('sound is off until the user turns it on', async ({ page }) => {
  const errors = await boot(page);
  expect((await state(page)).sound).toBe(false);
  const btn = page.locator('.chip.sound');
  await btn.click();
  await expect.poll(async () => (await state(page)).sound).toBe(true);
  await expect(btn).toHaveAttribute('aria-pressed', 'true');
  await btn.click();
  await expect.poll(async () => (await state(page)).sound).toBe(false);
  expect(errors).toEqual([]);
});

test('camera drag switches to free view; reset returns to the guide', async ({ page }) => {
  await boot(page);
  await page.getByRole('button', { name: '自由探索' }).click();
  const box = (await page.locator('#stage').boundingBox())!;
  const cx = box.x + box.width * 0.62, cy = box.y + box.height * 0.45;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx + 120, cy + 10, { steps: 6 });
  await page.mouse.up();
  await expect.poll(async () => (await state(page)).cameraMode).toBe('free');
  await page.locator('.cam-chip').click();
  expect((await state(page)).cameraMode).toBe('auto');
});

test('keyboard shortcuts', async ({ page }, info) => {
  test.skip(info.project.name === 'mobile', 'keyboard shortcuts are a desktop feature');
  await boot(page);
  await page.getByRole('button', { name: '自由探索' }).click();
  await page.locator('body').click({ position: { x: 700, y: 80 } });
  await page.keyboard.press(']');
  expect((await state(page)).stage).toBe(1);
  await page.keyboard.press(' ');
  expect((await state(page)).playing).toBe(false);
  const p0 = (await state(page)).progress;
  await page.keyboard.press('ArrowRight');
  expect((await state(page)).progress).toBeCloseTo(Math.min(1, p0 + 0.02), 5);
  await page.keyboard.press(']');
  await page.keyboard.press('t');
  expect((await state(page)).torch).toBe(true);
  await page.keyboard.press('[');
  expect((await state(page)).stage).toBe(1);
  expect((await state(page)).torch).toBe(false);
});

test('rapid stage switching ends in a consistent state', async ({ page }) => {
  const errors = await boot(page);
  for (const i of [3, 9, 0, 11, 5, 7, 2, 10, 6]) await pickStage(page, i);
  await frames(page, 2);
  const s = await state(page);
  expect(s.stage).toBe(6);
  await expect(page.locator('.story h1')).toContainText('画圈');
  expect(errors).toEqual([]);
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
  await page.evaluate(() => window.__jade!.goTo(8, true));
  await page.reload();
  await page.waitForFunction(() => document.documentElement.dataset.webgl === 'ready' && !!window.__jade);
  expect(await state(page)).toMatchObject({ stage: 0, progress: 0, playing: false, intro: true });
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

test('GPU memory stops growing after the first passes through the journey', async ({ page }, info) => {
  test.skip(info.project.name === 'mobile', 'same renderer and scene on both viewports; run once');
  test.setTimeout(1_200_000);
  const errors = await boot(page);
  await page.setViewportSize({ width: 800, height: 500 });
  const cycle = async () => {
    for (let i = 0; i < 12; i++) {
      await page.evaluate(async ([k, m]) => { const j = window.__jade!; j.goTo(k, false); j.seek(m); await j.frames(2); }, [i, MOMENTS[i]] as const);
    }
    const r = await page.evaluate(() => (window.__jade!.state() as unknown as { render: { geometries: number; textures: number; programs: number } }).render);
    return { geometries: r.geometries, textures: r.textures, programs: r.programs };
  };
  await cycle(); // first pass uploads everything; the second compiles any late shader variants
  const second = await cycle();
  const third = await cycle();
  expect(third).toEqual(second);
  expect(errors).toEqual([]);
});

test('the saw opens a kerf as it descends', async ({ page }) => {
  const errors = await boot(page);
  // the cut appears gradually: a groove at mid-descent, the halves only once the blade has passed through
  await page.evaluate(() => { const j = window.__jade!; j.goTo(5, false); j.seek(0.3); });
  await frames(page, 2);
  expect((await state(page)).phase).toBe('下切 · 水冷');
  const ids = (await page.evaluate(() => window.__jade!.hotspots())).map((h) => h.id);
  expect(ids).not.toContain('cutface');
  expect(ids).toContain('coolant');
  expect(errors).toEqual([]);
});

test('every station is lit inside the key light\'s shadow box', async ({ page }) => {
  await boot(page);
  for (let i = 0; i < 12; i++) {
    const ok = await page.evaluate(async (k) => { const j = window.__jade!; j.goTo(k, false); await j.frames(1); return j.shadowCovers(); }, i);
    expect(ok, `stage ${i + 1}`).toBe(true);
  }
});

test('lowest quality tier drops the small shadow casters in the mine', async ({ page }) => {
  const errors = await boot(page);
  const calls = (level: number) => page.evaluate(async (l) => {
    const j = window.__jade!; j.setQuality(l); j.goTo(0, false); j.seek(0.7); j.resetView(); await j.frames(3); return j.state().render.calls;
  }, level);
  const high = await calls(2), low = await calls(0);
  expect(low).toBeLessThan(high);
  await calls(2);
  expect(errors).toEqual([]);
});
