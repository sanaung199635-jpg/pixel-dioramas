// Small pixel people with simple "brains": cashier, paying customer, browsers,
// a customer who walks in / shops / leaves, a passer-by, and someone sheltering.
import * as THREE from 'three';
import { STORE, DOOR } from './store.js';

const geoCache = new Map();
const G = (k, f) => (geoCache.has(k) ? geoCache.get(k) : (geoCache.set(k, f()), geoCache.get(k)));
const matCache = new Map();
const m = (c) => (matCache.has(c) ? matCache.get(c) : (matCache.set(c, new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 })), matCache.get(c)));
const PROXY = new THREE.MeshBasicMaterial({ visible: false });

const GEO = {
  thigh: () => G('thigh', () => new THREE.CapsuleGeometry(0.06, 0.14, 2, 6)),
  shin: () => G('shin', () => new THREE.CapsuleGeometry(0.052, 0.14, 2, 6)),
  shoe: () => G('shoe', () => new THREE.BoxGeometry(0.09, 0.05, 0.15)),
  torso: () => G('torso', () => new THREE.CylinderGeometry(0.11, 0.12, 0.32, 10)),
  head: () => G('head', () => new THREE.SphereGeometry(0.1, 10, 8)),
  hair: () => G('hair', () => new THREE.SphereGeometry(0.104, 10, 6, 0, Math.PI * 2, 0, Math.PI / 1.8)),
  arm: () => G('arm', () => new THREE.CapsuleGeometry(0.04, 0.17, 2, 5)),
  hand: () => G('hand', () => new THREE.SphereGeometry(0.04, 6, 5)),
  cap: () => G('cap', () => new THREE.CylinderGeometry(0.105, 0.105, 0.05, 10)),
  visor: () => G('visor', () => new THREE.BoxGeometry(0.14, 0.015, 0.1)),
  scarf: () => G('scarf', () => new THREE.TorusGeometry(0.095, 0.035, 5, 12)),
  canopy: () => G('canopy', () => new THREE.ConeGeometry(0.55, 0.22, 8, 1, true)),
  shaft: () => G('shaft', () => new THREE.CylinderGeometry(0.012, 0.012, 0.75, 4)),
  phone: () => G('phone', () => new THREE.BoxGeometry(0.06, 0.1, 0.015)),
  bag: () => G('bag', () => new THREE.BoxGeometry(0.16, 0.18, 0.08)),
  proxy: () =>
    G('proxy', () => {
      const g = new THREE.BoxGeometry(0.5, 1.25, 0.5);
      g.translate(0, 0.62, 0);
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

const insideStore = (x, z) => x > STORE.x0 && x < STORE.x1 && z > STORE.z0 && z < STORE.z1;
const groundY = (x, z) => (insideStore(x, z) ? 0.08 : z < 1.7 && x > -9.6 && x < 3.6 ? 0.07 : z > 5.4 ? 0.16 : 0);

export class Person {
  /** look: colours; opts: { type, data, path?, facing } */
  constructor(look, opts) {
    this.look = look;
    this.type = opts.type;
    this.data = opts.data;
    this.path = opts.path || null;
    this.ph = Math.random() * 6;
    this.walk = 0;
    this.umbrella = 0;
    this.scarf = 0;
    this.reach = 0;
    this.wp = 0;
    this.wait = 0;
    this.statusKey = opts.status || 'idle';
    this.dir = 1;
    this.build();
    if (opts.pos) this.setPos(opts.pos[0], opts.pos[1]);
    if (opts.facing !== undefined) this.root.rotation.y = opts.facing;
  }

  build() {
    const L = this.look;
    const root = new THREE.Group();
    this.root = root;
    const hips = new THREE.Group();
    hips.position.y = 0.5;
    root.add(hips);
    this.hips = hips;
    this.legs = [];
    for (const sx of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.x = sx * 0.07;
      hips.add(hip);
      part(hip, GEO.thigh(), m(L.pants), 0, -0.12, 0);
      const knee = new THREE.Group();
      knee.position.y = -0.24;
      hip.add(knee);
      part(knee, GEO.shin(), m(L.pants), 0, -0.11, 0);
      part(knee, GEO.shoe(), m(L.shoes || '#2b2b2b'), 0, -0.22, 0.03);
      this.legs.push({ hip, knee, sx });
    }
    const body = new THREE.Group();
    hips.add(body);
    this.body = body;
    part(body, GEO.torso(), m(L.top), 0, 0.17, 0);
    if (L.apron) {
      const ap = part(body, new THREE.BoxGeometry(0.2, 0.26, 0.02), m(L.apron), 0, 0.15, 0.115);
      ap.castShadow = false;
    }
    const head = new THREE.Group();
    head.position.y = 0.44;
    body.add(head);
    this.head = head;
    part(head, GEO.head(), m(L.skin));
    part(head, GEO.hair(), m(L.hair), 0, 0.01, -0.012);
    if (L.cap) {
      part(head, GEO.cap(), m(L.cap), 0, 0.07, 0);
      part(head, GEO.visor(), m(L.cap), 0, 0.06, 0.1);
    }
    this.scarfMesh = part(body, GEO.scarf(), m(L.scarf || '#c83a3a'), 0, 0.34, 0);
    this.scarfMesh.rotation.x = Math.PI / 2;
    this.arms = [];
    for (const sx of [-1, 1]) {
      const sh = new THREE.Group();
      sh.position.set(sx * 0.15, 0.3, 0);
      body.add(sh);
      part(sh, GEO.arm(), m(L.top), 0, -0.12, 0);
      part(sh, GEO.hand(), m(L.skin), 0, -0.24, 0);
      this.arms.push({ sh, sx });
    }
    if (L.phone) {
      this.phone = part(this.arms[1].sh, GEO.phone(), m('#1f2328'), 0, -0.27, 0.03);
    }
    if (L.bag) part(this.arms[0].sh, GEO.bag(), m(L.bag), 0, -0.33, 0);
    // umbrella (opens/closes)
    const um = new THREE.Group();
    um.position.set(0.12, 0.75, 0.1);
    root.add(um);
    part(um, GEO.shaft(), m('#3a3a3a'), 0, 0.37, 0);
    const can = part(um, GEO.canopy(), new THREE.MeshStandardMaterial({ color: L.umbrella || '#2f6fd0', roughness: 0.6, side: THREE.DoubleSide }), 0, 0.72, 0);
    this.umbrellaGroup = um;
    this.canopy = can;
    const proxy = new THREE.Mesh(GEO.proxy(), PROXY);
    proxy.userData.person = this;
    root.add(proxy);
    this.proxy = proxy;
    this.meshes = [];
    root.traverse((o) => o.isMesh && o !== proxy && this.meshes.push(o));
  }

  setPos(x, z) {
    this.root.position.set(x, groundY(x, z), z);
  }
  get outdoors() {
    const p = this.root.position;
    return !insideStore(p.x, p.z) && !(p.z < STORE.z1 + 0.6 && p.z > STORE.z1 - 0.2 && p.x > STORE.x0 && p.x < STORE.x1 + 0.2);
  }

  walkTo(tx, tz, speed, dt) {
    const p = this.root.position;
    const dx = tx - p.x;
    const dz = tz - p.z;
    const d = Math.hypot(dx, dz);
    const step = speed * dt;
    const yaw = Math.atan2(dx, dz);
    let dy = yaw - this.root.rotation.y;
    dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    this.root.rotation.y += dy * Math.min(1, dt * 8);
    if (d <= step) {
      this.setPos(tx, tz);
      return true;
    }
    this.setPos(p.x + (dx / d) * step, p.z + (dz / d) * step);
    return false;
  }

  face(yaw, dt) {
    let dy = yaw - this.root.rotation.y;
    dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    this.root.rotation.y += dy * Math.min(1, dt * 4);
  }

  update(t, dt, env) {
    let moving = false;
    const rain = env.rain;
    const speedMul = rain > 0.5 ? 1.45 : env.snow > 0.5 ? 0.75 : 1;
    let armR = null;
    let armL = null;
    let headYaw = Math.sin(t * 0.4 + this.ph) * 0.2;
    let headPitch = 0.05;

    switch (this.type) {
      case 'cashier': {
        // scanning items: alternate hands, glance at the customer
        const c = (t + this.ph) % 4;
        armR = c < 2 ? -0.9 - Math.max(0, Math.sin(t * 4)) * 0.35 : -0.4;
        armL = c >= 2 ? -0.8 - Math.max(0, Math.sin(t * 3.4)) * 0.3 : -0.3;
        headPitch = 0.25;
        this.statusKey = c < 2 ? 'scan' : 'serve';
        break;
      }
      case 'pay': {
        armR = -1.25 + Math.sin(t * 1.2) * 0.05;
        armL = -0.15;
        headPitch = 0.2;
        this.statusKey = 'pay';
        break;
      }
      case 'browse':
      case 'fridge': {
        const c = ((t + this.ph) % 6) / 6;
        this.reach = c > 0.55 && c < 0.85 ? Math.sin(((c - 0.55) / 0.3) * Math.PI) : 0;
        armR = -0.2 - this.reach * 1.2;
        headPitch = 0.1 + Math.sin(t * 0.7 + this.ph) * 0.12;
        headYaw = Math.sin(t * 0.5 + this.ph) * 0.45;
        this.statusKey = this.reach > 0.2 ? 'take' : this.type === 'fridge' ? 'fridgeLook' : 'browse';
        break;
      }
      case 'shelter': {
        armR = -1.35;
        headPitch = rain > 0.5 ? -0.25 + Math.sin(t * 0.5) * 0.1 : 0.35;
        headYaw = rain > 0.5 ? Math.sin(t * 0.3) * 0.5 : 0;
        this.statusKey = rain > 0.5 ? 'shelterRain' : env.snow > 0.5 ? 'shelterSnow' : 'phone';
        break;
      }
      case 'pass': {
        const tx = this.dir > 0 ? 6.6 : -9.6;
        if (this.wait > 0) {
          this.wait -= dt;
          this.statusKey = 'pause';
        } else {
          moving = true;
          if (this.walkTo(tx, 6.65, 0.75 * speedMul, dt)) {
            this.dir *= -1;
            this.wait = 1.2;
          }
          this.statusKey = rain > 0.5 ? 'hurryRain' : env.snow > 0.5 ? 'walkSnow' : 'stroll';
        }
        break;
      }
      case 'walker': {
        const w = this.path[this.wp];
        if (this.wait > 0) {
          this.wait -= dt;
          if (w.face !== undefined) this.face(w.face, dt);
          if (w.act === 'pay') armR = -1.2;
          if (w.act === 'pick') armR = -0.4 - Math.max(0, Math.sin(t * 1.5)) * 0.8;
          this.statusKey = w.status || 'idle';
          if (this.wait <= 0) this.wp = (this.wp + 1) % this.path.length;
        } else {
          moving = true;
          this.statusKey = w.going || 'walking';
          if (this.walkTo(w.x, w.z, 0.85 * speedMul, dt)) {
            if (w.wait) this.wait = w.wait;
            else this.wp = (this.wp + 1) % this.path.length;
          }
        }
        break;
      }
    }

    // locomotion + accessories
    this.walk += ((moving ? 1 : 0) - this.walk) * Math.min(1, dt * 6);
    const wantsUmbrella = (this.type === 'pass' || this.type === 'walker') && rain > 0.4 && this.outdoors;
    this.umbrella += ((wantsUmbrella ? 1 : 0) - this.umbrella) * Math.min(1, dt * 4);
    this.scarf += ((env.snow > 0.4 ? 1 : 0) - this.scarf) * Math.min(1, dt * 2);
    this.apply(t, armR, armL, headYaw, headPitch);
  }

  apply(t, armR, armL, headYaw, headPitch) {
    const s = Math.sin(t * 7 + this.ph) * this.walk;
    this.hips.position.y = 0.5 + Math.abs(s) * 0.02;
    for (const { hip, knee, sx } of this.legs) {
      hip.rotation.x = s * 0.5 * sx;
      knee.rotation.x = Math.max(0, s * sx) * 0.6;
    }
    this.body.rotation.x = this.walk * 0.06 + this.umbrella * 0.02;
    this.head.rotation.set(headPitch, headYaw, 0);
    const swing = (sx) => -s * 0.45 * sx;
    const u = this.umbrella;
    const [L, R] = this.arms;
    R.sh.rotation.x = u > 0.05 ? THREE.MathUtils.lerp(armR ?? swing(1), -0.95, u) : armR ?? swing(1);
    R.sh.rotation.z = -0.08 - u * 0.25;
    L.sh.rotation.x = armL ?? swing(-1) * 0.8;
    L.sh.rotation.z = 0.08;
    this.umbrellaGroup.visible = u > 0.02;
    this.canopy.scale.set(Math.max(0.05, u), 0.4 + 0.6 * u, Math.max(0.05, u));
    this.umbrellaGroup.position.y = 0.75 + this.hips.position.y - 0.5;
    this.scarfMesh.visible = this.scarf > 0.05;
    this.scarfMesh.scale.setScalar(Math.max(0.01, this.scarf));
  }
}

// ---------------------------------------------------------------- cast (fictional characters)
export const STATUS = {
  scan: '扫码收银中',
  serve: '招呼客人',
  pay: '在柜台扫码付款',
  browse: '在货架前挑选零食',
  fridgeLook: '在冷柜前挑饮料',
  take: '伸手拿商品',
  phone: '在门口看手机',
  shelterRain: '在屋檐下等雨停',
  shelterSnow: '在门口看雪',
  stroll: '沿人行道散步',
  hurryRain: '打着伞快步走过',
  walkSnow: '踏着薄雪慢慢走',
  pause: '停下来看了看店里',
  walking: '走路中',
  toStore: '走向便利店',
  enter: '推门进店',
  pick: '挑选便当',
  queue: '排队结账',
  leave: '拎着袋子离开',
  scooter: '在摩托车旁整理东西',
  idle: '站着',
};

export function makeCast() {
  const doorOut = { x: DOOR.x, z: 1.1 };
  const doorIn = { x: DOOR.x, z: -1.0 };
  const walkerPath = [
    { x: 4.4, z: 2.55, wait: 2.5, face: Math.PI, status: 'scooter', going: 'leave' },
    { ...doorOut, going: 'toStore' },
    { ...doorIn, going: 'enter' },
    { x: -2.9, z: -1.7, wait: 4.5, face: Math.PI, act: 'pick', status: 'pick', going: 'walking' },
    { x: -0.45, z: -3.35, wait: 3.5, face: Math.PI / 2, act: 'pay', status: 'queue', going: 'walking' },
    { ...doorIn, going: 'walking' },
    { ...doorOut, going: 'leave' },
  ];
  return [
    {
      look: { skin: '#e3b48f', hair: '#2a2420', top: '#ffffff', apron: '#00845a', pants: '#2f3a48', cap: '#00845a' },
      opts: { type: 'cashier', pos: [1.15, -2.4], facing: -Math.PI / 2 },
      data: { name: '小周', role: '店员 · 收银员', bio: '这家店的早班店员，动作麻利，熟客都记得她推荐的新品咖啡。' },
    },
    {
      look: { skin: '#d9a27c', hair: '#1f1a17', top: '#5d7fa6', pants: '#3a3f46', phone: true, bag: '#e9e3d6' },
      opts: { type: 'pay', pos: [-0.42, -2.3], facing: Math.PI / 2 },
      data: { name: '林先生', role: '顾客 · 附近上班族', bio: '每天上班前来买一份饭团和一杯热咖啡，习惯用手机付款。' },
    },
    {
      look: { skin: '#f0c4a0', hair: '#6b4a2e', top: '#f2a8c2', pants: '#3a5a8a', shoes: '#f4f4f0' },
      opts: { type: 'browse', pos: [-5.6, -1.2], facing: Math.PI },
      data: { name: '小雨', role: '顾客 · 大学生', bio: '下课路过，想挑一包没吃过的新口味薯片。' },
    },
    {
      look: { skin: '#c98f68', hair: '#7a7a7a', top: '#8a5a7a', pants: '#4a4a52', bag: '#c83a3a' },
      opts: { type: 'fridge', pos: [-7.25, -3.05], facing: -Math.PI / 2 },
      data: { name: '王阿姨', role: '顾客 · 附近居民', bio: '给孙子买牛奶和酸奶，总要把保质期看得清清楚楚。' },
    },
    {
      look: { skin: '#b97f5a', hair: '#1f1a17', top: '#f2c94c', pants: '#2f3a48', umbrella: '#e31b23', cap: '#2f3a48' },
      opts: { type: 'walker', path: walkerPath, pos: [4.4, 2.55], facing: Math.PI },
      data: { name: '阿凯', role: '顾客 · 骑摩托车的上班族', bio: '把摩托车停在门口，进店买便当当午饭。' },
    },
    {
      look: { skin: '#e3b48f', hair: '#3b2a1f', top: '#3a7f5a', pants: '#c9b28a', umbrella: '#2f6fd0', scarf: '#f2c94c' },
      opts: { type: 'pass', pos: [-8.5, 6.65], facing: Math.PI / 2 },
      data: { name: '小陈', role: '路人', bio: '下班回家路上，每次都会往店里看一眼今天的海报。' },
    },
    {
      look: { skin: '#f0c4a0', hair: '#1f1a17', top: '#c8402f', pants: '#2f3a48', phone: true, scarf: '#ffffff' },
      opts: { type: 'shelter', pos: [2.25, 0.05], facing: 0 },
      data: { name: 'Mia', role: '路人', bio: '和朋友约在店门口见面，正在发消息问对方到哪了。' },
    },
  ];
}
