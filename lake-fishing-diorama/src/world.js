// Static diorama: terrain slab, cabin, dock, boat, fence, trees, grass, rocks, props.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { rng, repeatTex } from './textures.js';
import { LAKE, lakePoint, lakeInside, lakeNorm, WATER_Y } from './lake.js';

export const SLAB = { w: 25, d: 18 };
export const CABIN_POS = new THREE.Vector3(-8.6, 0, -4.6);
export const CAMPFIRE_POS = new THREE.Vector3(-8.4, 0, 4.9);
export const DOCK = { x0: -4.9, x1: 0.6, z: 1.5, width: 1.6, top: 0.2 };

// ---------------------------------------------------------------- helpers
const cache = new Map();
export function mat(color, o = {}) {
  const key = color + '|' + (o.flatShading ? 'f' : '') + (o.emissive || '') + (o.side || '') + (o.roughness ?? '');
  if (o.map || o.noCache) {
    const { noCache, ...rest } = o;
    return new THREE.MeshStandardMaterial({ color, roughness: 0.92, metalness: 0, ...rest });
  }
  if (!cache.has(key)) cache.set(key, new THREE.MeshStandardMaterial({ color, roughness: 0.92, metalness: 0, ...o }));
  return cache.get(key);
}

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

/** BoxGeometry whose UVs are in world units * ts (so textures keep a constant texel size) */
export function boxGeo(w, h, d, ts = 1) {
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

const pick = (r, a) => a[Math.floor(r() * a.length)];

// ---------------------------------------------------------------- terrain
export function buildTerrain(root, tex) {
  const { w, d } = SLAB;
  const hw = w / 2;
  const hd = d / 2;
  const shape = new THREE.Shape([
    new THREE.Vector2(-hw, -hd),
    new THREE.Vector2(hw, -hd),
    new THREE.Vector2(hw, hd),
    new THREE.Vector2(-hw, hd),
  ]);
  const hole = new THREE.Path();
  const N = 120;
  for (let i = 0; i < N; i++) {
    const [x, z] = lakePoint((i / N) * Math.PI * 2);
    if (i === 0) hole.moveTo(x, -z);
    else hole.lineTo(x, -z);
  }
  hole.closePath();
  shape.holes.push(hole);

  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.8, bevelEnabled: false, curveSegments: 1 });
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, -0.8, 0);
  const grassMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.grass, 1 / 6.5), roughness: 1 });
  const bankMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.soil, 1 / 3.6), roughness: 1 });
  const top = new THREE.Mesh(geo, [grassMat, bankMat]);
  top.receiveShadow = true;
  top.castShadow = true;
  root.add(top);

  // soil block underneath
  const soil2 = repeatTex(tex.soil, 1);
  add(root, boxGeo(w, 0.75, d, 1 / 3.6), new THREE.MeshStandardMaterial({ map: soil2, color: '#d4bea4', roughness: 1 }), {
    y: -0.8 - 0.375,
  });
  // darker bedrock strip
  add(root, boxGeo(w + 0.02, 0.22, d + 0.02, 1 / 2), new THREE.MeshStandardMaterial({ map: repeatTex(tex.stone, 1), color: '#8f8578', roughness: 1 }), {
    y: -1.55 - 0.11,
  });
  // turf lip around the edge
  const lip = mat('#7b9a4b');
  add(root, new THREE.BoxGeometry(w + 0.1, 0.17, 0.1), lip, { y: -0.075, z: hd });
  add(root, new THREE.BoxGeometry(w + 0.1, 0.17, 0.1), lip, { y: -0.075, z: -hd });
  add(root, new THREE.BoxGeometry(0.1, 0.17, d + 0.1), lip, { y: -0.075, x: hw });
  add(root, new THREE.BoxGeometry(0.1, 0.17, d + 0.1), lip, { y: -0.075, x: -hw });

  // lake bed
  const bedShape = new THREE.Shape();
  for (let i = 0; i < N; i++) {
    const [x, z] = lakePoint((i / N) * Math.PI * 2, 1.01);
    if (i === 0) bedShape.moveTo(x, -z);
    else bedShape.lineTo(x, -z);
  }
  const bedGeo = new THREE.ShapeGeometry(bedShape);
  bedGeo.rotateX(-Math.PI / 2);
  const bed = add(root, bedGeo, new THREE.MeshStandardMaterial({ map: repeatTex(tex.sand, 1 / 3.6), color: '#8fae8d', roughness: 1 }), {
    y: -0.79,
    cast: false,
  });
  // submerged pebbles
  const r = rng(9);
  for (let i = 0; i < 26; i++) {
    const th = r() * Math.PI * 2;
    const [x, z] = lakePoint(th, 0.55 + r() * 0.38);
    add(root, new THREE.DodecahedronGeometry(0.12 + r() * 0.14, 0), mat(pick(r, ['#6f7d70', '#7f8a7a', '#5f6e64']), { flatShading: true }), {
      x,
      z,
      y: -0.78,
      s: [1, 0.5, 1],
      ry: r() * 3,
      cast: false,
    });
  }
  return { top, bed };
}

