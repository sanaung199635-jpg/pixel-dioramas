// Meshes derived from the stone solid. All carry `jpos` (stone-frame position)
// and `rim` (1 = weathered rind, 0 = exposed jade).
import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { FLOOR_Y, WINDOW_DEPTH, WINDOW_DIR, crossRadius, radiusAlong } from './StoneSolid';

export function addJadeAttributes(geo: THREE.BufferGeometry, rim = 0): THREE.BufferGeometry {
  const n = geo.attributes.position.count;
  if (!geo.attributes.jpos) geo.setAttribute('jpos', geo.attributes.position.clone());
  if (!geo.attributes.rim) geo.setAttribute('rim', new THREE.Float32BufferAttribute(new Float32Array(n).fill(rim), 1));
  return geo;
}

/** Outer shell of the stone, optionally with the polished window. */
export function shellGeometry(withWindow: boolean, detail = 48): THREE.BufferGeometry {
  let g: THREE.BufferGeometry = new THREE.IcosahedronGeometry(1, detail);
  g.deleteAttribute('normal');
  g.deleteAttribute('uv');
  g = mergeVertices(g);
  const pos = g.attributes.position as THREE.BufferAttribute;
  const rim = new Float32Array(pos.count);
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    v.multiplyScalar(radiusAlong(v));
    if (v.y < -FLOOR_Y) v.y = -FLOOR_Y - (v.y + FLOOR_Y) * 0.04;
    let r = 1;
    if (withWindow) {
      const over = v.dot(WINDOW_DIR) - WINDOW_DEPTH;
      if (over > 0) v.addScaledVector(WINDOW_DIR, -over);
      r = 1 - THREE.MathUtils.smoothstep(over, -0.03, 0.02);
    }
    rim[i] = r;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  g.setAttribute('rim', new THREE.BufferAttribute(rim, 1));
  return addJadeAttributes(g);
}

/**
 * Flat cut face at plane x = c. sign = +1 faces +x.
 * The outer ~5% is rind, except where the edge lies on the window.
 */
