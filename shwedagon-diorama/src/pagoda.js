// Burmese sacred architecture: the main golden zedi, satellite stupas,
// tiered pyatthat roofs, tazaung pavilions, gateways and chinthe guardians.
import * as THREE from 'three';

const V2 = (r, y) => new THREE.Vector2(r, y);

export function add(parent, geo, material, p = {}) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(p.x || 0, p.y || 0, p.z || 0);
  m.rotation.set(p.rx || 0, p.ry || 0, p.rz || 0);
  if (p.s !== undefined) Array.isArray(p.s) ? m.scale.set(...p.s) : m.scale.setScalar(p.s);
  m.castShadow = p.cast !== false;
  m.receiveShadow = p.receive !== false;
  parent.add(m);
  return m;
}

/** mark an object as clickable building content (id -> data.js BUILDINGS) */
export function tag(obj, id) {
  obj.userData.pick = { kind: 'building', id };
  return obj;
}

const cache = new Map();
export function mat(color, o = {}) {
  const key = color + JSON.stringify(o);
  if (!cache.has(key)) cache.set(key, new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, ...o }));
  return cache.get(key);
}

/** gold-leaf brick texture: gives the gold surfaces a crisp voxel / pixel-brick feel */
function goldBrickTexture() {
  const c = document.createElement('canvas');
  c.width = 16;
  c.height = 8;
  const g = c.getContext('2d');
  const px = (x, y, col) => {
    g.fillStyle = col;
    g.fillRect(x, y, 1, 1);
  };
  const tones = ['#f7cc5c', '#f2c353', '#fad566', '#eebc4a'];
  for (let row = 0; row < 2; row++) {
    const off = row * 4;
    for (let x = 0; x < 16; x++) {
      const b = Math.floor(((x + off) % 16) / 8);
      const base = tones[(b + row * 2) % 4];
      px(x, row * 4, '#ffeaa2');
      px(x, row * 4 + 1, base);
      px(x, row * 4 + 2, base);
      px(x, row * 4 + 3, '#c99331');
      if ((x + off) % 8 === 0) for (let k = 1; k < 3; k++) px(x, row * 4 + k, '#d9a23c');
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** cylinder ring whose UVs are scaled to world size so bricks keep a constant size */
export function ringGeo(rt, rb, h, seg) {
  const geo = new THREE.CylinderGeometry(rt, rb, h, seg, 1);
  const uv = geo.attributes.uv;
  const su = (2 * Math.PI * Math.max(rt, rb)) / 0.5;
  const sv = h / 0.22;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
  return geo;
}

/** shared architectural materials */
export function makeMaterials(envMap, tex) {
  const brick = goldBrickTexture();
  const goldBrick = new THREE.MeshStandardMaterial({
    map: brick,
    metalness: 0.75,
    roughness: 0.42,
    envMap,
    envMapIntensity: 1.1,
    emissive: '#7a520e',
    emissiveIntensity: 0.25,
    flatShading: true,
  });
  const goldMain = new THREE.MeshStandardMaterial({
    color: '#f6c652',
    metalness: 0.8,
    roughness: 0.36,
    envMap,
    envMapIntensity: 1.15,
    emissive: '#7a4a0a',
    emissiveIntensity: 0.25,
    flatShading: true,
  });
  const gold = new THREE.MeshStandardMaterial({
    color: '#eab447',
    metalness: 0.8,
    roughness: 0.4,
    envMap,
    envMapIntensity: 1.0,
    emissive: '#5e380a',
    emissiveIntensity: 0.2,
    flatShading: true,
  });
  const roofMap = tex.roof.clone();
  roofMap.repeat.set(2, 2);
  roofMap.needsUpdate = true;
  return {
    goldBrick,
    goldMain,
    gold,
    white: mat('#fbf8f1'),
    cream: mat('#ebe1cd'),
    stone: mat('#ddd1bc'),
    red: mat('#a3372b'),
    darkRed: mat('#7e271f'),
    roof: new THREE.MeshStandardMaterial({ map: roofMap, roughness: 0.75 }),
    bronze: new THREE.MeshStandardMaterial({ color: '#8a6a3c', metalness: 0.7, roughness: 0.45, envMap, envMapIntensity: 0.6 }),
    jewel: new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0.6, roughness: 0.1 }),
    lamp: new THREE.MeshStandardMaterial({ color: '#fff6e0', emissive: '#ffcf7a', emissiveIntensity: 0.2, roughness: 0.4 }),
    flame: new THREE.MeshBasicMaterial({ color: '#ffd36a' }),
    niche: new THREE.MeshStandardMaterial({ color: '#6a4418', emissive: '#ffb347', emissiveIntensity: 0.5 }),
    nicheDark: mat('#4a3424'),
    rug: mat('#a8322a'),
  };
}

// ---------------------------------------------------------------- main zedi
// Stepped octagonal terraces bristling with pinnacles, a bell of chunky ledged
// gold-brick rings, banded spire and a jewelled hti.
export function buildMainPagoda(parent, M, x0, z0) {
  const g = new THREE.Group();
  g.position.set(x0, 0, z0);
  parent.add(g);
  tag(g, 'main');
  const P = (geo, m, y, o = {}) => add(g, geo, m, { y, ...o });
  let y = 0;
  const ring = (rt, rb, h, seg, m = M.goldBrick) => P(ringGeo(rt, rb, h, seg), m, y + h / 2, { ry: Math.PI / seg });

  // five stepped octagonal terraces
  const T = [
    [5.45, 0.44],
    [5.05, 0.4],
    [4.68, 0.38],
    [4.32, 0.36],
    [3.98, 0.34],
  ];
  T.forEach(([r, h], i) => {
    ring(r, r + 0.06, h, 8);
    P(new THREE.CylinderGeometry(r + 0.1, r + 0.1, 0.07, 8), M.gold, y + h - 0.035, { ry: Math.PI / 8 });
    y += h;
    if (i < 4) {
      const n = 16;
      for (let k = 0; k < n; k++) {
        const a = (k / n) * Math.PI * 2;
        const rr = (r - 0.28) * (k % 2 === 0 ? 1 / Math.cos(Math.PI / 8) : 1) * 0.97;
        pinnacle(g, Math.cos(a) * rr, y, Math.sin(a) * rr, 1.0 - i * 0.14, M);
      }
    }
  });

  // the bell: chunky ledged rings
  const N = 16;
  const r0 = 3.78;
  const r1 = 0.74;
  const H = 6.0;
  const rOf = (t) => r1 + (r0 - r1) * (1 - Math.pow(t, 1.45));
  const hs = H / N;
  for (let i = 0; i < N; i++) {
    const ra = rOf(i / N);
    const rb = rOf((i + 1) / N);
    ring(rb, ra, hs, 16);
    P(new THREE.CylinderGeometry(rb + 0.1, rb + 0.1, 0.07, 16), M.gold, y + hs - 0.03, { ry: Math.PI / 16, cast: false });
    y += hs;
  }

  // collar bands, alms bowl, lotus
  for (let i = 0; i < 3; i++) {
    const r = 0.78 - i * 0.07;
    ring(r, r + 0.03, 0.18, 16, M.goldMain);
    P(new THREE.CylinderGeometry(r + 0.06, r + 0.06, 0.05, 16), M.gold, y + 0.17);
    y += 0.18;
  }
  ring(0.6, 0.52, 0.22, 16, M.goldMain);
  y += 0.22;
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    P(new THREE.ConeGeometry(0.08, 0.32, 4), M.gold, y + 0.1, { x: Math.cos(a) * 0.52, z: Math.sin(a) * 0.52, rz: Math.cos(a) * 0.5, rx: -Math.sin(a) * 0.5 });
  }
  ring(0.5, 0.42, 0.18, 16, M.goldMain);
  y += 0.18;

  // spire: tapering ledged rings
  const S = 12;
  const SH = 4.0;
  for (let i = 0; i < S; i++) {
    const ra = 0.46 * (1 - Math.pow(i / S, 1.1)) + 0.06;
    const rb = 0.46 * (1 - Math.pow((i + 1) / S, 1.1)) + 0.06;
    const h = SH / S;
    ring(rb, ra, h, 12, i % 2 ? M.goldMain : M.goldBrick);
    P(new THREE.CylinderGeometry(rb + 0.05, rb + 0.05, 0.04, 12), M.gold, y + h - 0.02, { cast: false });
    y += h;
  }

  // hti
  P(new THREE.CylinderGeometry(0.11, 0.12, 0.18, 10), M.darkRed, y + 0.09);
  y += 0.18;
  for (let i = 0; i < 6; i++) {
    const r = 0.36 - i * 0.05;
    P(new THREE.CylinderGeometry(r * 0.55, r, 0.08, 12), M.gold, y + 0.05 + i * 0.14);
  }
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    P(new THREE.SphereGeometry(0.035, 5, 4), M.gold, y - 0.04, { x: Math.cos(a) * 0.36, z: Math.sin(a) * 0.36, cast: false });
  }
  P(new THREE.CylinderGeometry(0.025, 0.035, 1.3, 6), M.gold, y + 0.65);
  P(new THREE.BoxGeometry(0.42, 0.06, 0.06), M.gold, y + 1.05);
  P(new THREE.BoxGeometry(0.06, 0.06, 0.42), M.gold, y + 1.05);
  P(new THREE.BoxGeometry(0.22, 0.14, 0.015), M.gold, y + 0.9, { x: 0.13 });
  const orb = P(new THREE.IcosahedronGeometry(0.1, 1), M.jewel, y + 1.4, { cast: false });
  y += 1.5;

  // four great adoration shrines attached on the diagonals
  for (let k = 0; k < 4; k++) {
    const a = (k / 4) * Math.PI * 2 + Math.PI / 4;
    tag(spiredShrine(g, Math.cos(a) * 5.95, 0, Math.sin(a) * 5.95, 1.95, Math.atan2(Math.cos(a), Math.sin(a)), M, { glow: true }), 'adoration');
  }

  const meshes = [];
  g.traverse((o) => o.isMesh && meshes.push(o));
  return { group: g, meshes, orb, height: y, center: new THREE.Vector3(x0, 0, z0) };
}

