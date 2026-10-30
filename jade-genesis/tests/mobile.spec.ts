// Phase 8: phone and tablet layout checks. Runs on the device projects in
// playwright.config.ts (320 / 390 / 430 portrait, Android, landscape, tablet).
// Chromium emulation only (no WebKit here): this does not replace a real iPhone.
import { expect, test, type Page } from '@playwright/test';

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
  await page.evaluate(() => window.__jade!.frames(2));
  return errors;
}

const compact = (page: Page) => page.evaluate(() => document.querySelector('.ui')!.getAttribute('data-layout') === 'compact');
const rect = (page: Page, sel: string) => page.locator(sel).first().evaluate((el) => { const r = el.getBoundingClientRect(); return { top: r.top, bottom: r.bottom, left: r.left, right: r.right, height: r.height, width: r.width }; });
const frame = (page: Page) => page.evaluate(async () => { await window.__jade!.frames(30); return window.__jade!.frameRect(); });

/** Every visible control lies inside the viewport, is at least 44 px, and nothing scrolls sideways. */
async function layoutSound(page: Page): Promise<void> {
  const r = await page.evaluate(() => {
    const W = innerWidth, H = innerHeight;
    const shown = (el: Element) => { const s = getComputedStyle(el); const b = el.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0' && b.width > 0 && b.height > 0; };
    const ctl = [...document.querySelectorAll('.ui button, .ui input')].filter(shown).filter((el) => !el.closest('.hots'));
    return {
      overflow: document.documentElement.scrollWidth > W || document.documentElement.scrollHeight > H,
      outside: ctl.filter((el) => { const b = el.getBoundingClientRect(); return b.left < -1 || b.top < -1 || b.right > W + 1 || b.bottom > H + 1; }).map((el) => el.getAttribute('aria-label')),
      small: ctl.filter((el) => (el as HTMLInputElement).type !== 'range').filter((el) => { const b = el.getBoundingClientRect(); return b.width < 43.5 || b.height < 43.5; }).map((el) => `${el.getAttribute('aria-label')} ${Math.round(el.getBoundingClientRect().width)}x${Math.round(el.getBoundingClientRect().height)}`),
    };
  });
  expect(r.overflow, 'no page scroll or sideways overflow').toBe(false);
  expect(r.outside, 'controls inside the viewport').toEqual([]);
  if (await compact(page)) expect(r.small, 'touch targets ≥ 44 px').toEqual([]);
}

test('home: the diorama and the start button fit without scrolling', async ({ page }) => {
  const errors = await boot(page);
  const H = page.viewportSize()!.height;
  const start = page.getByRole('button', { name: '开始旅程' });
  await expect(start).toBeInViewport();
  await expect(page.getByRole('button', { name: '自由探索' })).toBeInViewport();
  await layoutSound(page);
  if (await compact(page)) {
    const intro = await rect(page, '.intro');
    const f = (await frame(page))!;
    expect(intro.height, 'intro card under half the screen').toBeLessThan(H * 0.5);
    expect(f.bottom - f.top, 'diorama keeps most of the height').toBeGreaterThan(H * 0.38);
  }
  expect(errors).toEqual([]);
});

test('every stage frames its subject between the story card and the dock', async ({ page }) => {
  const errors = await boot(page);
  await page.getByRole('button', { name: '开始旅程' }).click();
  for (let i = 0; i < 12; i++) {
    await page.evaluate((k) => { window.__jade!.goTo(k, false); window.__jade!.resetView(); }, i);
    if (!(await compact(page))) continue;
    const f = (await frame(page))!;
    const story = await rect(page, '.story'), dock = await rect(page, '.dock');
    const land = page.viewportSize()!.width > page.viewportSize()!.height;
    if (land) expect(f.left, `stage ${i + 1}: right of the story`).toBeGreaterThanOrEqual(story.right - 1);
    else expect(f.top, `stage ${i + 1}: below the story`).toBeGreaterThanOrEqual(story.bottom - 1);
    expect(f.bottom, `stage ${i + 1}: above the dock`).toBeLessThanOrEqual(dock.top + 1);
    expect(f.bottom - f.top, `stage ${i + 1}: usable height`).toBeGreaterThan(120);
  }
  await layoutSound(page);
  expect(errors).toEqual([]);
});

test('knowledge sheet: half, full, scroll, close, Esc and focus', async ({ page }) => {
  const errors = await boot(page);
  await page.getByRole('button', { name: '开始旅程' }).click();
  await page.evaluate(() => { window.__jade!.goTo(1, false); });
  const open = page.locator('.know-btn:visible, .know-toggle:visible').first();
  test.skip(!(await open.count()), 'desktop shows the knowledge card permanently');
  await open.click();
  await expect(open).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#knowledge')).toBeVisible();
  await expect(page.locator('#know-title')).toBeFocused();
  for (const label of ['专业术语', '加工目的', '设备', '注意事项', '参考来源']) await expect(page.locator('#knowledge dt', { hasText: label })).toHaveCount(1);
  await expect(page.locator('#knowledge .grade')).toContainText('证据');
  if (await compact(page)) {
    // half sheet sits above the dock: playback stays usable
    // (the sheet slides in: wait for it to come to rest before measuring)
    const dock = await rect(page, '.dock');
    await expect.poll(async () => (await rect(page, '#knowledge')).bottom).toBeLessThanOrEqual(dock.top + 1);
    const was = (await page.evaluate(() => window.__jade!.state())).playing;
    await page.locator('.controls .play').click();
    expect((await page.evaluate(() => window.__jade!.state())).playing).toBe(!was);
    // full
    await page.locator('[data-action="sheet-size"]').click();
    expect(await page.evaluate(() => window.__jade!.sheet())).toBe('full');
    const land = page.viewportSize()!.width > page.viewportSize()!.height;
    if (!land) await expect.poll(async () => (await rect(page, '#knowledge')).height).toBeGreaterThan(page.viewportSize()!.height * 0.7);
    // the body scrolls on its own
    const scrolled = await page.locator('#knowledge .kb').evaluate((el) => { el.scrollTop = 120; return el.scrollTop; });
    const needs = await page.locator('#knowledge .kb').evaluate((el) => el.scrollHeight > el.clientHeight);
    if (needs) expect(scrolled).toBeGreaterThan(0);
    // close button returns focus to the opener
    await page.locator('[data-action="sheet-close"]').click();
    expect(await page.evaluate(() => window.__jade!.sheet())).toBe('closed');
    await expect(open).toBeFocused();
    await expect(open).toHaveAttribute('aria-expanded', 'false');
  }
  // Esc closes
  await open.click();
  await page.keyboard.press('Escape');
  expect(await page.evaluate(() => window.__jade!.sheet())).toBe('closed');
  if (await compact(page)) await expect(page.locator('#knowledge')).toBeHidden(); // slid out
  await layoutSound(page);
  expect(errors).toEqual([]);
});

test('more panel: speed, stage list and reset are reachable', async ({ page }) => {
  const errors = await boot(page);
  await page.getByRole('button', { name: '开始旅程' }).click();
  test.skip(!(await compact(page)), 'desktop shows these controls inline');
  const more = page.getByRole('button', { name: '更多控制' });
  await more.click();
  await expect(more).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('button', { name: '2×', exact: true }).click();
  expect((await page.evaluate(() => window.__jade!.state())).speed).toBe(2);
  await expect(page.getByRole('button', { name: '重置视角' })).toBeInViewport();
  await layoutSound(page);
  await page.locator('.nav-step').nth(5).click();
  expect((await page.evaluate(() => window.__jade!.state())).stage).toBe(5);
  await expect(more).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('.nav-step').nth(5)).toHaveAttribute('aria-current', 'step');
  expect(errors).toEqual([]);
});

