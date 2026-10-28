// Incense smoke and the birds circling the spire.
import * as THREE from 'three';

export class Incense {
  constructor(parent, origins) {
    this.origins = origins;
    const geo = new THREE.IcosahedronGeometry(1, 0);
    this.puffs = [];
    for (let i = 0; i < origins.length * 10; i++) {
      const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: '#f2efe9', transparent: true, opacity: 0, depthWrite: false, flatShading: true }));
      mesh.visible = false;
      parent.add(mesh);
      this.puffs.push({ mesh, age: 0, life: 1, active: false, o: null, rot: 0 });
    }
    this.timer = 0;
    this.i = 0;
  }
  update(dt) {
    this.timer -= dt;
    if (this.timer <= 0) {
      this.timer = 0.35;
      for (const o of this.origins) {
        const p = this.puffs[this.i++ % this.puffs.length];
        Object.assign(p, { active: true, age: 0, life: 3 + Math.random(), o, rot: Math.random() * 6 });
      }
    }
    for (const p of this.puffs) {
      if (!p.active) continue;
      p.age += dt;
      const k = p.age / p.life;
      if (k >= 1) {
        p.active = false;
        p.mesh.visible = false;
        continue;
      }
      p.mesh.visible = true;
      p.mesh.position.set(p.o.x + Math.sin(p.age * 1.6 + p.rot) * 0.12 + k * 0.4, p.o.y + k * 2.0, p.o.z + Math.cos(p.age * 1.3 + p.rot) * 0.1);
      p.mesh.scale.setScalar(0.05 + k * 0.2);
      p.mesh.rotation.set(p.rot + k, p.rot, 0);
      p.mesh.material.opacity = 0.5 * (1 - k) * Math.min(1, p.age * 3);
    }
  }
}

export class Birds {
  constructor(parent, center) {
    this.center = center;
    this.birds = [];
    const bodyMat = new THREE.MeshStandardMaterial({ color: '#f4f1ea', roughness: 0.8 });
    const wingMat = new THREE.MeshStandardMaterial({ color: '#d9d4c8', roughness: 0.8, side: THREE.DoubleSide });
    for (let i = 0; i < 9; i++) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 0.16), bodyMat);
      g.add(body);
      const wings = [];
      for (const sx of [-1, 1]) {
        const piv = new THREE.Group();
        piv.position.x = sx * 0.03;
        const w = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.01, 0.09), wingMat);
        w.position.x = sx * 0.1;
        piv.add(w);
        g.add(piv);
        wings.push({ piv, sx });
      }
      parent.add(g);
      this.birds.push({
        g,
        wings,
        r: 3.2 + Math.random() * 3.2,
        h: 9 + Math.random() * 3,
        a: Math.random() * Math.PI * 2,
        sp: (0.25 + Math.random() * 0.2) * (i % 3 === 0 ? -1 : 1),
        ph: Math.random() * 6,
      });
    }
  }
  update(t, dt) {
    for (const b of this.birds) {
      b.a += b.sp * dt;
      const x = this.center.x + Math.cos(b.a) * b.r;
      const z = this.center.z + Math.sin(b.a) * b.r;
      b.g.position.set(x, b.h + Math.sin(t * 0.8 + b.ph) * 0.4, z);
      const dir = Math.sign(b.sp);
      b.g.rotation.set(0, Math.atan2(-Math.sin(b.a) * dir, Math.cos(b.a) * dir), -dir * 0.35);
      const flap = Math.sin(t * 9 + b.ph) * 0.7 * (0.5 + 0.5 * Math.sin(t * 0.7 + b.ph));
      for (const w of b.wings) w.piv.rotation.z = w.sx * flap;
    }
  }
}
