// Shared materials (theme A · WHITE JADE GALLERY) and mesh helpers.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const phys = (color: number, roughness: number, metalness = 0, extra: THREE.MeshPhysicalMaterialParameters = {}) =>
  new THREE.MeshPhysicalMaterial({ color, roughness, metalness, ...extra });

export const MAT = {
  enamel: phys(0xebe7df, 0.42, 0, { clearcoat: 0.35, clearcoatRoughness: 0.3 }),
  sage: phys(0xc9d1cb, 0.5, 0, { clearcoat: 0.2 }),
  accent: phys(0x2f6b4f, 0.4, 0, { clearcoat: 0.4 }),
  steel: phys(0xc8ccce, 0.28, 1),
  darkSteel: phys(0x5a5f63, 0.4, 1),
  rubber: phys(0x1e2122, 0.85),
  brass: phys(0xc9a46a, 0.3, 1),
  grit: phys(0x6d6f6c, 0.95),
  plinth: phys(0xf6f3ee, 0.6),
  glass: new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.02, transmission: 1, thickness: 0.05, ior: 1.5 }),
  waterSurface: new THREE.MeshPhysicalMaterial({ color: 0xbfd9d6, roughness: 0.08, transparent: true, opacity: 0.55, clearcoat: 1 }),
  water: new THREE.MeshStandardMaterial({ color: 0xcfe6ee, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.7, depthWrite: false }),
};

export function shadowed<T extends THREE.Object3D>(o: T): T {
  o.traverse((c) => { if ((c as THREE.Mesh).isMesh) { c.castShadow = true; c.receiveShadow = true; } });
  return o;
}

export function rbox(w: number, h: number, d: number, r: number, mat: THREE.Material): THREE.Mesh {
  return shadowed(new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, r), mat));
}

export function cyl(rt: number, rb: number, h: number, mat: THREE.Material, seg = 64, open = false): THREE.Mesh {
  return shadowed(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg, 1, open), mat));
}

export function lathe(points: [number, number][], mat: THREE.Material, seg = 96): THREE.Mesh {
  return shadowed(new THREE.Mesh(new THREE.LatheGeometry(points.map(([x, y]) => new THREE.Vector2(x, y)), seg), mat));
}

export function tube(points: [number, number, number][], r: number, mat: THREE.Material): THREE.Mesh {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  return shadowed(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, r, 12), mat));
}

export function at<T extends THREE.Object3D>(o: T, x: number, y: number, z: number): T {
  o.position.set(x, y, z);
  return o;
}

export function mulberry(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Soft radial contact shadow under an object. */
export function contactShadow(size: number, opacity: number): THREE.Mesh {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 128;
  const x = cv.getContext('2d')!;
  const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, `rgba(0,0,0,${opacity})`);
  gr.addColorStop(0.5, `rgba(0,0,0,${opacity * 0.4})`);
  gr.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = gr;
  x.fillRect(0, 0, 128, 128);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.003;
  m.renderOrder = -1;
  return m;
}
