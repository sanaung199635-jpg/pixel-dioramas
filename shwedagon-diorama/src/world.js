// The diorama: a raised marble terrace with stone walls and a white balustrade,
// the great zedi wrapped in a ring of spired shrines, green-roofed pavilions,
// corner stairways guarded by golden chinthe, palms and flowering trees.
import * as THREE from 'three';
import { rng, pick, repeatTex } from './textures.js';
import { add, mat, tag, pavilion, chinthe, buildMainPagoda, spiredShrine, pinnacle, stupa, lanternShrine } from './pagoda.js';

export const PLAZA_Y = 0;
export const HX = 13; // half width (x)
export const HZ = 11; // half depth (z)
export const WALL_H = 1.7;
export const PAGODA = new THREE.Vector3(-1.2, 0, -1.6);

// stairways: [face, centre along face, width]
export const STAIRS = [
  { face: 'z', c: -7.6, w: 2.6 },
  { face: 'x', c: 5.2, w: 2.6 },
];

function boxGeo(w, h, d, ts = 1) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++)
    for (let i = 0; i < 4; i++) {
      const k = f * 4 + i;
      uv.setXY(k, uv.getX(k) * dims[f][0] * ts, uv.getY(k) * dims[f][1] * ts);
    }
  return g;
}

// ---------------------------------------------------------------- terrace block
export function buildBase(root, tex, M) {
  const wall = new THREE.MeshStandardMaterial({ map: repeatTex(tex.brick, 1), roughness: 0.95 });
  const marble = new THREE.MeshStandardMaterial({ map: repeatTex(tex.marble, 1), roughness: 0.6 });
  add(root, boxGeo(2 * HX, WALL_H, 2 * HZ, 1 / 2), [wall, wall, marble, wall, wall, wall], { y: -WALL_H / 2 });
  // foot plinth + mouldings
  add(root, new THREE.BoxGeometry(2 * HX + 0.36, 0.24, 2 * HZ + 0.36), mat('#a99f8e'), { y: -WALL_H + 0.12 });
  add(root, new THREE.BoxGeometry(2 * HX + 0.2, 0.12, 2 * HZ + 0.2), mat('#b8ae9d'), { y: -WALL_H + 0.3 });
  add(root, new THREE.BoxGeometry(2 * HX + 0.14, 0.12, 2 * HZ + 0.14), M.white, { y: -0.08 });
  add(root, new THREE.BoxGeometry(2 * HX + 0.18, 0.04, 2 * HZ + 0.18), M.gold, { y: -0.17 });

  // circumambulation walkway (lighter checker ring)
  const walkMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.walk, 1), roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  const ring = new THREE.RingGeometry(8.2, 9.3, 88, 1);
  ring.rotateX(-Math.PI / 2);
  const p = ring.attributes.position;
  const uv = ring.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i) / 2, p.getZ(i) / 2);
  add(root, ring, walkMat, { x: PAGODA.x, y: 0.004, z: PAGODA.z, cast: false });
}

export function stairGap(face, t) {
  return STAIRS.some((s) => s.face === face && Math.abs(t - s.c) < s.w / 2 + 0.2);
}

export function buildBalustrade(root, M) {
  const edges = [
    { face: 'z', fixed: HZ - 0.12, axis: 'x', len: HX },
    { face: 'z', fixed: -HZ + 0.12, axis: 'x', len: HX, back: true },
    { face: 'x', fixed: HX - 0.12, axis: 'z', len: HZ },
    { face: 'x', fixed: -HX + 0.12, axis: 'z', len: HZ, back: true },
  ];
  const postGeo = new THREE.BoxGeometry(0.2, 0.46, 0.2);
  const capGeo = new THREE.BoxGeometry(0.24, 0.05, 0.24);
  const finGeo = new THREE.ConeGeometry(0.06, 0.18, 4);
  const balGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.22, 5);
  for (const e of edges) {
    const n = Math.round((2 * e.len - 0.2) / 0.9);
    let prev = null;
    for (let i = 0; i <= n; i++) {
      const t = -e.len + 0.1 + (i * (2 * e.len - 0.2)) / n;
      const gap = !e.back && stairGap(e.face, t);
      const pos = e.axis === 'x' ? [t, e.fixed] : [e.fixed, t];
      if (!gap) {
        add(root, postGeo, M.white, { x: pos[0], y: 0.23, z: pos[1] });
        add(root, capGeo, M.gold, { x: pos[0], y: 0.48, z: pos[1] });
        add(root, finGeo, M.gold, { x: pos[0], y: 0.59, z: pos[1] });
      }
      if (prev !== null && !gap && !prev.gap) {
        const mid = (t + prev.t) / 2;
        const L = t - prev.t;
        const dims = e.axis === 'x' ? [L, 0.08, 0.1] : [0.1, 0.08, L];
        const mp = e.axis === 'x' ? [mid, e.fixed] : [e.fixed, mid];
        add(root, new THREE.BoxGeometry(...dims), M.white, { x: mp[0], y: 0.38, z: mp[1] });
        add(root, new THREE.BoxGeometry(...dims), M.white, { x: mp[0], y: 0.12, z: mp[1] });
        for (let k = 1; k < 4; k++) {
          const bt = prev.t + (L * k) / 4;
          const bp = e.axis === 'x' ? [bt, e.fixed] : [e.fixed, bt];
          add(root, balGeo, M.white, { x: bp[0], y: 0.25, z: bp[1], cast: false });
        }
      }
      prev = { t, gap };
    }
  }
}

