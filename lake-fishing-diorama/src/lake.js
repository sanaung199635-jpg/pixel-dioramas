// Lake shape, animated water surface, ripple rings and the fish school.
import * as THREE from 'three';
import { rng } from './textures.js';

export const WATER_Y = -0.25;
export const LAKE = { cx: 3, cz: 1.5, rx: 7.4, rz: 5.0 };

export function lakeRadius(th) {
  return 1 + 0.06 * Math.sin(3 * th + 1.3) + 0.045 * Math.sin(5 * th + 0.4) + 0.03 * Math.sin(7 * th + 2.1);
}
export function lakePoint(th, k = 1) {
  const r = lakeRadius(th) * k;
  return [LAKE.cx + Math.cos(th) * LAKE.rx * r, LAKE.cz + Math.sin(th) * LAKE.rz * r];
}
/** normalised distance: <1 inside the shore line */
export function lakeNorm(x, z) {
  const dx = (x - LAKE.cx) / LAKE.rx;
  const dz = (z - LAKE.cz) / LAKE.rz;
  return Math.hypot(dx, dz) / lakeRadius(Math.atan2(dz, dx));
}
export function lakeInside(x, z, margin = 0) {
  return lakeNorm(x, z) < 1 - margin;
}

// ---------------------------------------------------------------- water
export function createWater(parent) {
  const uniforms = {
    uTime: { value: 0 },
    uDeep: { value: new THREE.Color('#2e8b92') },
    uShallow: { value: new THREE.Color('#5fc3b1') },
    uHighlight: { value: new THREE.Color('#ffffff') },
    uLake: { value: new THREE.Vector4(LAKE.cx, LAKE.cz, LAKE.rx, LAKE.rz) },
  };
  const geo = new THREE.PlaneGeometry(17.6, 12.6, 88, 63);
  geo.rotateX(-Math.PI / 2);
  const m = new THREE.MeshStandardMaterial({ color: '#ffffff', transparent: true, opacity: 0.8, roughness: 0.35, metalness: 0 });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader =
      'uniform float uTime;\nvarying vec3 vWPos;\n' +
      sh.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vec4 wp0 = modelMatrix * vec4(transformed, 1.0);
        transformed.y += sin(wp0.x * 1.7 + uTime * 1.3) * 0.022 + sin(wp0.z * 2.3 - uTime * 1.05) * 0.018;
        vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`
      );
    sh.fragmentShader =
      'uniform float uTime;\nuniform vec3 uDeep;\nuniform vec3 uShallow;\nuniform vec3 uHighlight;\nuniform vec4 uLake;\nvarying vec3 vWPos;\n' +
      sh.fragmentShader
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
          vec2 q = (vWPos.xz - uLake.xy) / uLake.zw;
          float th = atan(q.y, q.x);
          float rr = 1.0 + 0.06 * sin(3.0 * th + 1.3) + 0.045 * sin(5.0 * th + 0.4) + 0.03 * sin(7.0 * th + 2.1);
          float e = length(q) / rr;
          float shallowK = smoothstep(0.42, 0.97, e);
          diffuseColor.rgb = mix(uDeep, uShallow, shallowK);
          diffuseColor.a = mix(0.68, 0.56, shallowK);
          float w1 = sin(vWPos.x * 2.2 + uTime * 0.8 + sin(vWPos.z * 1.1 + uTime * 0.45) * 1.8);
          float w2 = sin(vWPos.z * 3.1 - uTime * 0.65 + vWPos.x * 0.6);
          float glint = step(1.86, w1 + w2);
          float foam = smoothstep(0.95, 0.995, e);`
        )
        .replace(
          '#include <emissivemap_fragment>',
          `#include <emissivemap_fragment>
          totalEmissiveRadiance += uHighlight * (glint * 0.32 + foam * 0.4);`
        );
  };
  const mesh = new THREE.Mesh(geo, m);
  mesh.position.set(LAKE.cx, WATER_Y, LAKE.cz);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  parent.add(mesh);
  return { mesh, uniforms };
}

// ---------------------------------------------------------------- ripples
export class Ripples {
  constructor(parent, count = 48) {
    const geo = new THREE.RingGeometry(0.86, 1, 32);
    geo.rotateX(-Math.PI / 2);
    this.pool = [];
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0, depthWrite: false })
      );
      m.visible = false;
      m.renderOrder = 5;
      parent.add(m);
      this.pool.push({ m, age: 0, dur: 1, size: 1, op: 0.6, active: false });
    }
    this.i = 0;
  }
  spawn(x, z, size = 1, dur = 1.6, op = 0.65, delay = 0) {
    const p = this.pool[this.i++ % this.pool.length];
    p.active = true;
    p.age = -delay;
    p.dur = dur;
    p.size = size;
    p.op = op;
    p.m.position.set(x, WATER_Y + 0.055, z);
  }
  update(dt) {
    for (const p of this.pool) {
      if (!p.active) continue;
      p.age += dt;
      if (p.age < 0) {
        p.m.visible = false;
        continue;
      }
      const s = p.age / p.dur;
      if (s >= 1) {
        p.active = false;
        p.m.visible = false;
        continue;
      }
      const e = 1 - Math.pow(1 - s, 2.2);
      p.m.visible = true;
      p.m.scale.setScalar(p.size * (0.12 + 0.88 * e));
      p.m.material.opacity = p.op * Math.pow(1 - s, 1.4);
    }
  }
}