export function buildPath(root, tex) {
  const r = rng(17);
  const m = new THREE.MeshStandardMaterial({
    map: repeatTex(tex.sand, 1 / 3.2),
    roughness: 1,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
  const curves = [
    new THREE.QuadraticBezierCurve(new THREE.Vector2(-7.8, -1.8), new THREE.Vector2(-7.0, 1.2), new THREE.Vector2(-4.7, 1.5)),
    new THREE.QuadraticBezierCurve(new THREE.Vector2(-7.3, 0.4), new THREE.Vector2(-8.6, 2.0), new THREE.Vector2(-8.2, 3.9)),
  ];
  const geo = new THREE.CircleGeometry(0.42, 8);
  geo.rotateX(-Math.PI / 2);
  // circle UVs -> world-ish units so the sand texture stays continuous
  curves.forEach((c, ci) => {
    const n = ci === 0 ? 16 : 9;
    for (let i = 0; i <= n; i++) {
      const p = c.getPoint(i / n);
      const s = 0.85 + r() * 0.45;
      const mesh = add(root, geo, m, { x: p.x + (r() - 0.5) * 0.2, y: 0.012, z: p.y + (r() - 0.5) * 0.2, s: [s * 1.2, 1, s], ry: r() * 3, cast: false });
      mesh.renderOrder = 1;
    }
  });
  // stepping stones near the dock
  for (let i = 0; i < 4; i++) {
    add(root, new THREE.CylinderGeometry(0.2, 0.22, 0.06, 7), mat('#a7a399', { flatShading: true }), {
      x: -6.4 + i * 0.45 + (r() - 0.5) * 0.1,
      y: 0.02,
      z: 1.0 + (r() - 0.5) * 0.4,
      ry: r() * 3,
    });
  }
}

// ---------------------------------------------------------------- cabin
export function buildCabin(root, tex) {
  const g = new THREE.Group();
  g.position.copy(CABIN_POS);
  root.add(g);
  const W = 4.0;
  const D = 3.0;
  const H = 1.9;
  const base = 0.3;
  const wallTop = base + H;

  const logMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.logs, 1), roughness: 1 });
  const stoneMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.stone, 1), roughness: 1 });
  const roofMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.roof, 1), roughness: 0.9 });
  const plankMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.plank, 1), color: '#a07a52', roughness: 1 });
  const trim = mat('#d8c8a2');
  const dark = mat('#4f3622');

  add(g, boxGeo(W + 0.3, base, D + 0.3, 1), stoneMat, { y: base / 2 });
  add(g, boxGeo(W, H, D, 1 / 1.6), logMat, { y: base + H / 2 });
  // corner posts
  for (const sx of [-1, 1])
    for (const sz of [-1, 1])
      add(g, new THREE.BoxGeometry(0.2, H + 0.04, 0.2), dark, { x: (sx * W) / 2, y: base + H / 2, z: (sz * D) / 2 });

  // gables (triangular prisms on the +/- x ends)
  const pitch = 0.6;
  const rise = (D / 2) * Math.tan(pitch);
  const gShape = new THREE.Shape([new THREE.Vector2(-D / 2, 0), new THREE.Vector2(D / 2, 0), new THREE.Vector2(0, rise)]);
  const gGeo = new THREE.ExtrudeGeometry(gShape, { depth: W - 0.02, bevelEnabled: false });
  gGeo.rotateY(Math.PI / 2);
  gGeo.translate(-(W - 0.02) / 2, wallTop, 0);
  const gableMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.logs, 1 / 1.6), roughness: 1 });
  add(g, gGeo, gableMat);

  // roof slabs
  const over = 0.38;
  const run = D / 2 + over;
  const len = run / Math.cos(pitch);
  const ridgeY = wallTop + rise + 0.07;
  for (const side of [-1, 1]) {
    add(g, boxGeo(W + 0.7, 0.1, len, 1 / 1.6), roofMat, {
      y: ridgeY - (run / 2) * Math.tan(pitch),
      z: (side * run) / 2,
      rx: side * pitch,
    });
  }
  add(g, new THREE.BoxGeometry(W + 0.76, 0.12, 0.22), mat('#3e4a52'), { y: ridgeY + 0.03 });

  // chimney
  add(g, boxGeo(0.56, 3.75, 0.56, 1), stoneMat, { x: -W / 2 - 0.2, y: 3.75 / 2, z: -0.35 });
  add(g, new THREE.BoxGeometry(0.68, 0.12, 0.68), mat('#6f6b63'), { x: -W / 2 - 0.2, y: 3.78, z: -0.35 });

  // door (front, +z)
  const fz = D / 2 + 0.03;
  add(g, new THREE.BoxGeometry(0.86, 1.36, 0.06), trim, { x: 0.85, y: base + 0.68, z: fz });
  add(g, new THREE.BoxGeometry(0.7, 1.26, 0.08), mat('#6a4329'), { x: 0.85, y: base + 0.63, z: fz + 0.01 });
  add(g, new THREE.BoxGeometry(0.62, 0.05, 0.09), mat('#57361f'), { x: 0.85, y: base + 0.95, z: fz + 0.02 });
  add(g, new THREE.SphereGeometry(0.035, 6, 4), mat('#d6b45a'), { x: 1.07, y: base + 0.62, z: fz + 0.07 });

  // windows
  const windowMat = new THREE.MeshStandardMaterial({ color: '#2d3b44', emissive: '#ffbe62', emissiveIntensity: 0, roughness: 0.3 });
  const win = (x, y, z, ry) => {
    const w = new THREE.Group();
    w.position.set(x, y, z);
    w.rotation.y = ry;
    g.add(w);
    add(w, new THREE.BoxGeometry(0.8, 0.68, 0.06), trim);
    add(w, new THREE.BoxGeometry(0.64, 0.52, 0.08), windowMat, { z: 0.01 });
    add(w, new THREE.BoxGeometry(0.05, 0.52, 0.1), trim, { z: 0.02 });
    add(w, new THREE.BoxGeometry(0.64, 0.05, 0.1), trim, { z: 0.02 });
    add(w, new THREE.BoxGeometry(0.9, 0.06, 0.16), trim, { y: -0.36, z: 0.05 });
    return w;
  };
  win(-0.8, base + 1.05, fz, 0);
  win(W / 2 + 0.03, base + 1.05, 0.1, Math.PI / 2);
  win(-W / 2 - 0.03, base + 1.05, 0.7, -Math.PI / 2);

  // flower box under front window
  add(g, new THREE.BoxGeometry(0.8, 0.14, 0.18), mat('#7a4f30'), { x: -0.8, y: base + 0.6, z: fz + 0.12 });
  const fr = rng(3);
  for (let i = 0; i < 7; i++)
    add(g, new THREE.IcosahedronGeometry(0.06, 0), mat(pick(fr, ['#e8556b', '#f2d24a', '#f4f0e6', '#5e9a44', '#5e9a44'])), {
      x: -1.12 + i * 0.105,
      y: base + 0.72 + fr() * 0.04,
      z: fz + 0.12,
    });

  // porch deck + posts + steps
  const porchD = 1.05;
  add(g, boxGeo(W + 0.3, 0.12, porchD, 1 / 1.4), plankMat, { y: base - 0.0, z: D / 2 + porchD / 2 + 0.02 });
  for (const sx of [-1, 1]) add(g, new THREE.CylinderGeometry(0.06, 0.07, 1.62, 6), mat('#7a5638'), { x: sx * (W / 2 + 0.05), y: base + 0.85, z: D / 2 + over - 0.06 });
  add(g, new THREE.BoxGeometry(0.9, 0.1, 0.32), plankMat, { x: 0.85, y: 0.17, z: D / 2 + porchD + 0.17 });
  add(g, new THREE.BoxGeometry(0.9, 0.1, 0.28), plankMat, { x: 0.85, y: 0.06, z: D / 2 + porchD + 0.42 });
  // rail on porch left
  add(g, new THREE.BoxGeometry(1.6, 0.06, 0.06), mat('#7a5638'), { x: -1.2, y: base + 0.55, z: D / 2 + porchD - 0.02 });
  for (let i = 0; i < 5; i++) add(g, new THREE.BoxGeometry(0.05, 0.5, 0.05), mat('#7a5638'), { x: -1.95 + i * 0.38, y: base + 0.3, z: D / 2 + porchD - 0.02 });
  // bench on porch
  add(g, new THREE.BoxGeometry(0.9, 0.06, 0.28), mat('#8d6844'), { x: -1.0, y: base + 0.32, z: D / 2 + 0.25 });
  for (const sx of [-1, 1]) add(g, new THREE.BoxGeometry(0.06, 0.28, 0.24), mat('#6b4c30'), { x: -1.0 + sx * 0.38, y: base + 0.17, z: D / 2 + 0.25 });

  // porch lamp
  const lampMat = new THREE.MeshStandardMaterial({ color: '#f7e2b0', emissive: '#ffb050', emissiveIntensity: 0 });
  add(g, new THREE.BoxGeometry(0.12, 0.16, 0.12), lampMat, { x: 1.45, y: base + 1.2, z: fz + 0.08 });

  // woodpile on the +x side
  const wood = new THREE.Group();
  wood.position.set(W / 2 + 0.45, 0, -0.75);
  g.add(wood);
  const logGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.15, 7);
  logGeo.rotateX(Math.PI / 2);
  const rows = [4, 3, 2];
  rows.forEach((n, row) => {
    for (let i = 0; i < n; i++)
      add(wood, logGeo, mat(pick(fr, ['#8a6340', '#94704b', '#7d5939'])), { x: (i - (n - 1) / 2) * 0.2, y: 0.1 + row * 0.17, z: (fr() - 0.5) * 0.08 });
  });
  add(wood, new THREE.CylinderGeometry(0.2, 0.22, 0.28, 8), mat('#8e6a45'), { x: 0.65, y: 0.14, z: 0.5 });
  add(wood, new THREE.BoxGeometry(0.03, 0.4, 0.03), mat('#5a4030'), { x: 0.65, y: 0.42, z: 0.5, rz: 0.4 });
  add(wood, new THREE.BoxGeometry(0.16, 0.08, 0.04), mat('#9aa3a8'), { x: 0.73, y: 0.6, z: 0.5, rz: 0.4 });

  // barrel
  add(g, new THREE.CylinderGeometry(0.25, 0.25, 0.6, 10), mat('#7a5534', { flatShading: true }), { x: W / 2 + 0.45, y: 0.3, z: 1.05 });
  for (const y of [0.12, 0.48]) add(g, new THREE.CylinderGeometry(0.262, 0.262, 0.05, 10), mat('#3f3a36'), { x: W / 2 + 0.45, y, z: 1.05 });
  add(g, new THREE.CylinderGeometry(0.23, 0.23, 0.02, 10), mat('#3a6f7a', { roughness: 0.3 }), { x: W / 2 + 0.45, y: 0.58, z: 1.05 });

  // fishing nets drying on the side wall (simple frame)
  add(g, new THREE.BoxGeometry(0.04, 0.04, 1.3), mat('#6a4b30'), { x: W / 2 + 0.06, y: base + 1.5, z: 0.95 });

  const chimneyTop = new THREE.Vector3(-W / 2 - 0.2, 3.9, -0.35).add(CABIN_POS);
  const doorFront = new THREE.Vector3(0.85, 1.3, D / 2 + 0.6).add(CABIN_POS);
  return { group: g, windowMat, lampMat, chimneyTop, doorFront };
}

