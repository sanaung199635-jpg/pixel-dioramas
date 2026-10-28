// Weather: instanced rain streaks, eave drips, splash rings, sliding droplets on the
// glass, reflective puddles, instanced snowflakes, patchy snow cover and snow caps.
import * as THREE from 'three';
import { STORE } from './store.js';
import { LOT, SIDEWALK_Z, APRON } from './world.js';
import { repeatTex } from './textures.js';

const SPAN = { x0: LOT.x0 - 0.4, x1: LOT.x1 + 0.4, z0: LOT.z0 - 0.4, z1: LOT.z1 + 0.4 };
const TOP = 9.5;

/** height a falling particle lands on */
export const ROOF = { lift: 0 };
function landY(x, z) {
  if (x > STORE.x0 - 0.16 && x < STORE.x1 + 0.16 && z > STORE.z0 - 0.16 && z < STORE.z1 + 0.16) return ROOF.lift > 0.05 ? STORE.roofTop + ROOF.lift : STORE.roofTop;
  if (x > STORE.x0 - 0.16 && x < STORE.x1 + 0.16 && z >= STORE.z1 + 0.16 && z < STORE.z1 + 0.66) return STORE.glassTop + 0.02;
  if (z > SIDEWALK_Z && z < LOT.z1) return 0.16;
  if (x > LOT.x0 && x < LOT.x1 && z > LOT.z0 && z < LOT.z1) return 0.02;
  return -1.3;
}

/** Writes translation(+uniform xyz scale) straight into the instance matrix — no Object3D churn. */
function setTRS(arr, i, x, y, z, sx = 1, sy = 1, sz = 1) {
  const o = i * 16;
  arr[o] = sx; arr[o + 1] = 0; arr[o + 2] = 0; arr[o + 3] = 0;
  arr[o + 4] = 0; arr[o + 5] = sy; arr[o + 6] = 0; arr[o + 7] = 0;
  arr[o + 8] = 0; arr[o + 9] = 0; arr[o + 10] = sz; arr[o + 11] = 0;
  arr[o + 12] = x; arr[o + 13] = y; arr[o + 14] = z; arr[o + 15] = 1;
}

