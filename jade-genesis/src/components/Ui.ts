// DOM overlay. Built once; `update()` patches only what changed.
import type { Speed } from '../app/Journey';
import type { CameraMode } from '../controls/CameraRig';
import { SOURCES, STAGE_CONTENT, hotspot, stage, t, type StageContent } from '../content';
import { STAGES } from '../journey/stages';
import type { LightMode } from '../scenes/Director';

export interface UiHandlers {
  start(): void;
  explore(): void;
  goTo(stage: number): void;
  prev(): void;
  next(): void;
  toggle(): void;
  speed(s: Speed): void;
  seek(p: number): void;
  step(d: number): void;
  resetView(): void;
  toggleTorch(): void;
  toggleSound(): void;
  lightMode(m: LightMode): void;
  compare(v: number): void;
}

export interface UiState {
  stage: number;
  progress: number;
  playing: boolean;
  speed: Speed;
  guided: boolean;
  phase: string;
  cameraMode: CameraMode;
  torch: boolean;
  sound: boolean;
  lightMode: LightMode;
  compare: number;
}

export interface ScreenHotspot { id: string; x: number; y: number; visible: boolean }

const ICON = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M7 5l12 7-12 7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M7 5h3v14H7zM14 5h3v14h-3z"/></svg>',
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
  reset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4v5h5"/></svg>',
  torch: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l-1 6h-4z"/><path d="M10 9v11h4V9"/><path d="M18 4l2-1M18 8h2"/></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  sound: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path class="wave" d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/><path class="mute" d="M17 9l4 6M21 9l-4 6"/></svg>',
};

const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', html = ''): HTMLElementTagNameMap[K] => {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (html) el.innerHTML = html;
  return el;
};
const btn = (cls: string, html: string, label: string, onClick: () => void): HTMLButtonElement => {
  const b = h('button', cls, html);
  b.type = 'button';
  b.setAttribute('aria-label', label);
  b.title = label;
  b.addEventListener('click', onClick);
  return b;
};
const pad = (n: number) => String(n).padStart(2, '0');

export class Ui {
  private readonly root: HTMLElement;
  private readonly intro: HTMLElement;
  private readonly story: HTMLElement;
  private readonly know: HTMLElement;
  private readonly knowToggle: HTMLButtonElement;
  private readonly steps: HTMLButtonElement[] = [];
  private readonly stepFill: HTMLElement[] = [];
  private readonly playBtn: HTMLButtonElement;
  private readonly prevBtn: HTMLButtonElement;
  private readonly nextBtn: HTMLButtonElement;
  private readonly speedBtns = new Map<Speed, HTMLButtonElement>();
  private readonly scrub: HTMLInputElement;
  private readonly phaseText: HTMLElement;
  private readonly ticks: HTMLElement;
  private readonly torchBtn: HTMLButtonElement;
  private readonly soundBtn: HTMLButtonElement;
  private readonly showcaseBar: HTMLElement;
  private readonly lightBtns = new Map<LightMode, HTMLButtonElement>();
  private readonly compareInput: HTMLInputElement;
  private readonly camChip: HTMLButtonElement;
  private readonly guidedChip: HTMLElement;
  private readonly hotLayer: HTMLElement;
  private readonly pins = new Map<string, HTMLButtonElement>();
  private readonly popover: HTMLElement;
  private readonly toast: HTMLElement;
  private readonly live: HTMLElement;
  private readonly panels: HTMLElement[];
  private last: Partial<UiState> = {};
  private scrubbing = false;