/** small golden pinnacle (mini stupa) */
export function pinnacle(parent, x, y, z, s, M) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(s);
  parent.add(g);
  add(g, new THREE.BoxGeometry(0.34, 0.16, 0.34), M.gold, { y: 0.08 });
  add(g, new THREE.CylinderGeometry(0.15, 0.18, 0.14, 8), M.goldMain, { y: 0.23 });
  const pts = [V2(0.16, 0), V2(0.16, 0.1), V2(0.11, 0.32), V2(0.05, 0.58), V2(0.0, 0.76)];
  add(g, new THREE.LatheGeometry(pts, 8), M.goldMain, { y: 0.3 });
  add(g, new THREE.SphereGeometry(0.035, 4, 3), M.gold, { y: 1.08, cast: false });
  return g;
}

/** white & gold shrine with an arched buddha niche and a tall stacked golden spire */
export function spiredShrine(parent, x, y, z, s, ry, M, o = {}) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = ry;
  g.scale.setScalar(s);
  parent.add(g);
  // plinth
  add(g, new THREE.BoxGeometry(1.04, 0.2, 1.04), M.white, { y: 0.1 });
  add(g, new THREE.BoxGeometry(1.08, 0.05, 1.08), M.gold, { y: 0.21 });
  // body
  add(g, new THREE.BoxGeometry(0.84, 0.8, 0.84), M.white, { y: 0.63 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(g, new THREE.BoxGeometry(0.075, 0.82, 0.075), M.gold, { x: sx * 0.42, y: 0.63, z: sz * 0.42 });
  // arched niches on the front (glowing buddha) and sides
  add(g, new THREE.BoxGeometry(0.4, 0.52, 0.06), o.glow ? M.niche : M.nicheDark, { y: 0.54, z: 0.41 });
  add(g, new THREE.BoxGeometry(0.5, 0.06, 0.06), M.gold, { y: 0.27, z: 0.44 });
  for (const sx of [-1, 1]) add(g, new THREE.BoxGeometry(0.06, 0.56, 0.06), M.gold, { x: sx * 0.23, y: 0.55, z: 0.44 });
  add(g, new THREE.ConeGeometry(0.3, 0.36, 3), M.goldMain, { y: 0.98, z: 0.44, s: [1, 1, 0.22] });
  add(g, new THREE.SphereGeometry(0.075, 6, 5), M.goldMain, { y: 0.39, z: 0.45, s: [1, 0.8, 0.6] });
  add(g, new THREE.SphereGeometry(0.05, 6, 5), M.goldMain, { y: 0.52, z: 0.45 });
  for (const sx of [-1, 1]) {
    add(g, new THREE.BoxGeometry(0.06, 0.4, 0.26), M.nicheDark, { x: sx * 0.42, y: 0.58 });
    add(g, new THREE.ConeGeometry(0.18, 0.24, 3), M.gold, { x: sx * 0.44, y: 0.88, ry: Math.PI / 2, s: [0.22, 1, 1] });
  }
  // cornice
  add(g, new THREE.BoxGeometry(1.0, 0.09, 1.0), M.gold, { y: 1.07 });
  // stacked tiers with pinnacles at every corner
  let yy = 1.11;
  const tiers = [0.82, 0.66, 0.52, 0.4, 0.3];
  tiers.forEach((w, i) => {
    add(g, new THREE.BoxGeometry(w, 0.15, w), i % 2 ? M.goldMain : M.gold, { y: yy + 0.075 });
    if (i < 3)
      for (const sx of [-1, 1])
        for (const sz of [-1, 1]) {
          add(g, new THREE.ConeGeometry(0.045, 0.26, 4), M.goldMain, { x: (sx * w) / 2, y: yy + 0.28, z: (sz * w) / 2 });
          add(g, new THREE.BoxGeometry(0.07, 0.05, 0.07), M.gold, { x: (sx * w) / 2, y: yy + 0.17, z: (sz * w) / 2 });
        }
    yy += 0.15;
  });
  const pts = [V2(0.17, 0), V2(0.18, 0.14), V2(0.13, 0.46), V2(0.07, 0.88), V2(0.0, 1.18)];
  add(g, new THREE.LatheGeometry(pts, 8), M.goldMain, { y: yy });
  add(g, new THREE.CylinderGeometry(0.04, 0.08, 0.05, 6), M.gold, { y: yy + 1.04 });
  add(g, new THREE.SphereGeometry(0.035, 4, 3), M.jewel, { y: yy + 1.24, cast: false });
  return g;
}

/** golden lantern shrine on a red pillar (scattered among the worshippers) */
export function lanternShrine(parent, x, z, s, M) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.scale.setScalar(s);
  parent.add(g);
  add(g, new THREE.BoxGeometry(0.4, 0.16, 0.4), M.white, { y: 0.08 });
  add(g, new THREE.BoxGeometry(0.16, 0.9, 0.16), M.darkRed, { y: 0.6 });
  add(g, new THREE.BoxGeometry(0.22, 0.06, 0.22), M.gold, { y: 0.35 });
  add(g, new THREE.BoxGeometry(0.34, 0.06, 0.34), M.gold, { y: 1.06 });
  const lamp = add(g, new THREE.BoxGeometry(0.24, 0.26, 0.24), M.lamp, { y: 1.22, cast: false });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(g, new THREE.BoxGeometry(0.04, 0.28, 0.04), M.gold, { x: sx * 0.13, y: 1.22, z: sz * 0.13 });
  const roof = new THREE.CylinderGeometry(0.08, 0.3, 0.2, 4);
  roof.rotateY(Math.PI / 4);
  add(g, roof, M.goldMain, { y: 1.45 });
  const roof2 = new THREE.CylinderGeometry(0.04, 0.18, 0.16, 4);
  roof2.rotateY(Math.PI / 4);
  add(g, roof2, M.goldMain, { y: 1.62 });
  add(g, new THREE.ConeGeometry(0.035, 0.3, 4), M.gold, { y: 1.85 });
  return { group: g, lamp };
}

