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
