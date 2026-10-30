// Small procedural textures shared by the workshop machines (generated once at
// start-up, no image files): brushed-steel roughness streaks and abrasive grit.
import * as THREE from 'three';
import { noise3 } from '../stone/noise';

const SIZE = 128;

function mulberry(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dataTexture(fill: (x: number, y: number, out: Uint8Array, i: number) => void, srgb = false, repeat = 1): THREE.DataTexture {
  const d = new Uint8Array(SIZE * SIZE * 4);
  for (let y = 0; y < SIZE; y++) for (let x = 0; x < SIZE; x++) fill(x, y, d, (y * SIZE + x) * 4);
  const t = new THREE.DataTexture(d, SIZE, SIZE);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  t.anisotropy = 4;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

/** Fine streaks along u: roughness varies across the grain only (G channel). */
export function brushedRoughness(base: number, spread: number): THREE.DataTexture {
  const rnd = mulberry(17);
  const rows = Array.from({ length: SIZE }, () => rnd());
  return dataTexture((x, y, d, i) => {
    const r = base + spread * ((rows[y] - 0.5) * 1.4 + 0.3 * noise3(x / 16, y / 2, 0.5));
    d[i] = d[i + 1] = d[i + 2] = Math.round(THREE.MathUtils.clamp(r, 0, 1) * 255);
    d[i + 3] = 255;
  });
}

/** Abrasive surface: speckled colour map and matching grain normals. */
export function gritMaps(light: number, dark: number, repeat = 3): { map: THREE.DataTexture; normalMap: THREE.DataTexture } {
  const rnd = mulberry(23);
  const h = new Float32Array(SIZE * SIZE);
  for (let i = 0; i < h.length; i++) h[i] = rnd();
  const at = (x: number, y: number) => h[((y + SIZE) % SIZE) * SIZE + ((x + SIZE) % SIZE)];
  const cl = new THREE.Color(light), cd = new THREE.Color(dark);
  const c = new THREE.Color();
  const map = dataTexture((x, y, d, i) => {
    const g = at(x, y);
    c.copy(cd).lerp(cl, g > 0.9 ? 1 : g < 0.06 ? 0 : 0.4 + 0.25 * g);
    d[i] = c.r * 255; d[i + 1] = c.g * 255; d[i + 2] = c.b * 255; d[i + 3] = 255;
  }, true, repeat);
  const normalMap = dataTexture((x, y, d, i) => {
    const dx = at(x + 1, y) - at(x - 1, y), dy = at(x, y + 1) - at(x, y - 1);
    const n = new THREE.Vector3(-dx, -dy, 1.4).normalize();
    d[i] = (n.x * 0.5 + 0.5) * 255; d[i + 1] = (n.y * 0.5 + 0.5) * 255; d[i + 2] = (n.z * 0.5 + 0.5) * 255; d[i + 3] = 255;
  }, false, repeat);
  return { map, normalMap };
}
