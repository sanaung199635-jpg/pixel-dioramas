// Procedural sound (WebAudio). No audio files: every sound is synthesised, so
// there are no licensing questions. Nothing plays until the user turns it on,
// and the audio context is only created inside that click.
import type { SoundMix } from '../scenes/Director';

type Channel = keyof SoundMix;

export class Sound {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private gains = new Map<Channel, GainNode>();
  private on = false;

  get enabled(): boolean {
    return this.on;
  }

  /** Must be called from a user gesture. */
  async enable(): Promise<void> {
    if (!this.ctx) this.build();
    await this.ctx!.resume();
    this.master!.gain.setTargetAtTime(0.55, this.ctx!.currentTime, 0.2);
    this.on = true;
  }

  async disable(): Promise<void> {
    this.on = false;
    if (!this.ctx) return;
    this.master!.gain.setTargetAtTime(0, this.ctx.currentTime, 0.08);
    setTimeout(() => { if (!this.on) void this.ctx?.suspend(); }, 400);
  }

  /** Smoothly follow the scene's sound levels (0..1 per channel). */
  setMix(mix: SoundMix): void {
    if (!this.on || !this.ctx) return;
    const t = this.ctx.currentTime;
    for (const [ch, g] of this.gains) g.gain.setTargetAtTime(mix[ch], t, 0.15);
  }

  private build(): void {
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(ctx.destination);

    const noise = (seconds = 2, pink = false) => {
      const buf = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
      const d = buf.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < d.length; i++) {
        const w = Math.random() * 2 - 1;
        if (!pink) { d[i] = w; continue; }
        b0 = 0.997 * b0 + w * 0.029591; b1 = 0.985 * b1 + w * 0.032534; b2 = 0.95 * b2 + w * 0.048056;
        d[i] = (b0 + b1 + b2 + w * 0.1) * 0.6;
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      src.start();
      return src;
    };
    const filter = (type: BiquadFilterType, f: number, q = 0.7) => { const b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; return b; };
    const channel = (name: Channel, ...chain: AudioNode[]) => {
      const g = ctx.createGain();
      g.gain.value = 0;
      for (let i = 0; i < chain.length - 1; i++) chain[i].connect(chain[i + 1]);
      chain[chain.length - 1].connect(g);
      g.connect(this.master!);
      this.gains.set(name, g);
    };
    const lfo = (target: AudioParam, rate: number, depth: number) => {
      const o = ctx.createOscillator(); o.frequency.value = rate;
      const d = ctx.createGain(); d.gain.value = depth;
      o.connect(d).connect(target); o.start();
    };

    // wind / room tone: slow-breathing filtered pink noise
    const windAmp = ctx.createGain(); windAmp.gain.value = 0.35;
    lfo(windAmp.gain, 0.13, 0.15);
    channel('wind', noise(4, true), filter('lowpass', 420), windAmp);

    // motor hum: two detuned saws through a lowpass
    const motor = ctx.createGain(); motor.gain.value = 0.12;
    for (const f of [92, 184.6]) { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.connect(motor); o.start(); }
    channel('motor', motor, filter('lowpass', 520, 0.9));

    // water: band-passed white noise with a quick flutter
    const waterAmp = ctx.createGain(); waterAmp.gain.value = 0.5;
    lfo(waterAmp.gain, 7.3, 0.18);
    channel('water', noise(2), filter('bandpass', 1900, 0.6), waterAmp);

    // grinding: harsh high band + a rough 230 Hz buzz
    const grind = ctx.createGain(); grind.gain.value = 0.32;
    noise(2).connect(filter('bandpass', 3600, 1.2)).connect(grind);
    const buzz = ctx.createOscillator(); buzz.type = 'square'; buzz.frequency.value = 230;
    const buzzG = ctx.createGain(); buzzG.gain.value = 0.03; buzz.connect(buzzG).connect(grind); buzz.start();
    channel('grind', grind);

    // polishing: soft, low whoosh
    const buffAmp = ctx.createGain(); buffAmp.gain.value = 0.3;
    lfo(buffAmp.gain, 2.1, 0.08);
    channel('buff', noise(3, true), filter('bandpass', 700, 0.5), buffAmp);
  }
}
