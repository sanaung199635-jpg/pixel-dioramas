import * as THREE from 'three';
import { MAT, cyl, lathe, shadowed } from './kit';

/** Museum display plinth: chamfered drum with a thin sage ring. */
export function plinth(r: number, h: number): THREE.Group {
  const g = new THREE.Group();
  const c = 0.03;
  g.add(lathe([[0.001, 0], [r - c, 0], [r, c], [r, h - c * 2], [r - c * 2, h], [0.001, h]], MAT.plinth, 128));
  g.add(lathe([[r * 0.995, h - 0.015], [r * 1.005, h - 0.015], [r * 1.005, h - 0.005], [r * 0.995, h - 0.005]], MAT.sage, 128));
  g.userData.top = h;
  return g;
}

export function loupe(): THREE.Group {
  const g = new THREE.Group();
  const ring = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.035, 24, 96), MAT.brass));
  const lens = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.03, 64), MAT.glass));
  lens.rotation.x = Math.PI / 2;
  const neck = cyl(0.04, 0.05, 0.16, MAT.brass); neck.position.y = -0.4;
  const handle = cyl(0.055, 0.045, 0.85, new THREE.MeshPhysicalMaterial({ color: 0xa98563, roughness: 0.75 })); handle.position.y = -0.88;
  g.add(ring, lens, neck, handle);
  return g;
}

/** Strong torch used for the lighting inspection. Points along +x. */
export function torch(): THREE.Group {
  const g = new THREE.Group();
  const body = cyl(0.07, 0.07, 0.9, MAT.darkSteel); body.rotation.z = Math.PI / 2;
  const head = cyl(0.11, 0.075, 0.2, MAT.darkSteel); head.rotation.z = -Math.PI / 2; head.position.x = 0.54;
  const grip = cyl(0.075, 0.075, 0.25, MAT.rubber, 24); grip.rotation.z = Math.PI / 2; grip.position.x = -0.15;
  const lens = cyl(0.095, 0.095, 0.01, new THREE.MeshBasicMaterial({ color: 0xfffbea })); lens.rotation.z = Math.PI / 2; lens.position.x = 0.645;
  g.add(body, head, grip, lens);
  return g;
}

export function labelCard(lines: { t: string; s: number; c?: string; w?: number }[], w = 1.15, h = 0.62): THREE.Group {
  const cv = document.createElement('canvas');
  cv.width = 720; cv.height = Math.round((720 * h) / w);
  const x = cv.getContext('2d')!;
  x.fillStyle = '#fbfaf6'; x.fillRect(0, 0, cv.width, cv.height);
  x.strokeStyle = '#d9d6cf'; x.lineWidth = 6; x.strokeRect(3, 3, cv.width - 6, cv.height - 6);
  x.fillStyle = '#2f6b4f'; x.fillRect(40, 44, 10, 70);
  lines.forEach((l, i) => {
    x.font = `${l.w ?? 500} ${l.s}px "Noto Sans SC", "PingFang SC", "WenQuanYi Zen Hei", sans-serif`;
    x.fillStyle = l.c ?? '#222826';
    x.fillText(l.t, 70, 90 + i * 66);
  });
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const face = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7 });
  const card = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.012), [MAT.enamel, MAT.enamel, MAT.enamel, MAT.enamel, face, MAT.enamel]);
  card.castShadow = true;
  card.rotation.x = -0.25;
  const stand = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.06, h * 0.7, 0.3), MAT.sage));
  stand.position.set(0, -h * 0.25, -0.12);
  stand.rotation.x = 0.2;
  const g = new THREE.Group();
  g.add(card, stand);
  return g;
}
