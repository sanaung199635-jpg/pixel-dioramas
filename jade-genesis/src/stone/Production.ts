// Production plan for this stone, in stone-frame units (1 ≈ 100 mm).
// The cut planes, the slab and the bangle site all live in the same frame
// as the stone, so every derived piece samples the same interior.
import { CUT_X } from './StoneSolid';
import type { AxisFrame, RingShape } from './StoneGeometry';

/** Slab taken from the +x half: between these two planes (14 mm thick). */
export const SLAB = { x0: 0.17, x1: 0.31 };
export const SLAB_T = SLAB.x1 - SLAB.x0;
export const SLAB_C = (SLAB.x0 + SLAB.x1) / 2;

/** All cut planes, in the order they are sawn. */
export const CUT_PLANES = [CUT_X, SLAB.x0, SLAB.x1];

/**
 * Bangle sites on the slab (centre y, z in the stone frame). Both avoid the
 * fissure plane, which crosses the slab near y ≈ 0.45–0.52.
 */
export const SITES = [{ cy: 0.02, cz: 0.45 }, { cy: 0.02, cz: -0.45 }];
export const RING = { ri: 0.28, ro: 0.41 };

export const siteFrame = (i: number): AxisFrame => ({ xc: SLAB_C, cy: SITES[i].cy, cz: SITES[i].cz });

/**
 * Cross-sections the bangle passes through. Each lies inside the previous one,
 * because grinding only removes material: blank → shaped → fine → polished.
 * Dimensions: inner Ø ≈ 59.6 mm, bar ≈ 8.8 × 10 mm at the end (illustrative).
 */
export const SHAPES: RingShape[] = [
  { ri: RING.ri + 0.006, ro: RING.ro - 0.006, t: SLAB_T - 0.004, e: 0.12 },
  { ri: 0.292, ro: 0.392, t: 0.112, e: 0.64 },
  { ri: 0.296, ro: 0.388, t: 0.104, e: 0.82 },
  { ri: 0.298, ro: 0.386, t: 0.1, e: 1 },
];

/** Surface state for a shape value 0..3: grinding marks fade, polish rises. */
export function surfaceAt(shape: number): { rough: number; clearcoat: number } {
  const keys = [1, 0.85, 0.45, 0];
  const i = Math.min(2, Math.floor(shape));
  const t = Math.min(1, Math.max(0, shape - i));
  const rough = keys[i] + (keys[i + 1] - keys[i]) * t;
  return { rough, clearcoat: Math.max(0, shape - 2) };
}

export function shapeAt(shape: number): RingShape {
  const i = Math.min(2, Math.max(0, Math.floor(shape)));
  const t = Math.min(1, Math.max(0, shape - i));
  const a = SHAPES[i], b = SHAPES[i + 1];
  const l = (x: number, y: number) => x + (y - x) * t;
  return { ri: l(a.ri, b.ri), ro: l(a.ro, b.ro), t: l(a.t, b.t), e: l(a.e, b.e) };
}
