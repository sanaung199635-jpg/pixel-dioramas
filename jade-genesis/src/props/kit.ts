// Shared materials (theme A · WHITE JADE GALLERY) and mesh helpers.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { brushedRoughness, gritMaps } from '../materials/surfaces';

const grit = gritMaps(0x9a9c97, 0x6e706b, 6);

const phys = (color: number, roughness: number, metalness = 0, extra: THREE.MeshPhysicalMaterialParameters = {}) =>
  new THREE.MeshPhysicalMaterial({ color, roughness, metalness, ...extra });

export const MAT = {
  enamel: phys(0xebe7df, 0.42, 0, { clearcoat: 0.35, clearcoatRoughness: 0.3 }),
  sage: phys(0xc9d1cb, 0.5, 0, { clearcoat: 0.2 }),
  accent: phys(0x2f6b4f, 0.4, 0, { clearcoat: 0.4 }),
  // brushed metals: roughness streaks come from a shared procedural map
  steel: phys(0xc8ccce, 1, 1, { roughnessMap: brushedRoughness(0.3, 0.06) }),
  darkSteel: phys(0x5a5f63, 1, 1, { roughnessMap: brushedRoughness(0.42, 0.05) }),
  rubber: phys(0x1e2122, 0.85),
  brass: phys(0xc9a46a, 0.3, 1),
  grit: phys(0xffffff, 0.95, 0, { map: grit.map, normalMap: grit.normalMap, normalScale: new THREE.Vector2(0.35, 0.35) }),
  /** Panel seams, kick plates and trim on the machine bodies. */
  seam: phys(0xa9a59c, 0.6),
  trim: phys(0x5b5f60, 0.45, 0, { clearcoat: 0.3 }),
  plinth: phys(0xf6f3ee, 0.6),
  glass: new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.02, transmission: 1, thickness: 0.05, ior: 1.5 }),
  waterSurface: new THREE.MeshPhysicalMaterial({ color: 0xbfd9d6, roughness: 0.08, transparent: true, opacity: 0.55, clearcoat: 1 }),
  water: new THREE.MeshStandardMaterial({ color: 0xcfe6ee, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.7, depthWrite: false }),
};

export function shadowed<T extends THREE.Object3D>(o: T): T {
  o.traverse((c) => { if ((c as THREE.Mesh).isMesh) { c.castShadow = true; c.receiveShadow = true; } });
  return o;
}

/**
 * Rounded box. Rounding segments follow the radius: a 2–8 mm edge (r < 0.012 at
 * 1 unit ≈ 100 mm) needs one segment, not four; this alone saved ~900 triangles
 * per small part.
 */
export function rbox(w: number, h: number, d: number, r: number, mat: THREE.Material): THREE.Mesh {
  const seg = r < 0.012 ? 1 : r < 0.04 ? 2 : 4;
  return shadowed(new THREE.Mesh(new RoundedBoxGeometry(w, h, d, seg, r), mat));
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

/**
 * Merge a group's direct, static child meshes that share a material into one
 * mesh each (transforms baked in). Sub-groups (moving parts) are left alone.
 * Cuts draw calls for props built from many small pieces.
 */
export function mergeByMaterial(group: THREE.Group): void {
  const byMat = new Map<THREE.Material, THREE.Mesh[]>();
  for (const c of group.children) {
    const m = c as THREE.Mesh;
    if (!m.isMesh || (m as unknown as THREE.InstancedMesh).isInstancedMesh || Array.isArray(m.material) || m.name || m.userData.info) continue;
    const list = byMat.get(m.material as THREE.Material) ?? [];
    list.push(m);
    byMat.set(m.material as THREE.Material, list);
  }
  for (const [mat, list] of byMat) {
    if (list.length < 2) continue;
    const geos = list.map((m) => {
      m.updateMatrix();
      const g = (m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone()).applyMatrix4(m.matrix);
      for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
      return g;
    });
    const merged = new THREE.Mesh(mergeGeometries(geos), mat);
    merged.castShadow = list.some((m) => m.castShadow);
    merged.receiveShadow = list.some((m) => m.receiveShadow);
    for (const m of list) group.remove(m);
    group.add(merged);
  }
}

/**
 * Manufacturing details for an enamel machine body (box w × h × d centred at c):
 * door-panel seams and bolt heads on the front (+z) and right (+x) faces, and a
 * dark kick plate. Returned meshes are meant to be merged with mergeByMaterial.
 */
export function bodyDetail(w: number, h: number, d: number, c: [number, number, number], doors = 2): THREE.Mesh[] {
  const out: THREE.Mesh[] = [];
  const [cx, cy, cz] = c;
  const kick = Math.min(0.09, h * 0.18);
  out.push(at(rbox(w + 0.012, kick, d + 0.012, 0.01, MAT.trim), cx, cy - h / 2 + kick / 2, cz));
  const seam = 0.012, inset = Math.min(0.12, h * 0.16);
  const y0 = cy - h / 2 + kick + inset, y1 = cy + h / 2 - inset;
  if (y1 - y0 < 0.12) return out;
  const face = (axis: 'z' | 'x', span: number, n: number) => {
    const off = (axis === 'z' ? d : w) / 2 + 0.003;
    const left = -span / 2 + inset, pw = (span - inset * 2) / n;
    for (let i = 0; i < n; i++) {
      const a = left + i * pw + (i ? 0.02 : 0), b = left + (i + 1) * pw - (i < n - 1 ? 0.02 : 0);
      const lines: [number, number, number, number][] = [[(a + b) / 2, y0, b - a, seam], [(a + b) / 2, y1, b - a, seam], [a, (y0 + y1) / 2, seam, y1 - y0], [b, (y0 + y1) / 2, seam, y1 - y0]];
      for (const [u, y, lw, lh] of lines) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(axis === 'z' ? lw : 0.006, lh, axis === 'z' ? 0.006 : lw), MAT.seam);
        m.position.set(axis === 'z' ? cx + u : cx + off, y, axis === 'z' ? cz + off : cz - u);
        out.push(m);
      }
      for (const [u, y] of [[a + 0.05, y0 + 0.05], [b - 0.05, y0 + 0.05], [a + 0.05, y1 - 0.05], [b - 0.05, y1 - 0.05]]) {
        const bolt = cyl(0.018, 0.018, 0.012, MAT.steel, 12);
        if (axis === 'z') { bolt.rotation.x = Math.PI / 2; bolt.position.set(cx + u, y, cz + off); }
        else { bolt.rotation.z = Math.PI / 2; bolt.position.set(cx + off, y, cz - u); }
        out.push(bolt);
      }
    }
  };
  face('z', w, doors);
  face('x', d, 1);
  return out;
}
