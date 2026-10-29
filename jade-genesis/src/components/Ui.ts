// DOM overlay. Built once; `update()` patches only what changed.
import type { Speed, StageId } from '../app/Journey';
import type { CameraMode } from '../controls/CameraRig';
import { SOURCES, hotspot, stage, type StageContent } from '../content';
import { PHASE_LABELS } from '../scenes/CuttingScene';

export interface UiHandlers {
  stage(id: StageId): void;
  toggle(): void;
  speed(s: Speed): void;
  seek(p: number): void;
  resetView(): void;
  torch(on: boolean): void;
}

export interface UiState {
  stage: StageId;
  progress: number;
  playing: boolean;
  speed: Speed;
  phase: string;
  cameraMode: CameraMode;
  torch: boolean;
}

export interface ScreenHotspot { id: string; x: number; y: number; visible: boolean }

const ICON = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M7 5l12 7-12 7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M7 5h3v14H7zM14 5h3v14h-3z"/></svg>',
  reset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4v5h5"/></svg>',
  torch: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l-1 6h-4z"/><path d="M10 9v11h4V9"/><path d="M18 4l2-1M18 8h2"/></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
};

const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', html = ''): HTMLElementTagNameMap[K] => {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (html) el.innerHTML = html;
  return el;
};

export class Ui {
  private readonly root: HTMLElement;
  private readonly tabs: Record<StageId, HTMLButtonElement>;
  private readonly story: HTMLElement;
  private readonly know: HTMLElement;
  private readonly dock: HTMLElement;
  private readonly playBtn: HTMLButtonElement;
  private readonly speedBtns: Map<Speed, HTMLButtonElement>;
  private readonly scrub: HTMLInputElement;
  private readonly phaseText: HTMLElement;
  private readonly torchBtn: HTMLButtonElement;
  private readonly startBtn: HTMLButtonElement;
  private readonly camChip: HTMLButtonElement;
  private readonly hotLayer: HTMLElement;
  private readonly pins = new Map<string, HTMLButtonElement>();
  private readonly popover: HTMLElement;
  private readonly toast: HTMLElement;
  private readonly live: HTMLElement;
  private readonly knowToggle: HTMLButtonElement;
  private last: Partial<UiState> & { knowledgeId?: string } = {};
  private scrubbing = false;

  constructor(mount: HTMLElement, private readonly on: UiHandlers) {
    this.root = mount;
    this.root.className = 'ui';

    // top bar
    const top = h('header', 'top');
    top.innerHTML = '<div class="brand"><span class="mark" aria-hidden="true"></span><b>JADE GENESIS</b><i>翡翠诞生记</i></div>';
    const nav = h('nav', 'tabs');
    nav.setAttribute('role', 'tablist');
    nav.setAttribute('aria-label', '工位');
    const mkTab = (id: StageId, no: string, label: string) => {
      const b = h('button', 'tab', `<span class="no">${no}</span>${label}`);
      b.setAttribute('role', 'tab');
      b.dataset.stage = id;
      b.addEventListener('click', () => this.on.stage(id));
      nav.append(b);
      return b;
    };
    this.tabs = { rough: mkTab('rough', '03–05', '原石观察'), cut: mkTab('cut', '06', '水冷切片') };
    top.append(nav, h('span', 'proto', 'Phase 3 技术原型'));

    this.story = h('section', 'story');
    this.story.setAttribute('aria-live', 'polite');
    this.know = h('aside', 'know');
    this.know.id = 'knowledge';
    this.know.setAttribute('aria-label', '知识卡片');
    this.knowToggle = h('button', 'know-toggle', `${ICON.book}<span>知识</span>`);
    this.knowToggle.setAttribute('aria-controls', 'knowledge');
    this.knowToggle.setAttribute('aria-expanded', 'false');
    this.knowToggle.addEventListener('click', () => this.setKnowOpen(!this.know.classList.contains('open')));

    // dock
    this.dock = h('div', 'dock');
    this.playBtn = h('button', 'round primary play');
    this.playBtn.addEventListener('click', () => this.on.toggle());
    const speeds = h('div', 'speed');
    speeds.setAttribute('role', 'group');
    speeds.setAttribute('aria-label', '演示速度');
    this.speedBtns = new Map();
    for (const s of [0.5, 1, 2] as Speed[]) {
      const b = h('button', '', `${s}×`);
      b.addEventListener('click', () => this.on.speed(s));
      speeds.append(b);
      this.speedBtns.set(s, b);
    }
    const scrubWrap = h('div', 'scrub');
    this.scrub = h('input');
    this.scrub.type = 'range';
    this.scrub.min = '0';
    this.scrub.max = '1000';
    this.scrub.step = '1';
    this.scrub.setAttribute('aria-label', '切割进度');
    this.scrub.addEventListener('input', () => { this.scrubbing = true; this.on.seek(+this.scrub.value / 1000); });
    this.scrub.addEventListener('change', () => { this.scrubbing = false; });
    const ticks = h('div', 'ticks');
    ticks.setAttribute('aria-hidden', 'true');
    for (const p of PHASE_LABELS) {
      const t = h('span', '', p.label);
      t.style.left = `${p.at * 100}%`;
      ticks.append(t);
    }
    this.phaseText = h('div', 'phase');
    scrubWrap.append(this.phaseText, this.scrub, ticks);
    this.torchBtn = h('button', 'pill', `${ICON.torch}<span>打灯观察</span>`);
    this.torchBtn.addEventListener('click', () => this.on.torch(!this.last.torch));
    this.startBtn = h('button', 'pill primary', `<span>开始切割</span>${ICON.play}`);
    this.startBtn.addEventListener('click', () => this.on.stage('cut'));
    const resetBtn = h('button', 'round', ICON.reset);
    resetBtn.setAttribute('aria-label', '重置视角');
    resetBtn.title = '重置视角 (R)';
    resetBtn.addEventListener('click', () => this.on.resetView());
    this.camChip = h('button', 'cam-chip', '自由视角 · 点击回到导览');
    this.camChip.addEventListener('click', () => this.on.resetView());
    this.dock.append(this.torchBtn, this.startBtn, this.playBtn, speeds, scrubWrap, resetBtn);

    this.hotLayer = h('div', 'hots');
    this.popover = h('div', 'popover');
    this.popover.setAttribute('role', 'dialog');
    this.popover.hidden = true;
    this.toast = h('div', 'toast');
    this.toast.setAttribute('role', 'status');
    this.live = h('div', 'sr-only');
    this.live.setAttribute('aria-live', 'polite');
    const hint = h('div', 'hint', '拖动旋转 · 滚轮或双指缩放 · 空格 播放/暂停 · ←→ 逐帧');

    this.root.append(top, this.story, this.knowToggle, this.know, this.hotLayer, this.popover, this.toast, this.camChip, hint, this.dock, this.live);

    window.addEventListener('keydown', (e) => this.onKey(e));
    document.addEventListener('pointerdown', (e) => {
      if (!this.popover.hidden && !this.popover.contains(e.target as Node) && !(e.target as HTMLElement).closest('.pin')) this.closePopover();
    });
  }

