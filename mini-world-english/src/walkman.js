// Walkman: plays the pre-rendered bilingual audio library (audio/*.m4a) so lessons keep
// playing with the screen locked. Tracks come from audio/manifest.json, built by tools/build-audio.mjs.
import { WORDS } from './data.js';
import { DIALOGUES } from './dialogues.js';
import { LESSONS } from './course.js';

const KEY = 'mini-world-english:walkman';
const RATES = [0.75, 1, 1.25];
const LOOPS = [
  ['list', '循环：列表'],
  ['one', '循环：单曲'],
  ['off', '循环：关'],
];
const $ = (id) => document.getElementById(id);
const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);

/** the text of a track, so you can read along */
function scriptOf(id) {
  if (/^c\d+$/.test(id)) {
    const l = LESSONS.find((x) => x.id === id);
    return l ? l.items.map(([en, zh, tip]) => ({ en, zh, sub: tip })) : [];
  }
  if (id.startsWith('v_')) return WORDS.filter((w) => w.cat === id.slice(2)).map((w) => ({ en: w.en, zh: w.zh, sub: `${w.ex} ${w.exZh}` }));
  if (id.startsWith('d_')) {
    const d = DIALOGUES.find((x) => x.id === id.slice(2));
    return d ? d.lines.map(([who, en, zh]) => ({ en, zh, who: d.roles[who] })) : [];
  }
  return [];
}

