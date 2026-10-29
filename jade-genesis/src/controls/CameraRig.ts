// Orbit camera with bounded movement and two modes:
// - auto: eases toward the shot the scene asks for (guided journey)
// - free: the user has dragged / zoomed; we stop steering until "reset view"
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import type { Shot } from '../scenes/shots';
import { damp } from '../utils/math';

export type CameraMode = 'auto' | 'free';

/** World box the orbit target may move within. */
const TARGET_BOX = new THREE.Box3(new THREE.Vector3(-3, 0.3, -4), new THREE.Vector3(12, 4, 4));

export class CameraRig {
  readonly camera: THREE.PerspectiveCamera;
  readonly controls: OrbitControls;
  private modeValue: CameraMode = 'auto';
  private snapNext = true;
  private listeners = new Set<(m: CameraMode) => void>();

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
    const cam = this.camera;
    cam.aspect = width / height;
    const mobile = width < 760;
    cam.fov = mobile ? 42 : 30;
    if (mobile) cam.setViewOffset(width, height, 0, height * 0.1, width, height);
    else cam.setViewOffset(width, height, -width * 0.06, height * 0.02, width, height);
    cam.updateProjectionMatrix();
  }

  update(dt: number, shot: Shot): void {
    if (this.modeValue === 'auto') {
      const k = this.snapNext ? 1 : damp(3.2, dt);
      this.snapNext = false;
      this.camera.position.lerp(shot.position, k);
      this.controls.target.lerp(shot.target, k);
    }
    this.controls.target.clamp(TARGET_BOX.min, TARGET_BOX.max);
    this.controls.update();
    if (this.camera.position.y < 0.4) this.camera.position.y = 0.4;
  }

  dispose(): void {
    this.controls.dispose();
  }
}
