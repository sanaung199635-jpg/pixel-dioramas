// The journey state machine. It owns only data: which of the 12 stages is
// active, how far through that stage's timeline we are, and playback.
// Scenes derive every pose from (stage, progress), so any state renders the
// same way however it was reached — by playing, scrubbing or jumping.
import { clamp01 } from '../utils/math';
import { STAGE_COUNT, stageDuration } from '../journey/stages';

export type Speed = 0.5 | 1 | 2;

export interface JourneySnapshot {
  /** 0-based stage index (0 = 01 开采 … 11 = 12 检查展示). */
  stage: number;
  /** Progress through the current stage's timeline, 0..1. */
  progress: number;
  playing: boolean;
  speed: Speed;
  /** Guided journey: keep playing into the next stage when one finishes. */
  guided: boolean;
}

export class Journey {
  private s: JourneySnapshot = { stage: 0, progress: 0, playing: false, speed: 1, guided: false };
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
    next.stage = Math.max(0, Math.min(STAGE_COUNT - 1, Math.round(next.stage)));
    next.progress = clamp01(next.progress);
    const changed = (Object.keys(next) as (keyof JourneySnapshot)[]).some((k) => next[k] !== this.s[k]);
    if (!changed) return;
    this.s = next;
    this.listeners.forEach((fn) => fn(this.s));
  }

  /** Start the guided journey from the first stage. */
  startJourney(): void {
    this.set({ stage: 0, progress: 0, playing: true, guided: true });
  }

  /** Jump to a stage. Plays that stage on its own unless `play` is false. */
  goTo(stage: number, play = true): void {
    this.set({ stage, progress: 0, playing: play, guided: false });
  }

  next(): void {
    if (this.s.stage < STAGE_COUNT - 1) this.set({ stage: this.s.stage + 1, progress: 0, playing: true });
  }

  prev(): void {
    if (this.s.stage > 0) this.set({ stage: this.s.stage - 1, progress: 0, playing: true });
  }

  play(): void {
    // replay the stage once it has finished
    this.set({ playing: true, progress: this.s.progress >= 1 ? 0 : this.s.progress });
  }

  pause(): void { this.set({ playing: false }); }

  toggle(): void { if (this.s.playing) this.pause(); else this.play(); }

  setSpeed(speed: Speed): void { this.set({ speed }); }

  /** Jump within the current stage. Pauses playback. */
  seek(progress: number): void { this.set({ progress, playing: false }); }

  /** Move within the current stage by d (keyboard stepping). */
  step(d: number): void { this.seek(this.s.progress + d); }

  /** Restore an exact snapshot (tests / deep links). */
  restore(s: Partial<JourneySnapshot>): void { this.set(s); }

  /** Advance by real seconds. Returns the machine-time delta (seconds × speed). */
  tick(dt: number): number {
    if (!this.s.playing) return 0;
    const scaled = Math.min(dt, 0.1) * this.s.speed;
    const progress = this.s.progress + scaled / stageDuration(this.s.stage);
    if (progress < 1) { this.set({ progress }); return scaled; }
    if (this.s.guided && this.s.stage < STAGE_COUNT - 1) this.set({ stage: this.s.stage + 1, progress: 0 });
    else this.set({ progress: 1, playing: false, guided: false });
    return scaled;
  }
}