// ---------------------------------------------------------------- satellite stupa
export function stupa(parent, x, y, z, s, M, white = false) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(s);
  parent.add(g);
  const body = white ? M.white : M.gold;
  let yy = 0;
  add(g, new THREE.BoxGeometry(1.1, 0.22, 1.1), white ? M.white : M.gold, { y: 0.11 });
  add(g, new THREE.BoxGeometry(1.16, 0.05, 1.16), M.gold, { y: 0.22 });
  yy = 0.22;
  add(g, new THREE.CylinderGeometry(0.5, 0.54, 0.2, 8), body, { y: yy + 0.1, ry: Math.PI / 8 });
  yy += 0.2;
  add(g, new THREE.CylinderGeometry(0.44, 0.48, 0.15, 8), body, { y: yy + 0.075, ry: Math.PI / 8 });
  yy += 0.15;
  const bell = [V2(0.44, 0), V2(0.46, 0.1), V2(0.43, 0.34), V2(0.33, 0.6), V2(0.21, 0.78), V2(0.15, 0.86)];
  add(g, new THREE.LatheGeometry(bell, 14), body, { y: yy });
  if (white) add(g, new THREE.TorusGeometry(0.46, 0.03, 4, 14), M.gold, { y: yy + 0.12, rx: Math.PI / 2 });
  yy += 0.86;
  add(g, new THREE.CylinderGeometry(0.15, 0.16, 0.08, 12), M.gold, { y: yy + 0.04 });
  yy += 0.08;
  add(g, new THREE.CylinderGeometry(0.12, 0.13, 0.07, 12), M.gold, { y: yy + 0.035 });
  yy += 0.07;
  const bud = [V2(0.12, 0), V2(0.125, 0.14), V2(0.085, 0.44), V2(0.035, 0.7), V2(0, 0.78)];
  add(g, new THREE.LatheGeometry(bud, 10), M.gold, { y: yy });
  yy += 0.72;
  add(g, new THREE.CylinderGeometry(0.05, 0.08, 0.05, 8), M.gold, { y: yy });
  add(g, new THREE.SphereGeometry(0.03, 5, 4), M.jewel, { y: yy + 0.12, cast: false });
  return g;
}

