// The Director maps (stage, progress) to the whole world: where every piece of
// jade is, what every machine is doing, the camera shot, the visible hotspots
// and the sound mix. It is a pure mapping — the same inputs always give the
// same picture — except for blade/wheel spin and water drops, which loop on
// machine time and carry no story state.
import * as THREE from 'three';
import { SAW } from '../props/SlabSaw';
import { CUT_X, FLOOR_Y, WINDOW_DEPTH, WINDOW_DIR, fissureOnWindow, radiusAlong } from '../stone/StoneSolid';
import { RING, SITES, SLAB, SLAB_C, SLAB_T, shapeAt } from '../stone/Production';
import { easeInOut, lerp, segment } from '../utils/math';
import { Rx, Ry, Rz, S, T, Tv, apply, blend, mul, origin, place } from '../utils/pose';
import { SITE0_AXIS } from './JadePieces';
import { MINE_LIFT, PLINTH, STATION, type StationName, type World } from './World';
import type { Shot } from './shots';

export interface Hotspot { id: string; world: THREE.Vector3 }
export interface SoundMix { wind: number; motor: number; water: number; grind: number; buff: number }
export interface Frame { shot: Shot; hotspots: Hotspot[]; sound: SoundMix; orbitTarget: THREE.Vector3 }
export type LightMode = 'gallery' | 'soft' | 'back';

type Key = { at: number; pos: THREE.Vector3; target: THREE.Vector3 };
const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const at = (st: THREE.Vector3, x: number, y: number, z: number) => st.clone().add(V(x, y, z));
const E = easeInOut;
const seg = segment;
/** Stations each stage can see: its own, plus the one the material comes from. */
const STAGE_STATIONS: readonly (readonly StationName[])[] = [
  ['mine'], ['mine', 'wash'], ['wash', 'plinth'], ['plinth'], ['plinth'], ['plinth', 'saw'],
  ['saw', 'lightbox'], ['lightbox', 'drill'], ['drill', 'grind'], ['grind'], ['grind'], ['grind', 'showcase'],
];
const ALL_STATIONS = Object.keys(STATION) as StationName[];
const QUIET: SoundMix = { wind: 0.25, motor: 0, water: 0, grind: 0, buff: 0 };

// ---------- fixed poses ----------
const MINI = 0.11; // the stone at diorama scale
const ON_WASH = mul(Tv(at(STATION.wash, 0, 0.59 + FLOOR_Y, 0)), Ry(0.6));
const ON_PLINTH = mul(Tv(at(STATION.plinth, 0, PLINTH.h + FLOOR_Y, 0)), Ry(-0.25));
const LOAD_Z = 1.1, CUT_Z = 0.2;
const onCarriage = (z: number) => Tv(at(STATION.saw, 0, SAW.carriageTop + FLOOR_Y, z));
/** Slab lying flat (stone x axis up), centred on a point. */
const flatSlab = (centre: THREE.Vector3, cy = 0, cz = 0) => mul(Tv(centre), Rz(Math.PI / 2), T(-SLAB_C, -cy, -cz));
const ON_LIGHTBOX = flatSlab(at(STATION.lightbox, 0, 0.73 + SLAB_T / 2, 0));
const ON_DRILL = flatSlab(at(STATION.drill, 0, 0.31 + SLAB_T / 2, 0), SITES[0].cy, SITES[0].cz);
const local = (x: number, y: number, z: number, yaw = 0) => mul(T(x, y, z), Ry(yaw));

// bench poses for the bangle (lathe axis along world x)
const BENCH_AXIS = Rz(-Math.PI / 2);
/** Angle grinder model is built at 2.5× size; real disc Ø ≈ 125 mm. */
const GRINDER_SCALE = 0.4;
/** Where the lifted blank is set down on the drill table (in front of the slab). */
const BLANK_REST = at(STATION.drill, 1.45, 0.31 + SLAB_T / 2, 0.2);
const DRUM_R = 0.18;

export class Director {
  private readonly fissure = fissureOnWindow();
  private readonly dust: THREE.Sprite;
  private readonly dimLine: THREE.Line;
  private bladeAngle = 0;
  private wheelAngle = 0;
  private mineEnd?: THREE.Matrix4;
  private mineAttach?: THREE.Matrix4;
  private sixEnd?: { S: THREE.Matrix4; A: THREE.Matrix4; B1: THREE.Matrix4; B2: THREE.Matrix4 };
  private keyCache = new Map<number, Key[]>();
  /** User-driven torch (stage 03): stone-frame point, or null for the guided path. */
  manualTorch: { point: THREE.Vector3; normal: THREE.Vector3 } | null = null;
  torchMode = false;
  lightMode: LightMode = 'gallery';
  /** Showcase before/after slider: 0 = freshly ground surface, 1 = polished. */
  compare = 1;
  /** Draw only the stations a stage needs (debug switch for measuring). */
  cullStations = true;
  /** Gallery light level used for the last frame (1 = normal, 0 = dark room). */
  lastExposure = 1;

