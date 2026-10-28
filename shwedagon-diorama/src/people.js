// Miniature people built on one shared rig that blends between standing and
// kneeling (seiza). Poses are driven by four scalars and animated with GSAP:
//   k  – kneel amount (0 stand → 1 kneel)
//   h  – hands joined (0 at sides → 1 palms together, 合十)
//   b  – bow / prostration (0 upright → 1 forehead to the ground when kneeling)
//   hb – head bow
import * as THREE from 'three';
import gsap from 'gsap';

// ---------------------------------------------------------------- shared caches (no per-person geometry)
const geoCache = new Map();
const G = (key, make) => {
  if (!geoCache.has(key)) geoCache.set(key, make());
  return geoCache.get(key);
};
const matCache = new Map();
function m(color) {
  if (!matCache.has(color)) matCache.set(color, new THREE.MeshStandardMaterial({ color, roughness: 0.85 }));
  return matCache.get(color);
}
const PROXY_MAT = new THREE.MeshBasicMaterial({ visible: false });

const GEO = {
  thigh: () => G('thigh', () => new THREE.CapsuleGeometry(0.058, 0.15, 2, 6)),
  shin: () => G('shin', () => new THREE.CapsuleGeometry(0.05, 0.14, 2, 6)),
  foot: () => G('foot', () => new THREE.BoxGeometry(0.07, 0.04, 0.11)),
  skirt: () =>
    G('skirt', () => {
      const g = new THREE.CylinderGeometry(0.105, 0.135, 0.46, 10);
      g.translate(0, -0.23, 0);
      return g;
    }),
  lap: () => G('lap', () => new THREE.CylinderGeometry(0.12, 0.15, 0.12, 10)),
  torso: () => G('torso', () => new THREE.CylinderGeometry(0.095, 0.11, 0.27, 10)),
  head: () => G('head', () => new THREE.SphereGeometry(0.085, 10, 8)),
  hair: () => G('hair', () => new THREE.SphereGeometry(0.088, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2)),
  bun: () => G('bun', () => new THREE.SphereGeometry(0.045, 6, 5)),
  wrap: () => G('wrap', () => new THREE.CylinderGeometry(0.09, 0.09, 0.05, 10)),
  wrapKnot: () => G('wrapKnot', () => new THREE.BoxGeometry(0.05, 0.05, 0.06)),
  arm: () => G('arm', () => new THREE.CapsuleGeometry(0.035, 0.13, 2, 5)),
  hand: () => G('hand', () => new THREE.SphereGeometry(0.035, 6, 5)),
  sash: () => G('sash', () => new THREE.BoxGeometry(0.03, 0.3, 0.2)),
  drape: () => G('drape', () => new THREE.BoxGeometry(0.03, 0.34, 0.22)),
  bowl: () => G('bowl', () => new THREE.SphereGeometry(0.07, 8, 5, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2)),
  stem: () => G('stem', () => new THREE.CylinderGeometry(0.012, 0.012, 0.2, 4)),
  bloom: () => G('bloom', () => new THREE.IcosahedronGeometry(0.035, 0)),
  vase: () => G('vase', () => new THREE.CylinderGeometry(0.05, 0.04, 0.07, 6)),
  proxy: () =>
    G('proxy', () => {
      const g = new THREE.BoxGeometry(0.46, 0.95, 0.46);
      g.translate(0, 0.475, 0);
      return g;
    }),
};

function part(parent, geo, mat, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(geo, mat);
  o.position.set(x, y, z);
  o.castShadow = true;
  o.receiveShadow = true;
  parent.add(o);
  return o;
}

const SKIN = ['#c98f68', '#b97f5a', '#d9a27c', '#a8704c', '#e0b08a'];
const LONGYI = ['#3f6b55', '#7a2f3a', '#2f4f7a', '#5a4a7a', '#6b4a2f', '#2f6a6a', '#8a5a2a'];
const TOPS = ['#f6f2ea', '#f3e6c8', '#f2c9d2', '#e8eef2', '#f4d58a', '#ffffff'];

export function randomLook(r) {
  const female = r() < 0.55;
  return {
    female,
    gaungbaung: !female && r() < 0.35,
    skin: SKIN[Math.floor(r() * SKIN.length)],
    longyi: LONGYI[Math.floor(r() * LONGYI.length)],
    top: TOPS[Math.floor(r() * TOPS.length)],
    sash: female && r() < 0.4 ? ['#e8b4c2', '#f2d27a', '#a8c8e0'][Math.floor(r() * 3)] : null,
    offering: r() < 0.35 ? ['#f2c94c', '#ffffff', '#e86a8a'][Math.floor(r() * 3)] : null,
  };
}

const lerp = (a, b, t) => a + (b - a) * t;
const KNEE_FOLD = Math.PI / 2 + 1.1;

