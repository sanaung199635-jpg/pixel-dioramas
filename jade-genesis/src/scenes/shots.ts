import * as THREE from 'three';

export interface Shot {
  position: THREE.Vector3;
  target: THREE.Vector3;
}

export const shot = (p: [number, number, number], t: [number, number, number], origin = new THREE.Vector3()): Shot => ({
  position: new THREE.Vector3(...p).add(origin),
  target: new THREE.Vector3(...t).add(origin),
});

export function lerpShot(a: Shot, b: Shot, k: number, out: Shot): Shot {
  out.position.lerpVectors(a.position, b.position, k);
  out.target.lerpVectors(a.target, b.target, k);
  return out;
}