// ---------------------------------------------------------------- tiered roof
export function pyatthat(parent, w, tiers, y, M) {
  const g = new THREE.Group();
  g.position.y = y;
  parent.add(g);
  let yy = 0;
  let s = w;
  for (let i = 0; i < tiers; i++) {
    const hw = s / 2;
    const rb = hw * Math.SQRT2;
    const h = 0.16 + 0.05 * s;
    const geo = new THREE.CylinderGeometry(rb * 0.56, rb, h, 4, 1);
    geo.rotateY(Math.PI / 4);
    add(g, geo, M.roof, { y: yy + h / 2 });
    add(g, new THREE.BoxGeometry(s + 0.08, 0.06, s + 0.08), M.gold, { y: yy + 0.03 });
    for (const [mx, mz] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) add(g, new THREE.ConeGeometry(0.05, 0.22, 4), M.gold, { x: mx * hw * 0.98, y: yy + 0.12, z: mz * hw * 0.98 });
    for (const sx of [-1, 1])
      for (const sz of [-1, 1]) add(g, new THREE.ConeGeometry(0.03, 0.2, 4), M.gold, { x: sx * hw, y: yy + 0.1, z: sz * hw, rz: -sx * 0.35, rx: sz * 0.35 });
    yy += h;
    const ds = s * 0.5;
    add(g, new THREE.BoxGeometry(ds, 0.11, ds), M.white, { y: yy + 0.055 });
    add(g, new THREE.BoxGeometry(ds + 0.05, 0.05, ds + 0.05), M.gold, { y: yy + 0.11 });
    yy += 0.11;
    s *= 0.66;
  }
  add(g, new THREE.CylinderGeometry(0.02, s * 0.35, 0.55, 8), M.gold, { y: yy + 0.27 });
  add(g, new THREE.CylinderGeometry(0.04, 0.07, 0.04, 8), M.gold, { y: yy + 0.5 });
  add(g, new THREE.SphereGeometry(0.025, 5, 4), M.jewel, { y: yy + 0.6, cast: false });
  return { group: g, height: yy + 0.62 };
}