// ---------------------------------------------------------------- Person
export class Person {
  /**
   * @param look   colours / clothing
   * @param opts   { idle: 'pray'|'prostrate'|'stand'|'standPray'|'walk', walker?: {center,radius,angle,speed}, data }
   */
  constructor(look, opts = {}) {
    this.look = look;
    this.data = opts.data;
    this.idle = opts.idle || 'pray';
    this.walker = opts.walker || null;
    this.phase = opts.phase ?? Math.random() * 7;
    this.period = 7 + (this.phase % 3);
    this.busy = false;
    this.action = null;
    this.tl = null;
    const kneeling = this.idle === 'pray' || this.idle === 'prostrate';
    this.pose = { k: kneeling ? 1 : 0, h: this.idle === 'stand' ? 0 : 1, b: 0, hb: 0, walk: 0 };
    if (this.idle === 'walk') this.pose.h = look.bowl ? 0.55 : 0.0;
    this.build();
    this.apply(0);
  }

  build() {
    const L = this.look;
    const root = new THREE.Group();
    this.root = root;
    const lower = m(L.monk ? L.robe : L.longyi);
    const upper = m(L.monk ? L.robe : L.top);
    const skin = m(L.skin);

    const hips = new THREE.Group();
    root.add(hips);
    this.hips = hips;
    this.legs = [];
    for (const sx of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.x = sx * 0.065;
      hips.add(hip);
      part(hip, GEO.thigh(), lower, 0, -0.13, 0);
      const knee = new THREE.Group();
      knee.position.y = -0.25;
      hip.add(knee);
      part(knee, GEO.shin(), lower, 0, -0.115, 0);
      part(knee, GEO.foot(), L.monk ? m('#2b2420') : skin, 0, -0.235, 0.025);
      this.legs.push({ hip, knee, sx });
    }
    this.skirt = part(hips, GEO.skirt(), lower, 0, 0.02, 0);
    this.lap = part(hips, GEO.lap(), lower, 0, -0.04, 0.05);

    const spine = new THREE.Group();
    hips.add(spine);
    this.spine = spine;
    part(spine, GEO.torso(), upper, 0, 0.135, 0);
    if (L.sash) part(spine, GEO.sash(), m(L.sash), 0, 0.14, 0).rotation.z = 0.6;
    if (L.monk) part(spine, GEO.drape(), lower, -0.04, 0.12, 0).rotation.z = -0.55;

    const head = new THREE.Group();
    head.position.y = 0.36;
    spine.add(head);
    this.head = head;
    part(head, GEO.head(), skin);
    if (!L.monk) {
      part(head, GEO.hair(), m('#1f1a17'), 0, 0.006, -0.01);
      if (L.female) part(head, GEO.bun(), m('#1f1a17'), 0, 0.03, -0.085);
      else if (L.gaungbaung) {
        part(head, GEO.wrap(), m('#f2ead8'), 0, 0.05, 0);
        part(head, GEO.wrapKnot(), m('#f2ead8'), 0.07, 0.07, 0);
      }
    }

    this.arms = [];
    for (const sx of [-1, 1]) {
      const sh = new THREE.Group();
      sh.position.set(sx * 0.12, 0.24, 0);
      spine.add(sh);
      const bare = L.monk && sx > 0;
      part(sh, GEO.arm(), bare ? skin : upper, 0, -0.09, 0);
      part(sh, GEO.hand(), skin, 0, -0.19, 0);
      this.arms.push({ sh, sx });
    }
    if (L.bowl) part(spine, GEO.bowl(), m('#1f1c1a'), 0, 0.1, 0.19);
    if (L.offering && !L.monk) {
      // flowers held at the chest
      const f = new THREE.Group();
      f.position.set(0, 0.13, 0.2);
      spine.add(f);
      part(f, GEO.stem(), m('#5e8a3a'));
      for (let i = 0; i < 4; i++) part(f, GEO.bloom(), m(L.offering), ((i % 2) - 0.5) * 0.05, 0.11 + (i >> 1) * 0.04, 0);
    }

    // generous invisible hit box so small figures are easy to click
    const proxy = new THREE.Mesh(GEO.proxy(), PROXY_MAT);
    proxy.userData.person = this;
    root.add(proxy);
    this.proxy = proxy;
    this.meshes = [];
    root.traverse((o) => o.isMesh && o !== proxy && this.meshes.push(o));
  }

