// Station 01: illustrative open-pit diorama (not modelled on any real mine).
import * as THREE from 'three';
import { MAT, at, cyl, mulberry, rbox } from './kit';

const lin = (r: number, g: number, b: number) => new THREE.Color(r, g, b).convertSRGBToLinear();
const wobble = (x: number, y: number) => Math.sin(x * 1.7 + Math.sin(y * 1.3)) * 0.5 + Math.sin(y * 2.1 + Math.cos(x * 0.7)) * 0.5;
const ochre = new THREE.MeshPhysicalMaterial({ color: 0xd2a24a, roughness: 0.5, clearcoat: 0.3 });

export interface Excavator {
  root: THREE.Group;
  boom: THREE.Group;
  stick: THREE.Group;
  bucket: THREE.Group;
}

export function excavator(): Excavator {
  const root = new THREE.Group();
  for (const z of [-0.2, 0.2]) root.add(at(rbox(0.75, 0.14, 0.13, 0.06, MAT.rubber), 0, 0.07, z));
  root.add(at(cyl(0.12, 0.12, 0.07, MAT.darkSteel, 24), 0, 0.17, 0));
  const upper = new THREE.Group();
  upper.position.y = 0.2;
  root.add(upper);
  upper.add(at(rbox(0.6, 0.2, 0.42, 0.04, ochre), -0.05, 0.1, 0));
  upper.add(at(rbox(0.22, 0.24, 0.2, 0.03, ochre), 0.12, 0.32, 0.1));
  upper.add(at(rbox(0.2, 0.18, 0.21, 0.02, MAT.glass), 0.13, 0.33, 0.1));
  upper.add(at(rbox(0.2, 0.16, 0.4, 0.03, MAT.darkSteel), -0.28, 0.24, 0));
  const boom = new THREE.Group();
  boom.position.set(0.18, 0.18, -0.08);
  upper.add(boom);
  boom.add(at(rbox(0.65, 0.08, 0.07, 0.02, ochre), 0.32, 0, 0));
  const stick = new THREE.Group();
  stick.position.set(0.64, 0, 0);
  boom.add(stick);
  stick.add(at(rbox(0.48, 0.06, 0.06, 0.02, ochre), 0.24, 0, 0));
  const bucket = new THREE.Group();
  bucket.position.set(0.48, 0, 0);
  stick.add(bucket);
  bucket.add(at(rbox(0.16, 0.12, 0.16, 0.02, MAT.darkSteel), 0.07, -0.02, 0));
  return { root, boom, stick, bucket };
}

function truck(): THREE.Group {
  const g = new THREE.Group();
  for (const [x, z] of [[-0.2, 0.15], [-0.2, -0.15], [0.25, 0.15], [0.25, -0.15]]) {
    const w = cyl(0.07, 0.07, 0.06, MAT.rubber, 20); w.rotation.x = Math.PI / 2; w.position.set(x, 0.07, z); g.add(w);
  }
  g.add(at(rbox(0.75, 0.06, 0.32, 0.02, MAT.darkSteel), 0.02, 0.13, 0));
  g.add(at(rbox(0.2, 0.2, 0.3, 0.03, ochre), 0.3, 0.26, 0));
  g.add(at(rbox(0.18, 0.1, 0.31, 0.02, MAT.glass), 0.32, 0.31, 0));
  g.add(at(rbox(0.48, 0.16, 0.34, 0.03, ochre), -0.1, 0.25, 0));
  const rnd = mulberry(9);
  const rocks = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ color: 0x8b7358, roughness: 1 }), 9);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion();
  for (let i = 0; i < 9; i++) {
    const r = 0.05 + rnd() * 0.03;
    q.setFromEuler(new THREE.Euler(rnd() * 3, rnd() * 3, 0));
    rocks.setMatrixAt(i, m.compose(new THREE.Vector3(-0.25 + rnd() * 0.3, 0.34 + rnd() * 0.04, -0.1 + rnd() * 0.2), q, new THREE.Vector3(r, r, r)));
  }
  rocks.castShadow = true;
  g.add(rocks);
  return g;
}

export interface MineDiorama {
  root: THREE.Group;
  digger: Excavator;
  /** Height of the terrain at diorama-local (x, z). */
  height(x: number, z: number): number;
  pitFloor: THREE.Vector3;
}