export function capGeometry(c: number, sign: 1 | -1, withWindow: boolean, rings = 30, segs = 200, rindBand = 0.05): THREE.BufferGeometry {
  const rho: number[] = [], edgeWin: boolean[] = [];
  const p = new THREE.Vector3();
  for (let j = 0; j < segs; j++) {
    const th = (j / segs) * Math.PI * 2;
    rho[j] = crossRadius(c, th, withWindow);
    p.set(c, rho[j] * Math.cos(th), rho[j] * Math.sin(th));
    edgeWin[j] = withWindow && p.dot(WINDOW_DIR) > WINDOW_DEPTH - 0.02;
  }
  const P: number[] = [c, 0, 0], RIM: number[] = [0], I: number[] = [];
  for (let i = 1; i <= rings; i++) {
    const t = 1 - Math.pow(1 - i / rings, 1.6);
    for (let j = 0; j < segs; j++) {
      const th = (j / segs) * Math.PI * 2, r = rho[j] * t;
      P.push(c, r * Math.cos(th), r * Math.sin(th));
      RIM.push(edgeWin[j] ? 0 : THREE.MathUtils.smoothstep(t, 1 - rindBand, 1 - rindBand * 0.35));
    }
  }
  const idx = (i: number, j: number) => 1 + (i - 1) * segs + (j % segs);
  for (let j = 0; j < segs; j++) {
    if (sign > 0) I.push(0, idx(1, j), idx(1, j + 1)); else I.push(0, idx(1, j + 1), idx(1, j));
  }
  for (let i = 1; i < rings; i++) {
    for (let j = 0; j < segs; j++) {
      const a = idx(i, j), b = idx(i, j + 1), cc = idx(i + 1, j + 1), d = idx(i + 1, j);
      if (sign > 0) I.push(a, d, cc, a, cc, b); else I.push(a, cc, d, a, b, cc);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('rim', new THREE.Float32BufferAttribute(RIM, 1));
  g.setIndex(I);
  g.computeVertexNormals();
  return addJadeAttributes(g);
}

/**
 * Shell that can morph from the original surface (uFlat = 0) to the shape with
 * the ground window (uFlat = 1). `position`/`normal`/`jpos` are the original
 * surface; `wpos`/`wnormal` the flattened one; `rim` marks the window area.
 */
export function shellMorphGeometry(detail = 48): THREE.BufferGeometry {
  const orig = shellGeometry(false, detail);
  const flat = shellGeometry(true, detail);
  orig.setAttribute('wpos', flat.attributes.position.clone());
  orig.setAttribute('wnormal', flat.attributes.normal.clone());
  orig.setAttribute('rim', flat.attributes.rim.clone());
  flat.dispose();
  return orig;
}

// ---------------------------------------------------------------------------
// Pieces turned around the drill axis (stone-frame x axis): core, bangle, hole wall.

/** Drill axis in the stone frame: through (xc, cy, cz), along +x. */
export interface AxisFrame { xc: number; cy: number; cz: number }

/** Proper rotation Rz(-90°): local (lx, ly, lz) → stone (xc + ly, cy − lx, cz + lz). */
export function axisMatrix(f: AxisFrame, lift = 0): THREE.Matrix4 {
  return new THREE.Matrix4().makeTranslation(f.xc + lift, f.cy, f.cz).multiply(new THREE.Matrix4().makeRotationZ(-Math.PI / 2));
}

export interface RingShape { ri: number; ro: number; t: number; e: number }

/** Closed CCW profile (r, y) of a superellipse bar: e ≈ 0.1 square, e = 1 round. */
export function ringProfile(s: RingShape, n = 96): [number, number][] {
  const rc = (s.ri + s.ro) / 2, a = (s.ro - s.ri) / 2, b = s.t / 2, out: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const ph = -Math.PI / 2 + (i / n) * Math.PI * 2, c = Math.cos(ph), sn = Math.sin(ph);
    out.push([rc + a * Math.sign(c) * Math.abs(c) ** s.e, b * Math.sign(sn) * Math.abs(sn) ** s.e]);
  }
  return out;
}

/**
 * Lathe with analytic normals and stone-frame jpos. Positions can be rewritten
 * in place with `update()` (same vertex count), which is how the bangle's
 * cross-section changes while it is ground.
 */
export class TurnedPiece {
  readonly geometry = new THREE.BufferGeometry();
  private readonly pos: Float32Array;
  private readonly nor: Float32Array;
  private readonly jp: Float32Array;

  constructor(private readonly n: number, private readonly segs: number, private readonly frame: AxisFrame) {
    const count = (n + 1) * (segs + 1);
    this.pos = new Float32Array(count * 3);
    this.nor = new Float32Array(count * 3);
    this.jp = new Float32Array(count * 3);
    const idx: number[] = [];
    for (let j = 0; j < segs; j++) {
      for (let i = 0; i < n; i++) {
        const a = j * (n + 1) + i, b = a + 1, c = (j + 1) * (n + 1) + i, d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
    }
    this.geometry.setIndex(idx);
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geometry.setAttribute('normal', new THREE.BufferAttribute(this.nor, 3));
    this.geometry.setAttribute('jpos', new THREE.BufferAttribute(this.jp, 3));
    this.geometry.setAttribute('rim', new THREE.BufferAttribute(new Float32Array(count), 1));
  }

  /** Profile must have n + 1 points, CCW in (r, y). */
  update(profile: [number, number][]): void {
    const { n, segs, frame } = this;
    for (let j = 0; j <= segs; j++) {
      const th = (j / segs) * Math.PI * 2, st = Math.sin(th), ct = Math.cos(th);
      for (let i = 0; i <= n; i++) {
        const [r, y] = profile[i];
        const [rp, yp] = profile[Math.max(0, i - 1)];
        const [rn, yn] = profile[Math.min(n, i + 1)];
        let nx = yn - yp, ny = -(rn - rp);
        const l = Math.hypot(nx, ny) || 1;
        nx /= l; ny /= l;
        const k = (j * (n + 1) + i) * 3;
        const lx = r * st, lz = r * ct;
        this.pos[k] = lx; this.pos[k + 1] = y; this.pos[k + 2] = lz;
        this.nor[k] = nx * st; this.nor[k + 1] = ny; this.nor[k + 2] = nx * ct;
        this.jp[k] = frame.xc + y; this.jp[k + 1] = frame.cy - lx; this.jp[k + 2] = frame.cz + lz;
      }
    }
    for (const name of ['position', 'normal', 'jpos']) (this.geometry.getAttribute(name) as THREE.BufferAttribute).needsUpdate = true;
    this.geometry.computeBoundingSphere();
  }
}

/** Solid disc (the drilled-out core). */
export function discProfile(r: number, t: number, n = 24): [number, number][] {
  const out: [number, number][] = [];
  const pts: [number, number][] = [[0.0001, -t / 2], [r - 0.004, -t / 2], [r, -t / 2 + 0.004], [r, t / 2 - 0.004], [r - 0.004, t / 2], [0.0001, t / 2]];
  // resample the polyline to n + 1 points so TurnedPiece can use it
  const lens = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
  const total = lens.reduce((a, b) => a + b, 0);
  for (let k = 0; k <= n; k++) {
    let d = (k / n) * total, i = 0;
    while (i < lens.length - 1 && d > lens[i]) { d -= lens[i]; i++; }
    const t0 = Math.min(1, d / lens[i]);
    out.push([pts[i][0] + (pts[i + 1][0] - pts[i][0]) * t0, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t0]);
  }
  return out;
}