// ---------------------------------------------------------------- fish
export function makeFish(color, belly = '#e9e3d0') {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.SphereGeometry(1, 9, 6),
    new THREE.MeshStandardMaterial({ color, roughness: 0.6, flatShading: true })
  );
  body.scale.set(0.21, 0.08, 0.06);
  g.add(body);
  const bellyM = new THREE.Mesh(
    new THREE.SphereGeometry(1, 7, 5),
    new THREE.MeshStandardMaterial({ color: belly, roughness: 0.6, flatShading: true })
  );
  bellyM.scale.set(0.15, 0.05, 0.045);
  bellyM.position.set(0.02, -0.03, 0);
  g.add(bellyM);
  const tailPivot = new THREE.Group();
  tailPivot.position.x = -0.18;
  g.add(tailPivot);
  const tailGeo = new THREE.ConeGeometry(0.075, 0.14, 4);
  tailGeo.rotateZ(-Math.PI / 2);
  tailGeo.translate(-0.06, 0, 0);
  const tail = new THREE.Mesh(tailGeo, body.material);
  tail.scale.z = 0.3;
  tailPivot.add(tail);
  const fin = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.08, 3), body.material);
  fin.position.set(0.0, 0.07, 0);
  fin.rotation.z = 0.5;
  g.add(fin);
  g.traverse((o) => {
    if (o.isMesh) o.castShadow = false;
  });
  return { group: g, tail: tailPivot };
}

export class FishSchool {
  constructor(parent, ripples) {
    this.ripples = ripples;
    this.fish = [];
    const r = rng(404);
    const palettes = [
      ['#34524c', '#bfc4a8'],
      ['#2f4a46', '#c9c6ad'],
      ['#e47a36', '#f4e8d6'],
      ['#3a5752', '#cfcab0'],
      ['#d9532f', '#f6efe1'],
      ['#41605a', '#c2c7ad'],
      ['#f0eee6', '#e46d33'],
      ['#2d4844', '#b8bea3'],
      ['#3c5b55', '#c9c6ad'],
    ];
    palettes.forEach(([c, b], i) => {
      const f = makeFish(c, b);
      const s = 0.85 + r() * 0.5;
      f.group.scale.setScalar(s);
      parent.add(f.group);
      this.fish.push({
        ...f,
        a: 0.22 + r() * 0.48,
        b: 0.22 + r() * 0.48,
        phase: r() * Math.PI * 2,
        speed: (0.1 + r() * 0.12) * (r() < 0.5 ? -1 : 1),
        depth: -0.4 - r() * 0.12,
        wob: r() * 6,
        boost: 1,
        jump: null,
        idx: i,
      });
    });
    this.jumpTimer = 5;
    this.r = r;
  }

  scatter(x, z) {
    for (const f of this.fish) {
      const d = Math.hypot(f.group.position.x - x, f.group.position.z - z);
      if (d < 3.2) f.boost = 4.5;
    }
  }

  update(dt, t) {
    this.jumpTimer -= dt;
    if (this.jumpTimer <= 0) {
      this.jumpTimer = 6 + this.r() * 7;
      const f = this.fish[(this.r() * this.fish.length) | 0];
      if (!f.jump) {
        f.jump = { s: 0 };
        this.ripples.spawn(f.group.position.x, f.group.position.z, 0.7, 1.2, 0.7);
      }
    }
    for (const f of this.fish) {
      f.boost += (1 - f.boost) * Math.min(1, dt * 0.9);
      f.phase += f.speed * f.boost * dt;
      const wob = 1 + 0.12 * Math.sin(t * 0.3 + f.wob);
      const c = Math.cos(f.phase);
      const sn = Math.sin(f.phase);
      const x = LAKE.cx + c * LAKE.rx * f.a * wob;
      const z = LAKE.cz + sn * LAKE.rz * f.b * wob;
      const dir = Math.sign(f.speed);
      const tx = -sn * LAKE.rx * f.a * dir;
      const tz = c * LAKE.rz * f.b * dir;
      const g = f.group;
      g.position.set(x, f.depth + Math.sin(t * 1.3 + f.wob) * 0.03, z);
      g.rotation.set(0, Math.atan2(-tz, tx), 0);
      f.tail.rotation.y = Math.sin(t * (6 + f.boost * 4) + f.wob) * 0.5;
      if (f.jump) {
        f.jump.s += dt / 0.95;
        const s = Math.min(f.jump.s, 1);
        g.position.y = f.depth + 1.15 * 4 * s * (1 - s) + 0.15 * s;
        g.rotation.z = (0.5 - s) * 2.4;
        if (f.jump.s >= 1) {
          f.jump = null;
          this.ripples.spawn(x, z, 1.0, 1.6, 0.8);
          this.ripples.spawn(x, z, 0.55, 1.1, 0.6, 0.15);
        }
      }
    }
  }
}