export class Weather {
  constructor(fx, world, tex, envMap) {
    const R = Math.random;
    this.wind = -1.1;

    // ---------------- rain streaks
    this.NR = 1700;
    const rg = new THREE.BoxGeometry(0.022, 0.5, 0.022);
    rg.rotateZ(-Math.atan2(this.wind, 15));
    this.rain = new THREE.InstancedMesh(rg, new THREE.MeshBasicMaterial({ color: '#cfe2f2', transparent: true, opacity: 0.6, depthWrite: false }), this.NR);
    this.rain.frustumCulled = false;
    this.rain.count = 0;
    this.rp = new Float32Array(this.NR * 4);
    for (let i = 0; i < this.NR; i++) this.spawnDrop(i, R() * TOP);
    fx.add(this.rain);

    // ---------------- eave drips (along the front canopy edge)
    this.ND = 90;
    this.drips = new THREE.InstancedMesh(new THREE.BoxGeometry(0.035, 0.09, 0.035), new THREE.MeshBasicMaterial({ color: '#d8ebf8', transparent: true, opacity: 0.85, depthWrite: false }), this.ND);
    this.drips.frustumCulled = false;
    this.drips.count = 0;
    this.dp = new Float32Array(this.ND * 3);
    for (let i = 0; i < this.ND; i++) this.spawnDrip(i, true);
    fx.add(this.drips);

    // ---------------- splash rings
    this.NS = 220;
    const sg = new THREE.RingGeometry(0.55, 1, 10);
    sg.rotateX(-Math.PI / 2);
    this.splash = new THREE.InstancedMesh(sg, new THREE.MeshBasicMaterial({ color: '#e8f3fb', transparent: true, opacity: 0.55, depthWrite: false }), this.NS);
    this.splash.frustumCulled = false;
    this.sp = new Float32Array(this.NS * 4).fill(2); // x,y,z,life (>=1 = dead)
    this.si = 0;
    for (let i = 0; i < this.NS; i++) setTRS(this.splash.instanceMatrix.array, i, 0, -50, 0, 0, 0, 0);
    fx.add(this.splash);

    // ---------------- droplets sliding down the shop glass
    this.NG = 160;
    this.drop = new THREE.InstancedMesh(new THREE.BoxGeometry(0.03, 0.07, 0.014), new THREE.MeshBasicMaterial({ color: '#eef7ff', transparent: true, opacity: 0.75, depthWrite: false }), this.NG);
    this.drop.frustumCulled = false;
    this.gp = new Float32Array(this.NG * 4); // side(0 front / 1 side), t, y, speed
    for (let i = 0; i < this.NG; i++) this.spawnGlassDrop(i, true);
    fx.add(this.drop);

    // ---------------- puddles
    this.puddleMat = new THREE.MeshStandardMaterial({
      color: '#4f6577',
      metalness: 0.35,
      roughness: 0.08,
      envMap,
      envMapIntensity: 0.55,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      emissive: '#ffcf8a',
      emissiveIntensity: 0,
      polygonOffset: true,
      polygonOffsetFactor: -3,
      polygonOffsetUnits: -3,
    });
    const pg = new THREE.CircleGeometry(1, 14);
    pg.rotateX(-Math.PI / 2);
    const puddles = [
      [-2.4, 0.02, 3.3, 1.2, 0.55],
      [1.2, 0.02, 4.7, 0.8, 0.4],
      [-8.4, 0.02, 2.6, 0.9, 0.45],
      [5.6, 0.02, 1.0, 1.0, 0.5],
      [-0.6, 0.08, 1.15, 0.7, 0.32],
      [-4.8, 0.08, 1.0, 0.55, 0.28],
      [3.0, 0.17, 6.4, 0.9, 0.3],
      [-7.2, 0.17, 7.1, 0.7, 0.25],
      [4.6, 0.02, -3.0, 0.8, 0.4],
    ];
    this.puddles = puddles.map(([x, y, z, sx, sz]) => {
      const p = new THREE.Mesh(pg, this.puddleMat);
      p.position.set(x, y + 0.004, z);
      p.scale.set(sx, 1, sz);
      p.receiveShadow = true;
      p.renderOrder = 2;
      fx.add(p);
      return p;
    });

    // ---------------- snow flakes
    this.NF = 1300;
    this.snow = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.05, 0), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.95, depthWrite: false }), this.NF);
    this.snow.frustumCulled = false;
    this.snow.count = 0;
    this.fp = new Float32Array(this.NF * 5); // x,y,z,speed,phase
    for (let i = 0; i < this.NF; i++) this.spawnFlake(i, R() * TOP);
    fx.add(this.snow);

    // ---------------- snow cover on the ground (patchy, keeps lines readable)
    this.coverMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.snowPatch, 3, 2), color: '#ffffff', transparent: true, opacity: 0, depthWrite: false, roughness: 1, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    const cover = (w, d, x, y, z) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), this.coverMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(x, y, z);
      m.receiveShadow = true;
      m.renderOrder = 3;
      fx.add(m);
    };
    const lcx = (LOT.x0 + LOT.x1) / 2;
    cover(LOT.x1 - LOT.x0, SIDEWALK_Z - LOT.z0, lcx, 0.012, (LOT.z0 + SIDEWALK_Z) / 2);
    cover(LOT.x1 - LOT.x0, LOT.z1 - SIDEWALK_Z, lcx, 0.172, (SIDEWALK_Z + LOT.z1) / 2);
    cover(APRON.x1 - APRON.x0, APRON.z1 - APRON.z0 + 0.4, (APRON.x0 + APRON.x1) / 2, 0.082, APRON.z0 - 0.2 + (APRON.z1 - APRON.z0 + 0.4) / 2);

    this.caps = [];
  }

  registerCaps(list) {
    for (const m of list) {
      m.userData.baseY = m.scale.y;
      m.visible = false;
      this.caps.push(m);
    }
  }

  spawnDrop(i, y = TOP + Math.random() * 2) {
    const o = i * 4;
    // spawn upwind so drops land inside the lot
    this.rp[o] = LOT.x0 + 0.2 + Math.random() * (LOT.x1 - LOT.x0 - 0.4) - this.wind * ((y - 0.5) / 15);
    this.rp[o + 1] = y;
    this.rp[o + 2] = LOT.z0 + 0.2 + Math.random() * (LOT.z1 - LOT.z0 - 0.4);
    this.rp[o + 3] = 14 + Math.random() * 4;
  }
  spawnDrip(i, init = false) {
    const o = i * 3;
    this.dp[o] = STORE.x0 + Math.random() * (STORE.x1 - STORE.x0);
    this.dp[o + 1] = STORE.glassTop - 0.05 + (init ? -Math.random() * 2.6 : 0);
    this.dp[o + 2] = Math.random() * 3; // delay / velocity slot
  }
  spawnFlake(i, y = TOP + Math.random() * 2) {
    const o = i * 5;
    this.fp[o] = LOT.x0 + 0.2 + Math.random() * (LOT.x1 - LOT.x0 - 0.4);
    this.fp[o + 1] = y;
    this.fp[o + 2] = LOT.z0 + 0.2 + Math.random() * (LOT.z1 - LOT.z0 - 0.4);
    this.fp[o + 3] = 0.65 + Math.random() * 0.55;
    this.fp[o + 4] = Math.random() * 6.28;
  }
  spawnGlassDrop(i, init = false) {
    const o = i * 4;
    const front = Math.random() < 0.6;
    this.gp[o] = front ? 0 : 1;
    this.gp[o + 1] = front ? STORE.x0 + 0.3 + Math.random() * (STORE.x1 - STORE.x0 - 0.6) : STORE.z0 + 0.3 + Math.random() * (STORE.z1 - STORE.z0 - 0.6);
    this.gp[o + 2] = init ? 0.3 + Math.random() * 2.3 : 2.6;
    this.gp[o + 3] = 0.05 + Math.random() * 0.25;
  }
  addSplash(x, y, z) {
    const i = this.si++ % this.NS;
    const o = i * 4;
    this.sp[o] = x;
    this.sp[o + 1] = y + 0.015;
    this.sp[o + 2] = z;
    this.sp[o + 3] = 0;
  }

  /** env: { rain 0..1, snow 0..1, wet 0..1, cover 0..1, night 0..1 } */
  update(dt, t, env) {
    // rain
    const nr = Math.floor(this.NR * env.rain);
    this.rain.count = nr;
    this.rain.visible = nr > 0;
    if (nr > 0) {
      const a = this.rain.instanceMatrix.array;
      for (let i = 0; i < nr; i++) {
        const o = i * 4;
        const v = this.rp[o + 3];
        this.rp[o + 1] -= v * dt;
        this.rp[o] += this.wind * dt;
        const x = this.rp[o];
        const z = this.rp[o + 2];
        const ly = landY(x, z);
        if (this.rp[o + 1] < ly) {
          if (ly > -1 && Math.random() < 0.3) this.addSplash(x, ly, z);
          this.spawnDrop(i);
        }
        setTRS(a, i, this.rp[o], this.rp[o + 1], z);
      }
      this.rain.instanceMatrix.needsUpdate = true;
    }

    // eave drips
    const nd = Math.floor(this.ND * Math.min(1, env.rain * 1.2));
    this.drips.count = nd;
    this.drips.visible = nd > 0;
    if (nd > 0) {
      const a = this.drips.instanceMatrix.array;
      const ez = STORE.z1 + 0.64;
      for (let i = 0; i < nd; i++) {
        const o = i * 3;
        if (this.dp[o + 2] > 0 && this.dp[o + 1] >= STORE.glassTop - 0.06) {
          this.dp[o + 2] -= dt; // waiting at the edge
        } else {
          this.dp[o + 1] -= (2 + (STORE.glassTop - this.dp[o + 1]) * 4) * dt;
          if (this.dp[o + 1] < 0.08) {
            if (Math.random() < 0.7) this.addSplash(this.dp[o], 0.07, ez);
            this.spawnDrip(i);
            this.dp[i * 3 + 2] = Math.random() * 1.2;
          }
        }
        setTRS(a, i, this.dp[o], this.dp[o + 1], ez);
      }
      this.drips.instanceMatrix.needsUpdate = true;
    }

    // splashes
    {
      const a = this.splash.instanceMatrix.array;
      for (let i = 0; i < this.NS; i++) {
        const o = i * 4;
        if (this.sp[o + 3] >= 1) {
          if (this.sp[o + 3] < 1.5) {
            setTRS(a, i, 0, -50, 0, 0, 0, 0);
            this.sp[o + 3] = 2;
          }
          continue;
        }
        this.sp[o + 3] += dt / 0.35;
        const k = this.sp[o + 3];
        const s = 0.04 + k * 0.16;
        const fade = k > 0.7 ? 1 - (k - 0.7) / 0.3 : 1;
        setTRS(a, i, this.sp[o], this.sp[o + 1], this.sp[o + 2], s * fade, 1, s * fade);
      }
      this.splash.instanceMatrix.needsUpdate = true;
    }

    // glass droplets (fade in with wetness)
    {
      const show = env.wet > 0.05;
      this.drop.visible = show;
      if (show) {
        const a = this.drop.instanceMatrix.array;
        const sc = Math.min(1, env.wet * 1.2);
        for (let i = 0; i < this.NG; i++) {
          const o = i * 4;
          // droplets creep, pause, then run
          const run = Math.sin(t * 1.7 + i) > 0.6 ? 6 : 1;
          this.gp[o + 2] -= this.gp[o + 3] * run * dt * env.rain;
          if (this.gp[o + 2] < 0.3) this.spawnGlassDrop(i);
          const side = this.gp[o];
          const tt = this.gp[o + 1];
          const y = this.gp[o + 2];
          if (side === 0) setTRS(a, i, tt, y, STORE.z1 + 0.01, sc, sc * (run > 1 ? 1.8 : 1), sc);
          else setTRS(a, i, STORE.x1 + 0.01, y, tt, sc, sc * (run > 1 ? 1.8 : 1), sc);
        }
        this.drop.instanceMatrix.needsUpdate = true;
      }
    }

    // puddles
    this.puddleMat.opacity = env.wet * 0.7 * (1 - env.cover);
    this.puddleMat.emissiveIntensity = env.wet * (0.06 + env.night * 0.3);
    for (const p of this.puddles) p.visible = this.puddleMat.opacity > 0.01;

    // snow
    const nf = Math.floor(this.NF * env.snow);
    this.snow.count = nf;
    this.snow.visible = nf > 0;
    if (nf > 0) {
      const a = this.snow.instanceMatrix.array;
      for (let i = 0; i < nf; i++) {
        const o = i * 5;
        this.fp[o + 1] -= this.fp[o + 3] * dt;
        this.fp[o] += (Math.sin(t * 0.9 + this.fp[o + 4]) * 0.35 - 0.15) * dt;
        this.fp[o + 2] += Math.cos(t * 0.7 + this.fp[o + 4]) * 0.2 * dt;
        if (this.fp[o + 1] < landY(this.fp[o], this.fp[o + 2])) this.spawnFlake(i);
        setTRS(a, i, this.fp[o], this.fp[o + 1], this.fp[o + 2]);
      }
      this.snow.instanceMatrix.needsUpdate = true;
    }

    // cover + caps
    this.coverMat.opacity = env.cover * 0.78;
    for (const c of this.caps) {
      c.visible = env.cover > 0.02;
      c.scale.y = Math.max(0.02, env.cover) * c.userData.baseY;
    }
  }
}