// ---------------------------------------------------------------- stairs
export function buildStairs(root, M) {
  const n = 10;
  const rise = WALL_H / n;
  const run = 0.3;
  const stepMat = mat('#efe9dd');
  const noseMat = mat('#d9cfbd');
  for (const s of STAIRS) {
    const g = new THREE.Group();
    // local frame: stairs descend along +z away from the wall face
    if (s.face === 'z') g.position.set(s.c, 0, HZ);
    else {
      g.position.set(HX, 0, s.c);
      g.rotation.y = Math.PI / 2;
    }
    root.add(g);
    tag(g, 'stairway');
    for (let i = 0; i < n; i++) {
      const top = -(i + 1) * rise;
      const h = top + WALL_H;
      if (h > 0.001) add(g, new THREE.BoxGeometry(s.w, h, run), stepMat, { y: -WALL_H + h / 2, z: i * run + run / 2 });
      add(g, new THREE.BoxGeometry(s.w + 0.02, 0.025, 0.04), noseMat, { y: top + 0.012, z: i * run + 0.02, cast: false });
      for (const sx of [-1, 1]) add(g, new THREE.BoxGeometry(0.28, h + 0.4, run), M.white, { x: sx * (s.w / 2 + 0.14), y: -WALL_H + (h + 0.4) / 2, z: i * run + run / 2 });
    }
    const L = Math.hypot(n * run, WALL_H);
    const ang = Math.atan2(WALL_H, n * run);
    for (const sx of [-1, 1]) {
      add(g, new THREE.BoxGeometry(0.32, 0.06, L), M.gold, { x: sx * (s.w / 2 + 0.14), y: -WALL_H / 2 + 0.42, z: (n * run) / 2, rx: ang });
      tag(chinthe(g, sx * (s.w / 2 + 0.75), -WALL_H, n * run - 0.2, 0, M, 1.0), 'chinthe');
      tag(chinthe(g, sx * (s.w / 2 + 0.4), 0, -0.55, 0, M, 0.7), 'chinthe');
    }
    add(g, new THREE.BoxGeometry(s.w + 2.6, 0.08, 1.3), mat('#cfc5b4'), { y: -WALL_H + 0.04, z: n * run + 0.3 });
    spiredShrine(g, 0, 0, -1.7, 1.75, 0, M, { glow: true });
  }
}

