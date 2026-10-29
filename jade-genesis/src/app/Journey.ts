// The journey state machine. It owns *only* data: which stage is active, the
// progress through the cutting timeline, and playback. Scenes derive every pose
// from this state, so any (stage, progress) pair renders the same way no matter
// how it was reached — by playing, scrubbing, or jumping.
import { clamp01 } from '../utils/math';

export type StageId = 'rough' | 'cut';
export type Speed = 0.5 | 1 | 2;

export interface JourneySnapshot {
  stage: StageId;
  /** Cutting timeline progress, 0..1. Always 0 in the rough stage. */
  progress: number;
  playing: boolean;
  speed: Speed;
}

/** Length of the cutting timeline at 1× speed, in seconds. */
export const CUT_DURATION = 30;

export class Journey {
  private s: JourneySnapshot = { stage: 'rough', progress: 0, playing: false, speed: 1 };
  private listeners = new Set<(s: JourneySnapshot) => void>();

  get state(): Readonly<JourneySnapshot> {
    return this.s;
  }

  subscribe(fn: (s: JourneySnapshot) => void): () => void {
    this.listeners.add(fn);
    fn(this.s);
    return () => this.listeners.delete(fn);
  }

  private set(patch: Partial<JourneySnapshot>): void {
    const next = { ...this.s, ...patch };
    if (next.stage === 'rough') { next.progress = 0; next.playing = false; }
    next.progress = clamp01(next.progress);
    const changed = (Object.keys(next) as (keyof JourneySnapshot)[]).some((k) => next[k] !== this.s[k]);
    if (!changed) return;
    this.s = next;
    this.listeners.forEach((fn) => fn(this.s));
  }

  setStage(stage: StageId, autoplay = stage === 'cut'): void {
    if (stage === this.s.stage) return;
    this.set({ stage, progress: 0, playing: autoplay });
  }

  play(): void {
    if (this.s.stage !== 'cut') { this.setStage('cut'); return; }
    // replay from the start once the timeline has finished
    this.set({ playing: true, progress: this.s.progress >= 1 ? 0 : this.s.progress });
  }

  pause(): void { this.set({ playing: false }); }

  toggle(): void { if (this.s.playing) this.pause(); else this.play(); }

  setSpeed(speed: Speed): void { this.set({ speed }); }

  /** Jump to a point in the cutting timeline. Pauses playback. */
  seek(progress: number): void {
    if (this.s.stage !== 'cut') this.set({ stage: 'cut', progress, playing: false });
    else this.set({ progress, playing: false });
  }

  /** Advance by real seconds. Returns the machine-time delta (seconds × speed). */
  tick(dt: number): number {
    if (!this.s.playing || this.s.stage !== 'cut') return 0;
    const scaled = Math.min(dt, 0.1) * this.s.speed;
    const progress = this.s.progress + scaled / CUT_DURATION;
    if (progress >= 1) this.set({ progress: 1, playing: false });
    else this.set({ progress });
    return scaled;
  }
}