  constructor(mount: HTMLElement, private readonly on: UiHandlers) {
    this.root = mount;
    this.root.className = 'ui';
    this.root.dataset.intro = 'true';

    // ---- top bar
    const top = h('header', 'top');
    top.innerHTML = `<div class="brand"><span class="mark" aria-hidden="true"></span><b>JADE GENESIS</b><i>${t('brand.sub')}</i></div>`;
    this.guidedChip = h('span', 'guided', `<i aria-hidden="true"></i>${t('guided')}`);
    this.soundBtn = btn('chip sound', `${ICON.sound}<span>${t('btn.soundOff')}</span>`, t('btn.soundOff'), () => this.on.toggleSound());
    const tools = h('div', 'tools');
    tools.append(this.guidedChip, this.soundBtn);
    top.append(tools);

    // ---- intro
    this.intro = h('section', 'intro');
    this.intro.innerHTML = `<div class="kicker">${t('intro.kicker')}</div><h1>${t('intro.title')}</h1><p class="lead">${t('intro.lead')}</p>`;
    const cta = h('div', 'cta-row');
    cta.append(
      btn('pill primary big', `<span>${t('intro.start')}</span>${ICON.play}`, t('intro.start'), () => this.on.start()),
      btn('pill big', `<span>${t('intro.explore')}</span>`, t('intro.explore'), () => this.on.explore()),
    );
    this.intro.append(cta, h('p', 'note', t('intro.note')));

    // ---- story + knowledge
    this.story = h('section', 'story');
    this.know = h('aside', 'know');
    this.know.id = 'knowledge';
    this.know.setAttribute('aria-label', t('card.title'));
    this.knowToggle = btn('know-toggle', `${ICON.book}<span>${t('btn.knowledge')}</span>`, t('btn.knowledge'), () => this.setKnowOpen(!this.know.classList.contains('open')));
    this.knowToggle.setAttribute('aria-controls', 'knowledge');
    this.knowToggle.setAttribute('aria-expanded', 'false');

    // ---- dock: timeline row + controls row
    const dock = h('div', 'dock');
    const tl = h('nav', 'timeline');
    tl.setAttribute('aria-label', t('tl.label'));
    STAGE_CONTENT.forEach((c, i) => {
      const b = btn('step', `<span class="bar"><span class="fill"></span></span><span class="n">${pad(c.no)}</span><span class="zh">${c.title}</span>`, `${pad(c.no)} ${c.title}`, () => this.on.goTo(i));
      b.dataset.stage = String(i);
      this.steps.push(b);
      this.stepFill.push(b.querySelector('.fill') as HTMLElement);
      tl.append(b);
    });
    const ctl = h('div', 'controls');
    this.prevBtn = btn('round', ICON.prev, t('btn.prev'), () => this.on.prev());
    this.playBtn = btn('round primary play', ICON.play, t('btn.play'), () => this.on.toggle());
    this.nextBtn = btn('round', ICON.next, t('btn.next'), () => this.on.next());
    const speeds = h('div', 'speed');
    speeds.setAttribute('role', 'group');
    speeds.setAttribute('aria-label', t('speed.label'));
    for (const s of [0.5, 1, 2] as Speed[]) {
      const b = btn('', `${s}×`, `${s}×`, () => this.on.speed(s));
      speeds.append(b);
      this.speedBtns.set(s, b);
    }
    const scrubWrap = h('div', 'scrub');
    this.scrub = h('input');
    this.scrub.type = 'range';
    this.scrub.min = '0';
    this.scrub.max = '1000';
    this.scrub.step = '1';
    this.scrub.setAttribute('aria-label', t('scrub.label'));
    this.scrub.addEventListener('input', () => { this.scrubbing = true; this.on.seek(+this.scrub.value / 1000); });
    this.scrub.addEventListener('change', () => { this.scrubbing = false; });
    this.ticks = h('div', 'ticks');
    this.ticks.setAttribute('aria-hidden', 'true');
    this.phaseText = h('div', 'phase');
    scrubWrap.append(this.phaseText, this.scrub, this.ticks);
    this.torchBtn = btn('pill torch', `${ICON.torch}<span>${t('btn.torch')}</span>`, t('btn.torch'), () => this.on.toggleTorch());
    const resetBtn = btn('round', ICON.reset, t('btn.reset'), () => this.on.resetView());
    ctl.append(this.prevBtn, this.playBtn, this.nextBtn, speeds, scrubWrap, this.torchBtn, resetBtn);
    dock.append(tl, ctl);

    // ---- showcase controls (stage 12)
    this.showcaseBar = h('div', 'showcase-bar');
    const lights = h('div', 'seg');
    lights.setAttribute('role', 'group');
    lights.setAttribute('aria-label', t('show.lights'));
    for (const m of ['gallery', 'soft', 'back'] as LightMode[]) {
      const b = btn('', t(`show.${m}`), t(`show.${m}`), () => this.on.lightMode(m));
      lights.append(b);
      this.lightBtns.set(m, b);
    }
    const cmp = h('label', 'compare');
    this.compareInput = h('input');
    this.compareInput.type = 'range';
    this.compareInput.min = '0';
    this.compareInput.max = '100';
    this.compareInput.value = '100';
    this.compareInput.setAttribute('aria-label', t('show.compare'));
    this.compareInput.addEventListener('input', () => this.on.compare(+this.compareInput.value / 100));
    cmp.append(h('span', '', t('show.before')), this.compareInput, h('span', '', t('show.after')));
    this.showcaseBar.append(h('span', 'lbl', t('show.lights')), lights, h('span', 'lbl', t('show.compare')), cmp);

    this.camChip = btn('cam-chip', t('cam.free'), t('cam.free'), () => this.on.resetView());
    this.hotLayer = h('div', 'hots');
    this.popover = h('div', 'popover');
    this.popover.setAttribute('role', 'dialog');
    this.popover.hidden = true;
    this.toast = h('div', 'toast');
    this.toast.setAttribute('role', 'status');
    this.live = h('div', 'sr-only');
    this.live.setAttribute('aria-live', 'polite');
    const hint = h('div', 'hint', t('hint'));

    this.root.append(top, this.intro, this.story, this.knowToggle, this.know, this.hotLayer, this.popover, this.toast, this.camChip, this.showcaseBar, hint, dock, this.live);
    this.panels = [this.story, this.know, dock, this.knowToggle, this.intro, this.showcaseBar];

    window.addEventListener('keydown', (e) => this.onKey(e));
    document.addEventListener('pointerdown', (e) => {
      if (!this.popover.hidden && !this.popover.contains(e.target as Node) && !(e.target as HTMLElement).closest('.pin')) this.closePopover();
    });
  }