// ---------------------------------------------------------------- plaza
export function buildPlaza(root, M) {
  const main = buildMainPagoda(root, M, PAGODA.x, PAGODA.z);

  // dense ring of spired shrines hugging the zedi (the 4 great shrines sit on the diagonals)
  const N = 30;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2 + 0.06;
    const m = (((a - Math.PI / 4) % (Math.PI / 2)) + Math.PI / 2) % (Math.PI / 2);
    if (m < 0.27 || Math.PI / 2 - m < 0.27) continue;
    const r = 7.05;
    tag(spiredShrine(root, PAGODA.x + Math.cos(a) * r, 0, PAGODA.z + Math.sin(a) * r, i % 3 === 0 ? 1.45 : 1.25, Math.atan2(Math.cos(a), Math.sin(a)), M, { glow: i % 2 === 0 }), 'satellites');
  }
  for (let i = 0; i < 56; i++) {
    const a = (i / 56) * Math.PI * 2;
    tag(pinnacle(root, PAGODA.x + Math.cos(a) * 8.0, 0, PAGODA.z + Math.sin(a) * 8.0, 0.6, M), 'satellites');
  }

  // pavilions with green tiered roofs
  tag(pavilion(root, { x: -9.4, y: 0, z: -7.2, w: 3.8, d: 3.0, colH: 1.35, tiers: 5, ry: Math.PI / 4 }, M), 'tazaung');
  tag(pavilion(root, { x: 9.6, y: 0, z: -1.4, w: 3.6, d: 3.1, colH: 1.3, tiers: 4, ry: -Math.PI / 2 }, M), 'tazaung');
  tag(pavilion(root, { x: -10.4, y: 0, z: 3.2, w: 2.2, d: 2.0, colH: 1.1, tiers: 4, ry: Math.PI / 2 }, M), 'tazaung');
  tag(pavilion(root, { x: 5.6, y: 0, z: -9.3, w: 2.4, d: 2.0, colH: 1.1, tiers: 4, ry: 0 }, M), 'tazaung');

  // white & gold shrines + stupas around the edges
  tag(spiredShrine(root, 9.4, 0, -8.6, 1.6, -Math.PI / 4, M, { glow: true }), 'satellites');
  tag(spiredShrine(root, 11.6, 0, -6.0, 1.1, -Math.PI / 2, M), 'satellites');
  tag(spiredShrine(root, -11.4, 0, -1.6, 1.35, Math.PI / 2, M, { glow: true }), 'satellites');
  tag(spiredShrine(root, -5.6, 0, -10.0, 1.2, 0, M), 'satellites');
  tag(spiredShrine(root, 11.8, 0, 10.0, 1.0, -Math.PI * 0.75, M), 'satellites');
  tag(spiredShrine(root, -11.8, 0, 10.0, 1.1, Math.PI * 0.75, M, { glow: true }), 'satellites');
  tag(stupa(root, -11.4, 0, 7.4, 0.9, M, true), 'satellites');
  tag(stupa(root, 11.6, 0, 7.6, 0.6, M, true), 'satellites');
  tag(stupa(root, 1.9, 0, -10.2, 0.6, M, false), 'satellites');

  // offerings, lamps, incense
  const lamps = [];
  const incense = [];
  const obstacles = [];
  const fr = rng(88);
  const flowerCols = ['#f4f1e6', '#f2c94c', '#e86a8a', '#f08a3c', '#d94b3d'];
  const offering = (x, z, ry) => {
    obstacles.push([x, z, 0.65]);
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = ry;
    root.add(g);
    add(g, new THREE.BoxGeometry(1.0, 0.06, 0.48), M.red, { y: 0.36 });
    add(g, new THREE.BoxGeometry(1.04, 0.03, 0.52), M.gold, { y: 0.4 });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(g, new THREE.BoxGeometry(0.05, 0.36, 0.05), M.darkRed, { x: sx * 0.45, y: 0.18, z: sz * 0.19 });
    for (let i = 0; i < 4; i++) {
      const vx = -0.36 + i * 0.24;
      add(g, new THREE.CylinderGeometry(0.05, 0.035, 0.12, 6), M.gold, { x: vx, y: 0.48 });
      for (let k = 0; k < 4; k++)
        add(g, new THREE.IcosahedronGeometry(0.035, 0), mat(pick(fr, flowerCols)), { x: vx + (fr() - 0.5) * 0.08, y: 0.57 + fr() * 0.05, z: (fr() - 0.5) * 0.08, cast: false });
    }
    for (let i = 0; i < 5; i++) lamps.push(add(g, new THREE.SphereGeometry(0.018, 4, 3), M.flame, { x: -0.4 + i * 0.2, y: 0.46, z: 0.17, cast: false }));
  };
  const burner = (x, z) => {
    obstacles.push([x, z, 0.45]);
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    root.add(g);
    const pts = [[0, 0.25], [0.2, 0.25], [0.3, 0.32], [0.34, 0.48], [0.3, 0.62], [0.33, 0.66]].map(([r, h]) => new THREE.Vector2(r, h));
    add(g, new THREE.LatheGeometry(pts, 12), M.gold);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      add(g, new THREE.CylinderGeometry(0.03, 0.02, 0.3, 4), M.gold, { x: Math.cos(a) * 0.2, y: 0.13, z: Math.sin(a) * 0.2 });
    }
    for (let i = 0; i < 7; i++)
      add(g, new THREE.CylinderGeometry(0.008, 0.008, 0.3, 3), mat('#b5452f'), { x: (fr() - 0.5) * 0.3, y: 0.72, z: (fr() - 0.5) * 0.3, cast: false });
    incense.push(new THREE.Vector3(x, 0.9, z));
  };
  const lampPost = (x, z) => {
    obstacles.push([x, z, 0.3]);
    add(root, new THREE.BoxGeometry(0.3, 0.2, 0.3), M.white, { x, y: 0.1, z });
    add(root, new THREE.CylinderGeometry(0.045, 0.06, 1.25, 6), M.darkRed, { x, y: 0.82, z });
    add(root, new THREE.CylinderGeometry(0.1, 0.07, 0.12, 8), M.gold, { x, y: 1.45, z });
    lamps.push(add(root, new THREE.SphereGeometry(0.1, 8, 6), M.lamp, { x, y: 1.58, z, cast: false }));
    add(root, new THREE.ConeGeometry(0.12, 0.26, 6), M.gold, { x, y: 1.78, z });
  };
  const planter = (x, z, w = 1.0) => {
    obstacles.push([x, z, w / 2 + 0.2]);
    add(root, new THREE.BoxGeometry(w, 0.28, 0.5), M.darkRed, { x, y: 0.14, z });
    add(root, new THREE.BoxGeometry(w + 0.04, 0.04, 0.54), M.gold, { x, y: 0.29, z });
    for (let i = 0; i < Math.round(w * 4); i++) {
      add(root, new THREE.IcosahedronGeometry(0.14, 1), mat(pick(fr, ['#4f7d3a', '#5f8c42'])), { x: x - w / 2 + 0.15 + i * 0.25, y: 0.38, z: z + (fr() - 0.5) * 0.15, cast: false });
      add(root, new THREE.IcosahedronGeometry(0.05, 0), mat(pick(fr, flowerCols)), { x: x - w / 2 + 0.15 + i * 0.25, y: 0.5, z: z + (fr() - 0.5) * 0.2, cast: false });
    }
  };

  offering(PAGODA.x + 4.6, PAGODA.z + 8.6, 0.5);
  offering(PAGODA.x + 8.7, PAGODA.z + 4.3, 1.1);
  burner(PAGODA.x + 7.4, PAGODA.z + 7.4);
  burner(-6.4, 6.2);
  burner(7.6, -6.9);
  for (const [x, z] of [[-4.4, 9.7], [0.8, 9.7], [5.8, 9.7], [11.7, 1.4], [11.7, 8.2], [-11.7, 5.4], [-10.6, -4.8], [8.6, -7.9]]) lampPost(x, z);
  planter(-1.8, 10.1, 1.6);
  planter(3.3, 10.1, 1.4);
  planter(8.6, 10.1, 1.6);
  for (const [x, z] of [[-6.8, 7.6], [-3.2, 8.6], [10.0, 4.2]]) {
    tag(pinnacle(root, x, 0, z, 1.0, M), 'satellites');
    obstacles.push([x, z, 0.3]);
  }
  // big structures + stair heads + trees
  obstacles.push([9.6, -1.4, 2.3], [-10.4, 3.2, 1.6], [-8.4, 5.4, 0.7], [-11.4, 7.4, 0.7], [11.6, 7.6, 0.5], [11.8, 10.0, 0.8], [-11.8, 10.0, 0.8]);
  obstacles.push([-7.6, 9.3, 1.3], [11.3, 5.2, 1.3]);

  // big structures as obstacles
  obstacles.push([-9.4, -7.2, 2.4], [5.6, -9.3, 1.6], [9.4, -8.6, 1.2], [11.6, -6.0, 0.8], [-11.4, -1.6, 1.0], [-5.6, -10.0, 0.9], [1.9, -10.2, 0.6]);
  const clear = (x, z, r) => obstacles.every(([ox, oz, or]) => Math.hypot(x - ox, z - oz) > or + r);
  const inside = (x, z, m) => Math.abs(x) < HX - m && Math.abs(z) < HZ - m;

  // second ring of shrines filling the back half of the terrace
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const x = PAGODA.x + Math.cos(a) * 9.7;
    const z = PAGODA.z + Math.sin(a) * 9.7;
    if (z > PAGODA.z + 2.2 || !inside(x, z, 1.25) || !clear(x, z, 0.75)) continue;
    tag(spiredShrine(root, x, 0, z, 1.15, Math.atan2(Math.cos(a), Math.sin(a)), M, { glow: i % 2 === 0 }), 'satellites');
    obstacles.push([x, z, 0.75]);
  }

  // golden lantern shrines scattered among the worshippers
  const lanterns = [];
  for (const [r, a] of [[10.4, 0.3], [10.4, 0.78], [10.4, 1.25], [11.9, 0.1], [11.9, 0.55], [11.9, 1.0], [10.4, 1.95], [10.4, -0.3]]) {
    const x = PAGODA.x + Math.cos(a) * r;
    const z = PAGODA.z + Math.sin(a) * r;
    if (!inside(x, z, 1.1) || !clear(x, z, 0.35)) continue;
    const l = lanternShrine(root, x, z, 1.15, M);
    tag(l.group, 'lantern');
    lamps.push(l.lamp);
    obstacles.push([x, z, 0.35]);
  }

  // dense decoration along the inner edge: planters, pinnacle posts, potted bushes
  const edgePts = [];
  for (let t = -HX + 1.3; t < HX - 1.0; t += 1.45) edgePts.push([t, HZ - 1.0], [t, -HZ + 1.0]);
  for (let t = -HZ + 1.3; t < HZ - 1.0; t += 1.45) edgePts.push([HX - 1.0, t], [-HX + 1.0, t]);
  let k = 0;
  for (const [x, z] of edgePts) {
    if (!clear(x, z, 0.45) || Math.hypot(x - PAGODA.x, z - PAGODA.z) < 9.2) continue;
    const kind = k++ % 3;
    if (kind === 0) {
      add(root, new THREE.BoxGeometry(0.62, 0.3, 0.62), M.darkRed, { x, y: 0.15, z });
      add(root, new THREE.BoxGeometry(0.66, 0.04, 0.66), M.gold, { x, y: 0.31, z });
      add(root, new THREE.IcosahedronGeometry(0.34, 1), mat(pick(fr, ['#4f7d3a', '#5f8c42', '#46733a']), { flatShading: true }), { x, y: 0.55, z, rx: fr() * 3 });
      for (let f = 0; f < 5; f++)
        add(root, new THREE.IcosahedronGeometry(0.06, 0), mat(pick(fr, flowerCols)), { x: x + (fr() - 0.5) * 0.5, y: 0.62 + fr() * 0.2, z: z + (fr() - 0.5) * 0.5, cast: false });
    } else if (kind === 1) {
      tag(pinnacle(root, x, 0, z, 1.35, M), 'satellites');
    } else {
      lampPost(x, z);
    }
    obstacles.push([x, z, 0.45]);
  }

  return { main, lamps, incense, obstacles };
}