  private onKey(e: KeyboardEvent): void {
    const target = e.target as HTMLElement;
    if (target && (target.tagName === 'INPUT' && e.key !== ' ')) return;
    if (e.key === ' ') { e.preventDefault(); this.on.toggle(); }
    else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      if (this.last.stage !== 'cut') return;
      e.preventDefault();
      this.on.seek((this.last.progress ?? 0) + (e.key === 'ArrowRight' ? 0.02 : -0.02));
    } else if (e.key === '1') this.on.stage('rough');
    else if (e.key === '2') this.on.stage('cut');
    else if (e.key === 'r' || e.key === 'R') this.on.resetView();
    else if ((e.key === 't' || e.key === 'T') && this.last.stage === 'rough') this.on.torch(!this.last.torch);
    else if (e.key === 'Escape') this.closePopover();
  }

  private setKnowOpen(open: boolean): void {
    this.know.classList.toggle('open', open);
    this.knowToggle.setAttribute('aria-expanded', String(open));
  }

  update(s: UiState): void {
    const L = this.last;
    if (s.stage !== L.stage) {
      for (const [id, b] of Object.entries(this.tabs)) {
        b.setAttribute('aria-selected', String(id === s.stage));
        b.classList.toggle('on', id === s.stage);
      }
      this.root.dataset.stage = s.stage;
      this.closePopover();
      this.live.textContent = s.stage === 'cut' ? '已进入工位 06：水冷切片' : '已进入工位 03–05：原石观察';
    }
    const kid = s.stage === 'cut' ? 'slabbing' : s.torch ? 'lighting' : 'window';
    if (kid !== L.knowledgeId) this.renderKnowledge(stage(kid));
    if (s.playing !== L.playing || s.stage !== L.stage || (s.progress >= 1) !== ((L.progress ?? 0) >= 1)) {
      const replay = !s.playing && s.progress >= 1;
      this.playBtn.innerHTML = s.playing ? ICON.pause : ICON.play;
      this.playBtn.setAttribute('aria-label', s.playing ? '暂停' : replay ? '重新播放' : '播放');
      this.playBtn.title = `${s.playing ? '暂停' : '播放'} (空格)`;
    }
    if (s.speed !== L.speed) for (const [v, b] of this.speedBtns) { b.classList.toggle('on', v === s.speed); b.setAttribute('aria-pressed', String(v === s.speed)); }
    if (!this.scrubbing && s.progress !== L.progress) this.scrub.value = String(Math.round(s.progress * 1000));
    if (s.phase !== L.phase || s.progress !== L.progress) {
      this.phaseText.textContent = `${s.phase} · ${Math.round(s.progress * 100)}%`;
      this.scrub.setAttribute('aria-valuetext', `${s.phase}，${Math.round(s.progress * 100)}%`);
    }
    if (s.cameraMode !== L.cameraMode) this.camChip.classList.toggle('show', s.cameraMode === 'free');
    if (s.torch !== L.torch) {
      this.torchBtn.classList.toggle('on', s.torch);
      this.torchBtn.setAttribute('aria-pressed', String(s.torch));
      this.showToast(s.torch ? `打灯观察：${stage('lighting').cautions[0]}` : '');
    }
    Object.assign(this.last, s, { knowledgeId: kid });
  }

  private renderKnowledge(c: StageContent): void {
    this.story.innerHTML = `
      <div class="kicker">STAGE ${String(c.no).padStart(2, '0')} / 12</div>
      <h1>${c.title}<small>${c.en}</small></h1>
      <p>${c.summary}</p>
      <div class="simp"><b>演示简化</b>${c.simplification}</div>`;
    this.know.innerHTML = `
      <div class="kh"><span>知识卡片</span><span class="grade g${c.evidence}" title="证据等级">证据 ${c.evidence}</span></div>
      <dl>
        <dt>专业术语</dt><dd>${c.terms.map((t) => `<b>${t.zh}</b> ${t.en !== '—' ? `<i>${t.en}</i>` : ''}<br/><span>${t.def}</span>`).join('<br/>')}</dd>
        <dt>加工目的</dt><dd>${c.purpose}</dd>
        <dt>设备</dt><dd>${c.equipment.join('、')}</dd>
        <dt>注意事项</dt><dd>${c.cautions.join('<br/>')}</dd>
        <dt>参考来源</dt><dd class="src">${c.sources.map((id) => `<a href="${SOURCES[id].url}" target="_blank" rel="noopener">${SOURCES[id].title}</a><em>${SOURCES[id].grade}</em>`).join('')}</dd>
      </dl>`;
  }

  setHotspots(list: ScreenHotspot[]): void {
    const seen = new Set<string>();
    // pins never sit underneath a panel
    const blockers = [this.story, this.know, this.dock, this.knowToggle]
      .filter((el) => el.offsetParent !== null)
      .map((el) => el.getBoundingClientRect())
      .filter((r) => r.width > 0 && r.height > 0);
    const covered = (x: number, y: number) => blockers.some((r) => x > r.left - 12 && x < r.right + 12 && y > r.top - 12 && y < r.bottom + 12);
    for (const hs of list) {
      seen.add(hs.id);
      let pin = this.pins.get(hs.id);
      if (!pin) {
        const c = hotspot(hs.id);
        pin = h('button', 'pin', `<span class="dot" aria-hidden="true"></span><span class="lbl"><b>${c.label}</b><i>${c.sub}</i></span>`);
        pin.setAttribute('aria-label', `${c.label}：查看说明`);
        pin.dataset.id = hs.id;
        pin.addEventListener('click', (e) => { e.stopPropagation(); this.showInfo(hs.id, pin!.offsetLeft, pin!.offsetTop); });
        this.hotLayer.append(pin);
        this.pins.set(hs.id, pin);
      }
      pin.hidden = !hs.visible || covered(hs.x, hs.y);
      pin.style.transform = `translate(${hs.x.toFixed(1)}px, ${hs.y.toFixed(1)}px)`;
    }
    for (const [id, pin] of this.pins) if (!seen.has(id)) pin.hidden = true;
  }

  showInfo(id: string, x: number, y: number): void {
    const c = hotspot(id);
    const st = stage(c.stage);
    this.popover.innerHTML = `<button class="x" aria-label="关闭">${ICON.close}</button>
      <div class="kicker">STAGE ${String(st.no).padStart(2, '0')} · ${st.title}</div>
      <h2>${c.label}<small>${c.sub}</small></h2><p>${c.body}</p>`;
    this.popover.querySelector('.x')!.addEventListener('click', () => this.closePopover());
    this.popover.hidden = false;
    this.popover.dataset.id = id;
    const pw = Math.min(300, window.innerWidth - 32);
    const left = Math.min(Math.max(16, x + 18), window.innerWidth - pw - 16);
    const top = Math.min(Math.max(72, y - 20), window.innerHeight - 220);
    this.popover.style.left = `${left}px`;
    this.popover.style.top = `${top}px`;
  }

  closePopover(): void {
    this.popover.hidden = true;
  }

  private showToast(text: string): void {
    this.toast.textContent = text;
    this.toast.classList.toggle('show', !!text);
  }

  showFallback(title: string, body: string, retry?: () => void): void {
    let el = document.querySelector<HTMLElement>('.fallback');
    if (!el) { el = h('div', 'fallback'); el.setAttribute('role', 'alert'); document.body.append(el); }
    el.innerHTML = `<div class="card"><div class="kicker">JADE GENESIS</div><h1>${title}</h1><p>${body}</p>${retry ? '<button class="pill primary">重试</button>' : ''}</div>`;
    el.hidden = false;
    if (retry) el.querySelector('button')!.addEventListener('click', retry);
  }

  hideFallback(): void {
    const el = document.querySelector<HTMLElement>('.fallback');
    if (el) el.hidden = true;
  }
}
