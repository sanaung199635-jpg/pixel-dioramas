// Every physical piece the stone becomes. All share one interior (jpos):
//   intact stone → halves A | B → B1 | BR → B1 | slab | B2 → bangle + core.
// Clipped pieces are the same shell clipped by the cut planes plus flat caps,
// so at zero separation they exactly fill the volume of the piece they came from.
import * as THREE from 'three';
import { JadeMaterial, type JadeOptions } from '../materials/JadeMaterial';
import { CUT_X } from '../stone/StoneSolid';
import { TurnedPiece, axisMatrix, capGeometry, discProfile, ringProfile, shellMorphGeometry, sliceOfShell } from '../stone/StoneGeometry';
import { RING, SITES, SLAB, SLAB_T, shapeAt, siteFrame, surfaceAt } from '../stone/Production';

const SHELL_MAT: JadeOptions = { thickness: 1.4, attenuationDistance: 0.45, transmission: 0.42, roughness: 0.24, wave: 1, morph: true };
const CAP_MAT: JadeOptions = { thickness: 1.2, attenuationDistance: 0.6, transmission: 0.45, roughness: 0.38, wave: 0.4 };
const SLAB_MAT: JadeOptions = { thickness: SLAB_T, attenuationDistance: 0.35, transmission: 0.5, roughness: 0.38, wave: 0.3 };

const capCache = new Map<string, THREE.BufferGeometry>();
function cap(x: number, sign: 1 | -1): THREE.BufferGeometry {
  const k = `${x}:${sign}`;
  if (!capCache.has(k)) capCache.set(k, capGeometry(x, sign, true));
  return capCache.get(k)!;
}

/** A slice of the stone between two cut planes (either may be open). */
export class ClipPiece {
  readonly group = new THREE.Group();
  readonly shell: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>;
  readonly caps: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>[] = [];
  private readonly local: THREE.Plane[] = [];

  constructor(shell: THREE.BufferGeometry, readonly lo: number | null, readonly hi: number | null, capOpts: JadeOptions = CAP_MAT) {
    this.shell = new THREE.Mesh(sliceOfShell(shell, lo, hi), new JadeMaterial(SHELL_MAT));
    this.shell.material.clipShadows = true;
    this.shell.userData.info = 'stone';
    this.group.add(this.shell);
    // three.js keeps points whose signed distance to every plane is >= 0
    if (lo !== null) {
      this.local.push(new THREE.Plane(new THREE.Vector3(1, 0, 0), -lo));
      this.caps.push(new THREE.Mesh(cap(lo, -1), new JadeMaterial(capOpts)));
    }
    if (hi !== null) {
      this.local.push(new THREE.Plane(new THREE.Vector3(-1, 0, 0), hi));
      this.caps.push(new THREE.Mesh(cap(hi, 1), new JadeMaterial(capOpts)));
    }
    for (const c of this.caps) { c.userData.info = 'cutface'; this.group.add(c); }
    for (const m of [this.shell, ...this.caps]) { m.castShadow = m.receiveShadow = true; }
    this.shell.material.clippingPlanes = this.local.map((p) => p.clone());
    this.group.visible = false;
  }

  updateClipping(): void {
    if (!this.group.visible) return;
    this.shell.updateMatrixWorld();
    this.local.forEach((p, i) => this.shell.material.clippingPlanes![i].copy(p).applyMatrix4(this.shell.matrixWorld));
  }
}

export class JadePieces {
  readonly intact: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>;
  readonly intactGroup = new THREE.Group();
  readonly A: ClipPiece; readonly B: ClipPiece;
  readonly B1: ClipPiece; readonly BR: ClipPiece;
  readonly S: ClipPiece; readonly B2: ClipPiece;
  /** Hole wall, core and the bangle-to-be live inside the slab's frame until lifted out. */
  readonly holeWall: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>;
  readonly core: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>;
  readonly bangleGroup = new THREE.Group();
  readonly bangle: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>;
  private readonly bangleShape: TurnedPiece;
  private shapeValue = -1;
  readonly all: THREE.Object3D[];

  constructor() {
    const shell = shellMorphGeometry();
    this.intact = new THREE.Mesh(shell, new JadeMaterial({ ...SHELL_MAT, thickness: 1.6 }));
    this.intact.castShadow = this.intact.receiveShadow = true;
    this.intact.userData.info = 'stone';
    this.intactGroup.add(this.intact);

    this.A = new ClipPiece(shell, null, CUT_X);
    this.B = new ClipPiece(shell, CUT_X, null);
    this.B1 = new ClipPiece(shell, CUT_X, SLAB.x0);
    this.BR = new ClipPiece(shell, SLAB.x0, null);
    this.S = new ClipPiece(shell, SLAB.x0, SLAB.x1, SLAB_MAT);
    this.B2 = new ClipPiece(shell, SLAB.x1, null);
    for (const c of this.S.caps) c.userData.info = 'slab';
    this.S.shell.userData.info = 'slab';

    const f = siteFrame(0);
    const wall = new TurnedPiece(1, 160, f);
    wall.update([[RING.ro, SLAB_T / 2], [RING.ro, -SLAB_T / 2]]); // facing the hole axis
    this.holeWall = new THREE.Mesh(wall.geometry, new JadeMaterial({ ...SLAB_MAT, rind: 0 }));
    this.holeWall.applyMatrix4(axisMatrix(f));
    const core = new TurnedPiece(24, 120, f);
    core.update(discProfile(RING.ri - 0.008, SLAB_T));
    this.core = new THREE.Mesh(core.geometry, new JadeMaterial({ ...SLAB_MAT, rind: 0 }));
    this.core.userData.info = 'core';
    for (const m of [this.holeWall, this.core]) { m.castShadow = m.receiveShadow = true; m.visible = false; this.S.group.add(m); }

    this.bangleShape = new TurnedPiece(96, 220, f);
    this.bangle = new THREE.Mesh(this.bangleShape.geometry, new JadeMaterial({ rind: 0, thickness: 0.09, attenuationDistance: 0.18, transmission: 0.55, roughness: 0.1, bump: 0.02, edgeGlow: 0.22 }));
    this.bangle.castShadow = this.bangle.receiveShadow = true;
    this.bangle.userData.info = 'bangle';
    this.bangleGroup.add(this.bangle);
    this.bangleGroup.visible = false;
    this.setBangleShape(0);

    this.all = [this.intactGroup, ...this.clipPieces.map((p) => p.group), this.bangleGroup];
  }

