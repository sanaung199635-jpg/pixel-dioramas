import * as THREE from 'three';
import { Ui } from '../components/Ui';
import { t } from '../content';
import { CameraRig } from '../controls/CameraRig';
import { STAGES, phaseKey } from '../journey/stages';
import { JadeMaterial } from '../materials/JadeMaterial';
import { Director, type LightMode } from '../scenes/Director';
import { World } from '../scenes/World';
import { Journey, type JourneySnapshot, type Speed } from './Journey';
import { Quality } from './Quality';
import { Sound } from './Sound';

export function hasWebGL2(): boolean {
  try {
    return !!document.createElement('canvas').getContext('webgl2');
  } catch {
    return false;
  }
}

/** Debug / test hook: read-only views plus the same actions the UI uses. */
export interface JadeDebug {
  state(): JourneySnapshot & {
    stageId: string; cameraMode: string; torch: boolean; exposure: number; sound: boolean;
    lightMode: LightMode; compare: number; quality: string; dpr: number; frames: number; avgFrameMs: number; phase: string; intro: boolean;
  };
  start(): void;
  goTo(stage: number, play?: boolean): void;
  /** Set an exact state without pausing (e.g. near the end of a stage, still playing). */
  restore(s: Partial<JourneySnapshot>): void;
  seek(p: number): void;
  play(): void;
  pause(): void;
  setSpeed(s: Speed): void;
  torch(on: boolean): void;
  lightMode(m: LightMode): void;
  compare(v: number): void;
  resetView(): void;
  hotspots(): { id: string; x: number; y: number; visible: boolean }[];
  frames(n: number): Promise<void>;
  freeze(settle?: number): Promise<void>;
  unfreeze(): void;
  field(x: number, y: number, z: number): void;
}

declare global {
  interface Window { __jade?: JadeDebug }
}

export class App {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly world: World;
  private readonly director: Director;
  private readonly rig: CameraRig;
  private readonly journey = new Journey();
  private readonly ui: Ui;
  private readonly quality: Quality;
  private readonly sound = new Sound();
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
  private intro = true;
  private exposure = 1;

