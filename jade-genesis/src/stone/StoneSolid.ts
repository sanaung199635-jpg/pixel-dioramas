// The rough stone as a solid in its own frame ("stone frame", 1 unit ≈ 100 mm).
// Every piece cut from it — halves, slab, core, bangle — keeps this frame in its
// `jpos` attribute, so the shader shows one continuous interior.
import * as THREE from 'three';
import { fbm3, noise3 } from './noise';

export const AXES = new THREE.Vector3(1.32, 0.95, 1.05);
/** The stone rests on a flattish base at y = -FLOOR_Y. */
export const FLOOR_Y = 0.8;
export const WINDOW_DIR = new THREE.Vector3(0.25, 0.42, 1).normalize();

/** Named fissure plane: dot(p, n) = d. Mirrors FIS_N / FIS_D in the jade shader. */
export const FISSURE = { normal: new THREE.Vector3(0.3, 1.0, -0.15).normalize(), d: 0.585 };

/** Planned cut: the stone is halved at x = 0. */
export const CUT_X = 0;

export function radiusAlong(d: THREE.Vector3): number {
  const e = 1 / Math.sqrt((d.x / AXES.x) ** 2 + (d.y / AXES.y) ** 2 + (d.z / AXES.z) ** 2);
  const n = fbm3(d.x * 1.15 + 3, d.y * 1.15, d.z * 1.15, 4) * 0.26 + noise3(d.x * 4.5, d.y * 4.5 + 2, d.z * 4.5) * 0.035;
  return e * (1 + n);
}

/** Depth of the flat window plane along WINDOW_DIR. */
export const WINDOW_DEPTH = radiusAlong(WINDOW_DIR) * 0.93;

const tmp = new THREE.Vector3();
export function isInside(p: THREE.Vector3, withWindow: boolean): boolean {
  if (p.y < -FLOOR_Y) return false;
  if (withWindow && p.dot(WINDOW_DIR) > WINDOW_DEPTH) return false;
  const l = p.length();
  if (l < 1e-6) return true;
  tmp.copy(p).divideScalar(l);
  return l <= radiusAlong(tmp);
}

/** Radius of the cross-section at plane x = c along angle th in the (y, z) plane. */
export function crossRadius(c: number, th: number, withWindow: boolean): number {
  const p = new THREE.Vector3();
  const cy = Math.cos(th), sz = Math.sin(th);
  let lo = 0, hi = 0;
  const step = 0.02;
  for (let r = step; r < 3; r += step) {
    p.set(c, r * cy, r * sz);
    if (!isInside(p, withWindow)) { hi = r; break; }
    lo = r;
  }
  for (let k = 0; k < 18; k++) {
    const m = (lo + hi) / 2;
    p.set(c, m * cy, m * sz);
    if (isInside(p, withWindow)) lo = m; else hi = m;
  }
  return lo;
}

/** A point on the window face that lies on the fissure plane (for label pins). */
export function fissureOnWindow(): THREE.Vector3 {
  const w = WINDOW_DIR;
  const u = new THREE.Vector3(1, 0, 0).cross(w).normalize();
  const v = w.clone().cross(u);
  let best = new THREE.Vector3(), bestD = Infinity;
  for (let a = -0.6; a <= 0.6; a += 0.01) {
    for (let b = -0.6; b <= 0.6; b += 0.01) {
      const p = w.clone().multiplyScalar(WINDOW_DEPTH).addScaledVector(u, a).addScaledVector(v, b);
      if (!isInside(p.clone().addScaledVector(w, -0.01), true)) continue;
      const d = Math.abs(p.dot(FISSURE.normal) - FISSURE.d) + Math.abs(a) * 0.02;
      if (d < bestD) { bestD = d; best = p; }
    }
  }
  return best;
}