  hideIntro(): void {
    this.root.dataset.intro = 'false';
  }

  private onKey(e: KeyboardEvent): void {
    const el = e.target as HTMLElement;
    if (el?.tagName === 'INPUT' && e.key !== ' ') return;
    if (el?.tagName === 'BUTTON' && (e.key === ' ' || e.key === 'Enter')) return; // buttons handle their own activation
    switch (e.key) {
      case ' ': e.preventDefault(); this.on.toggle(); break;
      case 'ArrowRight': e.preventDefault(); this.on.step(0.02); break;
      case 'ArrowLeft': e.preventDefault(); this.on.step(-0.02); break;
      case ']': this.on.next(); break;
      case '[': this.on.prev(); break;
      case 'r': case 'R': this.on.resetView(); break;
      case 't': case 'T': this.on.toggleTorch(); break;
      case 'm': case 'M': this.on.toggleSound(); break;
      case 'Escape': this.closePopover(); this.setKnowOpen(false); break;
    }
  }

  private setKnowOpen(open: boolean): void {
    this.know.classList.toggle('open', open);
    this.knowToggle.setAttribute('aria-expanded', String(open));
  }

  update(s: UiState): void {
    const L = this.last;
    if (s.stage !== L.stage) {
      const c = stage(STAGES[s.stage].id);
      this.renderKnowledge(c);
      this.steps.forEach((b, i) => {
        b.classList.toggle('on', i === s.stage);
        b.classList.toggle('done', i < s.stage);
        if (i === s.stage) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
      });
      this.root.dataset.stage = String(s.stage);
      this.prevBtn.disabled = s.stage === 0;
      this.nextBtn.disabled = s.stage === STAGES.length - 1;
      this.ticks.innerHTML = STAGES[s.stage].phases.map(([at, key]) => `<span style="left:${at * 100}%">${t(key)}</span>`).join('');
      this.closePopover();
      this.live.textContent = t('live.stage', { no: pad(c.no), title: c.title });
    }
    if (s.stage !== L.stage || s.progress !== L.progress) {
      this.stepFill.forEach((f, i) => { f.style.transform = `scaleX(${i < s.stage ? 1 : i === s.stage ? s.progress : 0})`; });
    }
    if (s.playing !== L.playing || (s.progress >= 1) !== ((L.progress ?? 0) >= 1)) {
      const label = s.playing ? t('btn.pause') : s.progress >= 1 ? t('btn.replay') : t('btn.play');
      this.playBtn.innerHTML = s.playing ? ICON.pause : ICON.play;
      this.playBtn.setAttribute('aria-label', label);
      this.playBtn.title = `${label} (Space)`;
    }
    if (s.speed !== L.speed) for (const [v, b] of this.speedBtns) { b.classList.toggle('on', v === s.speed); b.setAttribute('aria-pressed', String(v === s.speed)); }
    if (!this.scrubbing && s.progress !== L.progress) this.scrub.value = String(Math.round(s.progress * 1000));
    if (s.phase !== L.phase || s.progress !== L.progress) {
      const pct = Math.round(s.progress * 100);
      this.phaseText.textContent = `${s.phase} · ${pct}%`;
      this.scrub.setAttribute('aria-valuetext', `${s.phase}，${pct}%`);
    }
    if (s.guided !== L.guided) this.guidedChip.classList.toggle('show', s.guided);
    if (s.cameraMode !== L.cameraMode) this.camChip.classList.toggle('show', s.cameraMode === 'free');
    if (s.torch !== L.torch) {
      this.torchBtn.classList.toggle('on', s.torch);
      this.torchBtn.setAttribute('aria-pressed', String(s.torch));
    }
    const showToast = s.stage === 2 && (s.torch || (s.progress > 0.28 && s.progress < 0.88));
    if (showToast !== this.toast.classList.contains('show')) {
      this.toast.textContent = t('torch.note');
      this.toast.classList.toggle('show', showToast);
    }
    if (s.sound !== L.sound) {
      this.soundBtn.classList.toggle('on', s.sound);
      this.soundBtn.querySelector('span')!.textContent = s.sound ? t('btn.soundOn') : t('btn.soundOff');
      this.soundBtn.setAttribute('aria-pressed', String(s.sound));
      this.soundBtn.setAttribute('aria-label', s.sound ? t('btn.soundOn') : t('btn.soundOff'));
    }
    if (s.lightMode !== L.lightMode) for (const [m, b] of this.lightBtns) { b.classList.toggle('on', m === s.lightMode); b.setAttribute('aria-pressed', String(m === s.lightMode)); }
    if (s.compare !== L.compare && document.activeElement !== this.compareInput) this.compareInput.value = String(Math.round(s.compare * 100));
    this.root.classList.toggle('showcase-ready', s.stage === STAGES.length - 1 && s.progress >= 1);
    Object.assign(this.last, s);
  }

