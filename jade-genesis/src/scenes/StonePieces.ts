// The stone and the two halves it becomes. The halves are the *same* shell
// clipped at CUT_X plus a cap on the cut plane; at zero gap they occupy exactly
// the intact stone's volume, so swapping between them is seamless.
import * as THREE from 'three';
import { JadeMaterial } from '../materials/JadeMaterial';
import { capGeometry, shellGeometry } from '../stone/StoneGeometry';
import { CUT_X } from '../stone/StoneSolid';

interface Half {
  group: THREE.Group;
  shell: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>;
  cap: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>;
  localPlane: THREE.Plane;
  side: -1 | 1;
}

export class StonePieces {
  /** Pose of the stone frame in the world. Children are in stone-frame units. */
  readonly root = new THREE.Group();
  readonly intact: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>;
  private readonly halves: Half[];

  constructor() {
    this.root.name = 'stone';
    const shell = shellGeometry(true);
    this.intact = new THREE.Mesh(shell, new JadeMaterial({ thickness: 1.6, attenuationDistance: 0.45, transmission: 0.42, roughness: 0.24, wave: 1 }));
    this.intact.castShadow = this.intact.receiveShadow = true;
    this.intact.userData.info = 'stone';
    this.root.add(this.intact);
    this.halves = ([-1, 1] as const).map((side) => {
      const group = new THREE.Group();
      const sh = new THREE.Mesh(shell, new JadeMaterial({ thickness: 1.4, attenuationDistance: 0.45, transmission: 0.42, roughness: 0.24, wave: 1 }));
      // three.js keeps points with distance >= 0: side -1 keeps x <= CUT_X, side +1 keeps x >= CUT_X
      const localPlane = new THREE.Plane(new THREE.Vector3(side, 0, 0), -side * CUT_X);
      sh.material.clipShadows = true;
      const cap = new THREE.Mesh(capGeometry(CUT_X, side === -1 ? 1 : -1, true), new JadeMaterial({ thickness: 1.2, attenuationDistance: 0.6, transmission: 0.45, roughness: 0.38, wave: 0.4 }));
      cap.userData.info = 'cutface';
      sh.userData.info = 'stone';
      for (const m of [sh, cap]) { m.castShadow = m.receiveShadow = true; }
      group.add(sh, cap);
      group.visible = false;
      this.root.add(group);
      return { group, shell: sh, cap, localPlane, side };
    });
  }

  /** Meshes that the pointer can hit. */
  get pickables(): THREE.Object3D[] {
    return [this.intact, ...this.halves.flatMap((h) => [h.shell, h.cap])];
  }

  /**
   * @param split 0 = intact, >0 = cut. Value 0..1 drives how far the halves open.
   */
  setSplit(split: number): void {
    const cut = split > 0;
    this.intact.visible = !cut;
    for (const h of this.halves) {
      h.group.visible = cut;
      const gap = 0.8 * split;
      h.group.position.set(h.side * gap, 0, 0.4 * split);
      h.group.rotation.y = h.side * 0.72 * split;
    }
  }

  /** Show the chalk line of the planned cut on the intact stone. */
  setPlanLine(visible: boolean): void {
    const u = this.intact.material.jade;
    u.uPlans.value[0].set(1, 0, 0, CUT_X);
    u.uPlanN.value = visible ? 1 : 0;
  }

  /** Torch glow at a stone-frame point, or off when point is null. */
  setTorch(point: THREE.Vector3 | null, strength = 3.2): void {
    const t = this.intact.material.jade.uTorch.value;
    if (point) t.set(point.x, point.y, point.z, strength); else t.w = 0;
  }

  /** Clipping planes live in world space; call after the stone has moved. */
  updateClipping(): void {
    this.root.updateMatrixWorld(true);
    for (const h of this.halves) {
      const plane = h.shell.material.clippingPlanes?.[0] ?? new THREE.Plane();
      plane.copy(h.localPlane).applyMatrix4(h.shell.matrixWorld);
      if (!h.shell.material.clippingPlanes) h.shell.material.clippingPlanes = [plane];
    }
  }

  /** World position of a stone-frame point on one half (used for labels). */
  halfPoint(side: -1 | 1, p: THREE.Vector3): THREE.Vector3 {
    const h = this.halves.find((x) => x.side === side)!;
    return h.group.localToWorld(p.clone());
  }
}
