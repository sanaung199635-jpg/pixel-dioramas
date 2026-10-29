// Station 06: water-cooled slabbing. `apply(progress)` is a pure mapping from
// timeline progress to every pose in the scene; machine time only drives the
// blade spin and water animation, which loop and carry no story state.
import * as THREE from 'three';
import { SAW } from '../props/SlabSaw';
import { FLOOR_Y } from '../stone/StoneSolid';
import { easeInOut, lerp, segment } from '../utils/math';
import { ROUGH_SHOT, STONE_ON_PLINTH, type Hotspot } from './RoughStoneScene';
import { lerpShot, shot, type Shot } from './shots';
import { SAW_ORIGIN, type World } from './World';

/** Timeline phases (progress 0..1). */
export const PHASES = {
  transport: [0, 0.16],
  feed: [0.16, 0.26],
  coolantOn: [0.2, 0.28],
  descend: [0.28, 0.66],
  retract: [0.66, 0.74],
  coolantOff: [0.68, 0.76],
  open: [0.76, 1],
} as const;

export const PHASE_LABELS: { at: number; label: string }[] = [
  { at: 0, label: '运送原石' },
  { at: PHASES.feed[0], label: '进给' },
  { at: PHASES.descend[0], label: '下切 · 水冷' },
  { at: PHASES.retract[0], label: '退刀' },
  { at: PHASES.open[0], label: '打开切面' },
];

const CARRIAGE_LOAD_Z = 1.1;
const CARRIAGE_CUT_Z = 0.2;

const KEYS: { at: number; shot: Shot }[] = [
  { at: 0, shot: ROUGH_SHOT },
  { at: 0.08, shot: shot([0.5, 6.2, 13.5], [4.4, 2.4, -0.4]) },
  { at: 0.17, shot: shot([6.4, 6.2, 12.0], [0, 2.6, 0.2], SAW_ORIGIN) },
  { at: 0.32, shot: shot([4.6, 4.6, 8.4], [0, 2.4, 0.5], SAW_ORIGIN) },
  { at: 0.62, shot: shot([3.8, 4.0, 7.2], [0, 2.3, 0.6], SAW_ORIGIN) },
  { at: 0.76, shot: shot([5.2, 5.6, 11.0], [0, 2.3, 0.4], SAW_ORIGIN) },
  { at: 1, shot: shot([1.4, 5.0, 11.2], [0, 2.0, 0.7], SAW_ORIGIN) },
];

export class CuttingScene {
  private readonly tmpShot: Shot = { position: new THREE.Vector3(), target: new THREE.Vector3() };
  private readonly nozzleWorld = [new THREE.Vector3(), new THREE.Vector3()];
  private readonly contact = new THREE.Vector3();
  private bladeAngle = 0;
  private progress = 0;

  constructor(private readonly world: World) {}

  /** Map timeline progress to the scene. `machineDt` = seconds × speed since last frame. */
  apply(progress: number, machineTime: number, machineDt: number): void {
    this.progress = progress;
    const { stone, saw, coolant } = this.world;

    // carriage: waits at the loading position, then feeds under the blade
    const feed = easeInOut(segment(progress, ...PHASES.feed));
    const carriageZ = lerp(CARRIAGE_LOAD_Z, CARRIAGE_CUT_Z, feed);
    saw.carriage.position.set(0, 0, carriageZ);

    // stone: plinth → carriage along an arc, turning so its x axis meets the blade plane
    const tr = easeInOut(segment(progress, ...PHASES.transport));
    const onCarriage = new THREE.Vector3(SAW_ORIGIN.x, SAW.carriageTop + FLOOR_Y, SAW_ORIGIN.z + carriageZ);
    stone.root.position.lerpVectors(STONE_ON_PLINTH.position, onCarriage, tr);
    stone.root.position.y += Math.sin(tr * Math.PI) * 1.8;
    stone.root.rotation.set(0, lerp(STONE_ON_PLINTH.rotationY, 0, tr), 0);

    // blade head: parked → through the stone → parked
    const down = easeInOut(segment(progress, ...PHASES.descend));
    const up = easeInOut(segment(progress, ...PHASES.retract));
    const bladeY = lerp(SAW.bladeParkedY, SAW.bladeDownY, down * (1 - up));
    saw.blade.position.y = bladeY;

    // spin and coolant: on from feed until retract finishes
    const on = segment(progress, ...PHASES.coolantOn) * (1 - segment(progress, ...PHASES.coolantOff));
    this.bladeAngle -= machineDt * 14 * Math.max(on, segment(progress, 0.16, 0.2) * (1 - segment(progress, 0.74, 0.8)));
    saw.bladeDisc.rotation.x = this.bladeAngle;

    const stoneTop = SAW.carriageTop + FLOOR_Y + 0.9;
    const stoneBottom = SAW.carriageTop + 0.05;
    this.world.scene.updateMatrixWorld();
    saw.nozzles.forEach((n, i) => n.getWorldPosition(this.nozzleWorld[i]));
    this.contact.set(SAW_ORIGIN.x, lerp(stoneTop, stoneBottom + 0.3, down), SAW_ORIGIN.z + carriageZ + 0.55);
    coolant.update(machineTime, on, this.nozzleWorld, this.contact);

    // the cut line is chalked on before the cut; the halves open afterwards
    stone.setPlanLine(progress > 0.12 && progress < PHASES.open[0]);
    const open = segment(progress, ...PHASES.open);
    stone.setSplit(open > 0 ? easeInOut(open) : 0);
    stone.updateClipping();
  }

  /** Camera shot for the current progress (camera follows when in auto mode). */
  shot(): Shot {
    const p = this.progress;
    let i = 0;
    while (i < KEYS.length - 2 && p > KEYS[i + 1].at) i++;
    const a = KEYS[i], b = KEYS[i + 1];
    return lerpShot(a.shot, b.shot, easeInOut(segment(p, a.at, b.at)), this.tmpShot);
  }

  phaseLabel(): string {
    let label = PHASE_LABELS[0].label;
    for (const ph of PHASE_LABELS) if (this.progress >= ph.at) label = ph.label;
    return label;
  }

  hotspots(): Hotspot[] {
    const p = this.progress;
    const out: Hotspot[] = [];
    if (p > 0.14) out.push({ id: 'saw', world: SAW_ORIGIN.clone().add(new THREE.Vector3(-1.9, 0.9, 1.75)) });
    if (p > 0.22 && p < 0.7) out.push({ id: 'blade', world: this.world.saw.blade.localToWorld(new THREE.Vector3(0, 1.0, 0.9)) });
    if (p > 0.3 && p < 0.68) out.push({ id: 'coolant', world: this.contact.clone() });
    if (p > 0.9) {
      out.push({ id: 'cutface', world: this.world.stone.halfPoint(-1, new THREE.Vector3(0, 0.35, -0.2)) });
      out.push({ id: 'fissure-cut', world: this.world.stone.halfPoint(1, new THREE.Vector3(0, 0.6, 0.0)) });
    }
    return out;
  }
}