  constructor(private readonly w: World) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 128;
    const x = cv.getContext('2d')!;
    const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(236,230,214,0.7)');
    gr.addColorStop(1, 'rgba(236,230,214,0)');
    x.fillStyle = gr;
    x.fillRect(0, 0, 128, 128);
    this.dust = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), depthWrite: false, transparent: true }));
    this.dust.visible = false;
    w.scene.add(this.dust);
    const dimGeo = new THREE.BufferGeometry();
    dimGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    this.dimLine = new THREE.Line(dimGeo, new THREE.LineBasicMaterial({ color: 0x2b7351, depthTest: false }));
    this.dimLine.frustumCulled = false;
    this.dimLine.renderOrder = 10;
    this.dimLine.visible = false;
    w.scene.add(this.dimLine);
  }

  /** Station the camera and light focus on for a stage. */
  static stationOf(stage: number): THREE.Vector3 {
    return [STATION.mine, STATION.wash, STATION.plinth, STATION.plinth, STATION.plinth, STATION.saw, STATION.lightbox, STATION.drill, STATION.grind, STATION.grind, STATION.grind, STATION.showcase][stage];
  }

  apply(stage: number, p: number, machineTime: number, machineDt: number): Frame {
    const w = this.w;
    w.pieces.hideAll();
    this.idleMachines();
    const st = Director.stationOf(stage);
    w.studio.focus(st.x, st.z);
    w.showStations(this.cullStations ? STAGE_STATIONS[stage] : ALL_STATIONS);
    w.studio.setMode(stage === 11 ? this.lightMode : 'gallery');
    let exposure = 1;
    let sound: SoundMix = { ...QUIET };
    let hot: Hotspot[] = [];
    // leftovers stay where they were made (drawn only while their station is in use)
    if ((stage === 6 && p < 0.4) || stage === 8) this.showLeftovers(stage);

    switch (stage) {
      case 0: { // 01 mining
        const attach = this.mineAttachPose();
        this.setArm(this.armAt(p));
        const stone = p < 0.45 ? attach : this.bucketStonePose();
        this.showIntact(stone, { reveal: 0, flat: 0 });
        sound = { ...QUIET, wind: 0.5, motor: 0.35 * (seg(p, 0.15, 0.25) - seg(p, 0.92, 1)) };
        w.scene.updateMatrixWorld();
        hot = [
          { id: 'mine', world: STATION.mine.clone().add(w.mine.pitFloor).add(V(0.3, MINE_LIFT, 0)) },
          { id: 'excavator', world: apply(w.mine.digger.root.matrixWorld, 0, 0.5, 0) },
          ...(p > 0.5 ? [{ id: 'stone', world: origin(stone) }] : []),
        ];
        break;
      }
      case 1: { // 02 washing
        const fly = E(seg(p, 0, 0.25));
        this.setArm(this.armAt(1));
        const pose = blend(this.mineEndPose(), ON_WASH, fly, 3);
        const wet = E(seg(p, 0.3, 0.7));
        this.showIntact(pose, { reveal: 0, flat: 0, wet });
        const flow = seg(p, 0.25, 0.32) * (1 - seg(p, 0.85, 0.92));
        w.scene.updateMatrixWorld();
        const hit = apply(pose, -0.4, 0.6, 0.3);
        w.washWater.update(machineTime, flow, [w.wash.nozzle.getWorldPosition(new THREE.Vector3())], hit);
        sound = { ...QUIET, water: flow };
        hot = p > 0.5 ? [{ id: 'rind', world: apply(pose, 0.3, 0.7, 0.6) }] : [];
        break;
      }
      case 2: { // 03 lighting
        const move = E(seg(p, 0, 0.18));
        const pose = blend(ON_WASH, ON_PLINTH, move, 1.6);
        const wet = 1 - seg(p, 0.15, 0.55);
        this.showIntact(pose, { reveal: 0, flat: 0, wet });
        exposure = this.torchMode ? 0 : 1 - seg(p, 0.2, 0.3) + seg(p, 0.86, 0.96);
        const torchOn = this.torchMode || (p > 0.28 && p < 0.88);
        if (torchOn) this.placeTorch(pose, p);
        hot = torchOn ? [{ id: 'torch', world: w.torch.position.clone() }]
          : p > 0.2 ? [{ id: 'rind', world: apply(pose, -0.9, 0.55, 0.55) }] : [];
        break;
      }
      case 3: { // 04 window
        const g = seg(p, 0.25, 0.8);
        this.showIntact(ON_PLINTH, { reveal: g, flat: E(g) });
        this.placeHandGrinder(p, machineTime);
        sound = { ...QUIET, grind: seg(p, 0.2, 0.25) * (1 - seg(p, 0.8, 0.85)) };
        hot = [{ id: 'rind', world: apply(ON_PLINTH, -0.9, 0.55, 0.55) }, ...(p > 0.7 ? [{ id: 'window', world: this.windowPoint(-0.3) }] : [])];
        break;
      }
      case 4: { // 05 planning
        this.showIntact(ON_PLINTH, { reveal: 1, flat: 1 });
        w.pieces.setPlanLines([E(seg(p, 0.15, 0.45)), E(seg(p, 0.45, 0.65)), E(seg(p, 0.65, 0.85))]);
        hot = [{ id: 'fissure', world: apply(ON_PLINTH, this.fissure.x, this.fissure.y, this.fissure.z) }, ...(p > 0.5 ? [{ id: 'cutlines', world: apply(ON_PLINTH, 0, 0.93, 0.15) }] : [])];
        break;
      }
      case 5: { // 06 slabbing
        const r = this.slabbing(p, machineTime, machineDt);
        sound = r.sound;
        hot = r.hot;
        break;
      }
      case 6: { // 07 marking
        const six = this.sixEndPoses();
        const pose = blend(six.S, ON_LIGHTBOX, E(seg(p, 0, 0.35)), 1.4);
        this.showPiece(w.pieces.S, pose);
        const light = E(seg(p, 0.35, 0.45));
        w.lightbox.panel.emissiveIntensity = 1.1 * light;
        const sweep = seg(p, 0.45, 0.95);
        w.pieces.setMarks(sweep);
        this.placePen(pose, sweep, p);
        hot = p > 0.4 ? [
          { id: 'slab', world: apply(pose, SLAB.x1, -0.55, -0.2) },
          { id: 'fissure-slab', world: apply(pose, SLAB.x1, 0.52, -0.1) },
          ...(p > 0.95 ? [{ id: 'marks', world: apply(pose, SLAB.x1, SITES[0].cy, SITES[0].cz + RING.ro) }] : []),
        ] : [];
        break;
      }
      case 7: { // 08 coring
        const r = this.coring(p, machineTime);
        sound = r.sound;
        hot = r.hot;
        break;
      }
      case 8: case 9: case 10: { // 09–11 grinding
        const r = this.grinding(stage, p, machineTime, machineDt);
        sound = r.sound;
        hot = r.hot;
        break;
      }
      case 11: { // 12 showcase
        const r = this.showcase(p);
        hot = r.hot;
        break;
      }
    }

    w.studio.setExposure(exposure, w.scene);
    this.lastExposure = exposure;
    w.scene.updateMatrixWorld();
    w.pieces.updateClipping();
    return { shot: this.shot(stage, p), hotspots: hot, sound, orbitTarget: this.shot(stage, p).target };
  }

  // ---------------------------------------------------------------- helpers
  private idleMachines(): void {
    const w = this.w;
    w.torch.visible = false;
    w.handGrinder.visible = false;
    this.dust.visible = false;
    this.dimLine.visible = false;
    w.saw.blade.position.y = SAW.bladeParkedY;
    w.saw.carriage.position.set(0, 0, LOAD_Z);
    w.lightbox.panel.emissiveIntensity = 0;
    w.lightbox.pen.visible = false;
    w.drill.head.position.y = w.drill.headUp - 0.7;
    w.drill.outerBit.visible = true;
    w.drill.innerBit.visible = false;
    w.bench.wheel.visible = true;
    w.bench.drum.visible = w.bench.buff.visible = false;
    w.showcase.caliper.visible = w.showcase.lamp.visible = false;
    for (const c of [w.sawWater, w.washWater, w.drillWater, w.benchWater]) c.update(0, 0, [], new THREE.Vector3());
  }

  private showIntact(m: THREE.Matrix4, o: { reveal: number; flat: number; wet?: number }): void {
    const g = this.w.pieces.intactGroup;
    place(g, m);
    g.visible = true;
    this.w.pieces.setWindow(o.reveal, o.flat);
    this.w.pieces.setWet(o.wet ?? 0);
  }

  private showPiece(piece: { group: THREE.Group }, m: THREE.Matrix4): void {
    place(piece.group, m);
    piece.group.visible = true;
  }

  private windowPoint(dy = 0): THREE.Vector3 {
    const p = WINDOW_DIR.clone().multiplyScalar(WINDOW_DEPTH);
    return apply(ON_PLINTH, p.x, p.y + dy, p.z);
  }

  // ---------------------------------------------------------------- 01 mine
  private armAt(p: number): { boom: number; stick: number; bucket: number } {
    const dig = E(seg(p, 0.25, 0.45)), curl = E(seg(p, 0.45, 0.6)), lift = E(seg(p, 0.6, 0.95));
    return {
      boom: lerp(lerp(lerp(0.55, 0.22, dig), 0.22, curl), 0.85, lift),
      stick: lerp(lerp(-1.35, -1.55, dig), -1.15, curl) + 0 * lift,
      bucket: lerp(lerp(-0.9, -1.1, dig), -0.1, curl) + 0.35 * lift,
    };
  }

  private setArm(a: { boom: number; stick: number; bucket: number }): void {
    const d = this.w.mine.digger;
    d.boom.rotation.z = a.boom;
    d.stick.rotation.z = a.stick;
    d.bucket.rotation.z = a.bucket;
  }

  private bucketStonePose(): THREE.Matrix4 {
    const b = this.w.mine.digger.bucket;
    b.updateWorldMatrix(true, false);
    const p = apply(b.matrixWorld, 0.08, 0.05, 0);
    return mul(Tv(p), Ry(0.4), S(MINI));
  }

  private mineAttachPose(): THREE.Matrix4 {
    if (!this.mineAttach) {
      this.setArm(this.armAt(0.45));
      this.mineAttach = this.bucketStonePose();
      this.setArm(this.armAt(0));
    }
    return this.mineAttach;
  }

  private mineEndPose(): THREE.Matrix4 {
    if (!this.mineEnd) {
      this.setArm(this.armAt(1));
      this.mineEnd = this.bucketStonePose();
    }
    return this.mineEnd;
  }

  // ---------------------------------------------------------------- 03 torch
  private placeTorch(stone: THREE.Matrix4, p: number): void {
    let point: THREE.Vector3, normal: THREE.Vector3;
    if (this.torchMode && this.manualTorch) {
      ({ point, normal } = this.manualTorch);
    } else {
      const dirs = [V(-0.55, 0.45, 0.7), V(0.05, 0.6, 0.8), V(0.65, 0.3, 0.7)].map((v) => v.normalize());
      const t = seg(p, 0.3, 0.86) * 2;
      const i = Math.min(1, Math.floor(t));
      const d = dirs[i].clone().lerp(dirs[i + 1], E(t - i)).normalize();
      point = d.clone().multiplyScalar(radiusAlong(d) * 0.99);
      normal = d;
    }
    this.w.pieces.intact.material.jade.uTorch.value.set(point.x, point.y, point.z, 3.2);
    const wp = point.clone().applyMatrix4(stone);
    const wn = normal.clone().transformDirection(stone);
    const tr = this.w.torch;
    tr.visible = true;
    tr.quaternion.setFromUnitVectors(V(1, 0, 0), wn.clone().negate());
    tr.position.copy(wp).addScaledVector(wn, 0.66);
  }

  // ---------------------------------------------------------------- 04 window
  private placeHandGrinder(p: number, time: number): void {
    const g = this.w.handGrinder;
    const n = WINDOW_DIR.clone().transformDirection(ON_PLINTH);
    const target = this.windowPoint();
    const approach = E(seg(p, 0.05, 0.25)) * (1 - E(seg(p, 0.8, 0.98)));
    if (approach <= 0) return;
    g.visible = true;
    const side = V(1, 0, 0).cross(n).normalize();
    const wobble = seg(p, 0.25, 0.8) > 0 && seg(p, 0.25, 0.8) < 1 ? Math.sin(time * 5) * 0.08 : 0;
    const disc = target.clone().addScaledVector(n, lerp(1.4, 0.02, approach)).addScaledVector(side, wobble).add(V(0, lerp(0.8, 0, approach), 0));
    g.scale.setScalar(GRINDER_SCALE);
    g.quaternion.setFromUnitVectors(V(0, 1, 0), n);
    g.position.copy(disc).sub(V(0.55, -0.2, 0).multiplyScalar(GRINDER_SCALE).applyQuaternion(g.quaternion));
    const d = g.getObjectByName('disc');
    if (d) d.rotation.y = time * 30;
    const grinding = seg(p, 0.25, 0.8);
    if (grinding > 0 && grinding < 1) {
      this.dust.visible = true;
      this.dust.position.copy(target).addScaledVector(n, 0.2);
      const k = 0.8 + 0.1 * Math.sin(time * 7);
      this.dust.scale.set(k * 0.6, k * 0.42, 1);
    }
  }

  // ---------------------------------------------------------------- 06 slabbing
  private slabbing(p: number, time: number, dt: number): { sound: SoundMix; hot: Hotspot[] } {
    const w = this.w, P = w.pieces;
    const feed = E(seg(p, 0.12, 0.2));
    const z = lerp(LOAD_Z, CUT_Z, feed);
    w.saw.carriage.position.set(0, 0, z);
    const base = blend(ON_PLINTH, onCarriage(LOAD_Z), E(seg(p, 0, 0.12)), 1.8);
    const root = p < 0.12 ? base : onCarriage(z);

    const cut = (a: number, b: number, c: number) => E(seg(p, a, b)) * (1 - E(seg(p, b, c)));
    const c1 = cut(0.2, 0.38, 0.43), c2 = cut(0.66, 0.72, 0.75), c3 = cut(0.78, 0.84, 0.87);
    w.saw.blade.position.y = lerp(SAW.bladeParkedY, SAW.bladeDownY, Math.max(c1, c2, c3));
    const on = seg(p, 0.15, 0.2) * (1 - seg(p, 0.43, 0.47)) + seg(p, 0.62, 0.66) * (1 - seg(p, 0.87, 0.9));
    this.bladeAngle -= dt * 14 * on;
    w.saw.bladeDisc.rotation.x = this.bladeAngle;

    const open = E(seg(p, 0.43, 0.55));
    const rearr = E(seg(p, 0.6, 0.66));
    const shift = E(seg(p, 0.75, 0.78));
    const sep = E(seg(p, 0.87, 0.97));
    const aLocal = blend(local(-0.8 * open, 0, 0.4 * open, -0.72 * open), local(-2.1, 0, 0.5, -0.72), rearr);
    const bOpen = local(0.8 * open, 0, 0.4 * open, 0.72 * open);
    const bCut = local(-lerp(SLAB.x0, SLAB.x1, shift), 0, 0);
    const bLocal = blend(bOpen, bCut, rearr);

    // the kerf opens from the top as the blade goes down, and stays open until the pieces part
    const rootY = SAW.carriageTop + FLOOR_Y;
    const kerf = (a: number, b: number) => lerp(SAW.bladeParkedY, SAW.bladeDownY, E(seg(p, a, b))) - SAW.bladeRadius - rootY;
    if (open <= 0) {
      this.showIntact(root, { reveal: 1, flat: 1 });
      // the chalk line under the blade is cut away; the two slab lines remain
      P.setPlanLines([p > 0.2 ? 0 : 1, 1, 1]);
      if (p > 0.2) P.setSlot(P.intact, CUT_X, kerf(0.2, 0.38));
    } else {
      this.showPiece(P.A, mul(root, aLocal));
      if (p < 0.72) {
        this.showPiece(P.B, mul(root, bLocal));
        P.setLinesOn(P.B.shell, [SLAB.x0, SLAB.x1], [p > 0.66 ? 0 : 1, 1]);
        if (p > 0.66) P.setSlot(P.B.shell, SLAB.x0, kerf(0.66, 0.72));
      } else if (p < 0.84) {
        this.showPiece(P.B1, mul(root, bLocal));
        this.showPiece(P.BR, mul(root, bLocal));
        P.setLinesOn(P.BR.shell, [SLAB.x1], [p > 0.78 ? 0 : 1]);
        if (p > 0.78) P.setSlot(P.BR.shell, SLAB.x1, kerf(0.78, 0.84));
      }
      else {
        this.showPiece(P.B1, mul(root, bLocal, local(-0.35 * sep, 0, 0)));
        this.showPiece(P.S, mul(root, bLocal, local(0, 0, 0.6 * sep)));
        this.showPiece(P.B2, mul(root, bLocal, local(0.45 * sep, 0, 0)));
      }
    }

    w.scene.updateMatrixWorld();
    const noz = w.saw.nozzles.map((n) => n.getWorldPosition(new THREE.Vector3()));
    const depth = Math.max(c1, c2, c3);
    const top = SAW.carriageTop + FLOOR_Y + 0.9;
    const contact = at(STATION.saw, 0, lerp(top, SAW.carriageTop + 0.35, depth), z + 0.55);
    w.sawWater.update(time, on, noz, contact);

    const hot: Hotspot[] = [];
    if (p > 0.1) hot.push({ id: 'saw', world: at(STATION.saw, -1.9, 0.9, 1.75) });
    if (p > 0.2 && p < 0.42) hot.push({ id: 'blade', world: apply(w.saw.blade.matrixWorld, 0, 1.0, 0.9) }, { id: 'coolant', world: contact });
    if (p > 0.5 && p < 0.6) hot.push({ id: 'cutface', world: apply(mul(root, aLocal), 0, 0.35, -0.2) }, { id: 'fissure-cut', world: apply(mul(root, bLocal), 0, 0.6, 0) });
    if (p > 0.95) hot.push({ id: 'slab', world: apply(mul(root, bLocal, local(0, 0, 0.6)), SLAB_C, 0.3, 0) });
    return { sound: { ...QUIET, motor: on * 0.8, water: on * 0.7 }, hot };
  }

  private sixEndPoses() {
    if (!this.sixEnd) {
      const root = onCarriage(CUT_Z);
      const b = local(-SLAB.x1, 0, 0);
      this.sixEnd = {
        A: mul(root, local(-2.1, 0, 0.5, -0.72)),
        B1: mul(root, b, local(-0.35, 0, 0)),
        S: mul(root, b, local(0, 0, 0.6)),
        B2: mul(root, b, local(0.45, 0, 0)),
      };
    }
    return this.sixEnd;
  }

  /** Pieces that stay behind at earlier stations once the stone has moved on. */
  private showLeftovers(stage: number): void {
    const s = this.sixEndPoses(), P = this.w.pieces;
    if (stage === 6) {
      this.showPiece(P.A, s.A);
      this.showPiece(P.B1, s.B1);
      this.showPiece(P.B2, s.B2);
      this.w.saw.carriage.position.set(0, 0, CUT_Z);
    }
    if (stage === 8) {
      // the drilled slab (offcut) and the core stay on the drill table
      this.showPiece(P.S, ON_DRILL);
      P.setMarks(1);
      P.setKerfs(true, true);
      P.setHole(true);
      P.core.visible = true;
      place(P.core, Director.CORE_ASIDE);
    }
  }

  static readonly CORE_ASIDE = SITE0_AXIS;

  // ---------------------------------------------------------------- 07 pen
  private placePen(slab: THREE.Matrix4, sweep: number, p: number): void {
    const pen = this.w.lightbox.pen;
    if (p < 0.4 || p > 0.98) return;
    pen.visible = true;
    const k = Math.min(3, Math.floor(sweep * 4));
    const a = sweep * 4 - k;
    const site = SITES[k >> 1], r = k % 2 === 0 ? RING.ro : RING.ri;
    const th = a * Math.PI * 2 - Math.PI;
    const tip = apply(slab, SLAB.x1 + 0.005, site.cy + r * Math.cos(th), site.cz + r * Math.sin(th));
    const lb = STATION.lightbox;
    pen.position.copy(tip).sub(lb).add(V(0.12, 0.4, 0.12));
    pen.rotation.set(0.3, 0, -0.3);
  }

  // ---------------------------------------------------------------- 08 coring
  private coring(p: number, time: number): { sound: SoundMix; hot: Hotspot[] } {
    const w = this.w, P = w.pieces, d = w.drill;
    const pose = blend(ON_LIGHTBOX, ON_DRILL, E(seg(p, 0, 0.14)), 1.2);
    this.showPiece(P.S, pose);
    P.setMarks(1);
    // head height: parked → touching the slab → through it
    const touch = 1.12, through = 0.92, park = d.headUp - 0.7;
    const run = (a: number, b: number, c: number, e: number) => {
      const down = E(seg(p, a, b)), cutting = seg(p, b, c), up = E(seg(p, c, e));
      return lerp(lerp(lerp(park, touch, down), through, cutting), park, up);
    };
    const outer = p < 0.47;
    d.outerBit.visible = outer;
    d.innerBit.visible = !outer;
    d.head.position.y = outer ? run(0.14, 0.2, 0.38, 0.45) : run(0.5, 0.55, 0.7, 0.76);
    const cutting = (seg(p, 0.2, 0.38) > 0 && seg(p, 0.2, 0.38) < 1) || (seg(p, 0.55, 0.7) > 0 && seg(p, 0.55, 0.7) < 1);
    P.setKerfs(p > 0.3, p > 0.64);

    const lift = E(seg(p, 0.76, 0.86)), aside = E(seg(p, 0.86, 0.95));
    if (p > 0.76) {
      P.setHole(true);
      const inSlab = mul(pose, SITE0_AXIS, T(0, 0.6 * lift, 0));
      const rest = T(BLANK_REST.x, BLANK_REST.y, BLANK_REST.z);
      this.showBangle(blend(inSlab, rest, aside, 0.3), 0);
    }
    // the core stays loose in its hole once the blank is lifted away
    P.core.visible = true;
    const coreM = Director.CORE_ASIDE;
    place(P.core, coreM);

    w.scene.updateMatrixWorld();
    const tip = at(STATION.drill, 0, 0.31 + SLAB_T + 0.05, 0);
    w.drillWater.update(time, cutting ? 0.5 : 0, [at(STATION.drill, -0.2, 2.6, 0.3)], tip);
    const hot: Hotspot[] = [];
    if (p > 0.14) hot.push({ id: 'drill', world: at(STATION.drill, 0.4, 2.6, -0.3) });
    if (p > 0.2 && p < 0.47) hot.push({ id: 'outer-bit', world: at(STATION.drill, RING.ro + 0.05, 0.9, 0) });
    if (p > 0.55 && p < 0.76) hot.push({ id: 'inner-bit', world: at(STATION.drill, RING.ri + 0.05, 0.85, 0) });
    if (p > 0.97) {
      hot.push({ id: 'blank', world: BLANK_REST.clone().add(V(RING.ro, 0.05, 0)) });
      hot.push({ id: 'core', world: apply(mul(pose, coreM), 0, 0.1, 0) });
      hot.push({ id: 'offcut', world: apply(pose, SLAB.x1, -0.5, -0.4) });
    }
    return { sound: { ...QUIET, motor: cutting ? 0.6 : d.head.position.y < park - 0.01 ? 0.25 : 0, water: cutting ? 0.3 : 0 }, hot };
  }

  private showBangle(m: THREE.Matrix4, shape: number): void {
    const P = this.w.pieces;
    place(P.bangleGroup, m);
    P.bangleGroup.visible = true;
    P.setBangleShape(shape);
  }

  // ---------------------------------------------------------------- 09–11 grinding
  private benchPose(head: 'wheel' | 'drum' | 'buff', shape: number, spin: number): THREE.Matrix4 {
    const sp = STATION.grind.clone().add(this.w.bench.spindle);
    const s = shapeAt(shape);
    if (head === 'wheel') return mul(Tv(sp.clone().add(V(0, 0, 0.7 + s.ro))), BENCH_AXIS, Ry(spin));
    const r = head === 'drum' ? DRUM_R : DRUM_R + 0.02;
    return mul(Tv(sp.clone().add(V(0.45, -(s.ri - r), 0))), BENCH_AXIS, Ry(spin));
  }

  private grinding(stage: number, p: number, time: number, dt: number): { sound: SoundMix; hot: Hotspot[] } {
    const w = this.w, b = w.bench;
    const k = stage - 8; // 0 coarse, 1 drum, 2 buff
    const start = k === 0 ? 0.18 : 0.12;
    const shape = k + seg(p, start, 0.95);
    this.wheelAngle += dt * 18 * (seg(p, start - 0.05, start) * (1 - seg(p, 0.95, 1)));
    b.wheel.visible = k === 0;
    b.drum.visible = k === 1;
    b.buff.visible = k === 2;
    for (const s of b.spinning) s.rotation.x = this.wheelAngle;
    const spin = time * 0.8;
    const head = (['wheel', 'drum', 'buff'] as const)[k];
    const working = this.benchPose(head, shape, spin);
    let pose: THREE.Matrix4;
    if (k === 0) {
      const from = T(BLANK_REST.x, BLANK_REST.y, BLANK_REST.z);
      pose = blend(from, working, E(seg(p, 0, 0.18)), 1.6);
    } else {
      const prev = this.benchPose((['wheel', 'drum', 'buff'] as const)[k - 1], k, spin);
      pose = blend(prev, working, E(seg(p, 0, 0.12)), 0.5);
    }
    this.showBangle(pose, shape);
    w.scene.updateMatrixWorld();
    const active = seg(p, start, start + 0.03) * (1 - seg(p, 0.95, 1));
    const contact = origin(pose).add(k === 0 ? V(0, 0, -shapeAt(shape).ro) : V(0, shapeAt(shape).ri, 0));
    if (k < 2) w.benchWater.update(time, active * 0.45, [at(STATION.grind, 1.0, 2.18, 0.18)], contact);
    const hot: Hotspot[] = [{ id: ['wheel', 'drum', 'buff'][k], world: k === 0 ? at(STATION.grind, 1.0, 2.1, 0) : at(STATION.grind, 1.6, 1.45, 0) }];
    if (p > 0.3) hot.push({ id: ['bangle-rough', 'bangle-fine', 'bangle-polish'][k], world: origin(pose).add(V(0, shapeAt(shape).ro, 0.2)) });
    return { sound: { ...QUIET, motor: active * 0.5, grind: k < 2 ? active * (k === 0 ? 0.9 : 0.5) : 0, buff: k === 2 ? active * 0.6 : 0, water: k < 2 ? active * 0.25 : 0 }, hot };
  }

  // ---------------------------------------------------------------- 12 showcase
  static readonly SHOWCASE_POSE = mul(Tv(at(STATION.showcase, 0, 1.14 + 0.1 + 0.386, 0)), Ry(-0.65), Rx(Math.PI / 2));

  private showcase(p: number): { hot: Hotspot[] } {
    const w = this.w, sc = w.showcase;
    const from = this.benchPose('buff', 3, 0);
    const pose = blend(from, Director.SHOWCASE_POSE, E(seg(p, 0, 0.16)), 1.4);
    this.showBangle(pose, 3);
    // before/after comparison changes only the surface
    if (p >= 1 && this.compare < 1) {
      const m = w.pieces.bangle.material;
      m.jade.uRough.value = 1 - this.compare;
      m.roughness = 0.1 + 0.55 * (1 - this.compare);
      m.clearcoat = this.compare;
    }
    // measure the inner diameter (圈口): a dimension line grows across the ring
    const dim = seg(p, 0.2, 0.36);
    const ri = shapeAt(3).ri;
    if (p > 0.2 && p < 0.5) {
      const grow = E(dim);
      const a = apply(pose, -ri * grow, 0, 0), b = apply(pose, ri * grow, 0, 0);
      // update the existing buffer in place (replacing it would leak a GPU buffer per frame)
      const pos = this.dimLine.geometry.getAttribute('position') as THREE.BufferAttribute;
      pos.setXYZ(0, a.x, a.y, a.z);
      pos.setXYZ(1, b.x, b.y, b.z);
      pos.needsUpdate = true;
      this.dimLine.visible = true;
    }
    const lamp = seg(p, 0.36, 0.5);
    if (lamp > 0 && lamp < 1) {
      sc.lamp.visible = true;
      sc.lamp.position.set(0.2, 2.6, 0.5);
      w.pieces.bangle.material.jade.uEdgeGlow.value = 0.22 + 0.4 * Math.sin(lamp * Math.PI);
    } else w.pieces.bangle.material.jade.uEdgeGlow.value = 0.22;
    const ring = (deg: number) => { const a = (deg * Math.PI) / 180; return apply(pose, Math.sin(a) * 0.386, 0, Math.cos(a) * 0.386); };
    const hot: Hotspot[] = p > 0.5 ? [
      { id: 'edge', world: ring(200) },
      { id: 'colour', world: ring(330) },
      { id: 'lustre', world: ring(20) },
    ] : p > 0.36 ? [{ id: 'inspect', world: ring(90) }] : [];
    if (p > 0.3 && p < 0.5) hot.push({ id: 'inner-diameter', world: apply(pose, 0, 0, 0) });
    return { hot };
  }

  // ---------------------------------------------------------------- camera
  private keys(stage: number): Key[] {
    const cached = this.keyCache.get(stage);
    if (cached) return cached;
    const K = (a: number, st: THREE.Vector3, p: [number, number, number], t: [number, number, number]): Key => ({ at: a, pos: at(st, ...p), target: at(st, ...t) });
    const M = STATION.mine, W = STATION.wash, P = STATION.plinth, SW = STATION.saw, L = STATION.lightbox, D = STATION.drill, G = STATION.grind, SC = STATION.showcase;
    const prevEnd = (): Key => {
      const s = this.shot(stage - 1, 1);
      return { at: 0, pos: s.position.clone(), target: s.target.clone() };
    };
    const table: Record<number, () => Key[]> = {
      0: () => [K(0, M, [9.4, 9.8, 10.2], [-0.6, 0.9, 0.5]), K(0.5, M, [8.6, 9.2, 9.6], [-0.6, 0.9, 0.5]), K(1, M, [4.4, 5.6, 6.4], [-0.4, 1.6, 0.3])],
      1: () => [prevEnd(), K(0.28, W, [4.2, 4.6, 7.4], [0, 1.3, 0]), K(1, W, [3.6, 4.0, 6.6], [0, 1.3, 0])],
      2: () => [prevEnd(), K(0.2, P, [-1.6, 3.0, 8.4], [0, 1.45, 0]), K(0.32, P, [2.2, 3.0, 7.0], [0.2, 1.5, 0]), K(1, P, [2.2, 3.0, 7.0], [0.2, 1.5, 0])],
      3: () => [prevEnd(), K(0.2, P, [2.8, 3.2, 6.4], [0.25, 1.55, 0.3]), K(1, P, [2.6, 3.1, 6.2], [0.25, 1.55, 0.3])],
      5: () => [prevEnd(), K(0.12, SW, [6.4, 6.2, 12.0], [0, 2.6, 0.2]), K(0.22, SW, [4.6, 4.6, 8.4], [0, 2.4, 0.5]), K(0.4, SW, [3.8, 4.0, 7.2], [0, 2.3, 0.6]),
        K(0.5, SW, [5.2, 5.6, 11.0], [0, 2.3, 0.4]), K(0.58, SW, [1.4, 5.0, 11.2], [0, 2.0, 0.7]), K(0.66, SW, [3.6, 4.2, 7.0], [-0.3, 2.3, 0.3]),
        K(0.88, SW, [3.4, 4.0, 6.8], [-0.3, 2.2, 0.4]), K(1, SW, [1.8, 4.4, 8.6], [-0.3, 2.0, 0.7])],
      6: () => [prevEnd(), K(0.35, L, [0.8, 6.2, 4.4], [0, 0.75, 0]), K(1, L, [0.4, 5.2, 3.6], [0, 0.75, 0.1])],
      7: () => [prevEnd(), K(0.14, D, [3.8, 3.6, 5.2], [0, 0.9, 0.1]), K(0.5, D, [3.2, 3.0, 4.2], [0, 0.85, 0.2]), K(0.8, D, [4.0, 3.6, 5.6], [0.6, 0.8, 0.35]), K(1, D, [4.0, 3.6, 5.6], [0.6, 0.8, 0.35])],
      8: () => [prevEnd(), K(0.18, G, [4.4, 3.6, 6.8], [0.6, 1.3, 0.8]), K(1, G, [3.2, 2.5, 4.6], [1.0, 1.35, 1.0])],
      9: () => [prevEnd(), K(0.12, G, [3.0, 2.2, 4.0], [1.3, 1.25, 0.1]), K(1, G, [2.6, 2.0, 3.6], [1.3, 1.25, 0.1])],
      10: () => [prevEnd(), K(0.12, G, [3.0, 1.8, 3.0], [1.4, 1.2, 0.0]), K(1, G, [2.8, 1.7, 2.8], [1.4, 1.2, 0.0])],
      11: () => [prevEnd(), K(0.16, SC, [1.0, 2.1, 3.4], [0, 1.62, 0]), K(0.5, SC, [0.9, 2.0, 3.0], [0, 1.62, 0])],
    };
    const k = (table[stage] ?? (() => [K(0, P, [0, 3, 8], [0, 1.4, 0])]))();
    this.keyCache.set(stage, k);
    return k;
  }

  shot(stage: number, p: number): Shot {
    if (stage === 4) { // 05: slow orbit around the stone, settling in front
      const a = -0.35 + E(p) * Math.PI * 2;
      const r = 7.2;
      return { position: V(Math.sin(a) * r, 3.4, Math.cos(a) * r), target: V(0, 1.5, 0) };
    }
    if (stage === 11 && p > 0.5) { // 12: slow 360° around the bangle
      const k = this.keys(11), last = k[k.length - 1];
      const off = last.pos.clone().sub(last.target);
      const a = E(seg(p, 0.5, 1)) * Math.PI * 2;
      off.applyAxisAngle(V(0, 1, 0), a);
      return { position: last.target.clone().add(off), target: last.target.clone() };
    }
    const keys = this.keys(stage);
    let i = 0;
    while (i < keys.length - 2 && p > keys[i + 1].at) i++;
    const a = keys[i], b = keys[Math.min(i + 1, keys.length - 1)];
    const t = b.at > a.at ? E(seg(p, a.at, b.at)) : 1;
    return { position: a.pos.clone().lerp(b.pos, t), target: a.target.clone().lerp(b.target, t) };
  }
}

