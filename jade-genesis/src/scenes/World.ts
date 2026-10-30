// The gallery: eight stations along one walk, and the jade pieces that travel
// between them. Station positions are world coordinates (1 unit ≈ 100 mm).
import * as THREE from 'three';
import { Coolant } from '../props/Coolant';
import { labelCard, loupe, plinth, torch } from '../props/Accessories';
import { contactShadow } from '../props/kit';
import { mineDiorama, type MineDiorama } from '../props/Mine';
import { slabSaw, type SlabSawHandles } from '../props/SlabSaw';
import { angleGrinder, coreDrill, grindBench, lightbox, showcase, washStation, type CoreDrill, type GrindBench, type Lightbox, type Showcase, type WashStation } from '../props/Workshop';
import { RING } from '../stone/Production';
import { JadePieces } from './JadePieces';
import { Studio } from './Studio';

export const STATION = {
  mine: new THREE.Vector3(-20, 0, -2),
  wash: new THREE.Vector3(-10, 0, -0.5),
  plinth: new THREE.Vector3(0, 0, 0),
  saw: new THREE.Vector3(8.5, 0, -1.2),
  lightbox: new THREE.Vector3(17, 0, -0.8),
  drill: new THREE.Vector3(23.5, 0, -0.8),
  grind: new THREE.Vector3(30.5, 0, -0.8),
  showcase: new THREE.Vector3(39, 0, 0),
};

export type StationName = keyof typeof STATION;

export const PLINTH = { r: 1.7, h: 0.75 };
/** The mine diorama sits on its own base; its terrain top is at this height. */
export const MINE_LIFT = 1.0;

export class World {
  readonly scene = new THREE.Scene();
  readonly studio: Studio;
  readonly pieces = new JadePieces();
  readonly mine: MineDiorama;
  readonly wash: WashStation;
  readonly torch = torch();
  readonly handGrinder = angleGrinder();
  readonly saw: SlabSawHandles;
  readonly lightbox: Lightbox;
  readonly drill: CoreDrill;
  readonly bench: GrindBench;
  readonly showcase: Showcase;
  readonly sawWater = new Coolant();
  readonly washWater = new Coolant();
  readonly drillWater = new Coolant();
  readonly benchWater = new Coolant();
  private readonly stationObjects = new Map<StationName, THREE.Object3D[]>();

  constructor(renderer: THREE.WebGLRenderer) {
    this.studio = new Studio(this.scene, renderer);
    const add = (o: THREE.Object3D, at: THREE.Vector3, shadow?: number) => {
      o.position.add(at);
      this.scene.add(o);
      const key = (Object.keys(STATION) as StationName[]).find((k) => STATION[k] === at)!;
      const list = this.stationObjects.get(key) ?? [];
      list.push(o);
      if (shadow) { const s = contactShadow(shadow, 0.22); s.position.x += at.x; s.position.z += at.z; this.scene.add(s); list.push(s); }
      this.stationObjects.set(key, list);
    };

    this.mine = mineDiorama();
    this.mine.root.position.y = MINE_LIFT;
    add(this.mine.root, STATION.mine, 9);

    this.wash = washStation();
    add(this.wash.root, STATION.wash, 5);

    const p = plinth(PLINTH.r, PLINTH.h);
    p.userData.info = 'plinth';
    add(p, STATION.plinth, 5.5);
    const lp = loupe();
    lp.scale.setScalar(0.6);
    lp.rotation.set(-Math.PI / 2, 0, 0.9);
    lp.position.set(0.95, PLINTH.h + 0.04, 1.05);
    const card = labelCard([{ t: 'JADEITE  硬玉', s: 52, w: 700 }, { t: 'Rough · 原石 · No.001', s: 34, c: '#7d8580' }, { t: '程序化示意标本', s: 30, c: '#7d8580' }]);
    card.scale.setScalar(0.62);
    card.position.set(-1.05, PLINTH.h + 0.2, 1.05);
    card.rotation.y = 0.35;
    add(lp, STATION.plinth);
    add(card, STATION.plinth);

    this.saw = slabSaw();
    add(this.saw.root, STATION.saw, 7.5);
    this.lightbox = lightbox();
    add(this.lightbox.root, STATION.lightbox, 6);
    this.drill = coreDrill(RING.ri, RING.ro);
    add(this.drill.root, STATION.drill, 4.5);
    this.bench = grindBench();
    add(this.bench.root, STATION.grind, 5.5);
    this.showcase = showcase();
    add(this.showcase.root, STATION.showcase, 4.2);

    for (const o of this.pieces.all) this.scene.add(o);
    for (const w of [this.sawWater, this.washWater, this.drillWater, this.benchWater]) this.scene.add(w.object);
    this.torch.visible = false;
    this.handGrinder.visible = false;
    this.scene.add(this.torch, this.handGrinder);
  }

  /** Shadow tiers: the lowest quality level drops the small casters' shadows. */
  setShadowDetail(full: boolean): void {
    for (const o of this.mine.minorCasters) o.castShadow = full;
  }

  /** Draw only the stations a stage can see (the others are far away in fog anyway). */
  showStations(names: readonly StationName[]): void {
    for (const [k, objs] of this.stationObjects) {
      const on = names.includes(k);
      for (const o of objs) o.visible = on;
    }
  }

  get pickables(): THREE.Object3D[] {
    return [...this.pieces.pickables, ...this.saw.pickables, this.mine.root, this.wash.root, this.lightbox.root, this.drill.root, this.bench.root, this.showcase.root];
  }
}
