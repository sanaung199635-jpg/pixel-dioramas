// Picture-board scenes (Food, Travel, Restaurant): tabs of emoji tiles, one page per category.
// Exposes the same small interface as the phone scene so the app treats every panel alike.

const tile = (w) =>
  `<button class="ft" data-w="${w.id}"><span class="fe">${w.emoji}${w.badge ? `<i>${w.badge}</i>` : ''}</span><span class="fn">${w.en}</span><span class="fz">${w.zh.split('；')[0]}</span></button>`;

/** cfg: { cats, groups, words, quizPrompt } */
export function createBoard(host, cfg, { onPick, onScreen }) {
  const stage = document.createElement('section');
  stage.className = 'food-stage';
  stage.hidden = true;
  stage.innerHTML =
    '<div class="food-top"><nav class="food-tabs" aria-label="分类"></nav><button class="food-zh on">中文：显示</button></div><div class="food-board"></div>';
  host.appendChild(stage);
  const tabsEl = stage.querySelector('.food-tabs');
  const boardEl = stage.querySelector('.food-board');
  const zhBtn = stage.querySelector('.food-zh');
  const pages = Object.keys(cfg.cats).map((cat) => ({ cat, ...cfg.cats[cat], words: cfg.words.filter((w) => w.cat === cat) }));
  let idx = -1;

  const tabs = pages.map((p, i) => {
    const b = document.createElement('button');
    b.style.setProperty('--cat', p.color);
    b.innerHTML = `<span>${p.icon}</span>${p.zh}<small>${p.en}</small><i>${p.words.length}</i>`;
    b.addEventListener('click', () => show(i));
    tabsEl.appendChild(b);
    return b;
  });

  function show(i, silent = false) {
    if (i === idx) return;
    idx = i;
    const p = pages[i];
    // words that share a group get a small heading (e.g. Meat / Seafood)
    const groups = [...new Set(p.words.map((w) => w.group))];
    boardEl.style.setProperty('--cat', p.color);
    boardEl.innerHTML = groups
      .map((g) => {
        const head = cfg.groups[g] ? `<h3>${cfg.groups[g].en}<small>${cfg.groups[g].zh}</small></h3>` : '';
        return `${head}<div class="fgrid">${p.words.filter((w) => w.group === g).map(tile).join('')}</div>`;
      })
      .join('');
    boardEl.scrollTop = 0;
    tabs.forEach((b, k) => b.classList.toggle('active', k === i));
    tabs[i].scrollIntoView({ block: 'nearest', inline: 'center' });
    if (!silent) onScreen?.(p);
  }
  boardEl.addEventListener('click', (e) => {
    const el = e.target.closest('[data-w]');
    if (el) onPick(el.dataset.w, el);
  });
  zhBtn.addEventListener('click', () => {
    const hide = stage.classList.toggle('no-zh');
    zhBtn.textContent = hide ? '中文：隐藏' : '中文：显示';
    zhBtn.classList.toggle('on', !hide);
  });
  show(0, true);

  return {
    stage,
    reveal(id) {
      const i = pages.findIndex((p) => p.words.some((w) => w.id === id));
      if (i < 0) return;
      show(i);
      const el = boardEl.querySelector(`[data-w="${id}"]`);
      el.scrollIntoView({ block: 'nearest' });
      onPick(id, el);
    },
    highlight(el) {
      boardEl.querySelectorAll('.ft.sel').forEach((n) => n.classList.remove('sel'));
      if (el && boardEl.contains(el)) el.classList.add('sel');
    },
    shake(el) {
      el.classList.remove('shake');
      void el.offsetWidth;
      el.classList.add('shake');
    },
    screenWords: () => pages[idx].words.map((w) => w.id),
    quizPrompt: cfg.quizPrompt,
  };
}