// ---------------------------------------------------------------- dock
export function buildDock(root, tex) {
  const g = new THREE.Group();
  root.add(g);
  const { x0, x1, z, width, top } = DOCK;
  const r = rng(29);
  const grain = repeatTex(tex.plank, 1);
  const plankMats = ['#a9875c', '#9c7a52', '#b49166', '#93734d'].map(
    (c) => new THREE.MeshStandardMaterial({ map: grain, color: c, roughness: 1 })
  );
  const plankGeo = boxGeo(0.23, 0.06, width, 1 / 0.8);
  for (let x = x0; x < x1; x += 0.26) {
    add(g, plankGeo, pick(r, plankMats), {
      x: x + 0.13,
      y: top - 0.03 + (r() - 0.5) * 0.012,
      z: z + (r() - 0.5) * 0.05,
      ry: (r() - 0.5) * 0.03,
    });
  }
  const beam = mat('#6b5038');
  for (const s of [-1, 1]) add(g, new THREE.BoxGeometry(x1 - x0, 0.1, 0.12), beam, { x: (x0 + x1) / 2, y: top - 0.11, z: z + s * (width / 2 - 0.12) });
  const postGeo = new THREE.CylinderGeometry(0.085, 0.095, 1.25, 7);
  for (const px of [x0 + 0.35, -2.7, -1.0, x1 - 0.1])
    for (const s of [-1, 1]) add(g, postGeo, mat('#5f4631', { flatShading: true }), { x: px, y: top + 0.14 - 0.625, z: z + s * (width / 2 + 0.02) });
  // mooring cleat + rope coil
  add(g, new THREE.TorusGeometry(0.13, 0.035, 5, 12), mat('#d8c89a'), { x: x1 - 0.35, y: top + 0.03, z: z - 0.55, rx: Math.PI / 2 });
  add(g, new THREE.TorusGeometry(0.09, 0.03, 5, 10), mat('#cbb987'), { x: x1 - 0.35, y: top + 0.07, z: z - 0.55, rx: Math.PI / 2 });
  // small ladder into the water
  for (const s of [-1, 1]) add(g, new THREE.BoxGeometry(0.04, 0.7, 0.04), mat('#6b5038'), { x: x1 + 0.03, y: top - 0.3, z: z + 0.45 + s * 0.16 });
  for (let i = 0; i < 3; i++) add(g, new THREE.BoxGeometry(0.04, 0.03, 0.32), mat('#6b5038'), { x: x1 + 0.03, y: top - 0.1 - i * 0.2, z: z + 0.45 });
  return g;
}