// ---------------------------------------------------------------- seated buddha
export function buddha(parent, x, y, z, s, M, ry = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = ry;
  g.scale.setScalar(s);
  parent.add(g);
  add(g, new THREE.BoxGeometry(0.62, 0.14, 0.42), M.red, { y: 0.07 });
  add(g, new THREE.BoxGeometry(0.66, 0.04, 0.46), M.gold, { y: 0.15 });
  add(g, new THREE.SphereGeometry(1, 10, 6), M.goldMain, { y: 0.24, s: [0.26, 0.1, 0.18] });
  add(g, new THREE.SphereGeometry(1, 10, 8), M.goldMain, { y: 0.42, s: [0.17, 0.2, 0.12] });
  add(g, new THREE.SphereGeometry(0.085, 10, 8), M.goldMain, { y: 0.66 });
  add(g, new THREE.ConeGeometry(0.035, 0.1, 6), M.goldMain, { y: 0.77 });
  add(g, new THREE.TorusGeometry(0.2, 0.02, 4, 16), M.gold, { y: 0.6, z: -0.14 });
  return g;
}

// ---------------------------------------------------------------- tazaung pavilion
export function pavilion(parent, o, M) {
  const { x, y, z, w, d, colH = 1.1, tiers = 3, ry = 0, buddhaInside = true, wall = true } = o;
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = ry;
  parent.add(g);
  add(g, new THREE.BoxGeometry(w + 0.24, 0.16, d + 0.24), M.stone, { y: 0.08 });
  add(g, new THREE.BoxGeometry(w + 0.28, 0.04, d + 0.28), M.gold, { y: 0.16 });
  const cols = w > 1.8 ? [-1, -1 / 3, 1 / 3, 1] : [-1, 1];
  for (const cx of cols)
    for (const cz of [-1, 1]) {
      const px = (cx * (w - 0.16)) / 2;
      const pz = (cz * (d - 0.16)) / 2;
      add(g, new THREE.CylinderGeometry(0.075, 0.085, colH, 6), M.red, { x: px, y: 0.16 + colH / 2, z: pz });
      add(g, new THREE.BoxGeometry(0.16, 0.08, 0.16), M.gold, { x: px, y: 0.16 + colH - 0.04, z: pz });
      add(g, new THREE.BoxGeometry(0.16, 0.06, 0.16), M.gold, { x: px, y: 0.19, z: pz });
    }
  if (wall) {
    add(g, new THREE.BoxGeometry(w - 0.1, colH, 0.08), M.white, { y: 0.16 + colH / 2, z: -d / 2 + 0.08 });
    add(g, new THREE.BoxGeometry(w - 0.1, 0.06, 0.1), M.gold, { y: 0.16 + colH * 0.82, z: -d / 2 + 0.1 });
  }
  if (buddhaInside) buddha(g, 0, 0.16, -d / 2 + 0.38, Math.min(w, 1.6) * 0.62, M);
  const top = 0.16 + colH;
  add(g, new THREE.BoxGeometry(w + 0.42, 0.13, d + 0.42), M.darkRed, { y: top + 0.065 });
  add(g, new THREE.BoxGeometry(w + 0.46, 0.035, d + 0.46), M.gold, { y: top + 0.01 });
  // fretwork valance under the eaves
  for (const sz of [-1, 1]) add(g, new THREE.BoxGeometry(w + 0.3, 0.1, 0.02), M.gold, { y: top - 0.06, z: sz * (d / 2 + 0.16) });
  for (const sx of [-1, 1]) add(g, new THREE.BoxGeometry(0.02, 0.1, d + 0.3), M.gold, { y: top - 0.06, x: sx * (w / 2 + 0.16) });
  pyatthat(g, Math.min(w, d) + 0.25, tiers, top + 0.13, M);
  return g;
}

