// Atmosphere: chimney smoke, morning mist, fireflies.
import * as THREE from 'three';
import { LAKE, WATER_Y, lakePoint } from './lake.js';
import { rng } from './textures.js';

export class Smoke {
  constructor(parent, origin) {
    this.origin = origin;
    const geo = new THREE.IcosahedronGeometry(1, 0);
    this.puffs = [];
    for (let i = 0; i < 14; i++) {
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshLambertMaterial({ color: '#ecebe6', transparent: true, opacity: 0, depthWrite: false, flatShading: true })
      );
      mesh.visible = false;
      parent.add(mesh);
      this.puffs.push({ mesh, age: 0, life: 1, active: false, rot: 0 });
    }
    this.timer = 0;
    this.i = 0;
  }
  update(dt, amount = 1) {
    this.timer -= dt;
    if (this.timer <= 0) {
      this.timer = 0.42 + Math.random() * 0.3;
      const p = this.puffs[this.i++ % this.puffs.length];
      p.active = true;
      p.age = 0;
      p.life = 3.2 + Math.random();
      p.rot = Math.random() * 3;
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
      const o = this.origin;
      p.mesh.visible = true;
      p.mesh.position.set(o.x + k * 1.1 + Math.sin(p.age * 1.8 + p.rot) * 0.08, o.y + k * 2.3, o.z - k * 0.45);
      p.mesh.scale.setScalar(0.1 + k * 0.32);
      p.mesh.rotation.set(p.rot + k, p.rot * 2, 0);
      p.mesh.material.opacity = amount * 0.6 * (1 - k) * Math.min(1, p.age * 3);
    }
  }
}

export class Mist {
  constructor(parent) {
    this.puffs = [];
    const geo = new THREE.SphereGeometry(1, 12, 8);
    const r = rng(1234);
    for (let i = 0; i < 12; i++) {
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0, depthWrite: false })
      );
      const [x, z] = lakePoint(r() * Math.PI * 2, 0.15 + r() * 0.6);
      mesh.position.set(x, WATER_Y + 0.25 + r() * 0.25, z);
      mesh.scale.set(1.8 + r() * 1.6, 0.16 + r() * 0.1, 1.0 + r() * 0.8);
      mesh.renderOrder = 8;
      parent.add(mesh);
      this.puffs.push({ mesh, x0: x, z0: z, ph: r() * 6, sp: 0.15 + r() * 0.2 });
    }
  }
  update(t, level) {
    for (const p of this.puffs) {
      p.mesh.visible = level > 0.01;
      p.mesh.material.opacity = level * (0.1 + 0.04 * Math.sin(t * 0.5 + p.ph));
      p.mesh.position.x = p.x0 + Math.sin(t * p.sp * 0.4 + p.ph) * 1.4;
      p.mesh.position.z = p.z0 + Math.cos(t * p.sp * 0.3 + p.ph) * 0.5;
    }
  }
}

export class Fireflies {
  constructor(parent) {
    this.flies = [];
    const geo = new THREE.SphereGeometry(0.045, 5, 4);
    const r = rng(77);
    const anchors = [
      [-6.0, 7.0], [-3.2, 6.4], [-4.0, -5.0], [0.0, -7.6], [9.0, 7.6], [11.4, 3.6], [-9.5, 2.0], [5.0, 7.8],
      [-1.0, 6.8], [10.4, -5.0],
    ];
    for (let i = 0; i < 26; i++) {
      const [ax, az] = anchors[i % anchors.length];
      const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: '#fff2a0', transparent: true, opacity: 0, depthWrite: false }));
      parent.add(mesh);
      this.flies.push({ mesh, ax: ax + (r() - 0.5) * 1.5, az: az + (r() - 0.5) * 1.5, ph: r() * 6, sp: 0.4 + r() * 0.6 });
    }
  }
  update(t, level) {
    for (const f of this.flies) {
      f.mesh.visible = level > 0.02;
      if (!f.mesh.visible) continue;
      const k = Math.max(0, Math.sin(t * 2.4 * f.sp + f.ph));
      f.mesh.material.opacity = level * k * k;
      f.mesh.position.set(
        f.ax + Math.sin(t * 0.5 * f.sp + f.ph) * 0.9,
        0.5 + Math.sin(t * 0.9 * f.sp + f.ph * 2) * 0.35 + 0.3,
        f.az + Math.cos(t * 0.4 * f.sp + f.ph) * 0.9
      );
    }
  }
}