  private renderKnowledge(c: StageContent): void {
    this.story.innerHTML = `
      <div class="kicker">STAGE ${pad(c.no)} / 12</div>
      <h1>${c.title}<small>${c.en}</small></h1>
      <p>${c.summary}</p>
      <div class="simp"><b>${t('card.simplified')}</b>${c.simplification}</div>`;
    this.know.innerHTML = `
      <div class="kh"><span>${t('card.title')}</span><span class="grade g${c.evidence}">${t('card.evidence')} ${c.evidence}</span></div>
      <dl>
        <dt>${t('card.terms')}</dt><dd>${c.terms.map((x) => `<b>${x.zh}</b> ${x.en !== '—' ? `<i>${x.en}</i>` : ''}<br/><span>${x.def}</span>`).join('<br/>')}</dd>
        <dt>${t('card.purpose')}</dt><dd>${c.purpose}</dd>
        <dt>${t('card.equipment')}</dt><dd>${c.equipment.join('、')}</dd>
        <dt>${t('card.cautions')}</dt><dd>${c.cautions.join('<br/>')}</dd>
        <dt>${t('card.sources')}</dt><dd class="src">${c.sources.map((id) => `<a href="${SOURCES[id].url}" target="_blank" rel="noopener">${SOURCES[id].title}</a><em>${SOURCES[id].grade}</em>`).join('')}</dd>
      </dl>`;
  }

