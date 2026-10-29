// Animated coolant: streams from the nozzles to the cut point, plus splash.
// Fully determined by (time, intensity), so pausing or scrubbing is stable.
import * as THREE from 'three';
import { MAT, mulberry } from './kit';

const STREAM = 120;
const SPLASH = 140;

export class Coolant {
  readonly object = new THREE.Group();
  private readonly drops: THREE.InstancedMesh;
  private readonly mist: THREE.Sprite;
  private readonly seeds: Float32Array;
  private readonly m = new THREE.Matrix4();
  private readonly q = new THREE.Quaternion();
  private readonly up = new THREE.Vector3(0, 1, 0);
  private readonly p = new THREE.Vector3();
  private readonly v = new THREE.Vector3();
  private readonly s = new THREE.Vector3();

  constructor() {
    this.drops = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.013, 0.08, 2, 6), MAT.water, STREAM + SPLASH);
    this.drops.frustumCulled = false;
    this.drops.userData.info = 'coolant';
    const rnd = mulberry(7);
    this.seeds = new Float32Array((STREAM + SPLASH) * 4).map(() => rnd());
    const cv = document.createElement('canvas');
    cv.width = cv.height = 128;
    const x = cv.getContext('2d')!;
    const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,255,255,0.5)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = gr;
    x.fillRect(0, 0, 128, 128);
    this.mist = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), depthWrite: false, transparent: true }));
    this.object.add(this.drops, this.mist);
  }

  /**
   * @param time seconds of machine time
   * @param intensity 0 = off, 1 = full flow
   * @param nozzles world positions of the nozzle tips
   * @param contact world position of the cut point
   */
  update(time: number, intensity: number, nozzles: THREE.Vector3[], contact: THREE.Vector3): void {
    this.object.visible = intensity > 0.01;
    if (!this.object.visible) return;
    const n = Math.round(STREAM * intensity);
    let k = 0;
    for (let i = 0; i < n; i++) {
      const sd = this.seeds.subarray(i * 4, i * 4 + 4);
      const from = nozzles[i % nozzles.length];
      const t = (time * 1.6 + sd[0]) % 1;
      this.v.subVectors(contact, from);
      this.p.copy(from).addScaledVector(this.v, t);
      this.p.y -= Math.sin(t * Math.PI) * 0.06;
      this.p.x += (sd[1] - 0.5) * 0.05 * t;
      this.p.z += (sd[2] - 0.5) * 0.05 * t;
      this.q.setFromUnitVectors(this.up, this.v.normalize());
      this.m.compose(this.p, this.q, this.s.set(1, 1 + sd[3], 1));
      this.drops.setMatrixAt(k++, this.m);
    }
    const ns = Math.round(SPLASH * intensity);
    for (let i = 0; i < ns; i++) {
      const sd = this.seeds.subarray((STREAM + i) * 4, (STREAM + i) * 4 + 4);
      const life = (time * 1.3 + sd[0]) % 1;
      // ballistic splash thrown forward (+z) and sideways from the contact point
      this.v.set((sd[1] - 0.5) * 1.6, 0.6 + sd[2] * 1.2, 0.8 + sd[3] * 1.4);
      this.p.copy(contact).addScaledVector(this.v, life * 0.6);
      this.p.y -= 2.4 * life * life * 0.36;
      this.v.y -= 4.8 * life * 0.6;
      this.q.setFromUnitVectors(this.up, this.v.normalize());
      const sc = 0.6 + (1 - life);
      this.m.compose(this.p, this.q, this.s.set(0.7, sc, 0.7));
      this.drops.setMatrixAt(k++, this.m);
    }
    this.drops.count = k;
    this.drops.instanceMatrix.needsUpdate = true;
    this.mist.position.copy(contact).add(this.s.set(0, 0.1, 0.25));
    const size = 0.9 + 0.08 * Math.sin(time * 3);
    this.mist.scale.set(size, size * 0.7, 1);
    this.mist.material.opacity = 0.6 * intensity;
  }
}