  constructor(private readonly canvas: HTMLCanvasElement, uiRoot: HTMLElement) {
    const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.localClippingEnabled = true;

    this.world = new World(this.renderer);
    this.director = new Director(this.world);
    this.rig = new CameraRig(canvas);
    this.quality = new Quality(mobile, (q) => this.applyQuality(q.dprCap, q.shadow));

    this.ui = new Ui(uiRoot, {
      start: () => { this.leaveIntro(); this.journey.startJourney(); this.rig.reset(); },
      explore: () => this.leaveIntro(),
      goTo: (i) => { this.leaveIntro(); this.journey.goTo(i); },
      prev: () => { this.leaveIntro(); this.journey.prev(); },
      next: () => { this.leaveIntro(); this.journey.next(); },
      toggle: () => { this.leaveIntro(); this.journey.toggle(); },
      speed: (s) => this.journey.setSpeed(s),
      seek: (p) => this.journey.seek(p),
      step: (d) => this.journey.step(d),
      resetView: () => this.rig.reset(),
      toggleTorch: () => this.setTorch(!this.director.torchMode),
      toggleSound: () => void this.toggleSound(),
      lightMode: (m) => { this.director.lightMode = m; },
      compare: (v) => { this.director.compare = v; },
    });

    // every stage change: hand the camera back to the guide, drop the manual torch
    let lastStage = -1;
    this.journey.subscribe((s) => {
      if (s.stage === lastStage) return;
      lastStage = s.stage;
      this.rig.reset();
      if (s.stage !== 2) this.setTorch(false);
      this.rig.setDistanceLimits(s.stage === STAGES.length - 1 ? 1.4 : 2.4, s.stage === 0 ? 22 : 16);
    });

    this.bindPointer();
    this.bindContextLoss();
    window.addEventListener('resize', () => this.resize());
    // never keep playing sound in a background tab
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.sound.enabled) void this.sound.disable(); });
    this.applyQuality(this.quality.current.dprCap, this.quality.current.shadow);
    this.resize();
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

  private leaveIntro(): void {
    if (!this.intro) return;
    this.intro = false;
    this.ui.hideIntro();
  }

  private setTorch(on: boolean): void {
    if (on && this.journey.state.stage !== 2) return;
    this.director.torchMode = on;
    if (!on) this.director.manualTorch = null;
    if (on) this.journey.pause();
  }

  private async toggleSound(): Promise<void> {
    if (this.sound.enabled) await this.sound.disable();
    else await this.sound.enable();
  }

  private frame(now: number): void {
    const dtMs = now - this.last;
    this.last = now;
    const dt = Math.min(dtMs / 1000, 0.1);
    this.quality.sample(dtMs);

    const machineDt = this.journey.tick(dt);
    // machines keep idling (water, spin) even while the story is paused
    const idleDt = this.journey.state.playing ? machineDt : dt * 0.25;
    this.machineTime += idleDt;
    const s = this.journey.state;
    const f = this.director.apply(s.stage, s.progress, this.machineTime, idleDt);
    this.exposure = this.director.lastExposure;
    this.sound.setMix(f.sound);

    this.rig.update(dt, f.shot, Director.stationOf(s.stage));
    this.renderer.render(this.world.scene, this.rig.camera);
    this.projectHotspots(f.hotspots);
    this.pushUi();

    this.frameCount++;
    this.frameWaiters = this.frameWaiters.filter((w) => (this.frameCount >= w.at ? (w.resolve(), false) : true));
  }

  private pushUi(): void {
    const s = this.journey.state;
    this.ui.update({
      ...s,
      phase: t(phaseKey(s.stage, s.progress)),
      cameraMode: this.rig.mode,
      torch: this.director.torchMode,
      sound: this.sound.enabled,
      lightMode: this.director.lightMode,
      compare: this.director.compare,
    });
  }

  private projectHotspots(list: { id: string; world: THREE.Vector3 }[]): void {
    const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
    const hide = this.intro || this.director.torchMode;
    this.hotspots = list.map((hs) => {
      this.tmp.copy(hs.world).project(this.rig.camera);
      const x = (this.tmp.x * 0.5 + 0.5) * w, y = (-this.tmp.y * 0.5 + 0.5) * h;
      const visible = !hide && this.tmp.z < 1 && x > 8 && x < w - 8 && y > 64 && y < h - 8;
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

  /** Torch mode: aim the torch where the pointer meets the stone. */
  private aimTorch(): void {
    const stone = this.world.pieces.intact;
    const hit = this.raycaster.intersectObject(stone, false)[0];
    if (!hit?.face) return;
    this.director.manualTorch = { point: stone.worldToLocal(hit.point.clone()), normal: hit.face.normal.clone() };
  }

  private bindPointer(): void {
    const c = this.canvas;
    c.addEventListener('pointerdown', (e) => { this.down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
    c.addEventListener('pointermove', (e) => {
      if (!this.director.torchMode || e.buttons) return;
      this.setRay(e);
      this.aimTorch();
    });
    c.addEventListener('pointerup', (e) => {
      const d = this.down;
      this.down = null;
      if (!d || Math.hypot(e.clientX - d.x, e.clientY - d.y) > 6 || performance.now() - d.t > 600) return;
      this.setRay(e);
      if (this.director.torchMode) { this.aimTorch(); return; }
      const hit = this.raycaster.intersectObjects(this.world.pickables, true).find((x) => x.object.visible);
      if (!hit) { this.ui.closePopover(); return; }
      let id: string | undefined;
      for (let o: THREE.Object3D | null = hit.object; o && !id; o = o.parent) id = o.userData.info as string | undefined;
      if (id === 'stone' && hit.face) {
        const rim = (hit.object as THREE.Mesh).geometry.getAttribute('rim');
        const r = (rim.getX(hit.face.a) + rim.getX(hit.face.b) + rim.getX(hit.face.c)) / 3;
        id = r < 0.5 && this.journey.state.stage >= 3 ? 'window' : 'rind';
      }
      if (id) this.ui.showInfo(id, e.clientX, e.clientY);
    });
  }

  private bindContextLoss(): void {
    this.canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      this.stop();
      this.ui.showFallback(t('fallback.lost.title'), t('fallback.lost.body'), () => location.reload());
    });
    this.canvas.addEventListener('webglcontextrestored', () => {
      this.ui.hideFallback();
      this.world.studio.setShadowMapSize(this.quality.current.shadow);
      this.start();
    });
  }

  private exposeDebug(): void {
    window.__jade = {
      state: () => {
        const s = this.journey.state;
        return {
          ...s,
          stageId: STAGES[s.stage].id,
          cameraMode: this.rig.mode,
          torch: this.director.torchMode,
          exposure: Math.round(this.exposure * 100) / 100,
          sound: this.sound.enabled,
          lightMode: this.director.lightMode,
          compare: this.director.compare,
          quality: this.quality.current.name,
          dpr: this.renderer.getPixelRatio(),
          frames: this.frameCount,
          avgFrameMs: Math.round(this.quality.avgFrameMs * 10) / 10,
          phase: t(phaseKey(s.stage, s.progress)),
          intro: this.intro,
        };
      },
      start: () => { this.leaveIntro(); this.journey.startJourney(); },
      goTo: (i, play = false) => { this.leaveIntro(); this.journey.goTo(i, play); },
      restore: (st) => { this.leaveIntro(); this.journey.restore(st); },
      seek: (p) => { this.leaveIntro(); this.journey.seek(p); },
      play: () => this.journey.play(),
      pause: () => this.journey.pause(),
      setSpeed: (s) => this.journey.setSpeed(s),
      torch: (on) => this.setTorch(on),
      lightMode: (m) => { this.director.lightMode = m; },
      compare: (v) => { this.director.compare = v; },
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
    };
  }
}