  setHotspots(list: ScreenHotspot[]): void {
    const seen = new Set<string>();
    const blockers = this.panels
      .filter((el) => el.offsetParent !== null && getComputedStyle(el).opacity !== '0')
      .map((el) => el.getBoundingClientRect())
      .filter((r) => r.width > 0 && r.height > 0);
    const covered = (x: number, y: number) => blockers.some((r) => x > r.left - 12 && x < r.right + 12 && y > r.top - 12 && y < r.bottom + 12);
    for (const hs of list) {
      seen.add(hs.id);
      let pin = this.pins.get(hs.id);
      if (!pin) {
        const c = hotspot(hs.id);
        const p = h('button', 'pin', `<span class="dot" aria-hidden="true"></span><span class="lbl"><b>${c.label}</b><i>${c.sub}</i></span>`);
        p.type = 'button';
        p.setAttribute('aria-label', c.label);
        p.dataset.id = hs.id;
        p.addEventListener('click', (e) => { e.stopPropagation(); const r = p.getBoundingClientRect(); this.showInfo(hs.id, r.left, r.top); });
        this.hotLayer.append(p);
        this.pins.set(hs.id, p);
        pin = p;
      }
      pin.hidden = !hs.visible || covered(hs.x, hs.y);
      pin.style.transform = `translate(${hs.x.toFixed(1)}px, ${hs.y.toFixed(1)}px)`;
    }
    for (const [id, pin] of this.pins) if (!seen.has(id)) pin.hidden = true;
  }

  showInfo(id: string, x: number, y: number): void {
    const c = hotspot(id);
    const st = stage(c.stage);
    this.popover.innerHTML = `<button class="x" type="button" aria-label="close">${ICON.close}</button>
      <div class="kicker">STAGE ${pad(st.no)} · ${st.title}</div>
      <h2>${c.label}<small>${c.sub}</small></h2><p>${c.body}</p>`;
    this.popover.querySelector('.x')!.addEventListener('click', () => this.closePopover());
    this.popover.hidden = false;
    this.popover.dataset.id = id;
    const pw = Math.min(300, window.innerWidth - 32);
    this.popover.style.left = `${Math.min(Math.max(16, x + 18), window.innerWidth - pw - 16)}px`;
    this.popover.style.top = `${Math.min(Math.max(72, y - 20), window.innerHeight - 240)}px`;
  }

  closePopover(): void {
    this.popover.hidden = true;
  }

  showFallback(title: string, body: string, retry?: () => void): void {
    let el = document.querySelector<HTMLElement>('.fallback');
    if (!el) { el = h('div', 'fallback'); el.setAttribute('role', 'alert'); document.body.append(el); }
    el.innerHTML = `<div class="card"><div class="kicker">JADE GENESIS</div><h1>${title}</h1><p>${body}</p>${retry ? `<button class="pill primary" type="button">${t('fallback.retry')}</button>` : ''}</div>`;
    el.hidden = false;
    if (retry) el.querySelector('button')!.addEventListener('click', retry);
  }

  hideFallback(): void {
    const el = document.querySelector<HTMLElement>('.fallback');
    if (el) el.hidden = true;
  }
}
