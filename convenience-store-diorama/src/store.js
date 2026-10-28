// The convenience store: shell, glass facades with sliding doors, fascia signage,
// roof equipment and a richly furnished interior (instanced products).
import * as THREE from 'three';
import { rng, pick, repeatTex, BRAND } from './textures.js';

// ---------------------------------------------------------------- shared helpers
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
const cache = new Map();
export function mat(color, o = {}) {
  const key = color + JSON.stringify(o);
  if (!cache.has(key)) cache.set(key, new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0, ...o }));
  return cache.get(key);
}
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
const BOX = new THREE.BoxGeometry(1, 1, 1);

// store footprint (world units)
export const STORE = { x0: -8.5, x1: 2.5, z0: -4.9, z1: -0.5, glassTop: 2.75, fasciaTop: 3.35, roofTop: 3.5 };
export const DOOR = { x: -0.9, z: STORE.z1, w: 1.6 };

/** collects instanced product boxes / cylinders and builds them at the end */
class Products {
  constructor() {
    this.boxes = [];
    this.cyls = [];
  }
  box(x, y, z, sx, sy, sz, color, ry = 0) {
    this.boxes.push([x, y, z, sx, sy, sz, color, ry]);
  }
  cyl(x, y, z, r, h, color) {
    this.cyls.push([x, y, z, r, h, color]);
  }
  build(parent) {
    const d = new THREE.Object3D();
    const c = new THREE.Color();
    const mk = (geo, list, isCyl) => {
      const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.55 }), list.length);
      list.forEach((it, i) => {
        if (isCyl) {
          const [x, y, z, r, h, col] = it;
          d.position.set(x, y + h / 2, z);
          d.rotation.set(0, 0, 0);
          d.scale.set(r * 2, h, r * 2);
          c.set(col);
        } else {
          const [x, y, z, sx, sy, sz, col, ry] = it;
          d.position.set(x, y + sy / 2, z);
          d.rotation.set(0, ry, 0);
          d.scale.set(sx, sy, sz);
          c.set(col);
        }
        d.updateMatrix();
        im.setMatrixAt(i, d.matrix);
        im.setColorAt(i, c);
      });
      im.castShadow = false;
      im.receiveShadow = true;
      parent.add(im);
      return im;
    };
    mk(BOX, this.boxes, false);
    mk(new THREE.CylinderGeometry(0.5, 0.5, 1, 8), this.cyls, true);
  }
}

const SNACK = ['#e31b23', '#f2c94c', '#2f6fd0', '#f58220', '#7a3fb0', '#00845a', '#ff6fa3', '#ffffff', '#30b7c9'];
const DRINK = ['#e31b23', '#2f6fd0', '#f2c94c', '#00845a', '#ffffff', '#f58220', '#9fd36a', '#8a5a2a', '#30b7c9'];