// ---------------------------------------------------------------- chinthe guardian lion
export function chinthe(parent, x, y, z, ry, M, s = 1) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = ry;
  g.scale.setScalar(s);
  parent.add(g);
  add(g, new THREE.BoxGeometry(0.5, 0.18, 0.62), M.stone, { y: 0.09 });
  add(g, new THREE.BoxGeometry(0.38, 0.26, 0.5), M.gold, { y: 0.31, z: -0.04 });
  add(g, new THREE.BoxGeometry(0.34, 0.42, 0.26), M.gold, { y: 0.55, z: 0.1, rx: -0.15 });
  add(g, new THREE.BoxGeometry(0.4, 0.3, 0.12), M.gold, { y: 0.78, z: 0.06 });
  add(g, new THREE.BoxGeometry(0.28, 0.24, 0.26), M.gold, { y: 0.86, z: 0.18 });
  add(g, new THREE.BoxGeometry(0.2, 0.06, 0.04), M.red, { y: 0.79, z: 0.32 });
  for (const sx of [-1, 1]) {
    add(g, new THREE.BoxGeometry(0.04, 0.04, 0.02), M.gold, { x: sx * 0.07, y: 0.9, z: 0.32 });
    add(g, new THREE.BoxGeometry(0.08, 0.3, 0.08), M.gold, { x: sx * 0.11, y: 0.33, z: 0.2 });
  }
  add(g, new THREE.ConeGeometry(0.05, 0.12, 4), M.gold, { y: 1.03, z: 0.12 });
  return g;
}