// ---------------------------------------------------------------- greenery
function palm(root, x, z, s, seed, swayers) {
  const r = rng(seed);
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  root.add(g);
  const segs = 7;
  const H = 3.4 * s;
  const lean = (r() - 0.5) * 0.3;
  const dirA = r() * Math.PI * 2;
  let top = new THREE.Vector3();
  for (let i = 0; i < segs; i++) {
    const t = i / segs;
    const off = lean * t * t * H;
    top = new THREE.Vector3(Math.cos(dirA) * off, t * H + H / segs / 2, Math.sin(dirA) * off);
    add(g, new THREE.CylinderGeometry(0.1 * s, 0.13 * s, H / segs + 0.02, 7), mat(i % 2 ? '#8a7356' : '#9b8364', { flatShading: true }), { x: top.x, y: top.y, z: top.z });
  }
  const crown = new THREE.Group();
  crown.position.set(top.x, H, top.z);
  g.add(crown);
  for (let i = 0; i < 15; i++) {
    const a = (i / 15) * Math.PI * 2 + r() * 0.3;
    const frond = new THREE.Group();
    frond.rotation.y = -a;
    crown.add(frond);
    const geo = new THREE.ConeGeometry(0.32 * s, 1.55 * s, 4);
    geo.translate(0, 0.78 * s, 0);
    geo.scale(1, 1, 0.3);
    add(frond, geo, mat(pick(r, ['#4f8a3e', '#5f9a45', '#6aa54c', '#3f7a35']), { flatShading: true }), { rz: -(i % 3 === 0 ? 0.55 : 1.0 + r() * 0.5) });
  }
  const ph = r() * 6;
  swayers.push((t) => {
    crown.rotation.z = Math.sin(t * 0.9 + ph) * 0.06;
    crown.rotation.x = Math.sin(t * 0.7 + ph) * 0.04;
  });
}