  // ---------------------------------------------------------------- pose
  apply(t) {
    const { k, h, b, hb, walk } = this.pose;
    const swing = Math.sin(t * 5.2 + this.phase) * walk;
    this.hips.position.y = lerp(0.52, 0.17, k) + Math.abs(swing) * 0.012;
    for (const { hip, knee, sx } of this.legs) {
      hip.rotation.x = -1.1 * k + swing * 0.38 * sx;
      knee.rotation.x = KNEE_FOLD * k + Math.max(0, -swing * sx) * 0.4;
    }
    this.skirt.scale.y = lerp(1, 0.15, k);
    this.skirt.visible = k < 0.92;
    this.lap.scale.setScalar(lerp(0.6, 1, k));
    const breathe = Math.sin(t * 1.1 + this.phase) * 0.025;
    this.spine.rotation.x = 0.06 + breathe + b * lerp(0.42, 1.05, k);
    this.head.rotation.x = 0.06 + hb * 0.5 + b * 0.25;
    for (const { sh, sx } of this.arms) {
      const pray = lerp(-0.05 - swing * 0.3 * sx, -1.45, h);
      sh.rotation.x = lerp(pray, -0.55, b * k);
      sh.rotation.z = -sx * lerp(0.1, 0.62, h) * (1 - 0.6 * b * k);
    }
  }

  /** current behaviour key (for the info card) */
  status() {
    if (this.action) return this.action;
    if (this.idle === 'walk' && this.pose.k < 0.05) return 'walk';
    if (this.pose.k > 0.5) return this.idle === 'prostrate' ? 'prostrate' : 'pray';
    return this.pose.h > 0.5 ? 'standPray' : 'stand';
  }

  // ---------------------------------------------------------------- actions
  play(name) {
    if (this.tl) this.tl.kill();
    const p = this.pose;
    const tl = gsap.timeline({
      defaults: { ease: 'sine.inOut' },
      onComplete: () => {
        this.busy = false;
        this.action = null;
        this.tl = null;
        // settle into a matching idle state
        if (p.k > 0.5) this.idle = this.idle === 'prostrate' ? 'prostrate' : 'pray';
        else if (this.walker && p.h < 0.7) this.idle = 'walk';
        else this.idle = p.h > 0.5 ? 'standPray' : 'stand';
      },
    });
    this.busy = true;
    this.action = name;
    this.tl = tl;
    tl.to(p, { walk: 0, duration: 0.5 }, 0);
    switch (name) {
      case 'stand':
        tl.to(p, { b: 0, hb: 0, duration: 1.0 }).to(p, { k: 0, duration: 2.2 }).to(p, { h: 0, duration: 1.0 }, '-=0.6');
        break;
      case 'gassho':
        tl.to(p, { h: 1, b: 0, duration: 1.4 }).to(p, { hb: 0.35, duration: 1.0 }).to(p, { hb: 0, duration: 1.2 }, '+=0.6');
        break;
      case 'kneel':
        tl.to(p, { h: 1, hb: 0, b: 0, duration: 1.0 }).to(p, { k: 1, duration: 2.2 });
        for (let i = 0; i < 3; i++) tl.to(p, { b: 1, duration: 1.5 }).to(p, { b: 0, duration: 1.5 }, '+=0.7');
        tl.add(() => (this.idle = 'pray'));
        break;
      case 'bowHead':
        tl.to(p, { h: 1, duration: 1.0 }).to(p, { hb: 1, b: 0.35, duration: 1.6 }).to(p, { hb: 0.2, b: 0, duration: 1.6 }, '+=1.4');
        break;
      case 'rise':
        tl.to(p, { b: 0, hb: 0, h: 0.6, duration: 0.9 }).to(p, { k: 0, duration: 2.4, ease: 'power1.inOut' }).to(p, { h: 0, duration: 1.0 });
        break;
    }
    return tl;
  }

  // ---------------------------------------------------------------- per-frame
  update(t, dt) {
    const p = this.pose;
    if (!this.busy) {
      if (this.idle === 'prostrate') {
        const c = ((t + this.phase) % this.period) / this.period;
        const s = (x) => x * x * (3 - 2 * x);
        p.b = c < 0.35 ? 0 : c < 0.5 ? s((c - 0.35) / 0.15) : c < 0.72 ? 1 : c < 0.87 ? 1 - s((c - 0.72) / 0.15) : 0;
      } else if (this.idle === 'walk') {
        p.walk += (1 - p.walk) * Math.min(1, dt * 3);
      } else if (this.idle === 'standPray') {
        p.hb = 0.3 + Math.sin(t * 0.6 + this.phase) * 0.1;
      }
    }
    if (this.walker && this.idle === 'walk' && !this.busy) {
      const w = this.walker;
      w.angle += (w.speed / w.radius) * dt * p.walk; // clockwise seen from above
      const a = w.angle;
      this.root.position.set(w.center.x + Math.cos(a) * w.radius, 0, w.center.z + Math.sin(a) * w.radius);
      this.root.rotation.y = Math.atan2(-Math.sin(a), Math.cos(a));
    }
    this.apply(t);
  }

  dispose() {
    if (this.tl) this.tl.kill();
  }
}
