// PHASE 1 CONCEPT TOOL — static UI overlay for concept frames (not interactive).
export const STAGES = [
  ['01', '开采', 'Mining'], ['02', '清洗', 'Washing'], ['03', '打灯观察', 'Lighting'], ['04', '开窗', 'Window'],
  ['05', '切割规划', 'Planning'], ['06', '水冷切片', 'Slabbing'], ['07', '画圈', 'Marking'], ['08', '套取镯坯', 'Coring'],
  ['09', '粗加工', 'Shaping'], ['10', '精磨', 'Fine grind'], ['11', '抛光', 'Polishing'], ['12', '检查展示', 'Showcase'],
];

// Draft copy — every line is pending Phase 2 knowledge review.
const COPY = {
  1: { t: '开采', en: 'Mining', story: '翡翠原石产自变质岩带或经河流搬运的砾石层。画面为示意性的露天开采沙盘，用挖掘机剥离覆土、取出原石。', term: '原生矿 · 次生矿', purpose: '获得原石', tool: '挖掘机 · 运输车', note: '实际矿区的开采方式差异很大，本场景仅作示意。' },
  2: { t: '清洗', en: 'Washing', story: '用水冲去表面泥沙，皮壳的颜色、颗粒与裂纹会更清楚。', term: '皮壳', purpose: '看清外表', tool: '水枪 · 毛刷', note: '清洗只改善表面观察，不改变原石本身。' },
  3: { t: '打灯观察', en: 'Lighting', story: '强光手电贴近皮壳，观察光线能否透入及局部颜色。', term: '打灯 · 透光', purpose: '初步判断', tool: '强光手电', note: '打灯只能看到很浅的局部，无法完整判断内部品质。' },
  4: { t: '开窗', en: 'Window', story: '磨去一小块皮壳，露出内部石质，便于观察颜色与质地。', term: '开窗 · 擦口', purpose: '暴露局部内部', tool: '角磨机 · 砂轮', note: '窗口所见仅代表该位置。' },
  5: { t: '切割规划', en: 'Planning', story: '根据颜色、裂纹和尺寸画出切割线，先对半剖开，再取出适合做镯子的板料。', term: '切割线', purpose: '保色避裂、提高出材', tool: '记号笔 · 卡尺', note: '不同工厂的规划逻辑不同。' },
  6: { t: '水冷切片', en: 'Slabbing', story: '金刚石锯片在持续冷却水中切开原石，冷却水同时带走岩粉。', term: '金刚石锯片 · 冷却水', purpose: '剖开原石、取得板料', tool: '水冷切割机', note: '切开后才能看到切面所在平面的内部结构。' },
  7: { t: '画圈', en: 'Marking', story: '在板料上评估裂纹与颜色分布，画出镯子的外圈与内圈位置。', term: '画圈 · 板料', purpose: '确定取镯位置', tool: '灯箱 · 记号笔', note: '示意流程，待核实。' },
  8: { t: '套取镯坯', en: 'Coring', story: '管状钻头沿画好的圆环切下镯坯，中间留下镯芯，四周留下余料。', term: '镯坯 · 镯芯 · 余料', purpose: '取出环形毛坯', tool: '套料机 · 管钻', note: '设备形式待核实。' },
  9: { t: '粗加工', en: 'Shaping', story: '把方形截面的镯坯磨出内外圈与条形轮廓。', term: '修形', purpose: '定出镯形', tool: '粗砂轮', note: '示意。' },
  10: { t: '精磨', en: 'Fine grinding', story: '逐级换用更细的磨料，消除粗磨痕迹，使表面平整。', term: '精磨 · 目数', purpose: '提高平整度', tool: '细砂轮 · 冷却水', note: '具体目数顺序待核实。' },
  11: { t: '抛光', en: 'Polishing', story: '用抛光轮与抛光粉打出温润的光泽和清晰的反射。', term: '抛光', purpose: '形成光泽', tool: '抛光轮', note: '天然翡翠抛光不等于“处理”。' },
  12: { t: '检查展示', en: 'Showcase', story: '检查裂纹、尺寸与抛光状态，最终在展台上呈现完整的手镯。', term: '圈口 · 条径', purpose: '检验成品', tool: '灯 · 卡尺', note: '' },
};

const icon = {
  sound: '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9l4 6M21 9l-4 6"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M7 5l12 7-12 7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M7 5h3v14H7zM14 5h3v14h-3z"/></svg>',
  reset: '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4v5h5"/></svg>',
  cam: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M3 12c2.5-4.5 5.5-7 9-7s6.5 2.5 9 7c-2.5 4.5-5.5 7-9 7s-6.5-2.5-9-7z"/></svg>',
  spot: '<svg viewBox="0 0 24 24"><path d="M9 3h6l-1 6h-4z"/><path d="M6 21l4-12h4l4 12"/></svg>',
};