// ---------------------------------------------------------------- props
export function buildProps(root) {
  const { top } = DOCK;
  // tackle box
  const tb = new THREE.Group();
  tb.position.set(-0.55, top, 0.92);
  tb.rotation.y = 0.25;
  root.add(tb);
  add(tb, new THREE.BoxGeometry(0.42, 0.17, 0.26), mat('#b2442f'), { y: 0.085 });
  add(tb, new THREE.BoxGeometry(0.44, 0.06, 0.28), mat('#c95a42'), { y: 0.2 });
  add(tb, new THREE.BoxGeometry(0.2, 0.03, 0.04), mat('#2d2d2d'), { y: 0.26 });
  add(tb, new THREE.BoxGeometry(0.06, 0.06, 0.02), mat('#e2c45a'), { y: 0.15, z: 0.14 });
  // open lure tray next to it
  add(tb, new THREE.BoxGeometry(0.3, 0.05, 0.2), mat('#5f7f8c'), { x: 0.45, y: 0.025, z: 0.05 });
  const lr = rng(5);
  for (let i = 0; i < 5; i++) add(tb, new THREE.BoxGeometry(0.04, 0.03, 0.04), mat(pick(lr, ['#f2d24a', '#e8556b', '#f4f0e6', '#7fc0d8'])), { x: 0.34 + i * 0.05, y: 0.06, z: 0.05 + (lr() - 0.5) * 0.08 });

  // bucket (with water + a fish inside)
  const bucket = makeBucket('#7d97a6');
  bucket.position.set(-1.25, top, 1.98);
  root.add(bucket);
  const bucket2 = makeBucket('#c9a046');
  bucket2.position.set(-5.6, 0, 2.6);
  bucket2.rotation.z = Math.PI / 2 - 0.15;
  bucket2.position.y = 0.16;
  root.add(bucket2);

  // spare rod lying on the dock
  add(root, new THREE.CylinderGeometry(0.012, 0.02, 1.8, 5), mat('#3a3a38'), { x: -2.9, y: top + 0.03, z: 1.0, rz: Math.PI / 2, ry: 0.1 });
  // folding stool
  const st = new THREE.Group();
  st.position.set(0.05, top, 1.95);
  root.add(st);
  add(st, new THREE.BoxGeometry(0.32, 0.04, 0.28), mat('#3f6f6a'), { y: 0.32 });
  for (const s of [-1, 1]) add(st, new THREE.BoxGeometry(0.03, 0.42, 0.03), mat('#9aa0a2'), { x: s * 0.12, y: 0.16, rz: s * 0.35 });
  // thermos
  add(root, new THREE.CylinderGeometry(0.06, 0.06, 0.24, 8), mat('#3f7a5a'), { x: 0.15, y: top + 0.12 + 0.34, z: 1.95 });

  // lantern post at the dock root
  const lp = new THREE.Group();
  lp.position.set(-5.25, 0, 0.45);
  root.add(lp);
  add(lp, new THREE.BoxGeometry(0.1, 1.55, 0.1), mat('#5a412c'), { y: 0.775 });
  add(lp, new THREE.BoxGeometry(0.42, 0.06, 0.06), mat('#5a412c'), { x: 0.17, y: 1.5 });
  const lanternMat = new THREE.MeshStandardMaterial({ color: '#f5e0a8', emissive: '#ffb04a', emissiveIntensity: 0 });
  add(lp, new THREE.BoxGeometry(0.15, 0.2, 0.15), lanternMat, { x: 0.32, y: 1.32 });
  add(lp, new THREE.ConeGeometry(0.13, 0.08, 4), mat('#2f2f2f'), { x: 0.32, y: 1.46, ry: Math.PI / 4 });

  // lakeside bench
  const b = new THREE.Group();
  b.position.set(-4.4, 0, 5.4);
  b.rotation.y = Math.PI / 2 + 0.35;
  root.add(b);
  add(b, new THREE.BoxGeometry(1.3, 0.06, 0.34), mat('#8e6a44'), { y: 0.38 });
  add(b, new THREE.BoxGeometry(1.3, 0.24, 0.05), mat('#8e6a44'), { y: 0.6, z: -0.17, rx: -0.15 });
  for (const s of [-1, 1]) add(b, new THREE.BoxGeometry(0.06, 0.38, 0.3), mat('#4d4a46'), { x: s * 0.55, y: 0.19 });

  // mailbox by the path
  add(root, new THREE.BoxGeometry(0.07, 0.8, 0.07), mat('#5a412c'), { x: -6.3, y: 0.4, z: -1.2 });
  add(root, new THREE.BoxGeometry(0.22, 0.18, 0.34), mat('#5d7f93'), { x: -6.3, y: 0.86, z: -1.2 });
  add(root, new THREE.BoxGeometry(0.02, 0.12, 0.05), mat('#c9483a'), { x: -6.18, y: 0.98, z: -1.28 });

  return { lanternMat, lanternPos: new THREE.Vector3(-4.93, 1.3, 0.45) };
}

