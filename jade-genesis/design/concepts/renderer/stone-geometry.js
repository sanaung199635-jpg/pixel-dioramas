// PHASE 1 CONCEPT TOOL — not production code.
// One rough stone defined as a solid: every derived piece (halves, slab, core,
// bangle blank, bangle) is built from the same solid and carries `jpos` in the
// stone frame, so the jade shader shows a continuous interior.
import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { addJadeAttributes } from './jade-material.js';

// ---------- seeded gradient noise ----------
const perm = new Uint8Array(512);
(() => {
  let a = 1234567;
  const rnd = () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const p = [...Array(256).keys()];
  for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
})();
const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a, b, t) => a + (b - a) * t;
function grad(h, x, y, z) { const u = h < 8 ? x : y, v = h < 4 ? y : h === 12 || h === 14 ? x : z; return ((h & 1) ? -u : u) + ((h & 2) ? -v : v); }
export function noise3(x, y, z) {
  const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
  x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
  const u = fade(x), v = fade(y), w = fade(z);
  const A = perm[X] + Y, AA = perm[A] + Z, AB = perm[A + 1] + Z, B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
  return lerp(lerp(lerp(grad(perm[AA] & 15, x, y, z), grad(perm[BA] & 15, x - 1, y, z), u), lerp(grad(perm[AB] & 15, x, y - 1, z), grad(perm[BB] & 15, x - 1, y - 1, z), u), v),
    lerp(lerp(grad(perm[AA + 1] & 15, x, y, z - 1), grad(perm[BA + 1] & 15, x - 1, y, z - 1), u), lerp(grad(perm[AB + 1] & 15, x, y - 1, z - 1), grad(perm[BB + 1] & 15, x - 1, y - 1, z - 1), u), v), w);
}
export function fbm3(x, y, z, oct = 4) { let s = 0, a = 0.5; for (let i = 0; i < oct; i++) { s += a * noise3(x, y, z); x = x * 2.03 + 1.7; y = y * 2.03 + 9.2; z = z * 2.03 + 3.1; a *= 0.5; } return s; }

// ---------- the solid ----------
export const AX = [1.32, 0.95, 1.05];
export const FY = 0.8; // flat-ish resting base at y = -FY
export const WIN = { dir: new THREE.Vector3(0.25, 0.42, 1).normalize(), depth: 0 };

export function Rdir(d) {
  const e = 1 / Math.sqrt((d.x / AX[0]) ** 2 + (d.y / AX[1]) ** 2 + (d.z / AX[2]) ** 2);
  const n = fbm3(d.x * 1.15 + 3, d.y * 1.15, d.z * 1.15, 4) * 0.26 + noise3(d.x * 4.5, d.y * 4.5 + 2, d.z * 4.5) * 0.035;
  return e * (1 + n);
}
WIN.depth = Rdir(WIN.dir) * 0.93;

const _d = new THREE.Vector3();
export function inside(p, win) {
  if (p.y < -FY) return false;
  if (win && p.dot(WIN.dir) > WIN.depth) return false;
  const l = p.length();
  if (l < 1e-6) return true;
  _d.copy(p).divideScalar(l);
  return l <= Rdir(_d);
}

/** Outer shell of the stone. rim attribute = 1 on weathered skin, 0 on the polished window. */
export function shellGeometry(win = false, detail = 48) {
  let g = new THREE.IcosahedronGeometry(1, detail);
  g.deleteAttribute('normal'); g.deleteAttribute('uv');
  g = mergeVertices(g);
  const pos = g.attributes.position, rim = new Float32Array(pos.count);
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    v.multiplyScalar(Rdir(v));
    if (v.y < -FY) v.y = -FY - (v.y + FY) * 0.04;
    let r = 1;
    if (win) {
      const over = v.dot(WIN.dir) - WIN.depth;
      if (over > 0) v.addScaledVector(WIN.dir, -over);
      r = 1 - THREE.MathUtils.smoothstep(over, -0.03, 0.02);
    }
    rim[i] = r;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  g.setAttribute('rim', new THREE.BufferAttribute(rim, 1));
  addJadeAttributes(g);
  return g;
}

/** Radius of the cross-section at plane x=c, along angle th in the (y,z) plane. */
export function crossRadius(c, th, win) {
  const p = new THREE.Vector3();
  const cy = Math.cos(th), sz = Math.sin(th);
  let lo = 0, hi = 0, step = 0.02;
  for (let r = step; r < 3; r += step) { p.set(c, r * cy, r * sz); if (!inside(p, win)) { hi = r; break; } lo = r; }
  for (let k = 0; k < 18; k++) { const m = (lo + hi) / 2; p.set(c, m * cy, m * sz); if (inside(p, win)) lo = m; else hi = m; }
  return lo;
}
function edgeIsWindow(c, th, rho, win) {
  if (!win) return false;
  const p = new THREE.Vector3(c, rho * Math.cos(th), rho * Math.sin(th));
  return p.dot(WIN.dir) > WIN.depth - 0.02;
}

