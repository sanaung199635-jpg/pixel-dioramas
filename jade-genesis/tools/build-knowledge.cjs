// Validates content/*.json and generates docs/KNOWLEDGE_TABLE.md from it.
// node jade-genesis/tools/build-knowledge.cjs
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const read = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8'));
const { stages } = read('content/stages.zh-CN.json');
const { sources } = read('content/sources.json');
const byId = Object.fromEntries(sources.map((s) => [s.id, s]));

const REQUIRED = ['id', 'no', 'title', 'en', 'summary', 'terms', 'purpose', 'equipment', 'cautions', 'sources', 'evidence', 'simplification'];
const errors = [];
if (stages.length !== 12) errors.push(`expected 12 stages, got ${stages.length}`);
stages.forEach((s, i) => {
  for (const k of REQUIRED) if (s[k] === undefined || s[k] === '' || (Array.isArray(s[k]) && !s[k].length)) errors.push(`stage ${i + 1}: missing ${k}`);
  if (s.no !== i + 1) errors.push(`stage ${s.id}: no=${s.no}, expected ${i + 1}`);
  for (const id of s.sources || []) if (!byId[id]) errors.push(`stage ${s.id}: unknown source ${id}`);
  if (!['A', 'B', 'C'].includes(s.evidence)) errors.push(`stage ${s.id}: bad evidence grade`);
});
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }

const esc = (t) => String(t).replace(/\|/g, '\\|');
let md = `# 工艺知识表（自动生成）\n\n> 由 \`content/stages.zh-CN.json\` 与 \`content/sources.json\` 生成，请勿手改。重新生成：\`node jade-genesis/tools/build-knowledge.cjs\`\n>\n> 证据等级：**A** = GIA / Gems & Gemology 原文；**B** = 期刊、博物馆或 GIA 实地报告；**C** = 行业科普或商家资料（必须附“示意 / 因厂而异”说明）。\n\n`;
md += `| # | 工序 | 加工目的 | 设备 | 证据 |\n|---|---|---|---|---|\n`;
md += stages.map((s) => `| ${String(s.no).padStart(2, '0')} | ${s.title} ${s.en} | ${esc(s.purpose)} | ${esc(s.equipment.join('、'))} | ${s.evidence} |`).join('\n') + '\n\n';
for (const s of stages) {
  md += `## ${String(s.no).padStart(2, '0')} ${s.title} · ${s.en}\n\n${s.summary}\n\n`;
  md += `- **专业术语：** ${s.terms.map((t) => `${t.zh}（${t.en}）：${t.def}`).join('；')}\n`;
  md += `- **加工目的：** ${s.purpose}\n- **设备：** ${s.equipment.join('、')}\n`;
  md += `- **注意事项：** ${s.cautions.join(' ')}\n- **演示简化：** ${s.simplification}\n`;
  md += `- **来源（证据 ${s.evidence}）：** ${s.sources.map((id) => `[${id}](${byId[id].url})`).join('、')}\n\n`;
}
md += `## 来源列表\n\n| ID | 等级 | 本阶段读取方式 | 标题 |\n|---|---|---|---|\n`;
md += sources.map((s) => `| ${s.id} | ${s.grade} | ${s.retrieved} | [${esc(s.title)}](${s.url}) |`).join('\n') + '\n';
fs.writeFileSync(path.join(ROOT, 'docs/KNOWLEDGE_TABLE.md'), md);
console.log(`ok: ${stages.length} stages, ${sources.length} sources -> docs/KNOWLEDGE_TABLE.md`);