function makeBucket(color) {
  const g = new THREE.Group();
  const side = new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.2, side: THREE.DoubleSide });
  add(g, new THREE.CylinderGeometry(0.15, 0.12, 0.3, 12, 1, true), side, { y: 0.15 });
  add(g, new THREE.CircleGeometry(0.12, 12), side, { y: 0.005, rx: -Math.PI / 2 });
  add(g, new THREE.CircleGeometry(0.14, 12), mat('#3f8b92', { roughness: 0.2 }), { y: 0.24, rx: -Math.PI / 2, cast: false });
  add(g, new THREE.TorusGeometry(0.15, 0.008, 4, 12, Math.PI), mat('#8a8f92'), { y: 0.3, rx: 0.3 });
  return g;
}

// ---------------------------------------------------------------- boat
export function buildBoat(root) {
  const g = new THREE.Group();
  const baseY = WATER_Y - 0.1;
  const baseRot = -1.27;
  g.position.set(6.9, baseY, -1.0);
  g.rotation.y = baseRot;
  root.add(g);
  const L = 2.0;
  const Wd = 0.44;
  const outline = new THREE.Shape();
  outline.moveTo(-L / 2, -Wd * 0.78);
  outline.quadraticCurveTo(-L / 2 + 0.05, -Wd, -L / 2 + 0.25, -Wd);
  outline.lineTo(L / 2 - 0.6, -Wd);
  outline.quadraticCurveTo(L / 2 - 0.1, -Wd * 0.85, L / 2, 0);
  outline.quadraticCurveTo(L / 2 - 0.1, Wd * 0.85, L / 2 - 0.6, Wd);
  outline.lineTo(-L / 2 + 0.25, Wd);
  outline.quadraticCurveTo(-L / 2 + 0.05, Wd, -L / 2, Wd * 0.78);
  outline.closePath();

  const hullGeo = new THREE.ExtrudeGeometry(outline, { depth: 0.24, bevelEnabled: false, curveSegments: 6 });
  hullGeo.rotateX(-Math.PI / 2);
  const pos = hullGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    if (pos.getY(i) < 0.01) {
      pos.setX(i, pos.getX(i) * 0.86);
      pos.setZ(i, pos.getZ(i) * 0.55);
    }
  }
  hullGeo.computeVertexNormals();
  add(g, hullGeo, [mat('#6f4e33'), mat('#3f7383')]);

  const pts = outline.getPoints(8);
  const rimShape = new THREE.Shape(pts);
  rimShape.holes.push(new THREE.Path(pts.map((p) => new THREE.Vector2(p.x * 0.9, p.y * 0.78))));
  const rimGeo = new THREE.ExtrudeGeometry(rimShape, { depth: 0.15, bevelEnabled: false });
  rimGeo.rotateX(-Math.PI / 2);
  rimGeo.translate(0, 0.24, 0);
  add(g, rimGeo, [mat('#e8dfc7'), mat('#9a6f47')]);
  // waterline stripe
  add(g, new THREE.BoxGeometry(0.05, 0.05, 0.05), mat('#c9483a'), { x: L / 2 - 0.05, y: 0.33 });
  // thwarts
  for (const x of [-0.45, 0.35]) add(g, new THREE.BoxGeometry(0.2, 0.05, Wd * 1.6), mat('#b48a5c'), { x, y: 0.32 });
  // oars
  for (const s of [-1, 1]) {
    add(g, new THREE.CylinderGeometry(0.022, 0.022, 1.6, 5), mat('#c7a16e'), { x: -0.05, y: 0.42, z: s * 0.3, rz: Math.PI / 2, ry: s * 0.08 });
    add(g, new THREE.BoxGeometry(0.34, 0.02, 0.1), mat('#c7a16e'), { x: -0.85, y: 0.42, z: s * 0.36, ry: s * 0.08 });
  }
  // little anchor rope + float
  add(g, new THREE.SphereGeometry(0.07, 8, 6), mat('#e8553f'), { x: L / 2 + 0.25, y: 0.14, z: 0.2 });

  const ph = 1.3;
  return {
    group: g,
    seatY: 0.345,
    update(t) {
      g.position.y = baseY + Math.sin(t * 1.25 + ph) * 0.022;
      g.rotation.z = Math.sin(t * 0.95) * 0.035;
      g.rotation.x = Math.sin(t * 0.7 + 1) * 0.02;
      g.rotation.y = baseRot + Math.sin(t * 0.13) * 0.08;
    },
  };
}

// ---------------------------------------------------------------- fence
export function buildFence(root) {
  const r = rng(77);
  const woods = ['#8b7355', '#7e6a4f', '#97815f'];
  const postGeo = new THREE.BoxGeometry(0.11, 0.8, 0.11);
  const hw = SLAB.w / 2 - 0.25;
  const hd = SLAB.d / 2 - 0.25;
  const runs = [
    [[-hw, -hd], [hw, -hd]],
    [[-hw, -hd], [-hw, -0.4]],
    [[-hw, 1.6], [-hw, hd - 0.2]],
  ];
  for (const [a, b] of runs) {
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    const n = Math.ceil(len / 1.15);
    let prev = null;
    for (let i = 0; i <= n; i++) {
      const x = a[0] + (dx * i) / n;
      const z = a[1] + (dz * i) / n;
      add(root, postGeo, mat(pick(r, woods)), { x, y: 0.38, z, rz: (r() - 0.5) * 0.08, rx: (r() - 0.5) * 0.06 });
      add(root, new THREE.BoxGeometry(0.15, 0.04, 0.15), mat('#6e5a42'), { x, y: 0.8, z });
      if (prev) {
        const seg = Math.hypot(x - prev[0], z - prev[1]);
        for (const h of [0.3, 0.6]) {
          if (r() < 0.07) continue;
          add(root, new THREE.BoxGeometry(seg, 0.065, 0.045), mat(pick(r, woods)), {
            x: (x + prev[0]) / 2,
            y: h + (r() - 0.5) * 0.04,
            z: (z + prev[1]) / 2,
            ry: Math.atan2(-(z - prev[1]), x - prev[0]),
            rz: (r() - 0.5) * 0.04,
          });
        }
      }
      prev = [x, z];
    }
  }
}

