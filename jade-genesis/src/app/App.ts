import * as THREE from 'three';
import { Ui } from '../components/Ui';
import { JadeMaterial } from '../materials/JadeMaterial';
import { CameraRig } from '../controls/CameraRig';
import { CuttingScene, phaseAt } from '../scenes/CuttingScene';
import { ROUGH_SHOT, RoughStoneScene } from '../scenes/RoughStoneScene';
import { World } from '../scenes/World';
import { Journey, type JourneySnapshot, type StageId } from './Journey';
import { Quality } from './Quality';

export function hasWebGL2(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!c.getContext('webgl2');
  } catch {
    return false;
  }
}

/** Debug / test hook. Read-only views plus the same actions the UI uses. */
export interface JadeDebug {
  state(): JourneySnapshot & { cameraMode: string; torch: boolean; exposure: number; quality: string; dpr: number; frames: number; avgFrameMs: number; phase: string };
  setStage(s: StageId): void;
  seek(p: number): void;
  play(): void;
  pause(): void;
  setSpeed(s: 0.5 | 1 | 2): void;
  torch(on: boolean): void;
  resetView(): void;
  hotspots(): { id: string; x: number; y: number; visible: boolean }[];
  /** Resolves after n more frames have been rendered. */
  frames(n: number): Promise<void>;
  /** Stop the render loop after rendering `settle` frames (for stable screenshots). */
  freeze(settle?: number): Promise<void>;
  /** Restart the render loop. */
  unfreeze(): void;
  /** Dev: change the stone's interior seed. */
  field(x: number, y: number, z: number): void;
  /** Dev: set a property or jade uniform on the intact stone's material. */
  mat(key: string, value: number): void;
}

declare global {
  interface Window { __jade?: JadeDebug }
}

export class App {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly world: World;
  private readonly rig: CameraRig;
  private readonly journey = new Journey();
  private readonly rough: RoughStoneScene;
  private readonly cutting: CuttingScene;
  private readonly ui: Ui;
  private readonly quality: Quality;
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointer = new THREE.Vector2();
  private readonly tmp = new THREE.Vector3();
  private machineTime = 0;
  private last = performance.now();
  private raf = 0;
  private running = false;
  private frameCount = 0;
  private frameWaiters: { at: number; resolve: () => void }[] = [];
  private hotspots: { id: string; x: number; y: number; visible: boolean }[] = [];
  private down: { x: number; y: number; t: number } | null = null;

  constructor(private readonly canvas: HTMLCanvasElement, uiRoot: HTMLElement) {
    const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.localClippingEnabled = true;

    this.world = new World(this.renderer);
    this.rig = new CameraRig(canvas);
    this.rough = new RoughStoneScene(this.world);
    this.cutting = new CuttingScene(this.world);
    this.quality = new Quality(mobile, (q) => this.applyQuality(q.dprCap, q.shadow));

    this.ui = new Ui(uiRoot, {
      stage: (id) => this.setStage(id),
      toggle: () => this.journey.toggle(),
      speed: (s) => this.journey.setSpeed(s),
      seek: (p) => this.journey.seek(p),
      step: (d) => { if (this.journey.state.stage === 'cut') this.journey.seek(this.journey.state.progress + d); },
      resetView: () => this.rig.reset(),
      torch: (on) => this.setTorch(on),
      toggleTorch: () => this.setTorch(!this.rough.torchMode),
    });

    this.journey.subscribe((s) => { if (s.stage !== 'rough' && this.rough.torchMode) this.setTorch(false); });
    this.rig.onMode(() => this.pushUi());

    this.bindPointer();
    this.bindContextLoss();
    window.addEventListener('resize', () => this.resize());
    this.applyQuality(this.quality.current.dprCap, this.quality.current.shadow);
    this.resize();
    this.cutting.apply(0, 0, 0);
    this.exposeDebug();
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    const loop = (now: number) => {
      if (!this.running) return;
      this.raf = requestAnimationFrame(loop);
      this.frame(now);
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private setStage(id: StageId): void {
    if (id === this.journey.state.stage) return;
    this.journey.setStage(id);
    this.rig.reset();
  }

  private setTorch(on: boolean): void {
    if (on && this.journey.state.stage !== 'rough') return;
    this.rough.setTorchMode(on);
    if (on) this.rough.placeDefaultTorch();
    this.pushUi();
  }

  private frame(now: number): void {
    const dtMs = now - this.last;
    this.last = now;
    const dt = Math.min(dtMs / 1000, 0.1);
    this.quality.sample(dtMs);

    const machineDt = this.journey.tick(dt);
    this.machineTime += machineDt;
    const s = this.journey.state;
    this.cutting.apply(s.progress, this.machineTime, machineDt);
    if (s.stage === 'rough') this.rough.update(dt);
    else this.rough.resetLight();

    this.rig.update(dt, s.stage === 'rough' ? ROUGH_SHOT : this.cutting.shot());
    this.renderer.render(this.world.scene, this.rig.camera);
    this.projectHotspots();
    this.pushUi();

    this.frameCount++;
    this.frameWaiters = this.frameWaiters.filter((w) => (this.frameCount >= w.at ? (w.resolve(), false) : true));
  }

  private pushUi(): void {
    const s = this.journey.state;
    this.ui.update({ ...s, phase: phaseAt(s.progress), cameraMode: this.rig.mode, torch: this.rough.torchMode });
  }

  private projectHotspots(): void {
    const list = this.journey.state.stage === 'rough' ? (this.rough.torchMode ? [] : this.rough.hotspots()) : this.cutting.hotspots();
    const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
    this.hotspots = list.map((hs) => {
      this.tmp.copy(hs.world).project(this.rig.camera);
      const x = (this.tmp.x * 0.5 + 0.5) * w, y = (-this.tmp.y * 0.5 + 0.5) * h;
      const visible = this.tmp.z < 1 && x > 8 && x < w - 8 && y > 64 && y < h - 8;
      return { id: hs.id, x, y, visible };
    });
    this.ui.setHotspots(this.hotspots);
  }

  private resize(): void {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.quality.current.dprCap));
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
    this.rig.resize(w, h);
  }