export function renderUI({ theme, kind, stage = 0, hot, W, H }) {
  const root = document.getElementById('ui');
  const mobile = W < 700;
  root.className = `ui ${kind} ${mobile ? 'm' : 'd'}`;
  const top = `
    <header class="top">
      <div class="brand"><span class="mark"></span><b>JADE GENESIS</b><i>翡翠诞生记</i></div>
      ${mobile ? '' : `<nav><a class="${kind === 'hero' ? 'on' : ''}">旅程</a><a class="${kind === 'process' ? 'on' : ''}">工艺</a><a class="${kind === 'final' ? 'on' : ''}">展厅</a><a>知识</a></nav>`}
      <div class="tools"><button class="chip">${icon.sound}<span>声音 · 关</span></button>${mobile ? '' : '<button class="chip"><span>中 / EN</span></button>'}</div>
    </header>`;
  const timeline = `
    <footer class="timeline${mobile ? ' compact' : ''}">
      ${STAGES.map(([n, zh, en], i) => `<div class="step ${i + 1 === stage ? 'on' : i + 1 < stage ? 'done' : ''}"><span class="n">${n}</span>${mobile ? '' : `<span class="zh">${zh}</span><span class="en">${en}</span>`}</div>`).join('')}
      <div class="rail"><div class="fill" style="width:${Math.max(0, (stage - 1) / 11) * 100}%"></div></div>
    </footer>`;
  const lines = [], tags = [];
  if (mobile) hot = hot.slice(1);
  hot.forEach((h, i) => {
    const right = h.side && !mobile ? h.side === 'r' : h.x < W * (kind === 'hero' ? (mobile ? 0.5 : 0.72) : 0.6);
    const dx = (right ? 1 : -1) * (mobile ? 34 : 56), dy = mobile ? (i % 2 ? 46 : -46) : h.dy ?? (-52 - (i % 2) * 22);
    const ex = h.x + dx, ey = h.y + dy, hx = ex + (right ? 22 : -22);
    lines.push(`<path d="M${h.x} ${h.y} L${ex} ${ey} L${hx} ${ey}"/><circle cx="${h.x}" cy="${h.y}" r="4"/><circle class="halo" cx="${h.x}" cy="${h.y}" r="10"/>`);
    tags.push(`<div class="tag ${right ? 'r' : 'l'}" style="left:${hx}px;top:${ey}px"><b>${h.label}</b><span>${h.sub}</span></div>`);
  });
  const hots = `<svg class="leads" width="${W}" height="${H}">${lines.join('')}</svg>${tags.join('')}`;
  let body = '';
  if (kind === 'hero') {
    body = mobile ? `
      <section class="hero-copy m"><div class="kicker">JADEITE JADE · 硬玉翡翠</div><h1>翡翠诞生记</h1><p>一块原石，十二道工序，<br/>成为一只手镯。</p></section>
      <section class="sheet"><div class="grab"></div><div class="cta-row"><button class="cta">开始旅程 ${icon.play}</button><button class="ghost">自由探索</button></div><div class="hint">单指旋转 · 双指缩放</div></section>` : `
      <section class="hero-copy">
        <div class="kicker">JADEITE JADE · 硬玉翡翠 · 数字工艺馆</div>
        <h1>翡翠诞生记</h1>
        <p class="lead">一块未经切割的原石，经过开采、清洗、观察、切片、<br/>取圈、打磨与抛光，成为一只绿色翡翠手镯。</p>
        <div class="cta-row"><button class="cta">开始旅程 ${icon.play}</button><button class="ghost">自由探索</button></div>
        <dl class="facts"><div><dt>矿物</dt><dd>硬玉 Jadeite</dd></div><div><dt>折射率</dt><dd>约 1.66</dd></div><div><dt>摩氏硬度</dt><dd>约 6.5–7</dd></div></dl>
        <div class="verify">数据待 Phase 2 依 GIA 资料核对</div>
      </section>
      <div class="hint">拖动旋转 · 滚轮缩放 · 点击标注了解更多</div>`;
  } else if (kind === 'process') {
    const c = COPY[stage];
    body = mobile ? '' : `
      <section class="stage-card">
        <div class="kicker">STAGE ${String(stage).padStart(2, '0')} / 12</div>
        <h2>${c.t}<small>${c.en}</small></h2>
        <p>${c.story}</p>
        <div class="simp">演示简化：${c.note}</div>
      </section>
      <aside class="know">
        <div class="kh">知识卡片</div>
        <dl><dt>专业术语</dt><dd>${c.term}</dd><dt>加工目的</dt><dd>${c.purpose}</dd><dt>设备</dt><dd>${c.tool}</dd><dt>参考来源</dt><dd class="pend">待 Phase 2 审核</dd></dl>
      </aside>
      <div class="dock"><button class="round on">${icon.pause}</button><div class="speed"><span>0.5×</span><span class="on">1×</span><span>2×</span></div><button class="round">${icon.reset}</button><button class="round">${icon.cam}</button></div>`;
  } else if (kind === 'final') {
    body = `
      <section class="stage-card final">
        <div class="kicker">STAGE 12 / 12 · 成品展厅</div>
        <h2>一只翡翠手镯<small>Jadeite bangle</small></h2>
        <p>半透明的条身、自然的浓淡色带、细微的棉絮，以及抛光后温润而清晰的反射。</p>
        <div class="compare"><span>打磨前</span><div class="slider"><i></i></div><span>抛光后</span></div>
      </section>
      <aside class="know">
        <div class="kh">材质说明</div>
        <dl><dt>颜色</dt><dd>绿色，浓淡分布不均</dd><dt>透明度</dt><dd>半透明，非玻璃般全透</dd><dt>纹理</dt><dd>可见棉絮与色带</dd><dt>光泽</dt><dd>抛光后玻璃光泽</dd><dt>处理状态</dt><dd class="pend">天然 / 处理需检测鉴定</dd></dl>
      </aside>
      <div class="dock"><button class="round">${icon.spot}</button><div class="speed"><span class="on">聚光</span><span>柔光</span><span>背光</span></div><button class="round">${icon.reset}</button><span class="deg">360°</span></div>`;
  }
  root.innerHTML = top + body + `<div class="hots">${hots}</div>` + timeline + `<div class="concept-tag">概念效果图 · 方案 ${theme} · 非最终界面</div>`;
}
