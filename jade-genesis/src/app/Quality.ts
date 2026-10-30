// Adaptive quality: watches frame time and steps device-pixel-ratio and shadow
// resolution down (or back up). Targets are goals, not measured results.
export interface QualityLevel {
  name: string;
  dprCap: number;
  shadow: number;
}

export const LEVELS: QualityLevel[] = [
  { name: 'low', dprCap: 0.75, shadow: 1024 },
  { name: 'medium', dprCap: 1.25, shadow: 2048 },
  { name: 'high', dprCap: 2, shadow: 2048 },
  { name: 'ultra', dprCap: 2, shadow: 4096 },
];

export class Quality {
  level: number;
  private samples: number[] = [];
  private cooldown = 0;
  /** Frame-time budget (ms) for the current target: 60 fps desktop, 30 fps mobile. */
  readonly budget: number;

  constructor(mobile: boolean, private readonly onChange: (q: QualityLevel) => void) {
    this.level = mobile ? 1 : 2;
    this.budget = mobile ? 33.3 : 16.7;
  }

  get current(): QualityLevel {
    return LEVELS[this.level];
  }

  /** Average frame time over the last sample window (ms). */
  get avgFrameMs(): number {
    if (!this.samples.length) return 0;
    return this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
  }

  sample(dtMs: number): void {
    this.samples.push(dtMs);
    if (this.samples.length > 90) this.samples.shift();
    if (this.cooldown > 0) { this.cooldown--; return; }
    if (this.samples.length < 90) return;
    const avg = this.avgFrameMs;
    if (avg > this.budget * 1.35 && this.level > 0) this.step(-1);
    else if (avg < this.budget * 0.6 && this.level < LEVELS.length - 1) this.step(1);
  }

  private step(d: number): void {
    this.level += d;
    this.samples = [];
    this.cooldown = 120;
    this.onChange(this.current);
  }
}
