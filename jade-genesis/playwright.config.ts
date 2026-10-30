import { defineConfig, devices } from '@playwright/test';

// Rendering runs on SwiftShader (CPU WebGL) in CI-like environments: slow but deterministic
// enough for functional checks. Frame times here say nothing about real devices.
const gpuArgs = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];

export default defineConfig({
  testDir: 'tests',
  timeout: 240_000,
  expect: { timeout: 60_000 },
  fullyParallel: false,
  workers: 1,
  reporter: [['list'], ['json', { outputFile: 'test-results/results.json' }]],
  use: {
    baseURL: 'http://localhost:4321',
    launchOptions: { args: gpuArgs },
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run build && npx vite preview --port 4321 --strictPort',
    url: 'http://localhost:4321',
    reuseExistingServer: false,
    timeout: 180_000,
  },
  // Phones are emulated in Chromium (viewport, touch, mobile UA). WebKit is not
  // installed in this environment, so none of this replaces a real iPhone Safari test.
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 } },
    { name: 'mobile', use: { ...devices['iPhone 13'], viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, browserName: 'chromium' } },
    // layout-only projects (tests/mobile.spec.ts)
    { name: 'iphone-se', testMatch: /mobile\.spec/, use: { ...devices['iPhone SE'], viewport: { width: 320, height: 568 }, deviceScaleFactor: 1, browserName: 'chromium' } },
    { name: 'iphone-max', testMatch: /mobile\.spec/, use: { ...devices['iPhone 14 Pro Max'], viewport: { width: 430, height: 932 }, deviceScaleFactor: 1, browserName: 'chromium' } },
    { name: 'android', testMatch: /mobile\.spec/, use: { ...devices['Pixel 7'], deviceScaleFactor: 1, browserName: 'chromium' } },
    { name: 'landscape', testMatch: /mobile\.spec/, use: { ...devices['iPhone 13 landscape'], viewport: { width: 844, height: 390 }, deviceScaleFactor: 1, browserName: 'chromium' } },
    { name: 'tablet', testMatch: /mobile\.spec/, use: { ...devices['iPad Mini'], viewport: { width: 768, height: 1024 }, deviceScaleFactor: 1, browserName: 'chromium' } },
  ],
});