  private applyQuality(dprCap: number, shadow: number): void {
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprCap));
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.world.studio.setShadowMapSize(shadow);
  }

  private setRay(e: PointerEvent): void {
    const r = this.canvas.getBoundingClientRect();
    this.pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    this.raycaster.setFromCamera(this.pointer, this.rig.camera);
  }

  private bindPointer(): void {
    const c = this.canvas;
    c.addEventListener('pointerdown', (e) => { this.down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
    c.addEventListener('pointermove', (e) => {
      if (!this.rough.torchMode || e.buttons) return;
      this.setRay(e);
      this.rough.pointTorch(this.raycaster);
    });
    c.addEventListener('pointerup', (e) => {
      const d = this.down;
      this.down = null;
      if (!d || Math.hypot(e.clientX - d.x, e.clientY - d.y) > 6 || performance.now() - d.t > 600) return;
      this.setRay(e);
      if (this.rough.torchMode) { this.rough.pointTorch(this.raycaster); return; }
      const hit = this.raycaster.intersectObjects(this.world.pickables, true)[0];
      if (!hit) { this.ui.closePopover(); return; }
      let id: string | undefined;
      for (let o: THREE.Object3D | null = hit.object; o && !id; o = o.parent) id = o.userData.info as string | undefined;
      if (id === 'stone' && hit.face) {
        // rind or window? read the rim attribute at the hit face
        const rim = (hit.object as THREE.Mesh).geometry.getAttribute('rim');
        const r = (rim.getX(hit.face.a) + rim.getX(hit.face.b) + rim.getX(hit.face.c)) / 3;
        id = r < 0.5 ? 'window' : 'rind';
      }
      if (id) this.ui.showInfo(id, e.clientX, e.clientY);
    });
  }

  private bindContextLoss(): void {
    this.canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      this.stop();
      this.ui.showFallback('图形上下文已丢失', '浏览器暂时收回了 3D 渲染资源（常见于切换应用或显存不足）。正在等待恢复，你也可以刷新页面。', () => location.reload());
    });
    this.canvas.addEventListener('webglcontextrestored', () => {
      this.ui.hideFallback();
      this.world.studio.setShadowMapSize(this.quality.current.shadow);
      this.start();
    });
  }

  private exposeDebug(): void {
    window.__jade = {
      state: () => ({
        ...this.journey.state,
        cameraMode: this.rig.mode,
        torch: this.rough.torchMode,
        exposure: Math.round(this.rough.exposureLevel * 100) / 100,
        quality: this.quality.current.name,
        dpr: this.renderer.getPixelRatio(),
        frames: this.frameCount,
        avgFrameMs: Math.round(this.quality.avgFrameMs * 10) / 10,
        phase: phaseAt(this.journey.state.progress),
      }),
      setStage: (s) => this.setStage(s),
      seek: (p) => this.journey.seek(p),
      play: () => this.journey.play(),
      pause: () => this.journey.pause(),
      setSpeed: (s) => this.journey.setSpeed(s),
      torch: (on) => this.setTorch(on),
      resetView: () => this.rig.reset(true),
      hotspots: () => this.hotspots.map((h) => ({ ...h })),
      frames: (n) => new Promise((resolve) => this.frameWaiters.push({ at: this.frameCount + n, resolve })),
      freeze: async (settle = 2) => {
        if (!this.running) this.start();
        await new Promise<void>((resolve) => this.frameWaiters.push({ at: this.frameCount + settle, resolve }));
        this.stop();
        this.renderer.getContext().finish();
      },
      unfreeze: () => this.start(),
      field: (x, y, z) => JadeMaterial.field.set(x, y, z),
      mat: (key, value) => {
        const m = this.world.stone.intact.material as unknown as Record<string, unknown> & JadeMaterial;
        const u = (m.jade as unknown as Record<string, { value: unknown }>)[key];
        if (u) u.value = value; else m[key] = value;
      },
    };
  }
}