// ---------------------------------------------------------------- vegetation
const LEAF = ['#56783a', '#6a8c42', '#86a64c', '#a4bd58', '#c2cf68'];

function oak(root, x, z, s, seed, swayers) {
  const r = rng(seed);
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  root.add(g);
  const bark = mat('#6a4a33', { flatShading: true });
  const th = 2.0 * s;
  add(g, new THREE.CylinderGeometry(0.15 * s, 0.25 * s, th, 7), bark, { y: th / 2 });
  add(g, new THREE.CylinderGeometry(0.25 * s, 0.38 * s, 0.25 * s, 7), bark, { y: 0.12 * s });
  for (let i = 0; i < 3; i++) {
    const bg = new THREE.CylinderGeometry(0.05 * s, 0.09 * s, 1.0 * s, 5);
    bg.translate(0, 0.5 * s, 0);
    add(g, bg, bark, { y: th * 0.7, rz: (r() - 0.5) * 1.6, rx: (r() - 0.5) * 1.2 });
  }
  const crown = new THREE.Group();
  crown.position.y = th * 0.9;
  g.add(crown);
  const blobs = [];
  const n = 15;
  for (let i = 0; i < n; i++) {
    const h = i / (n - 1);
    const ang = r() * Math.PI * 2;
    const rad = (1 - h * 0.6) * 1.3 * s * (0.35 + r() * 0.65);
    const by = h * 1.75 * s + 0.15;
    const br = (0.5 + r() * 0.38) * s * (1 - h * 0.28);
    const ci = Math.min(LEAF.length - 1, Math.floor(h * 3.1 + r() * 1.7));
    const m = add(crown, new THREE.IcosahedronGeometry(br, 1), mat(LEAF[ci], { flatShading: true }), {
      x: Math.cos(ang) * rad,
      y: by,
      z: Math.sin(ang) * rad,
      rx: r() * 3,
      ry: r() * 3,
    });
    blobs.push({ m, by, ph: r() * 6 });
  }
  const ph = r() * 6;
  swayers.push((t) => {
    crown.rotation.z = Math.sin(t * 0.9 + ph) * 0.035;
    crown.rotation.x = Math.sin(t * 0.71 + ph * 1.3) * 0.028;
    for (const b of blobs) b.m.position.y = b.by + Math.sin(t * 1.7 + b.ph) * 0.03 * s;
  });
}

function pine(root, x, z, s, seed, swayers) {
  const r = rng(seed);
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  root.add(g);
  add(g, new THREE.CylinderGeometry(0.1 * s, 0.17 * s, 1.2 * s, 6), mat('#5e4330', { flatShading: true }), { y: 0.6 * s });
  const crown = new THREE.Group();
  crown.position.y = 0.55 * s;
  g.add(crown);
  const tiers = 5;
  for (let i = 0; i < tiers; i++) {
    const rad = (1.05 - i * 0.18) * s;
    const h = 1.0 * s;
    add(crown, new THREE.ConeGeometry(rad, h, 8), mat(i % 2 ? '#3f6c47' : '#4b7d50', { flatShading: true }), {
      y: i * 0.5 * s + 0.5 * s,
      ry: r() * 3,
    });
  }
  add(crown, new THREE.ConeGeometry(0.18 * s, 0.45 * s, 6), mat('#6a9a5a', { flatShading: true }), { y: tiers * 0.5 * s + 0.35 * s });
  const ph = r() * 6;
  swayers.push((t) => {
    crown.rotation.z = Math.sin(t * 0.8 + ph) * 0.025;
    crown.rotation.x = Math.sin(t * 0.63 + ph) * 0.02;
  });
}

function bush(root, x, z, s, seed, swayers, palette = LEAF) {
  const r = rng(seed);
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  root.add(g);
  const n = 3 + Math.floor(r() * 3);
  for (let i = 0; i < n; i++) {
    const br = (0.28 + r() * 0.25) * s;
    add(g, new THREE.IcosahedronGeometry(br, 1), mat(pick(r, palette.slice(0, 4)), { flatShading: true }), {
      x: (r() - 0.5) * 0.7 * s,
      y: br * 0.7 + r() * 0.15 * s,
      z: (r() - 0.5) * 0.7 * s,
      rx: r() * 3,
    });
  }
  if (r() < 0.5)
    for (let i = 0; i < 4; i++)
      add(g, new THREE.IcosahedronGeometry(0.05, 0), mat(pick(r, ['#f2f0e6', '#e8728a', '#f2d24a'])), {
        x: (r() - 0.5) * 0.7 * s,
        y: 0.45 * s + r() * 0.2 * s,
        z: (r() - 0.5) * 0.7 * s,
        cast: false,
      });
  const ph = r() * 6;
  swayers.push((t) => {
    g.rotation.z = Math.sin(t * 1.1 + ph) * 0.03;
  });
}

function rock(root, x, y, z, s, r) {
  return add(root, new THREE.DodecahedronGeometry(1, 0), mat(pick(r, ['#8e8f88', '#a3a39b', '#7b7d77', '#b1aea3']), { flatShading: true }), {
    x,
    y,
    z,
    s: [s, s * (0.5 + r() * 0.3), s * (0.75 + r() * 0.3)],
    rx: r() * 0.5,
    ry: r() * 6,
  });
}

function blocked(x, z) {
  const cx = CABIN_POS.x;
  const cz = CABIN_POS.z;
  if (x > cx - 2.5 && x < cx + 3.0 && z > cz - 1.9 && z < cz + 3.0) return true;
  if (Math.hypot(x - CAMPFIRE_POS.x, z - CAMPFIRE_POS.z) < 0.9) return true;
  if (x > DOCK.x0 - 0.2 && x < DOCK.x1 && Math.abs(z - DOCK.z) < 1.0) return true;
  return false;
}