test('dragging the scrubber does not turn the 3D camera', async ({ page }) => {
  const errors = await boot(page);
  await page.getByRole('button', { name: '开始旅程' }).click();
  const slider = page.getByRole('slider', { name: '本道工序进度' });
  const b = (await slider.boundingBox())!;
  await page.mouse.move(b.x + b.width * 0.2, b.y + b.height / 2);
  await page.mouse.down();
  await page.mouse.move(b.x + b.width * 0.7, b.y + b.height / 2, { steps: 8 });
  await page.mouse.up();
  const s = await page.evaluate(() => window.__jade!.state());
  expect(s.cameraMode).toBe('auto');
  expect(s.progress).toBeGreaterThan(0.3);
  expect(errors).toEqual([]);
});

test('sound toggle is on screen and starts off', async ({ page }) => {
  const errors = await boot(page);
  const btn = page.locator('.chip.sound');
  await expect(btn).toBeInViewport();
  expect((await page.evaluate(() => window.__jade!.state())).sound).toBe(false);
  await btn.click();
  await expect.poll(async () => (await page.evaluate(() => window.__jade!.state())).sound).toBe(true);
  await btn.click();
  await expect.poll(async () => (await page.evaluate(() => window.__jade!.state())).sound).toBe(false);
  expect(errors).toEqual([]);
});