export function mineDiorama(): MineDiorama {
  const root = new THREE.Group();
  root.name = 'mine';
  const S = 6, N = 100, top = 1.0, bottomY = -0.7;
  const pit = new THREE.Vector2(0.35, 0.1);
  const steps = 5, stepH = 0.27, stepW = 0.32, R0 = 2.15;
  const height = (x: number, z: number) => {
    const dx = (x - pit.x) / 1.15, dz = (z - pit.y) / 0.9;
    const d = Math.sqrt(dx * dx + dz * dz);
    const s = THREE.MathUtils.clamp((R0 - d) / stepW, 0, steps);
    const k = Math.floor(s), f = s - k;
    let y = top - (k + THREE.MathUtils.smoothstep(f, 0, 0.38)) * stepH;
    if (s >= steps) y = top - steps * stepH;
    return y + wobble(x * 3, z * 3) * 0.025 + wobble(x * 9, z * 9) * 0.01;
  };
  const geo = new THREE.PlaneGeometry(S, S, N, N);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) pos.setY(i, height(pos.getX(i), pos.getZ(i)));
  geo.computeVertexNormals();
  const nrm = geo.attributes.normal, col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i), slope = 1 - nrm.getY(i), x = pos.getX(i), z = pos.getZ(i);
    let c: THREE.Color;
    if (y > top - 0.02) c = lin(0.62, 0.66, 0.5).lerp(lin(0.55, 0.6, 0.44), (wobble(x * 2, z * 2) + 1) / 2);
    else if (slope > 0.25) c = lin(0.6, 0.45, 0.33).lerp(lin(0.48, 0.38, 0.3), (Math.sin(y * 34) + 1) / 2);
    else c = lin(0.8, 0.71, 0.56).lerp(lin(0.72, 0.66, 0.58), (wobble(x * 4, z * 4) + 1) / 2);
    col.set([c.r, c.g, c.b], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const ground = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  ground.receiveShadow = ground.castShadow = true;
  ground.userData.info = 'mine';
  root.add(ground);

  // strata walls
  const sideMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, side: THREE.DoubleSide });
  const pal = [[0.58, 0.44, 0.32], [0.66, 0.55, 0.4], [0.5, 0.42, 0.34], [0.72, 0.62, 0.48]].map(([r, g, b]) => lin(r, g, b));
  const H = S / 2;
  const side = (fn: (t: number) => [number, number]) => {
    const P: number[] = [], C: number[] = [], I: number[] = [];
    const M = N, L = 14;
    for (let i = 0; i <= M; i++) {
      const [x, z] = fn(i / M);
      const yt = height(x, z);
      for (let j = 0; j <= L; j++) {
        const y = bottomY + (yt - bottomY) * (j / L);
        P.push(x, y, z);
        const band = Math.abs(Math.floor((y + 2) * 9 + wobble(x * 3, y * 4) * 1.4)) % 4;
        const c = j === L ? lin(0.55, 0.6, 0.44) : pal[band];
        C.push(c.r, c.g, c.b);
      }
    }
    for (let i = 0; i < M; i++) for (let j = 0; j < L; j++) { const a = i * (L + 1) + j, b = a + L + 1; I.push(a, b, a + 1, b, b + 1, a + 1); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
    g.setIndex(I);
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, sideMat);
    m.castShadow = m.receiveShadow = true;
    return m;
  };
  root.add(side((t) => [-H + t * S, H]), side((t) => [H, H - t * S]), side((t) => [H - t * S, -H]), side((t) => [-H, -H + t * S]));
  root.add(at(rbox(S + 0.3, 0.3, S + 0.3, 0.06, MAT.plinth), 0, bottomY - 0.15, 0));

  const pool = new THREE.Mesh(new THREE.CircleGeometry(0.42, 48), MAT.waterSurface);
  pool.rotation.x = -Math.PI / 2;
  pool.scale.set(1.4, 0.8, 1);
  pool.position.set(pit.x + 0.35, top - steps * stepH + 0.03, pit.y - 0.25);
  root.add(pool);

  // trees: two instanced meshes (trunks, crowns) instead of 2 meshes per tree
  const rnd = mulberry(3);
  const spots: { x: number; z: number; s: number }[] = [];
  for (let i = 0; i < 26; i++) {
    const x = -H + 0.25 + rnd() * (S - 0.5), z = -H + 0.25 + rnd() * (S - 0.5), s = 0.6 + rnd() * 0.6;
    if (height(x, z) >= top - 0.02) spots.push({ x, z, s });
  }
  const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.025, 0.03, 0.12, 8), new THREE.MeshStandardMaterial({ color: 0x6d5642, roughness: 0.9 }), spots.length);
  const crowns = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.16, 1), new THREE.MeshStandardMaterial({ color: 0x5f7a52, roughness: 0.9 }), spots.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion();
  spots.forEach(({ x, z, s }, i) => {
    const y = height(x, z);
    trunks.setMatrixAt(i, m.compose(new THREE.Vector3(x, y + 0.06 * s, z), q, new THREE.Vector3(s, s, s)));
    crowns.setMatrixAt(i, m.compose(new THREE.Vector3(x, y + 0.24 * s, z), q, new THREE.Vector3(s, s * 1.25, s)));
  });
  crowns.castShadow = true;
  root.add(trunks, crowns);
  const tk = truck();
  tk.position.set(-2.1, height(-2.1, 1.9), 1.9);
  tk.rotation.y = -0.7;
  tk.scale.setScalar(1.3);
  root.add(tk);

  const digger = excavator();
  const ex = new THREE.Vector3(pit.x - 1.05, 0, pit.y + 0.25);
  ex.y = height(ex.x, ex.z);
  digger.root.position.copy(ex);
  digger.root.rotation.y = 0.15;
  digger.root.scale.setScalar(1.35);
  digger.root.userData.info = 'excavator';
  root.add(digger.root);

  return { root, digger, height, pitFloor: new THREE.Vector3(pit.x, top - steps * stepH, pit.y) };
}