function tree(root, x, z, s, seed, swayers, blossom) {
  const r = rng(seed);
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  root.add(g);
  add(g, new THREE.BoxGeometry(0.8 * s, 0.3, 0.8 * s), mat('#a8322a'), { y: 0.15 });
  add(g, new THREE.BoxGeometry(0.84 * s, 0.04, 0.84 * s), mat('#d9a63a', { metalness: 0.5, roughness: 0.4 }), { y: 0.3 });
  add(g, new THREE.CylinderGeometry(0.1 * s, 0.18 * s, 1.4 * s, 7), mat('#6c4f3a', { flatShading: true }), { y: 0.7 * s });
  const crown = new THREE.Group();
  crown.position.y = 1.35 * s;
  g.add(crown);
  const cols = blossom ? ['#5d8a42', '#e46a8f', '#f08fb0', '#d94b6e', '#f2a8c2'] : ['#4b7838', '#5d8a42', '#77a04c', '#93b656'];
  for (let i = 0; i < 10; i++) {
    const h = i / 9;
    const a = r() * Math.PI * 2;
    const rad = (1 - h * 0.6) * 0.9 * s * (0.35 + r() * 0.65);
    add(crown, new THREE.IcosahedronGeometry((0.38 + r() * 0.26) * s, 1), mat(blossom ? pick(r, cols) : cols[Math.min(3, Math.floor(h * 3 + r()))], { flatShading: true }), {
      x: Math.cos(a) * rad,
      y: h * 1.1 * s,
      z: Math.sin(a) * rad,
      rx: r() * 3,
    });
  }
  const ph = r() * 6;
  swayers.push((t) => {
    crown.rotation.z = Math.sin(t * 0.8 + ph) * 0.03;
  });
}

