// Gallery layout: the display plinth (station 03–05) on the left, the slab saw
// (station 06) on the right. One stone travels between them.
import * as THREE from 'three';
import { Coolant } from '../props/Coolant';
import { labelCard, loupe, plinth, torch } from '../props/Accessories';
import { contactShadow } from '../props/kit';
import { slabSaw, type SlabSawHandles } from '../props/SlabSaw';
import { Studio } from './Studio';
import { StonePieces } from './StonePieces';

export const PLINTH = { r: 1.7, h: 0.75 };
export const SAW_ORIGIN = new THREE.Vector3(8.5, 0, -1.2);

export class World {
  readonly scene = new THREE.Scene();
  readonly studio: Studio;
  readonly stone = new StonePieces();
  readonly saw: SlabSawHandles;
  readonly coolant = new Coolant();
  readonly torch = torch();

  constructor(renderer: THREE.WebGLRenderer) {
    this.studio = new Studio(this.scene, renderer);
    const p = plinth(PLINTH.r, PLINTH.h);
    p.userData.info = 'plinth';
    this.scene.add(p, contactShadow(5.5, 0.28));
    const lp = loupe();
    lp.scale.setScalar(0.6);
    lp.rotation.set(-Math.PI / 2, 0, 0.9);
    lp.position.set(0.95, PLINTH.h + 0.04, 1.05);
    const card = labelCard([{ t: 'JADEITE  硬玉', s: 52, w: 700 }, { t: 'Rough · 原石 · No.001', s: 34, c: '#7d8580' }, { t: '程序化示意标本', s: 30, c: '#7d8580' }]);
    card.scale.setScalar(0.62);
    card.position.set(-1.05, PLINTH.h + 0.2, 1.05);
    card.rotation.y = 0.35;
    this.scene.add(lp, card);

    this.saw = slabSaw();
    this.saw.root.position.copy(SAW_ORIGIN);
    this.scene.add(this.saw.root);
    const sh = contactShadow(7.5, 0.22);
    sh.position.set(SAW_ORIGIN.x, 0.003, SAW_ORIGIN.z);
    this.scene.add(sh);

    this.scene.add(this.stone.root, this.coolant.object);
    this.torch.visible = false;
    this.scene.add(this.torch);
  }

  /** Objects the pointer can select, with `userData.info` on them or a parent. */
  get pickables(): THREE.Object3D[] {
    return [...this.stone.pickables, ...this.saw.pickables];
  }
}
