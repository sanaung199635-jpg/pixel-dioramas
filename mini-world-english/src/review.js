// Spaced review and the mistake book.
// Every word you open is scheduled to come back after 1, 3, 7, 14, 30 and 60 days.
// A right answer moves it to the next gap; a wrong answer sends it back to tomorrow
// and puts it in the mistake book until you get it right twice in a row.
import { WORDS, WORD_BY_ID, CATS, SCENES } from './data.js';

const KEY = 'mini-world-english:srs';
const GAPS = [1, 3, 7, 14, 30, 60]; // days until the next review, by level
const SESSION = 15; // most words asked in one go
const $ = (id) => document.getElementById(id);
const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
const zh1 = (w) => w.zh.split('；')[0];
const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export function createReview({ speak, onChange }) {
  const panel = $('review');
  const body = $('rvBody');
  /** id -> { lv: level, due: day number, miss: times wrong, run: right answers in a row } */
  let cards = {};
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '{}');
    for (const id in raw) if (WORD_BY_ID[id]) cards[id] = raw[id];
  } catch (e) {}
  const save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(cards));
    } catch (e) {}
    onChange?.();
  };

  const due = () => Object.keys(cards).filter((id) => cards[id].due <= today());
  const mistakes = () => Object.keys(cards).filter((id) => cards[id].miss > 0 && cards[id].run < 2);
  const dueIn = (days) => Object.keys(cards).filter((id) => cards[id].due > today() && cards[id].due <= today() + days).length;

  function grade(id, right) {
    const c = (cards[id] ??= { lv: 0, due: today() + 1, miss: 0, run: 0 });
    if (right) {
      c.run++;
      c.lv = Math.min(GAPS.length - 1, c.lv + 1);
      c.due = today() + GAPS[c.lv];
    } else {
      c.miss++;
      c.run = 0;
      c.lv = 0;
      c.due = today() + 1;
    }
    save();
  }

  // ------------------------------------------------------------------ views
  let tab = 'due';
  let session = null; // { queue, i, right, wrong: [], total }

  function paintTabs() {
    $('rvTabs').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.tab === tab));
    $('rvDueN').textContent = due().length;
    $('rvMissN').textContent = mistakes().length;
    $('rvAllN').textContent = Object.keys(cards).length;
  }
  const row = (id, extra = '') => {
    const w = WORD_BY_ID[id];
    return `<button class="rv-row" data-say="${id}"><b>${esc(w.en)}</b><span>${esc(zh1(w))}</span><small>${esc(SCENES[CATS[w.cat].scene].zh)}${extra}</small></button>`;
  };

  function home() {
    session = null;
    paintTabs();
    const n = due().length;
    const all = Object.keys(cards);
    if (tab === 'due') {
      body.innerHTML = all.length
        ? `<div class="rv-hero"><b>${n}</b><span>${n ? '个单词今天该复习了' : '今天没有需要复习的单词'}</span></div>
           <p class="rv-note">明天 ${dueIn(1)} 个 · 未来一周 ${dueIn(7)} 个。答对的词会隔得越来越久再出现：1、3、7、14、30、60 天。</p>
           <div class="rv-actions">${n ? `<button class="rv-go" data-start="due">开始复习${n > SESSION ? `（先做 ${SESSION} 个）` : ''}</button>` : `<button class="rv-go" data-start="early">提前复习 10 个</button>`}</div>`
        : '<p class="rv-empty">还没有学过的单词。<br>去任意场景点开单词卡片，它们就会自动进入复习计划。</p>';
    } else if (tab === 'miss') {
      const m = mistakes().sort((a, b) => cards[b].miss - cards[a].miss);
      body.innerHTML = m.length
        ? `<p class="rv-note">答错过的单词会留在这里，连续答对两次后自动移出。点一行可以听发音。</p>
           <div class="rv-actions"><button class="rv-go" data-start="miss">练习错词（${Math.min(m.length, SESSION)} 个）</button></div>
           <div class="rv-list">${m.map((id) => row(id, ` · 错 ${cards[id].miss} 次`)).join('')}</div>`
        : '<p class="rv-empty">错词本是空的。<br>复习或“听音找物”里答错的单词会自动收集到这里。</p>';
    } else {
      const sorted = all.sort((a, b) => cards[a].due - cards[b].due);
      body.innerHTML = all.length
        ? `<p class="rv-note">已进入复习计划的单词，按下次复习时间排序。</p><div class="rv-list">${sorted
            .map((id) => {
              const d = cards[id].due - today();
              return row(id, ` · ${d <= 0 ? '今天' : `${d} 天后`}`);
            })
            .join('')}</div>`
        : '<p class="rv-empty">还没有学过的单词。</p>';
    }
  }

  function start(kind) {
    let ids = kind === 'due' ? due() : kind === 'miss' ? mistakes() : Object.keys(cards);
    ids = shuffle(ids).slice(0, kind === 'early' ? 10 : SESSION);
    if (!ids.length) return;
    session = { queue: ids, i: 0, right: 0, wrong: [], total: ids.length, kind };
    ask();
  }

  function ask() {
    const id = session.queue[session.i];
    const w = WORD_BY_ID[id];
    // alternate direction: English -> Chinese, then Chinese -> English
    const toZh = session.i % 2 === 0;
    const pool = WORDS.filter((x) => x.id !== id && x.en.toLowerCase() !== w.en.toLowerCase() && zh1(x) !== zh1(w));
    const near = pool.filter((x) => x.cat === w.cat);
    const picks = shuffle(near).slice(0, 2).concat(shuffle(pool.filter((x) => x.cat !== w.cat)).slice(0, 3)).slice(0, 3);
    const opts = shuffle([w, ...picks]);
    session.answered = false;
    body.innerHTML = `
      <div class="rv-bar"><i style="width:${(session.i / session.queue.length) * 100}%"></i></div>
      <p class="rv-count">第 ${session.i + 1} / ${session.queue.length} 个</p>
      <div class="rv-q">${toZh ? `<b>${esc(w.en)}</b><small>${esc(w.us)}</small><button class="rv-say" data-say="${id}">🔊 再听一遍</button>` : `<b class="zh">${esc(zh1(w))}</b><small>选出对应的英文</small>`}</div>
      <div class="rv-opts">${opts.map((o) => `<button data-pick="${o.id}">${esc(toZh ? zh1(o) : o.en)}</button>`).join('')}</div>
      <div class="rv-after" id="rvAfter" hidden></div>`;
    if (toZh) speak(w.en);
  }

  function pick(btn) {
    if (session.answered) return;
    session.answered = true;
    const id = session.queue[session.i];
    const w = WORD_BY_ID[id];
    const right = btn.dataset.pick === id;
    const first = !session.wrong.includes(id);
    body.querySelectorAll('[data-pick]').forEach((b) => {
      b.disabled = true;
      if (b.dataset.pick === id) b.classList.add('good');
      else if (b === btn) b.classList.add('bad');
    });
    if (right && first) session.right++;
    if (!right && first) {
      session.wrong.push(id);
      session.queue.push(id); // ask it once more at the end
    }
    if (first) grade(id, right);
    const last = session.i + 1 >= session.queue.length;
    $('rvAfter').hidden = false;
    $('rvAfter').innerHTML = `<p class="${right ? 'ok' : 'no'}">${right ? '答对了' : '答错了'}：<b>${esc(w.en)}</b> ${esc(w.us)} · ${esc(w.zh)}</p>
      <p class="ex">${esc(w.ex)}<small>${esc(w.exZh)}</small></p><button class="rv-go" id="rvNext">${last ? '看结果' : '下一个'}</button>`;
    speak(w.en);
    $('rvNext').focus();
  }

  function next() {
    session.i++;
    if (session.i < session.queue.length) return ask();
    const s = session;
    paintTabs();
    body.innerHTML = `<div class="rv-hero"><b>${s.right} / ${s.total}</b><span>${s.right === s.total ? '全部答对，太棒了！' : '完成这一轮复习'}</span></div>
      ${s.wrong.length ? `<p class="rv-note">这些词答错了，已放进错词本，明天会再出现：</p><div class="rv-list">${s.wrong.map((id) => row(id)).join('')}</div>` : '<p class="rv-note">答对的词已经排到更久之后再复习。</p>'}
      <div class="rv-actions"><button class="rv-go" data-home="1">完成</button>${due().length ? '<button class="rv-go ghost" data-start="due">继续复习</button>' : ''}</div>`;
    session = null;
  }

  body.addEventListener('click', (e) => {
    const t = e.target.closest('button');
    if (!t) return;
    if (t.dataset.pick) pick(t);
    else if (t.id === 'rvNext') next();
    else if (t.dataset.start) start(t.dataset.start);
    else if (t.dataset.home) home();
    else if (t.dataset.say) speak(WORD_BY_ID[t.dataset.say].en);
  });
  $('rvTabs').addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    tab = b.dataset.tab;
    home();
  });
  $('rvClose').addEventListener('click', () => api.close());
  panel.addEventListener('click', (e) => e.target === panel && api.close());

  const api = {
    /** a word card was opened for the first time: schedule its first review for tomorrow */
    learn(id) {
      if (cards[id]) return;
      cards[id] = { lv: 0, due: today() + 1, miss: 0, run: 0 };
      save();
    },
    /** answered wrong somewhere else in the app (the listen-and-find quiz) */
    miss(id) {
      grade(id, false);
    },
    dueCount: () => due().length,
    mistakeCount: () => mistakes().length,
    open(which) {
      tab = which || (due().length || !mistakes().length ? 'due' : 'miss');
      panel.hidden = false;
      home();
    },
    close() {
      panel.hidden = true;
    },
    isOpen: () => !panel.hidden,
  };
  return api;
}