// ---------------------------------------------------------------- store
export function buildStore(root, tex, snowMat) {
  const S = STORE;
  const W = S.x1 - S.x0;
  const D = S.z1 - S.z0;
  const cx = (S.x0 + S.x1) / 2;
  const cz = (S.z0 + S.z1) / 2;
  const g = new THREE.Group();
  root.add(g);
  g.userData.pick = { kind: 'store' };
  const roof = new THREE.Group(); // the 'lid': roof, sign band, eave — lifts off in see-inside mode
  g.add(roof);
  const glass = new THREE.Group(); // excluded from the edge pass so the interior reads clearly
  root.add(glass);
  const snowCaps = [];
  const P = new Products();
  const r = rng(77);

  const white = mat('#f7f7f4');
  const frame = mat('#3b4148', { roughness: 0.5 });
  const kick = mat('#4a5058', { roughness: 0.6 });
  const glassMat = new THREE.MeshStandardMaterial({ color: '#bfe2ef', transparent: true, opacity: 0.16, roughness: 0.05, metalness: 0.1, depthWrite: false });
  const fridgeGlass = new THREE.MeshStandardMaterial({ color: '#dff3ff', transparent: true, opacity: 0.22, roughness: 0.05, depthWrite: false });
  const floorMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.tiles, 1), color: '#f4f2ee', roughness: 0.45 });

  // floor + solid walls (back, left)
  add(g, boxGeo(W, 0.08, D, 1 / 1.2), floorMat, { x: cx, y: 0.04, z: cz });
  add(g, new THREE.BoxGeometry(W, S.fasciaTop, 0.16), white, { x: cx, y: S.fasciaTop / 2, z: S.z0 + 0.08 });
  add(g, new THREE.BoxGeometry(0.16, S.fasciaTop, D), white, { x: S.x0 + 0.08, y: S.fasciaTop / 2, z: cz });
  // exterior stripe band low on the solid walls
  add(g, new THREE.BoxGeometry(W + 0.02, 0.12, 0.17), mat(BRAND.green), { x: cx, y: 0.5, z: S.z0 + 0.08 });
  add(g, new THREE.BoxGeometry(0.17, 0.12, D + 0.02), mat(BRAND.green), { x: S.x0 + 0.08, y: 0.5, z: cz });

  // ---------------------------------------------------- glass facades (front +z, side +x)
  const glassH = S.glassTop - 0.24;
  const facade = (axis) => {
    // axis 'z': front, runs along x at z = z1 ; axis 'x': side, runs along z at x = x1
    const a0 = axis === 'z' ? S.x0 + 0.16 : S.z0 + 0.16;
    const a1 = axis === 'z' ? S.x1 : S.z1;
    const fixed = axis === 'z' ? S.z1 - 0.03 : S.x1 - 0.03;
    const at = (t, y, extra = {}) => (axis === 'z' ? { x: t, y, z: fixed, ...extra } : { x: fixed, y, z: t, ...extra });
    const along = (len, h, thick) => (axis === 'z' ? new THREE.BoxGeometry(len, h, thick) : new THREE.BoxGeometry(thick, h, len));
    const doorA = DOOR.x - DOOR.w / 2;
    const doorB = DOOR.x + DOOR.w / 2;
    const segs = [];
    if (axis === 'z') {
      segs.push([a0, doorA], [doorB, a1]);
    } else segs.push([a0, a1]);
    for (const [s0, s1] of segs) {
      const len = s1 - s0;
      add(g, along(len, 0.24, 0.12), kick, at((s0 + s1) / 2, 0.12));
      const gm = add(glass, along(len, glassH, 0.04), glassMat, at((s0 + s1) / 2, 0.24 + glassH / 2, { cast: false, receive: false }));
      gm.userData.glass = true;
      const n = Math.max(1, Math.round(len / 1.8));
      for (let i = 0; i <= n; i++) add(g, along(0.07, glassH, 0.1), frame, at(s0 + (len * i) / n, 0.24 + glassH / 2));
    }
    add(g, along(a1 - a0, 0.08, 0.12), frame, at((a0 + a1) / 2, S.glassTop));
    // corner post
    if (axis === 'x') add(g, new THREE.BoxGeometry(0.14, S.glassTop, 0.14), frame, { x: S.x1 - 0.03, y: S.glassTop / 2, z: S.z1 - 0.03 });
  };
  facade('z');
  facade('x');

  // sliding doors
  const doorPanels = [];
  for (const s of [-1, 1]) {
    const p = new THREE.Group();
    p.position.set(DOOR.x + s * DOOR.w * 0.25, 0, S.z1 + 0.02);
    g.add(p);
    add(p, new THREE.BoxGeometry(DOOR.w / 2, 0.06, 0.06), frame, { y: 0.11 });
    add(p, new THREE.BoxGeometry(DOOR.w / 2, 0.06, 0.06), frame, { y: S.glassTop - 0.08 });
    add(p, new THREE.BoxGeometry(0.05, S.glassTop - 0.1, 0.06), frame, { x: s * (DOOR.w / 4 - 0.02), y: S.glassTop / 2 });
    add(p, new THREE.BoxGeometry(0.05, S.glassTop - 0.1, 0.06), frame, { x: -s * (DOOR.w / 4 - 0.02), y: S.glassTop / 2 });
    const dg = add(glass, new THREE.BoxGeometry(DOOR.w / 2 - 0.08, S.glassTop - 0.22, 0.03), glassMat, { x: p.position.x, y: S.glassTop / 2, z: S.z1 + 0.02, cast: false });
    add(p, new THREE.BoxGeometry(0.3, 0.05, 0.065), mat(BRAND.green), { y: 1.2 });
    doorPanels.push({ group: p, glass: dg, dir: s, base: p.position.x });
  }
  add(g, new THREE.BoxGeometry(DOOR.w + 0.3, 0.14, 0.18), frame, { x: DOOR.x, y: S.glassTop + 0.02, z: S.z1 + 0.04 });
  // entrance mats
  add(g, new THREE.BoxGeometry(1.5, 0.02, 0.7), mat('#3b3f44'), { x: DOOR.x, y: 0.09, z: S.z1 - 0.45 });

  // window posters (inside the glass)
  const posterSpots = [
    ['z', -7.2],
    ['z', -3.4],
    ['x', -4.6],
    ['z', 1.6],
  ];
  posterSpots.forEach(([axis, t], i) => {
    const m = new THREE.MeshStandardMaterial({ map: tex.posters[i % tex.posters.length], roughness: 0.6 });
    const geo = new THREE.PlaneGeometry(0.5, 0.68);
    if (axis === 'z') add(g, geo, m, { x: t, y: 1.55, z: S.z1 - 0.09, cast: false });
    else add(g, geo, m, { x: S.x1 - 0.09, y: 1.55, z: t, ry: Math.PI / 2, cast: false });
  });

  // ---------------------------------------------------- fascia + signage
  const signMats = [];
  const bandMat = (len) => {
    const m = new THREE.MeshStandardMaterial({ map: repeatTex(tex.band, len / 2.2, 1), roughness: 0.6, emissive: '#ffffff', emissiveIntensity: 0.1 });
    m.emissiveMap = m.map;
    signMats.push(m);
    return m;
  };
  const fH = S.fasciaTop - S.glassTop;
  const fy = S.glassTop + fH / 2;
  add(roof, new THREE.BoxGeometry(W + 0.32, fH, 0.16), white, { x: cx, y: fy, z: S.z1 + 0.08 });
  add(roof, new THREE.BoxGeometry(0.16, fH, D + 0.32), white, { x: S.x1 + 0.08, y: fy, z: cz });
  add(roof, new THREE.BoxGeometry(W + 0.32, fH, 0.16), white, { x: cx, y: fy, z: S.z0 - 0.08 });
  add(roof, new THREE.BoxGeometry(0.16, fH, D + 0.32), white, { x: S.x0 - 0.08, y: fy, z: cz });
  add(roof, new THREE.PlaneGeometry(W + 0.32, fH), bandMat(W), { x: cx, y: fy, z: S.z1 + 0.165, cast: false });
  add(roof, new THREE.PlaneGeometry(D + 0.32, fH), bandMat(D), { x: S.x1 + 0.165, y: fy, z: cz, ry: Math.PI / 2, cast: false });
  const logoMat = new THREE.MeshStandardMaterial({ map: tex.logo, emissiveMap: tex.logo, emissive: '#ffffff', emissiveIntensity: 0.15, roughness: 0.5 });
  signMats.push(logoMat);
  const logoBox = (x, z, ry) => {
    const lb = new THREE.Group();
    lb.position.set(x, S.glassTop + 0.32, z);
    lb.rotation.y = ry;
    roof.add(lb);
    add(lb, new THREE.BoxGeometry(1.25, 0.88, 0.14), white);
    add(lb, new THREE.PlaneGeometry(1.18, 0.8), logoMat, { z: 0.075, cast: false });
    snowCaps.push(add(lb, new THREE.BoxGeometry(1.29, 0.06, 0.18), snowMat, { y: 0.47, cast: false }));
  };
  logoBox(-6.6, S.z1 + 0.2, 0);
  logoBox(S.x1 + 0.2, -3.9, Math.PI / 2);

  // eave / canopy along the front (rain drips from its edge)
  add(roof, new THREE.BoxGeometry(W + 0.32, 0.07, 0.62), white, { x: cx, y: S.glassTop - 0.02, z: S.z1 + 0.35 });
  const downLights = [];
  for (let x = S.x0 + 0.8; x < S.x1; x += 1.6) downLights.push(add(roof, new THREE.BoxGeometry(0.22, 0.02, 0.22), mat('#fffaf0', { emissive: '#fff1c8', emissiveIntensity: 0.6 }), { x, y: S.glassTop - 0.06, z: S.z1 + 0.4, cast: false }));
  snowCaps.push(add(roof, new THREE.BoxGeometry(W + 0.34, 0.05, 0.64), snowMat, { x: cx, y: S.glassTop + 0.03, z: S.z1 + 0.35, cast: false }));

  // roof + parapet + equipment
  add(roof, boxGeo(W + 0.32, 0.15, D + 0.32, 1 / 2), new THREE.MeshStandardMaterial({ map: repeatTex(tex.gravel, 1), color: '#b8bcc0', roughness: 1 }), { x: cx, y: S.fasciaTop + 0.075, z: cz });
  const para = mat('#eeeeea');
  add(roof, new THREE.BoxGeometry(W + 0.32, 0.24, 0.12), para, { x: cx, y: S.roofTop + 0.12, z: S.z1 + 0.1 });
  add(roof, new THREE.BoxGeometry(W + 0.32, 0.24, 0.12), para, { x: cx, y: S.roofTop + 0.12, z: S.z0 - 0.1 });
  add(roof, new THREE.BoxGeometry(0.12, 0.24, D + 0.32), para, { x: S.x1 + 0.1, y: S.roofTop + 0.12, z: cz });
  add(roof, new THREE.BoxGeometry(0.12, 0.24, D + 0.32), para, { x: S.x0 - 0.1, y: S.roofTop + 0.12, z: cz });
  snowCaps.push(add(roof, new THREE.BoxGeometry(W + 0.1, 0.1, D + 0.1), snowMat, { x: cx, y: S.roofTop + 0.05, z: cz, cast: false }));
  const ac = (x, z) => {
    add(roof, new THREE.BoxGeometry(1.0, 0.55, 0.7), mat('#d9dcdf'), { x, y: S.roofTop + 0.28, z });
    add(roof, new THREE.CylinderGeometry(0.22, 0.22, 0.03, 12), mat('#4a5058'), { x, y: S.roofTop + 0.56, z });
    snowCaps.push(add(roof, new THREE.BoxGeometry(1.04, 0.06, 0.74), snowMat, { x, y: S.roofTop + 0.58, z, cast: false }));
  };
  ac(-5.6, -3.2);
  ac(-3.9, -3.2);
  add(roof, new THREE.BoxGeometry(1.4, 0.35, 0.9), mat('#c9cdd1'), { x: -1.2, y: S.roofTop + 0.18, z: -3.8 });
  add(roof, new THREE.CylinderGeometry(0.06, 0.06, 0.5, 6), mat('#9aa0a6'), { x: 0.8, y: S.roofTop + 0.25, z: -4.2 });

  // ---------------------------------------------------- interior
  const I = new THREE.Group();
  g.add(I);
  const fy0 = 0.08;

  // drink fridges along the left wall (doors face +x) and part of the back wall
  const fridgeRun = (axis, start, end) => {
    const len = end - start;
    const depth = 0.62;
    const h = 2.05;
    const along = (l, hh, d) => (axis === 'x' ? new THREE.BoxGeometry(d, hh, l) : new THREE.BoxGeometry(l, hh, d));
    const pos = (t, y, off) => (axis === 'x' ? { x: S.x0 + 0.16 + off, y, z: t } : { x: t, y, z: S.z0 + 0.16 + off });
    const mid = (start + end) / 2;
    add(I, along(len, 0.12, depth), mat('#d4d8dc'), pos(mid, fy0 + 0.06, depth / 2));
    add(I, along(len, 0.32, depth + 0.04), mat(BRAND.green), pos(mid, fy0 + h + 0.16, depth / 2));
    add(I, along(len, h, 0.04), mat('#f4fbff', { emissive: '#eaf6ff', emissiveIntensity: 0.55 }), pos(mid, fy0 + h / 2, 0.03));
    const doors = Math.round(len / 0.75);
    for (let i = 0; i <= doors; i++) add(I, along(0.05, h, 0.06), mat('#c9ced3'), pos(start + (len * i) / doors, fy0 + h / 2, depth));
    add(glass, along(len, h - 0.14, 0.02), fridgeGlass, { ...pos(mid, fy0 + h / 2, depth + 0.01), cast: false });
    for (let lv = 0; lv < 5; lv++) {
      const y = fy0 + 0.18 + lv * 0.38;
      add(I, along(len, 0.025, depth - 0.08), mat('#e4e8ec'), pos(mid, y, depth / 2));
      for (let t = start + 0.08; t < end - 0.06; t += 0.11) {
        const col = pick(r, DRINK);
        const p = pos(t, y + 0.012, depth / 2 + 0.12);
        P.cyl(p.x, p.y, p.z, 0.04, 0.22 + (lv === 0 ? 0.08 : 0), col);
      }
    }
  };
  fridgeRun('x', S.z0 + 0.8, S.z1 - 0.65);
  fridgeRun('z', S.x0 + 0.85, -1.0);

  // behind the counter: cigarette / goods wall + price board
  const zw = S.z0 + 0.17;
  add(I, new THREE.BoxGeometry(2.2, 1.3, 0.12), mat('#3a3f45'), { x: 1.3, y: fy0 + 1.55, z: zw + 0.06 });
  add(I, new THREE.PlaneGeometry(2.1, 1.2), new THREE.MeshStandardMaterial({ map: tex.backShelf, roughness: 0.6 }), { x: 1.3, y: fy0 + 1.55, z: zw + 0.125, cast: false });
  add(I, new THREE.BoxGeometry(2.2, 0.32, 0.06), mat('#1f2328', { emissive: '#ffd27a', emissiveIntensity: 0.25 }), { x: 1.3, y: fy0 + 2.4, z: zw + 0.04 });
  // brand stripes running along the inner walls
  for (const [i, col] of [[0, BRAND.orange], [1, BRAND.green], [2, BRAND.red]]) {
    const y = 2.98 - i * 0.07;
    add(I, new THREE.BoxGeometry(W - 0.34, 0.06, 0.02), mat(col), { x: cx, y, z: zw + 0.005, cast: false });
    add(I, new THREE.BoxGeometry(0.02, 0.06, D - 0.34), mat(col), { x: S.x0 + 0.17, y, z: cz, cast: false });
  }

  // gondola shelves (snacks / instant noodles), two-sided
  const gondola = (zc, x0, x1, kind) => {
    const len = x1 - x0;
    const xc = (x0 + x1) / 2;
    const h = 1.32;
    add(I, new THREE.BoxGeometry(len, 0.12, 0.72), mat('#c9ced3'), { x: xc, y: fy0 + 0.06, z: zc });
    add(I, new THREE.BoxGeometry(len, h, 0.05), mat('#f2f2f0'), { x: xc, y: fy0 + h / 2, z: zc });
    for (const sx of [-1, 1]) add(I, new THREE.BoxGeometry(0.06, h + 0.06, 0.74), mat(BRAND.orange), { x: sx > 0 ? x1 : x0, y: fy0 + (h + 0.06) / 2, z: zc });
    // category sign on top
    add(I, new THREE.BoxGeometry(0.7, 0.2, 0.04), mat(kind === 'noodle' ? BRAND.red : BRAND.green), { x: xc, y: fy0 + h + 0.15, z: zc });
    for (const side of [-1, 1]) {
      for (let lv = 0; lv < 4; lv++) {
        const y = fy0 + 0.14 + lv * 0.31;
        add(I, new THREE.BoxGeometry(len - 0.04, 0.025, 0.32), mat('#e1e4e7'), { x: xc, y, z: zc + side * 0.19 });
        const noodles = kind === 'noodle' && side > 0;
        for (let x = x0 + 0.1; x < x1 - 0.08; x += noodles ? 0.15 : 0.17) {
          if (noodles) {
            const col = pick(r, ['#e31b23', '#f2c94c', '#ffffff', '#f58220', '#2f6fd0']);
            P.cyl(x, y + 0.012, zc + side * 0.2, 0.065, 0.13, col);
            if (lv < 3) P.cyl(x, y + 0.142, zc + side * 0.2, 0.065, 0.1, col);
          } else {
            const tall = 0.16 + r() * 0.08;
            P.box(x, y + 0.012, zc + side * 0.2, 0.13, tall, 0.1, pick(r, SNACK), (r() - 0.5) * 0.15);
          }
        }
      }
    }
  };
  gondola(-1.95, -6.9, -4.3, 'snack');
  gondola(-3.45, -6.9, -4.3, 'noodle');

  // bento / onigiri open cooler (low, open top)
  const bx = -2.9;
  const bz = -2.6;
  add(I, new THREE.BoxGeometry(1.6, 0.8, 0.8), mat('#e9edf1'), { x: bx, y: fy0 + 0.4, z: bz });
  add(I, new THREE.BoxGeometry(1.64, 0.1, 0.84), mat(BRAND.green), { x: bx, y: fy0 + 0.82, z: bz });
  add(I, new THREE.BoxGeometry(1.5, 0.02, 0.7), mat('#f6fbff', { emissive: '#eef8ff', emissiveIntensity: 0.4 }), { x: bx, y: fy0 + 0.88, z: bz });
  for (let i = 0; i < 4; i++)
    for (let j = 0; j < 3; j++) {
      const col = pick(r, ['#f4e3c1', '#e8c27a', '#ffffff', '#9fd36a', '#f2a65a']);
      P.box(bx - 0.56 + i * 0.37, fy0 + 0.89, bz - 0.22 + j * 0.22, 0.3, 0.07, 0.17, col);
      P.box(bx - 0.56 + i * 0.37, fy0 + 0.96, bz - 0.22 + j * 0.22, 0.28, 0.02, 0.15, '#e8f6ff');
    }
  add(I, new THREE.BoxGeometry(0.6, 0.16, 0.03), mat(BRAND.red), { x: bx, y: fy0 + 1.12, z: bz - 0.38 });

  // magazine rack under the front window
  add(I, new THREE.BoxGeometry(3.6, 0.55, 0.38), mat('#d4d8dc'), { x: -6.3, y: fy0 + 0.28, z: S.z1 - 0.32 });
  for (let x = -8.0; x < -4.6; x += 0.24) P.box(x, fy0 + 0.56, S.z1 - 0.32, 0.2, 0.28, 0.04, pick(r, SNACK), 0);

  // service counter (customer side faces -x)
  const cX = 0.25;
  const counterMat = new THREE.MeshStandardMaterial({ map: repeatTex(tex.counterFront, 1.4, 1), roughness: 0.6 });
  add(I, new THREE.BoxGeometry(0.62, 0.98, 2.9), [white, counterMat, white, white, white, white], { x: cX, y: fy0 + 0.49, z: -2.95 });
  add(I, new THREE.BoxGeometry(0.72, 0.05, 3.0), mat('#d9dcdf'), { x: cX, y: fy0 + 1.0, z: -2.95 });
  // register + card reader
  add(I, new THREE.BoxGeometry(0.35, 0.14, 0.3), mat('#2d3238'), { x: cX + 0.08, y: fy0 + 1.1, z: -2.3 });
  add(I, new THREE.BoxGeometry(0.26, 0.2, 0.03), mat('#2d3238', { emissive: '#7fd0ff', emissiveIntensity: 0.5 }), { x: cX + 0.05, y: fy0 + 1.3, z: -2.3, ry: Math.PI / 2, rz: 0.2 });
  add(I, new THREE.BoxGeometry(0.1, 0.06, 0.14), mat('#1f2328'), { x: cX - 0.18, y: fy0 + 1.06, z: -2.05 });
  // hot food warmer (fried snacks) on the counter
  add(I, new THREE.BoxGeometry(0.5, 0.42, 0.7), mat('#3b4148'), { x: cX + 0.05, y: fy0 + 1.23, z: -3.55 });
  add(I, new THREE.BoxGeometry(0.44, 0.3, 0.64), mat('#ffd28a', { emissive: '#ffb347', emissiveIntensity: 0.7 }), { x: cX - 0.02, y: fy0 + 1.25, z: -3.55 });
  for (let i = 0; i < 6; i++) P.box(cX - 0.12 + (i % 2) * 0.12, fy0 + 1.12, -3.8 + Math.floor(i / 2) * 0.22, 0.09, 0.07, 0.15, pick(r, ['#c8873a', '#e0a050', '#b5652a']));
  add(glass, new THREE.BoxGeometry(0.06, 0.34, 0.66), glassMat, { x: cX - 0.25, y: fy0 + 1.26, z: -3.55, cast: false });
  // oden pot
  add(I, new THREE.BoxGeometry(0.42, 0.12, 0.42), mat('#c0c4c8', { metalness: 0.4, roughness: 0.4 }), { x: cX + 0.05, y: fy0 + 1.08, z: -1.75 });
  add(I, new THREE.BoxGeometry(0.36, 0.02, 0.36), mat('#c58a3c'), { x: cX + 0.05, y: fy0 + 1.14, z: -1.75 });
  // back counter with microwaves (low, along the side glass)
  add(I, new THREE.BoxGeometry(0.5, 0.9, 2.6), mat('#e8eaec'), { x: 2.05, y: fy0 + 0.45, z: -3.2 });
  for (const z of [-2.5, -3.15]) {
    add(I, new THREE.BoxGeometry(0.42, 0.28, 0.5), mat('#f4f4f2'), { x: 2.05, y: fy0 + 1.04, z });
    add(I, new THREE.BoxGeometry(0.02, 0.18, 0.3), mat('#2d3238'), { x: 1.83, y: fy0 + 1.04, z: z - 0.04 });
  }
  add(I, new THREE.BoxGeometry(0.4, 0.5, 0.6), mat('#3b4148'), { x: 2.05, y: fy0 + 1.15, z: -4.1 });
  add(I, new THREE.PlaneGeometry(0.55, 0.42), new THREE.MeshStandardMaterial({ map: tex.backShelf, roughness: 0.6 }), { x: 1.84, y: fy0 + 1.15, z: -4.1, ry: -Math.PI / 2, cast: false });

  // self-service coffee corner (front right, by the windows)
  add(I, new THREE.BoxGeometry(1.4, 0.9, 0.5), mat('#3b4148'), { x: 1.55, y: fy0 + 0.45, z: -0.95 });
  add(I, new THREE.BoxGeometry(1.44, 0.04, 0.54), mat('#cdd1d5'), { x: 1.55, y: fy0 + 0.92, z: -0.95 });
  add(I, new THREE.BoxGeometry(0.42, 0.62, 0.38), mat('#1f2328'), { x: 1.2, y: fy0 + 1.25, z: -1.0 });
  add(I, new THREE.BoxGeometry(0.3, 0.14, 0.02), mat('#1f2328', { emissive: '#ffb35a', emissiveIntensity: 0.9 }), { x: 1.2, y: fy0 + 1.42, z: -0.8 });
  add(I, new THREE.CylinderGeometry(0.04, 0.035, 0.1, 8), mat('#ffffff'), { x: 1.2, y: fy0 + 1.0, z: -0.88 });
  for (let i = 0; i < 3; i++) add(I, new THREE.CylinderGeometry(0.05, 0.04, 0.3, 8), mat(i === 1 ? BRAND.orange : '#ffffff'), { x: 1.7 + i * 0.16, y: fy0 + 1.09, z: -0.95 });
  add(I, new THREE.BoxGeometry(0.4, 0.22, 0.03), mat(BRAND.orange), { x: 1.75, y: fy0 + 1.7, z: -1.18 });

  // ceiling light panels (visible near the windows)
  const ceilMat = new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#fffaf0', emissiveIntensity: 1.0 });
  for (let x = S.x0 + 1.2; x < S.x1 - 0.5; x += 2.2)
    for (const z of [-1.3, -2.7, -4.1]) add(roof, new THREE.BoxGeometry(1.4, 0.03, 0.22), ceilMat, { x, y: S.fasciaTop - 0.04, z, cast: false });

  P.build(I);

  // interior lights (warm-neutral, bright)
  const lights = [];
  for (const [x, z] of [[-6.6, -2.2], [-3.8, -2.2], [-1.0, -2.2], [1.4, -2.2]]) {
    const l = new THREE.PointLight('#fff1dc', 9, 9, 0.9);
    l.position.set(x, 2.6, z);
    g.add(l);
    lights.push(l);
  }

  return {
    group: g,
    roof,
    glass,
    doorPanels,
    signMats,
    ceilMat,
    downLights,
    lights,
    snowCaps,
    bounds: { x0: S.x0, x1: S.x1, z0: S.z0, z1: S.z1 },
  };
}