export function buildGreenery(root, swayers) {
  const palms = [
    [-7.4, -10.0, 1.0], [-2.2, -9.8, 1.1], [2.6, -10.1, 0.95], [6.6, -10.1, 1.05], [12.0, -9.8, 1.0],
    [-12.1, -9.9, 1.1], [-12.1, -4.4, 1.0], [-12.0, 9.8, 0.9], [12.1, -3.4, 0.95], [-9.4, 10.0, 0.85],
  ];
  palms.forEach(([x, z, s], i) => palm(root, x, z, s, 40 + i, swayers));
  tree(root, -6.4, -9.7, 0.8, 70, swayers, true);
  tree(root, 9.5, -9.8, 0.8, 71, swayers, true);
  tree(root, -12.0, 0.9, 0.75, 72, swayers, true);
  tree(root, -8.4, 5.4, 0.7, 74, swayers, true);

  // clipped hedges inside the balustrade + greenery spilling down the walls
  const MAX = 460;
  const hedge = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, flatShading: true }), MAX);
  const d = new THREE.Object3D();
  const c = new THREE.Color();
  const r = rng(555);
  let k = 0;
  const put = (x, z, s, y = s * 0.7) => {
    if (k >= MAX) return;
    d.position.set(x, y, z);
    d.rotation.set(r() * 3, r() * 3, 0);
    d.scale.set(s, s * 0.85, s);
    d.updateMatrix();
    hedge.setMatrixAt(k, d.matrix);
    hedge.setColorAt(k, c.set(pick(r, ['#4f7d3a', '#5f8c42', '#6d9a49', '#46733a'])));
    k++;
  };
  for (let t = -HX + 0.6; t < HX - 0.5; t += 0.42) {
    if (!stairGap('z', t) && Math.abs(t - 3.3) > 1 && Math.abs(t + 1.8) > 1 && Math.abs(t - 8.6) > 1) put(t, HZ - 0.5 + (r() - 0.5) * 0.1, 0.22 + r() * 0.08);
    put(t, -HZ + 0.55, 0.26 + r() * 0.1);
  }
  for (let t = -HZ + 0.6; t < HZ - 0.5; t += 0.42) {
    if (!stairGap('x', t)) put(HX - 0.5, t, 0.22 + r() * 0.08);
    put(-HX + 0.55, t, 0.26 + r() * 0.1);
  }
  for (let i = 0; i < 110; i++) {
    const side = Math.floor(r() * 4);
    const t = (r() - 0.5) * 2;
    const [x, z] = side === 0 ? [t * HX, HZ + 0.06] : side === 1 ? [HX + 0.06, t * HZ] : side === 2 ? [t * HX, -HZ - 0.06] : [-HX - 0.06, t * HZ];
    if ((side === 0 && stairGap('z', x)) || (side === 1 && stairGap('x', z))) continue;
    put(x, z, 0.1 + r() * 0.14, -0.3 - r() * 1.2);
  }
  hedge.count = k;
  hedge.castShadow = true;
  hedge.receiveShadow = true;
  root.add(hedge);
}
