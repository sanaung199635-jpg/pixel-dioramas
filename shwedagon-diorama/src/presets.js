// Lighting moods for the bottom switcher. All values blend smoothly.
import * as THREE from 'three';

export const PRESETS = {
  dawn: {
    sunDir: [0.9, 0.9, 0.2], sunColor: '#ffe0bc', sunInt: 3.5,
    hemiSky: '#e4ebf6', hemiGround: '#a39a84', hemiInt: 1.3,
    glow: 0.28, lamps: 0.35, flood: 0, jewel: 0.8,
    tint: '#fffaf5', sat: 0.98,
  },
  noon: {
    sunDir: [0.25, 1.0, 0.85], sunColor: '#ffe7c2', sunInt: 3.7,
    hemiSky: '#f3f1ff', hemiGround: '#b59a6c', hemiInt: 1.15,
    glow: 0.32, lamps: 0.2, flood: 0, jewel: 0.8,
    tint: '#fff6ea', sat: 1.04,
  },
  dusk: {
    sunDir: [-0.5, 1.0, 0.8], sunColor: '#ffcc96', sunInt: 4.4,
    hemiSky: '#f6e2d4', hemiGround: '#8f7d64', hemiInt: 1.25,
    glow: 0.55, lamps: 1.2, flood: 0.6, jewel: 1.2,
    tint: '#fff4e8', sat: 1.04,
  },
  night: {
    sunDir: [0.3, 0.95, -0.45], sunColor: '#bccaff', sunInt: 1.5,
    hemiSky: '#7887bd', hemiGround: '#323745', hemiInt: 1.3,
    glow: 1.35, lamps: 2.6, flood: 2.2, jewel: 2.5,
    tint: '#f6f7ff', sat: 0.95,
  },
};

export function makeState(p) {
  const s = {};
  for (const [k, v] of Object.entries(p)) {
    if (Array.isArray(v)) s[k] = new THREE.Vector3(...v).normalize();
    else if (typeof v === 'string') s[k] = new THREE.Color(v);
    else s[k] = v;
  }
  return s;
}

export function blendState(cur, tgt, k) {
  for (const key of Object.keys(tgt)) {
    const c = cur[key];
    const t = tgt[key];
    if (c.isVector3) c.lerp(t, k).normalize();
    else if (c.isColor) c.lerp(t, k);
    else cur[key] = c + (t - c) * k;
  }
}
