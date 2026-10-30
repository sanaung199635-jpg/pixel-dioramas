// Small helpers for placing objects by matrices and moving them between poses.
import * as THREE from 'three';

const _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _s = new THREE.Vector3();
const _p2 = new THREE.Vector3(), _q2 = new THREE.Quaternion(), _s2 = new THREE.Vector3();

/** Set an object's transform from a world matrix (objects here are scene children). */
export function place(obj: THREE.Object3D, m: THREE.Matrix4): void {
  m.decompose(obj.position, obj.quaternion, obj.scale);
}

export const T = (x: number, y: number, z: number): THREE.Matrix4 => new THREE.Matrix4().makeTranslation(x, y, z);
export const Tv = (v: THREE.Vector3): THREE.Matrix4 => new THREE.Matrix4().makeTranslation(v.x, v.y, v.z);
export const Rx = (a: number): THREE.Matrix4 => new THREE.Matrix4().makeRotationX(a);
export const Ry = (a: number): THREE.Matrix4 => new THREE.Matrix4().makeRotationY(a);
export const Rz = (a: number): THREE.Matrix4 => new THREE.Matrix4().makeRotationZ(a);
export const S = (k: number): THREE.Matrix4 => new THREE.Matrix4().makeScale(k, k, k);

/** Product of matrices, left to right. */
export function mul(...ms: THREE.Matrix4[]): THREE.Matrix4 {
  const out = new THREE.Matrix4();
  for (const m of ms) out.multiply(m);
  return out;
}

/** Interpolate two rigid(+uniform scale) poses, lifting the path by `arc` at mid-way. */
export function blend(a: THREE.Matrix4, b: THREE.Matrix4, t: number, arc = 0): THREE.Matrix4 {
  a.decompose(_p, _q, _s);
  b.decompose(_p2, _q2, _s2);
  const p = _p.clone().lerp(_p2, t);
  p.y += Math.sin(Math.PI * t) * arc;
  const q = _q.clone().slerp(_q2, t);
  const s = _s.clone().lerp(_s2, t);
  return new THREE.Matrix4().compose(p, q, s);
}

export function origin(m: THREE.Matrix4): THREE.Vector3 {
  return new THREE.Vector3().setFromMatrixPosition(m);
}

export function apply(m: THREE.Matrix4, x: number, y: number, z: number): THREE.Vector3 {
  return new THREE.Vector3(x, y, z).applyMatrix4(m);
}