export function createWalkman({ beforePlay }) {
  const panel = $('walkman');
  const audio = $('wmAudio');
  const pill = $('wmPill');
  const listsEl = $('wmLists');
  const tracksEl = $('wmTracks');
  const scriptEl = $('wmScript');
  const seek = $('wmSeek');
  let lists = []; // flattened: { id, zh, en, group, tracks }
  let view = 0; // list shown in the panel
  let cur = null; // { list, idx } being played
  let state = { rate: 1, loop: 'list' };
  let ready = null;
  let lastSave = 0;

  try {
    state = { ...state, ...JSON.parse(localStorage.getItem(KEY) || '{}') };
  } catch (e) {}
  const save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ ...state, list: cur ? lists[cur.list].id : state.list, idx: cur ? cur.idx : state.idx, t: cur ? audio.currentTime : state.t }));
    } catch (e) {}
  };

  function load() {
    ready ??= fetch('./audio/manifest.json')
      .then((r) => r.json())
      .then((m) => {
        lists = m.groups.flatMap((g) => g.lists.map((l) => ({ ...l, group: g })));
        let lastGroup = null;
        lists.forEach((l, i) => {
          if (l.group !== lastGroup) {
            lastGroup = l.group;
            const h = document.createElement('h4');
            h.textContent = l.group.zh;
            listsEl.appendChild(h);
          }
          const b = document.createElement('button');
          const mins = Math.round(l.tracks.reduce((a, t) => a + (t.sec || 0), 0) / 60);
          b.innerHTML = `<b>${esc(l.zh)}</b><small>${esc(l.en)} · ${l.tracks.length} 集 · ${mins} 分钟</small>`;
          b.addEventListener('click', () => show(i));
          listsEl.appendChild(b);
          l.btn = b;
        });
        // restore where you stopped last time (without starting playback)
        const li = lists.findIndex((l) => l.id === state.list);
        if (li >= 0 && lists[li].tracks[state.idx]) {
          cur = { list: li, idx: state.idx };
          view = li;
          audio.src = `./audio/${lists[li].tracks[state.idx].id}.m4a`;
          audio.addEventListener('loadedmetadata', () => (audio.currentTime = Math.max(0, (state.t || 0) - 3)), { once: true });
          audio.preload = 'metadata';
          paint();
        }
        show(view);
      })
      .catch(() => {
        tracksEl.innerHTML = '<p class="wm-empty">音频列表加载失败，请检查网络后重新打开。</p>';
      });
    return ready;
  }

  function show(i) {
    view = i;
    const l = lists[i];
    lists.forEach((x, k) => x.btn.classList.toggle('active', k === i));
    $('wmTitle').innerHTML = `${esc(l.zh)}<small>${esc(l.group.zh)} · ${esc(l.en)}</small>`;
    tracksEl.innerHTML = l.tracks
      .map((t, k) => `<button class="wm-track" data-i="${k}"><i>${k + 1}</i><span><b>${esc(t.zh)}</b><small>${esc(t.en)}</small></span><em>${mmss(t.sec || 0)}</em></button>`)
      .join('');
    tracksEl.scrollTop = 0;
    paint();
  }

  function paint() {
    const playing = cur && !audio.paused;
    const t = cur ? lists[cur.list].tracks[cur.idx] : null;
    tracksEl.querySelectorAll('.wm-track').forEach((n, k) => {
      const on = cur && cur.list === view && cur.idx === k;
      n.classList.toggle('active', !!on);
      n.classList.toggle('playing', !!(on && playing));
    });
    $('wmNow').innerHTML = t ? `<b>${esc(t.zh)}</b><small>${esc(lists[cur.list].zh)}</small>` : '<b>还没有开始播放</b><small>选一集开始听吧</small>';
    $('wmPlay').textContent = playing ? '⏸' : '▶';
    $('wmPillPlay').textContent = playing ? '⏸' : '▶';
    $('wmPillText').textContent = t ? t.zh : '随身听';
    pill.hidden = !t;
    pill.classList.toggle('playing', !!playing);
    $('wmRate').textContent = `语速 ${state.rate}×`;
    $('wmLoop').textContent = LOOPS.find((l) => l[0] === state.loop)[1];
    scriptEl.innerHTML = t
      ? scriptOf(t.id)
          .map((s) => `<p>${s.who ? `<i>${esc(s.who)}</i>` : ''}<b>${esc(s.en)}</b><span>${esc(s.zh)}</span>${s.sub ? `<small>${esc(s.sub)}</small>` : ''}</p>`)
          .join('')
      : '<p class="wm-empty">开始播放后，这里会显示这一集的中英文文本。</p>';
  }

  function play(list, idx, at = 0) {
    const t = lists[list]?.tracks[idx];
    if (!t) return;
    beforePlay?.();
    cur = { list, idx };
    audio.src = `./audio/${t.id}.m4a`;
    audio.currentTime = 0;
    audio.playbackRate = state.rate;
    if (at) audio.addEventListener('loadedmetadata', () => (audio.currentTime = at), { once: true });
    audio.play().catch(() => {});
    scriptEl.scrollTop = 0;
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({ title: `${t.zh} ${t.en}`, artist: lists[list].zh, album: '迷你小世界 · 随身听' });
    }
    save();
    paint();
  }
  function toggle() {
    if (!cur) return play(view, 0);
    if (audio.paused) {
      beforePlay?.();
      audio.playbackRate = state.rate;
      audio.play().catch(() => {});
    } else audio.pause();
  }
  function step(d) {
    if (!cur) return play(view, 0);
    const n = lists[cur.list].tracks.length;
    let i = cur.idx + d;
    if (i < 0) i = 0;
    if (i >= n) {
      if (state.loop !== 'list') return audio.pause();
      i = 0;
    }
    play(cur.list, i);
  }

  audio.addEventListener('ended', () => (state.loop === 'one' ? play(cur.list, cur.idx) : step(1)));
  audio.addEventListener('play', paint);
  audio.addEventListener('pause', () => {
    save();
    paint();
  });
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      seek.max = audio.duration;
      if (!seek.matches(':active')) seek.value = audio.currentTime;
      $('wmTime').textContent = `${mmss(audio.currentTime)} / ${mmss(audio.duration)}`;
    }
    if (Date.now() - lastSave > 5000) {
      lastSave = Date.now();
      save();
    }
  });
  seek.addEventListener('input', () => (audio.currentTime = +seek.value));
  tracksEl.addEventListener('click', (e) => {
    const b = e.target.closest('.wm-track');
    if (!b) return;
    const i = +b.dataset.i;
    if (cur && cur.list === view && cur.idx === i) toggle();
    else play(view, i);
  });
  $('wmPlay').addEventListener('click', toggle);
  $('wmPrev').addEventListener('click', () => step(-1));
  $('wmNext').addEventListener('click', () => step(1));
  $('wmBack').addEventListener('click', () => (audio.currentTime = Math.max(0, audio.currentTime - 10)));
  $('wmRate').addEventListener('click', () => {
    state.rate = RATES[(RATES.indexOf(state.rate) + 1) % RATES.length];
    audio.playbackRate = state.rate;
    save();
    paint();
  });
  $('wmLoop').addEventListener('click', () => {
    state.loop = LOOPS[(LOOPS.findIndex((l) => l[0] === state.loop) + 1) % LOOPS.length][0];
    save();
    paint();
  });
  $('wmTabs').addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    panel.classList.toggle('show-script', b.dataset.tab === 'script');
    $('wmTabs').querySelectorAll('button').forEach((n) => n.classList.toggle('on', n === b));
  });
  $('wmPillPlay').addEventListener('click', toggle);
  $('wmPillText').addEventListener('click', () => api.open());
  $('wmClose').addEventListener('click', () => api.close());
  panel.addEventListener('click', (e) => e.target === panel && api.close());

  // lock-screen and headphone buttons
  if ('mediaSession' in navigator) {
    const ms = navigator.mediaSession;
    const on = (k, f) => {
      try {
        ms.setActionHandler(k, f);
      } catch (e) {}
    };
    on('play', toggle);
    on('pause', toggle);
    on('previoustrack', () => step(-1));
    on('nexttrack', () => step(1));
    on('seekbackward', () => (audio.currentTime = Math.max(0, audio.currentTime - 10)));
    on('seekforward', () => (audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10)));
  }

  const api = {
    open() {
      panel.hidden = false;
      load().then(() => cur && show(cur.list));
    },
    close() {
      panel.hidden = true;
    },
    isOpen: () => !panel.hidden,
    /** the app is about to speak a word aloud: do not talk over it */
    pauseForSpeech() {
      if (!audio.paused) audio.pause();
    },
  };
  load(); // so the mini player can show where you stopped last time
  return api;
}
