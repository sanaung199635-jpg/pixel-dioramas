export const clamp01 = (x: number): number => Math.min(1, Math.max(0, x));

/** Progress of t within [a, b], clamped to 0..1. */
export const segment = (t: number, a: number, b: number): number => clamp01((t - a) / (b - a));

export const easeInOut = (x: number): number => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

export const easeOut = (x: number): number => 1 - Math.pow(1 - x, 3);

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

/** Frame-rate independent exponential smoothing factor. */
export const damp = (lambda: number, dt: number): number => 1 - Math.exp(-lambda * dt);