export function buildVegetation(root, swayers) {
  const hw = SLAB.w / 2;
  const hd = SLAB.d / 2;

  // trees
  oak(root, -10.9, -7.3, 1.15, 101, swayers);
  oak(root, -5.2, -7.6, 0.85, 102, swayers);
  oak(root, 9.9, -6.7, 1.2, 103, swayers);
  oak(root, 2.6, -7.9, 0.7, 104, swayers);
  pine(root, -11.3, 7.2, 1.0, 201, swayers);
  pine(root, -10.4, 8.2, 0.7, 202, swayers);
  pine(root, 11.6, -4.6, 0.9, 203, swayers);
  pine(root, 6.3, -8.0, 0.8, 204, swayers);
  pine(root, -12.0, -2.4, 0.75, 205, swayers);

  // bushes along the fence and edges
  const br = rng(300);
  const bushSpots = [
    [-8, -8.1], [-6.6, -8.2], [-1.5, -8.2], [0.2, -8.0], [4.6, -8.1], [8.2, -8.2], [11.8, -7.9],
    [-11.7, -5.2], [-11.8, 0.0], [-11.7, 4.4], [11.9, 2.6], [11.6, 6.4], [9.4, 8.4], [5.3, 8.5],
    [-2.2, 8.3], [-6.8, 8.4], [-3.4, -5.6], [-6.0, 7.0],
  ];
  bushSpots.forEach(([x, z], i) => bush(root, x, z, 0.8 + br() * 0.6, 310 + i, swayers));

  // shore rocks
  const rr = rng(55);
  for (let i = 0; i < 34; i++) {
    const th = rr() * Math.PI * 2;
    const [x, z] = lakePoint(th, 0.97 + rr() * 0.08);
    if (x < -1.5 && Math.abs(z - DOCK.z) < 1.3) continue;
    rock(root, x, -0.05 + rr() * 0.08, z, 0.14 + rr() * 0.22, rr);
  }
  // rock clusters on the grass
  for (const [x, z, s] of [[-2.6, -3.6, 0.45], [-2.1, -3.3, 0.25], [10.9, 7.4, 0.4], [11.4, 7.0, 0.22], [-11.4, 2.2, 0.3], [6.2, 7.9, 0.28], [-4.2, -1.2, 0.2]])
    rock(root, x, 0.04, z, s, rr);

  // reeds & cattails
  const reedSpots = [2.3, 2.75, 1.7, 4.15, 4.6, 0.55, 5.6, 3.6];
  const reedMat = mat('#6f8f3f', { flatShading: true });
  const reedMat2 = mat('#88a64c', { flatShading: true });
  const catMat = mat('#6b4428', { flatShading: true });
  reedSpots.forEach((th, ci) => {
    const r = rng(500 + ci);
    const n = 8 + Math.floor(r() * 6);
    for (let i = 0; i < n; i++) {
      const [x, z] = lakePoint(th + (r() - 0.5) * 0.16, 0.88 + r() * 0.1);
      if (x < -1.5 && Math.abs(z - DOCK.z) < 1.2) continue;
      const h = 0.7 + r() * 0.7;
      const piv = new THREE.Group();
      piv.position.set(x, WATER_Y - 0.15, z);
      root.add(piv);
      add(piv, new THREE.CylinderGeometry(0.012, 0.022, h, 4), r() < 0.5 ? reedMat : reedMat2, { y: h / 2 });
      if (r() < 0.45) add(piv, new THREE.CapsuleGeometry(0.035, 0.12, 2, 5), catMat, { y: h + 0.02 });
      if (r() < 0.5) add(piv, new THREE.ConeGeometry(0.04, h * 0.8, 3), reedMat2, { y: h * 0.4, rz: (r() - 0.5) * 0.6, s: [1, 1, 0.3] });
      const ph = r() * 6;
      const base = (r() - 0.5) * 0.14;
      swayers.push((t) => {
        piv.rotation.z = base + Math.sin(t * 1.4 + ph) * 0.06;
        piv.rotation.x = Math.sin(t * 1.1 + ph * 0.7) * 0.04;
      });
    }
  });

  // lily pads
  const lr = rng(600);
  const padGeo = new THREE.CircleGeometry(0.26, 10, 0.3, Math.PI * 2 - 0.6);
  padGeo.rotateX(-Math.PI / 2);
  for (let i = 0; i < 14; i++) {
    const th = 0.3 + lr() * 2.6;
    const [x, z] = lakePoint(th, 0.62 + lr() * 0.25);
    const pad = add(root, padGeo, mat(pick(lr, ['#5f9443', '#6fa24c', '#4f8a3e']), { side: THREE.DoubleSide }), {
      x,
      y: WATER_Y + 0.05,
      z,
      ry: lr() * 6,
      s: 0.7 + lr() * 0.6,
      cast: false,
    });
    if (lr() < 0.3)
      add(root, new THREE.IcosahedronGeometry(0.07, 0), mat(pick(lr, ['#f3b7c8', '#f4f0e6'])), { x: x + 0.05, y: WATER_Y + 0.1, z, cast: false });
    const ph = lr() * 6;
    swayers.push((t) => {
      pad.position.y = WATER_Y + 0.05 + Math.sin(t * 1.3 + ph) * 0.012;
    });
  }

  // grass tufts (instanced)
  const blades = [];
  for (let k = 0; k < 3; k++) {
    const h = 0.24 + k * 0.05;
    const b = new THREE.ConeGeometry(0.035, h, 3);
    b.translate(0, h / 2, 0);
    b.rotateZ((k - 1) * 0.38);
    b.rotateY(k * 2.1);
    b.translate((k - 1) * 0.03, 0, ((k % 2) - 0.5) * 0.04);
    blades.push(b);
  }
  const tuftGeo = mergeGeometries(blades);
  const gr = rng(700);
  const COUNT = 1700;
  const tufts = new THREE.InstancedMesh(tuftGeo, new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, flatShading: true }), COUNT);
  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  const grassCols = ['#86a352', '#90ad5a', '#9ab563', '#7d9a4c', '#a5bd69'];
  let placed = 0;
  for (let tries = 0; placed < COUNT && tries < COUNT * 6; tries++) {
    let x = (gr() - 0.5) * (SLAB.w - 0.2);
    let z = (gr() - 0.5) * (SLAB.d - 0.2);
    // bias towards edges and shoreline
    const edge = Math.min(hw - Math.abs(x), hd - Math.abs(z));
    const ln = lakeNorm(x, z);
    const nearShore = ln > 1.0 && ln < 1.12;
    if (!(edge < 1.4 || nearShore) && gr() < 0.55) continue;
    if (ln < 1.03) continue;
    if (blocked(x, z)) continue;
    dummy.position.set(x, 0, z);
    dummy.rotation.set((gr() - 0.5) * 0.3, gr() * 6, (gr() - 0.5) * 0.3);
    const s = 0.7 + gr() * 0.8;
    dummy.scale.set(s, s * (0.8 + gr() * 0.5), s);
    dummy.updateMatrix();
    tufts.setMatrixAt(placed, dummy.matrix);
    tufts.setColorAt(placed, col.set(pick(gr, grassCols)));
    placed++;
  }
  tufts.count = placed;
  tufts.receiveShadow = true;
  root.add(tufts);

  // wild flowers
  const fl = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.05, 0), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1 }), 180);
  let fp = 0;
  for (let tries = 0; fp < 180 && tries < 2000; tries++) {
    const x = (gr() - 0.5) * (SLAB.w - 0.4);
    const z = (gr() - 0.5) * (SLAB.d - 0.4);
    if (lakeNorm(x, z) < 1.05 || blocked(x, z)) continue;
    dummy.position.set(x, 0.12 + gr() * 0.1, z);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.setScalar(0.8 + gr() * 0.6);
    dummy.updateMatrix();
    fl.setMatrixAt(fp, dummy.matrix);
    fl.setColorAt(fp, col.set(pick(gr, ['#f4f1e6', '#f2d04a', '#e88aa0', '#c9a0e0', '#f4f1e6'])));
    fp++;
  }
  fl.count = fp;
  root.add(fl);

  // overgrown edges: ivy blobs spilling over the slab sides
  const IV = 150;
  const ivy = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, flatShading: true }), IV);
  const ir = rng(800);
  for (let i = 0; i < IV; i++) {
    const side = Math.floor(ir() * 4);
    const t = (ir() - 0.5) * 2;
    let x;
    let z;
    if (side === 0) { x = t * hw; z = hd + 0.04; }
    else if (side === 1) { x = hw + 0.04; z = t * hd; }
    else if (side === 2) { x = t * hw; z = -hd - 0.04; }
    else { x = -hw - 0.04; z = t * hd; }
    const hang = ir() < 0.35;
    const s = hang ? 0.08 + ir() * 0.14 : 0.12 + ir() * 0.2;
    dummy.position.set(x, hang ? -0.15 - ir() * 0.7 : 0.02 + ir() * 0.05, z);
    dummy.rotation.set(ir() * 3, ir() * 3, 0);
    dummy.scale.set(s, s * 0.8, s);
    dummy.updateMatrix();
    ivy.setMatrixAt(i, dummy.matrix);
    ivy.setColorAt(i, col.set(pick(ir, ['#5d893e', '#74a046', '#4b7536', '#8db456', '#a5c25a'])));
  }
  ivy.castShadow = true;
  ivy.receiveShadow = true;
  root.add(ivy);
  return { tufts, flowers: fl };
}