  get clipPieces(): ClipPiece[] {
    return [this.A, this.B, this.B1, this.BR, this.S, this.B2];
  }

  get pickables(): THREE.Object3D[] {
    return [this.intact, ...this.clipPieces.flatMap((p) => [p.shell, ...p.caps]), this.core, this.bangle];
  }

  /** Hide everything; the stage then shows what exists at its point in time. */
  hideAll(): void {
    this.intactGroup.visible = false;
    for (const p of this.clipPieces) p.group.visible = false;
    this.bangleGroup.visible = false;
    this.core.visible = this.holeWall.visible = false;
    const u = this.intact.material.jade;
    for (const m of [this.intact, this.B.shell, this.BR.shell]) { m.material.jade.uSlot.value.w = 0; m.material.jade.uPlanN.value = 0; }
    u.uPlanN.value = 0;
    u.uTorch.value.w = 0;
    u.uWet.value = 0;
    for (const c of this.S.caps) {
      const j = c.material.jade;
      j.uMarkN.value = 0; j.uKerfN.value = 0; j.uHoleN.value = 0;
    }
  }

  /** Open a saw slot in a piece's shell: at plane x, from the top down to depth y (stone frame). */
  setSlot(mesh: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>, x: number, depthY: number | null): void {
    mesh.material.jade.uSlot.value.set(x, 0.012, depthY ?? 0, depthY === null ? 0 : 1);
  }

  /** Window grinding: 0 = covered by rind, 1 = flat polished window. */
  setWindow(reveal: number, flat: number): void {
    const u = this.intact.material.jade;
    u.uReveal.value = reveal;
    u.uFlat.value = flat;
  }

  setWet(w: number): void { this.intact.material.jade.uWet.value = w; }

  /** Chalk lines on the intact stone: one per cut plane, each with its own draw progress (0 hides it). */
  setPlanLines(sweeps: [number, number, number]): void {
    this.setLinesOn(this.intact, [CUT_X, SLAB.x0, SLAB.x1], sweeps);
  }

  /** Chalk lines on any piece's shell (the slab lines stay on half B until they are cut). */
  setLinesOn(mesh: THREE.Mesh<THREE.BufferGeometry, JadeMaterial>, xs: number[], sweeps: number[]): void {
    const u = mesh.material.jade;
    xs.forEach((x, i) => u.uPlans.value[i].set(1, 0, 0, x));
    u.uPlanN.value = xs.length;
    u.uPlanSweep.value.set(sweeps[0] ?? 0, sweeps[1] ?? 0, sweeps[2] ?? 0, 0);
  }

  /** Marker circles on the slab (outer & inner circle at both sites), drawn as sweep goes 0 → 1. */
  setMarks(sweep: number, sitesShown = 2): void {
    const marks: [number, number, number][] = [];
    for (let i = 0; i < sitesShown; i++) marks.push([SITES[i].cy, SITES[i].cz, RING.ro], [SITES[i].cy, SITES[i].cz, RING.ri]);
    for (const c of this.S.caps) {
      const j = c.material.jade;
      marks.forEach((m, k) => j.uMarks.value[k].set(...m));
      j.uMarkN.value = marks.length;
      j.uMarkSweep.value = sweep;
    }
  }

  /** Kerf circles left by the tube drill at site 0: outer and/or inner. */
  setKerfs(outer: boolean, inner: boolean): void {
    for (const c of this.S.caps) {
      const j = c.material.jade;
      let n = 0;
      if (outer) j.uKerfs.value[n++].set(SITES[0].cy, SITES[0].cz, RING.ro);
      if (inner) j.uKerfs.value[n++].set(SITES[0].cy, SITES[0].cz, RING.ri);
      j.uKerfN.value = n;
    }
  }

  /** Once the blank is lifted out, the slab has a hole at site 0. */
  setHole(open: boolean): void {
    for (const c of this.S.caps) {
      const j = c.material.jade;
      j.uHoles.value[0].set(SITES[0].cy, SITES[0].cz, RING.ro);
      j.uHoleN.value = open ? 1 : 0;
    }
    this.holeWall.visible = open;
  }

  /** 0 = square blank … 3 = polished round bar. */
  setBangleShape(shape: number): void {
    if (Math.abs(shape - this.shapeValue) > 1e-4) {
      this.bangleShape.update(ringProfile(shapeAt(shape)));
      this.shapeValue = shape;
    }
    const s = surfaceAt(shape);
    const m = this.bangle.material;
    m.jade.uRough.value = s.rough;
    m.roughness = 0.1 + 0.55 * s.rough;
    m.clearcoat = s.clearcoat;
  }

  updateClipping(): void {
    for (const p of this.clipPieces) p.updateClipping();
  }
}

/** Matrix that places the stone-frame site-0 axis (lathe local frame) inside a piece. */
export const SITE0_AXIS = axisMatrix(siteFrame(0));