test('rotation and a shrinking toolbar re-lay the page and re-frame the camera', async ({ page }) => {
  const errors = await boot(page);
  await page.getByRole('button', { name: '开始旅程' }).click();
  const { width: W, height: H } = page.viewportSize()!;
  // rotate
  await page.setViewportSize({ width: H, height: W });
  await page.evaluate(() => window.__jade!.frames(4));
  await layoutSound(page);
  const orient = await page.evaluate(() => document.querySelector('.ui')!.getAttribute('data-orient'));
  expect(orient).toBe(H > W ? 'landscape' : 'portrait');
  if (await compact(page)) {
    const f = (await frame(page))!;
    const dock = await rect(page, '.dock');
    expect(f.bottom).toBeLessThanOrEqual(dock.top + 1);
  }
  const canvas = await rect(page, '#stage');
  expect(Math.round(canvas.width)).toBe(H);
  // back, then Safari-style toolbar: the visible height shrinks by 80 px
  await page.setViewportSize({ width: W, height: H - 80 });
  await page.evaluate(() => window.__jade!.frames(4));
  await layoutSound(page);
  const dock = await rect(page, '.dock');
  expect(dock.bottom).toBeLessThanOrEqual(H - 80);
  if (await compact(page)) expect((await frame(page))!.bottom).toBeLessThanOrEqual(dock.top + 1);
  expect(Math.round((await rect(page, '#stage')).height)).toBe(H - 80);
  expect(errors).toEqual([]);
});

test('without WebGL 2 the explanation fits the screen', async ({ page }) => {
  await page.addInitScript(() => {
    const orig = HTMLCanvasElement.prototype.getContext;
    // @ts-expect-error test override
    HTMLCanvasElement.prototype.getContext = function (type: string, ...a: unknown[]) { return type === 'webgl2' ? null : orig.call(this, type, ...a); };
  });
  await page.goto('/');
  await expect(page.locator('.fallback')).toBeVisible();
  const card = await rect(page, '.fallback .card');
  const vp = page.viewportSize()!;
  expect(card.left).toBeGreaterThanOrEqual(0);
  expect(card.right).toBeLessThanOrEqual(vp.width);
  expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
});

test('regular layout (desktop, tablet) keeps the v1 dock', async ({ page }) => {
  const errors = await boot(page);
  await page.getByRole('button', { name: '开始旅程' }).click();
  test.skip(await compact(page), 'phones use the compact dock');
  await expect(page.locator('.controls .know-btn')).toBeHidden();
  await expect(page.locator('.controls .more-btn')).toBeHidden();
  await expect(page.locator('.timeline')).toBeVisible();
  await expect(page.getByRole('button', { name: '2×', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: '重置视角' })).toBeVisible();
  expect(errors).toEqual([]);
});
