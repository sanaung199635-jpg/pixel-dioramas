// Dialogue panel: pick a situation, tap a line to hear it, or play the whole conversation.
import { DIALOGUES } from './dialogues.js';

const SPEAKER_SVG =
  '<svg viewBox="0 0 24 24"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" /></svg>';

/** speakLine(text, { voiceIndex, rate, onend }) is provided by the app; stop() cancels speech */
export function createTalk(root, { speakLine, stop, getScene }) {
  const listEl = root.querySelector('#talkList');
  const titleEl = root.querySelector('#talkTitle');
  const linesEl = root.querySelector('#talkLines');
  const playBtn = root.querySelector('#talkPlay');
  const slowBtn = root.querySelector('#talkSlow');
  const zhBtn = root.querySelector('#talkZh');
  let current = null;
  let playing = -1; // index of the line being played in "play all"
  let slow = false;
  let showZh = true;
  let seq = 0; // guards against the end-callback of a line that was cancelled

  const items = DIALOGUES.map((d) => {
    const b = document.createElement('button');
    b.innerHTML = `<span>${d.icon}</span><b>${d.zh}</b><small>${d.en}</small>`;
    b.addEventListener('click', () => open(d));
    listEl.appendChild(b);
    return { d, b };
  });

  function mark(i) {
    linesEl.querySelectorAll('.line').forEach((n, k) => n.classList.toggle('speaking', k === i));
    if (i >= 0) linesEl.children[i]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function say(i, chain) {
    const [who, text] = current.lines[i];
    mark(i);
    const my = ++seq;
    speakLine(text, {
      voiceIndex: who === 'A' ? 0 : 1,
      rate: slow ? 0.6 : 0.92,
      onend: () => {
        if (my !== seq) return;
        if (!chain || playing !== i) return mark(-1);
        if (i + 1 < current.lines.length) {
          playing = i + 1;
          setTimeout(() => playing === i + 1 && say(i + 1, true), 350);
        } else halt();
      },
    });
  }
  function halt() {
    playing = -1;
    seq++;
    stop();
    mark(-1);
    playBtn.textContent = '▶ 播放全部';
    playBtn.classList.remove('on');
  }
  function open(d) {
    halt();
    current = d;
    items.forEach(({ d: x, b }) => b.classList.toggle('active', x === d));
    titleEl.innerHTML = `${d.icon} ${d.en}<small>${d.zh} · ${d.roles.A} / ${d.roles.B}</small>`;
    linesEl.innerHTML = d.lines
      .map(
        ([who, en, zh], i) =>
          `<button class="line ${who === 'A' ? 'a' : 'b'}" data-i="${i}"><i>${d.roles[who]}</i><span class="en">${en}${SPEAKER_SVG}</span><span class="zh">${zh}</span></button>`
      )
      .join('');
    linesEl.scrollTop = 0;
  }
  linesEl.addEventListener('click', (e) => {
    const el = e.target.closest('.line');
    if (!el) return;
    halt();
    say(+el.dataset.i, false);
  });
  playBtn.addEventListener('click', () => {
    if (playing >= 0) return halt();
    playing = 0;
    playBtn.textContent = '■ 停止';
    playBtn.classList.add('on');
    say(0, true);
  });
  slowBtn.addEventListener('click', () => {
    slow = !slow;
    slowBtn.classList.toggle('on', slow);
  });
  zhBtn.addEventListener('click', () => {
    showZh = !showZh;
    zhBtn.classList.toggle('on', showZh);
    zhBtn.textContent = showZh ? '中文：显示' : '中文：隐藏';
    root.classList.toggle('no-zh', !showZh);
  });
  root.querySelector('#talkClose').addEventListener('click', () => api.close());
  root.addEventListener('click', (e) => e.target === root && api.close());

  const api = {
    open() {
      const scene = getScene();
      // dialogues that belong to the island you are on come first
      items.forEach(({ d, b }) => (b.style.order = d.scene === scene ? 0 : 1));
      if (!current || (current.scene !== scene && items.some(({ d }) => d.scene === scene))) open(items.find(({ d }) => d.scene === scene)?.d || current || DIALOGUES[0]);
      root.hidden = false;
      listEl.querySelector('.active')?.scrollIntoView({ block: 'nearest', inline: 'center' });
    },
    close() {
      halt();
      root.hidden = true;
    },
    isOpen: () => !root.hidden,
  };
  return api;
}
