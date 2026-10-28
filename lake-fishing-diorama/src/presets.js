// Time-of-day moods used by the bottom scene switcher. Values blend smoothly.
import * as THREE from 'three';

export const PRESETS = {
  morning: {
    sunDir: [0.95, 0.75, -0.45], sunColor: '#ffe2c0', sunInt: 3.2,
    hemiSky: '#dbe7f6', hemiGround: '#8b8f6c', hemiInt: 1.55,
    deep: '#3b8b99', shallow: '#7cc6bd', highlight: '#fff4df',
    windows: 0.5, lamps: 0.2, fire: 0.55, mist: 1, fireflies: 0, smoke: 1,
    tint: '#fff9f3', sat: 0.94,
  },
  noon: {
    sunDir: [0.42, 1.0, 0.32], sunColor: '#fff4e2', sunInt: 2.8,
    hemiSky: '#e6f1ff', hemiGround: '#7f8c58', hemiInt: 1.35,
    deep: '#2a7d8c', shallow: '#56b4a6', highlight: '#ffffff',
    windows: 0, lamps: 0, fire: 0.45, mist: 0, fireflies: 0, smoke: 0.6,
    tint: '#ffffff', sat: 0.97,
  },
  dusk: {
    sunDir: [-0.8, 1.15, 0.55], sunColor: '#ffd0a0', sunInt: 4.6,
    hemiSky: '#f4e0d4', hemiGround: '#857a62', hemiInt: 1.5,
    deep: '#2f6886', shallow: '#74a9ad', highlight: '#ffc890',
    windows: 1.8, lamps: 1.2, fire: 1.3, mist: 0, fireflies: 0.45, smoke: 0.9,
    tint: '#fff4e8', sat: 1.04,
  },
  night: {
    sunDir: [0.35, 0.95, -0.45], sunColor: '#b8c8ff', sunInt: 1.6,
    hemiSky: '#7383bb', hemiGround: '#2a3440', hemiInt: 1.25,
    deep: '#1f4566', shallow: '#3a7a92', highlight: '#b0c8ff',
    windows: 3.2, lamps: 2.6, fire: 2.4, mist: 0.12, fireflies: 1, smoke: 0.5,
    tint: '#f6f8ff', sat: 0.88,
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
