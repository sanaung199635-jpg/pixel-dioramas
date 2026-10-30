// Orbit camera with bounded movement and two modes:
// - auto: eases toward the shot the scene asks for (guided journey)
// - free: the user has dragged / zoomed; we stop steering until "reset view"
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import type { FrameRect } from '../components/Ui';
import type { Shot } from '../scenes/shots';
import { damp } from '../utils/math';

export type CameraMode = 'auto' | 'free';

/** Horizontal coverage the guided shots were composed for: 30° vertical fov at 16:10. */
const DESIGN_TAN_H = Math.tan((15 * Math.PI) / 180) * 1.6;
const DESIGN_TAN_V = Math.tan((15 * Math.PI) / 180);
/**
 * Compact framing: share of the desktop's horizontal coverage kept on a phone
 * (desktop shots leave room for the side cards), and the widest vertical fov
 * allowed before perspective distortion shows (64°).
 */
const COVER_H = 0.8, COVER_V = 1.15, MAX_TAN_V = Math.tan((32 * Math.PI) / 180);

/** World box the orbit target may move within. */
const TARGET_BOX = new THREE.Box3(new THREE.Vector3(-25, 0.3, -6), new THREE.Vector3(44, 5, 5));

export class CameraRig {
  readonly camera: THREE.PerspectiveCamera;
  readonly controls: OrbitControls;
  private modeValue: CameraMode = 'auto';
  private snapNext = true;
  private listeners = new Set<(m: CameraMode) => void>();
  private readonly box = new THREE.Box3();
  private width = 1;
  private height = 1;
  /** Compact layouts: the free canvas area to frame into (eased toward `frameTarget`). */
  private frameTarget: FrameRect | null = null;
  private frameNow: FrameRect | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 200);
    this.controls = new OrbitControls(this.camera, canvas);
    const c = this.controls;
    c.enableDamping = true;
    c.dampingFactor = 0.08;
    c.minDistance = 2.4;
    c.maxDistance = 16;
    c.minPolarAngle = 0.15;
    c.maxPolarAngle = 1.42; // never look from below the floor
    c.enablePan = true;
    c.panSpeed = 0.6;
    c.rotateSpeed = 0.7;
    c.zoomSpeed = 0.8;
    c.addEventListener('start', () => this.setMode('free'));
  }

  get mode(): CameraMode {
    return this.modeValue;
  }

  onMode(fn: (m: CameraMode) => void): void {
    this.listeners.add(fn);
  }

  setMode(m: CameraMode): void {
    if (m === this.modeValue) return;
    this.modeValue = m;
    this.listeners.forEach((fn) => fn(m));
  }

  /** Per-stage zoom limits (the showcase allows a closer look). */
  setDistanceLimits(min: number, max: number): void {
    this.controls.minDistance = min;
    this.controls.maxDistance = max;
  }

  /** Return to the guided camera. */
  reset(snap = false): void {
    this.setMode('auto');
    if (snap) this.snapNext = true;
  }

  /**
   * Shift the projection so the subject sits in the free area between UI panels.
   * Desktop: subject right of centre (left story card). Mobile: subject above the sheet.
   */
  resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    if (this.frameNow) { this.applyFrame(this.frameNow); return; }
    const cam = this.camera;
    cam.aspect = width / height;
    cam.fov = 30;
    cam.setViewOffset(width, height, -width * 0.06, height * 0.02, width, height);
    cam.updateProjectionMatrix();
  }

  /**
   * Compact layouts: frame the shot into the canvas area left free by the UI panels
   * (null = regular layout, the desktop offsets above). The scene still renders
   * under the panels; only the composition moves. `snap` skips the easing.
   */
  setFrame(rect: FrameRect | null, snap = false): void {
    this.frameTarget = rect;
    if (!rect) {
      if (this.frameNow) { this.frameNow = null; this.resize(this.width, this.height); }
      return;
    }
    if (!this.frameNow || snap) { this.frameNow = { ...rect }; this.applyFrame(this.frameNow); }
  }

  /** The frame currently applied (for tests and diagnostics). */
  get frame(): FrameRect | null {
    return this.frameNow ? { ...this.frameNow } : null;
  }

  private applyFrame(r: FrameRect): void {
    const cam = this.camera;
    const rw = Math.max(40, r.right - r.left), rh = Math.max(40, r.bottom - r.top);
    const aspect = rw / rh;
    // keep the composed horizontal coverage on narrow frames, the vertical one on wide frames
    const tanV = Math.min(MAX_TAN_V, Math.max(DESIGN_TAN_V * COVER_V, (DESIGN_TAN_H * COVER_H) / aspect));
    cam.fov = (2 * Math.atan(tanV) * 180) / Math.PI;
    cam.aspect = aspect;
    // the frame is the "full image"; the canvas is a window onto it that may extend past it
    cam.setViewOffset(rw, rh, -r.left, -r.top, this.width, this.height);
    cam.updateProjectionMatrix();
  }

  /** `anchor`: the active station; in free view the target may not wander far from it. */
  update(dt: number, shot: Shot, anchor?: THREE.Vector3): void {
    if (this.frameTarget && this.frameNow && this.snapNext) {
      // a snapped camera (explicit reset) lands on the final composition at once
      Object.assign(this.frameNow, this.frameTarget);
      this.applyFrame(this.frameNow);
    } else if (this.frameTarget && this.frameNow) {
      const k = damp(7, dt), f = this.frameNow, g = this.frameTarget;
      const moved = Math.abs(f.left - g.left) + Math.abs(f.top - g.top) + Math.abs(f.right - g.right) + Math.abs(f.bottom - g.bottom);
      if (moved > 0.5) {
        f.left += (g.left - f.left) * k; f.top += (g.top - f.top) * k;
        f.right += (g.right - f.right) * k; f.bottom += (g.bottom - f.bottom) * k;
        this.applyFrame(f);
      } else if (moved > 0) { Object.assign(f, g); this.applyFrame(f); }
    }
    if (this.modeValue === 'auto') {
      const k = this.snapNext ? 1 : damp(3.2, dt);
      this.snapNext = false;
      this.camera.position.lerp(shot.position, k);
      this.controls.target.lerp(shot.target, k);
    }
    this.controls.target.clamp(TARGET_BOX.min, TARGET_BOX.max);
    if (anchor && this.modeValue === 'free') {
      this.box.min.set(anchor.x - 6, 0.3, anchor.z - 5);
      this.box.max.set(anchor.x + 6, 4, anchor.z + 5);
      this.controls.target.clamp(this.box.min, this.box.max);
    }
    this.controls.update();
    if (this.camera.position.y < 0.4) this.camera.position.y = 0.4;
  }

  dispose(): void {
    this.controls.dispose();
  }
}