// ---------------------------------------------------------------- gateway (at the foot of the stairs)
export function gateway(parent, o, M) {
  const { x, z, ry, width = 3.0 } = o;
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = ry;
  parent.add(g);
  const hw = width / 2;
  for (const sx of [-1, 1]) {
    add(g, new THREE.BoxGeometry(0.42, 0.18, 0.42), M.stone, { x: sx * hw, y: 0.09 });
    add(g, new THREE.BoxGeometry(0.32, 1.85, 0.32), M.white, { x: sx * hw, y: 1.1 });
    add(g, new THREE.BoxGeometry(0.36, 0.08, 0.36), M.gold, { x: sx * hw, y: 0.6 });
    add(g, new THREE.BoxGeometry(0.36, 0.1, 0.36), M.gold, { x: sx * hw, y: 2.0 });
  }
  add(g, new THREE.BoxGeometry(width + 0.5, 0.26, 0.5), M.darkRed, { y: 2.18 });
  add(g, new THREE.BoxGeometry(width + 0.55, 0.04, 0.55), M.gold, { y: 2.05 });
  add(g, new THREE.BoxGeometry(width - 0.3, 0.12, 0.04), M.gold, { y: 1.92, z: 0.18 });
  pyatthat(g, 1.9, 3, 2.31, M);
  for (const sx of [-1, 1]) chinthe(g, sx * (hw + 0.75), 0, 0.35, 0, M, 0.95);
  return g;
}