/** Flat cut face at x=c. sign=+1 faces +x. rind band ≈ outer 5%. */
export function capGeometry(c, sign, win, { rings = 30, segs = 200, rindBand = 0.05 } = {}) {
  const rho = [], edgeWin = [];
  for (let j = 0; j < segs; j++) { const th = (j / segs) * Math.PI * 2; rho[j] = crossRadius(c, th, win); edgeWin[j] = edgeIsWindow(c, th, rho[j], win); }
  const P = [c, 0, 0], RIM = [0], I = [];
  for (let i = 1; i <= rings; i++) {
    const t = 1 - Math.pow(1 - i / rings, 1.6);
    for (let j = 0; j < segs; j++) {
      const th = (j / segs) * Math.PI * 2, r = rho[j] * t;
      P.push(c, r * Math.cos(th), r * Math.sin(th));
      RIM.push(edgeWin[j] ? 0 : THREE.MathUtils.smoothstep(t, 1 - rindBand, 1 - rindBand * 0.35));
    }
  }
  const idx = (i, j) => 1 + (i - 1) * segs + (j % segs);
  for (let j = 0; j < segs; j++) sign > 0 ? I.push(0, idx(1, j), idx(1, j + 1)) : I.push(0, idx(1, j + 1), idx(1, j));
  for (let i = 1; i < rings; i++) for (let j = 0; j < segs; j++) {
    const a = idx(i, j), b = idx(i, j + 1), cc = idx(i + 1, j + 1), d = idx(i + 1, j);
    if (sign > 0) I.push(a, d, cc, a, cc, b); else I.push(a, cc, d, a, b, cc);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('rim', new THREE.Float32BufferAttribute(RIM, 1));
  g.setIndex(I); g.computeVertexNormals();
  addJadeAttributes(g);
  return { geo: g, rho };
}

/** Slab between x0 and x1: two cut faces + weathered side wall. */
export function slabGeometries(x0, x1, win) {
  const segs = 200;
  const top = capGeometry(x1, +1, win, { segs }), bot = capGeometry(x0, -1, win, { segs });
  const P = [], I = [], RIM = [];
  for (let j = 0; j < segs; j++) {
    const th = (j / segs) * Math.PI * 2;
    const ew = edgeIsWindow(x1, th, top.rho[j], win);
    P.push(x0, bot.rho[j] * Math.cos(th), bot.rho[j] * Math.sin(th));
    P.push(x1, top.rho[j] * Math.cos(th), top.rho[j] * Math.sin(th));
    RIM.push(ew ? 0 : 1, ew ? 0 : 1);
  }
  for (let j = 0; j < segs; j++) {
    const a = j * 2, b = j * 2 + 1, c = ((j + 1) % segs) * 2 + 1, d = ((j + 1) % segs) * 2;
    I.push(a, d, c, a, c, b);
  }
  const side = new THREE.BufferGeometry();
  side.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  side.setAttribute('rim', new THREE.Float32BufferAttribute(RIM, 1));
  side.setIndex(I); side.computeVertexNormals(); addJadeAttributes(side);
  return { top: top.geo, bottom: bot.geo, side };
}

/**
 * Ring / disc pieces cut by a tube drill along the stone x axis.
 * profile: array of [r, y] (CCW) in the piece's local lathe frame.
 * frame: { xc, cy, cz } — the drill axis in the stone frame.
 * Lathe axis is local Y, mapped to stone X so jpos stays continuous.
 * Place the mesh with placeOnAxis() so the transform matches jpos exactly.
 */
export function latheJade(profile, frame, segs = 160) {
  const g = new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), segs);
  const pos = g.attributes.position, J = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    J[i * 3] = frame.xc + pos.getY(i);
    J[i * 3 + 1] = frame.cy - pos.getX(i);
    J[i * 3 + 2] = frame.cz + pos.getZ(i);
  }
  g.setAttribute('jpos', new THREE.BufferAttribute(J, 3));
  addJadeAttributes(g);
  return g;
}

export const profiles = {
  rect(ri, ro, t) { const c = 0.004; return [[ri + c, -t / 2], [ro - c, -t / 2], [ro, -t / 2 + c], [ro, t / 2 - c], [ro - c, t / 2], [ri + c, t / 2], [ri, t / 2 - c], [ri, -t / 2 + c], [ri + c, -t / 2]]; },
  rounded(ri, ro, t, k = 0.35) {
    const rc = (ri + ro) / 2, a = (ro - ri) / 2, b = t / 2, out = [];
    for (let i = 0; i <= 96; i++) {
      const ph = -Math.PI / 2 + (i / 96) * Math.PI * 2, c = Math.cos(ph), s = Math.sin(ph);
      const e = 2 / (2 + k * 4); // superellipse exponent: lower = squarer
      out.push([rc + a * Math.sign(c) * Math.abs(c) ** e, b * Math.sign(s) * Math.abs(s) ** e]);
    }
    return out;
  },
  round(ri, ro, t) { return profiles.rounded(ri, ro, t, 0); },
  disc(r, t) { return [[0.0001, -t / 2], [r - 0.004, -t / 2], [r, -t / 2 + 0.004], [r, t / 2 - 0.004], [r - 0.004, t / 2], [0.0001, t / 2]]; },
};

/** Inner wall of a drilled hole (the slab side), facing the hole axis. */
export function holeWall(r, t, frame) {
  return latheJade([[r, t / 2], [r, -t / 2]], frame, 160);
}

/** Proper rotation (Rz -90°): local (lx,ly,lz) -> stone (xc+ly, cy-lx, cz+lz). */
export function placeOnAxis(mesh, frame, lift = 0) {
  mesh.position.set(frame.xc + lift, frame.cy, frame.cz);
  mesh.rotation.set(0, 0, -Math.PI / 2);
  return mesh;
}
