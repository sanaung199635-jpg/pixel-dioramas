// Station 03–05: the rough stone on its plinth. Free orbit, hotspots, and the
// torch inspection (the glow is computed in the jade shader from the hit point).
import * as THREE from 'three';
import { FLOOR_Y, WINDOW_DEPTH, WINDOW_DIR, fissureOnWindow } from '../stone/StoneSolid';
import { damp } from '../utils/math';
import { shot, type Shot } from './shots';
import { PLINTH, type World } from './World';

export const STONE_ON_PLINTH = {
  position: new THREE.Vector3(0, PLINTH.h + FLOOR_Y, 0),
  rotationY: -0.25,
};

export const ROUGH_SHOT: Shot = shot([-1.6, 3.0, 8.4], [0, 1.45, 0]);

export interface Hotspot {
  id: string;
  world: THREE.Vector3;
}

export class RoughStoneScene {
  private torchOn = false;
  private exposure = 1;
  private readonly fissure = fissureOnWindow();
  private readonly hit = new THREE.Vector3();
  private hasHit = false;

  constructor(private readonly world: World) {}

  get torchMode(): boolean {
    return this.torchOn;
  }

  setTorchMode(on: boolean): void {
    this.torchOn = on;
    if (!on) { this.hasHit = false; this.world.stone.setTorch(null); this.world.torch.visible = false; }
  }

  /** Pointer ray from the UI while the torch mode is on. */
  pointTorch(ray: THREE.Raycaster): boolean {
    if (!this.torchOn) return false;
    const hits = ray.intersectObject(this.world.stone.intact, false);
    if (!hits.length || !hits[0].face) { this.hasHit = false; this.world.stone.setTorch(null); this.world.torch.visible = false; return false; }
    const h = hits[0];
    this.hit.copy(this.world.stone.intact.worldToLocal(h.point.clone()));
    this.world.stone.setTorch(this.hit);
    const n = h.face!.normal.clone().transformDirection(this.world.stone.intact.matrixWorld);
    const t = this.world.torch;
    t.visible = true;
    t.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), n.clone().negate());
    t.position.copy(h.point).addScaledVector(n, 0.66);
    this.hasHit = true;
    return true;
  }

  /** Place the torch on the window when the mode turns on without a pointer (keyboard / touch). */
  placeDefaultTorch(): void {
    const p = WINDOW_DIR.clone().multiplyScalar(WINDOW_DEPTH);
    this.hit.copy(p);
    this.world.stone.setTorch(p);
    const wp = this.world.stone.intact.localToWorld(p.clone());
    const n = WINDOW_DIR.clone().transformDirection(this.world.stone.intact.matrixWorld);
    this.world.torch.visible = true;
    this.world.torch.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), n.clone().negate());
    this.world.torch.position.copy(wp).addScaledVector(n, 0.66);
    this.hasHit = true;
  }

  get exposureLevel(): number {
    return this.exposure;
  }

  get torchHasTarget(): boolean {
    return this.hasHit;
  }

  /** Called every frame while this station is shown. */
  update(dt: number): void {
    const target = this.torchOn ? 0 : 1;
    this.exposure += (target - this.exposure) * damp(4, dt);
    this.world.studio.setExposure(this.exposure, this.world.scene);
  }

  /** Restore gallery light immediately (used when leaving the station). */
  resetLight(): void {
    this.exposure = 1;
    this.world.studio.setExposure(1, this.world.scene);
  }

  hotspots(): Hotspot[] {
    const s = this.world.stone.intact;
    return [
      { id: 'rind', world: s.localToWorld(new THREE.Vector3(-0.9, 0.55, 0.55)) },
      { id: 'window', world: s.localToWorld(WINDOW_DIR.clone().multiplyScalar(WINDOW_DEPTH).add(new THREE.Vector3(0, -0.3, 0))) },
      { id: 'fissure', world: s.localToWorld(this.fissure.clone()) },
    ];
  }
}