// ---------------------------------------------------------------- campfire
export function buildCampfire(root) {
  const g = new THREE.Group();
  g.position.copy(CAMPFIRE_POS);
  root.add(g);
  const r = rng(909);
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    rock(g, Math.cos(a) * 0.48, 0.05, Math.sin(a) * 0.48, 0.13 + r() * 0.05, r);
  }
  add(g, new THREE.CircleGeometry(0.42, 10), mat('#3a3029'), { y: 0.015, rx: -Math.PI / 2, cast: false });
  const logGeo = new THREE.CylinderGeometry(0.06, 0.07, 0.75, 6);
  for (let i = 0; i < 3; i++) add(g, logGeo, mat('#5e4129', { flatShading: true }), { y: 0.12, rz: Math.PI / 2 - 0.35, ry: (i / 3) * Math.PI * 2 });
  // seats
  const seatGeo = new THREE.CylinderGeometry(0.17, 0.17, 1.1, 8);
  seatGeo.rotateZ(Math.PI / 2);
  add(g, seatGeo, mat('#7a5534', { flatShading: true }), { x: -1.4, y: 0.17, z: -0.2, ry: 1.3 });
  add(g, seatGeo, mat('#83603c', { flatShading: true }), { x: 0.3, y: 0.17, z: 1.35, ry: 0.2 });
  // kettle
  add(g, new THREE.SphereGeometry(0.12, 8, 6), mat('#4b4b4b', { roughness: 0.5 }), { x: 0.85, y: 0.12, z: -0.5, s: [1, 0.85, 1] });

  const flames = new THREE.Group();
  flames.position.y = 0.12;
  g.add(flames);
  const cols = ['#ffd54a', '#ff9a2e', '#ff5d22'];
  const fl = [];
  for (let i = 0; i < 5; i++) {
    const m = new THREE.Mesh(new THREE.ConeGeometry(0.1 + (i % 3) * 0.03, 0.4, 5), new THREE.MeshBasicMaterial({ color: cols[i % 3] }));
    const a = (i / 5) * Math.PI * 2;
    m.position.set(Math.cos(a) * 0.08, 0.18, Math.sin(a) * 0.08);
    flames.add(m);
    fl.push({ m, ph: r() * 6 });
  }
  const light = new THREE.PointLight('#ff8a3a', 0, 7, 1.6);
  light.position.set(0, 0.8, 0);
  g.add(light);
  return {
    update(t, level) {
      const k = 0.55 + 0.45 * Math.min(level, 1.6);
      for (const f of fl) {
        const n = 0.75 + 0.35 * Math.sin(t * 11 + f.ph) * Math.sin(t * 7.3 + f.ph * 2);
        f.m.scale.set(k * (0.9 + 0.2 * n), k * n * 1.2, k * (0.9 + 0.2 * n));
        f.m.position.y = 0.16 * f.m.scale.y;
      }
      light.intensity = level * 4.5 * (0.85 + 0.15 * Math.sin(t * 13) * Math.sin(t * 5.1));
    },
  };
}
