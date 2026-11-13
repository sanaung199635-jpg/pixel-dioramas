// Builds the Walkman audio library.
//
//   node tools/build-audio.mjs plan      -> writes tools/.tracks.json (what to say) and audio/manifest.json (titles)
//   powershell -File tools/make-audio.ps1 -Json tools/.tracks.json -OutDir audio   (Windows voices -> .m4a files)
//   node tools/build-audio.mjs finish    -> copies the measured durations into audio/manifest.json
//
// Segment kinds understood by make-audio.ps1: zh (Chinese voice), en / en2 (two English voices),
// slow / slow2 (same voices, slow), pause (milliseconds).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { WORDS, CATS, SCENES } from '../src/data.js';
import { DIALOGUES } from '../src/dialogues.js';
import { LESSONS, LEVELS } from '../src/course.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const TRACKS = join(root, 'tools', '.tracks.json');
const MANIFEST = join(root, 'audio', 'manifest.json');

const say = (s) => s.replace(/&/g, ' and ').replace(/[“”]/g, '"').replace(/’/g, "'").trim();
const zhShort = (s) => s.replace(/（[^）]*）/g, '').split('；').join('，');
const repeatGap = (en) => Math.min(4200, 1100 + en.length * 75); // time to say it yourself

function lessonTrack(l) {
  const segs = [['zh', l.intro], ['pause', 700]];
  for (const [en, zh, tip] of l.items) {
    segs.push(['zh', zh], ['en', say(en)], ['slow', say(en)], ['pause', repeatGap(en)], ['en', say(en)]);
    if (tip) segs.push(['zh', tip]);
    segs.push(['pause', 800]);
  }
  segs.push(['zh', '这一课结束了。建议你再听一遍，能跟上之后再进入下一课。']);
  return { out: l.id, segs };
}

function vocabTrack(catId, words) {
  const cat = CATS[catId];
  const segs = [['zh', `${SCENES[cat.scene].zh}，${cat.zh}，共 ${words.length} 个单词。每个单词先听两遍英文，再听中文意思，然后是一个例句。`], ['pause', 600]];
  for (const w of words) {
    segs.push(['en', say(w.en)], ['slow', say(w.en)], ['zh', zhShort(w.zh)], ['pause', 300], ['en2', say(w.ex)], ['zh', w.exZh], ['pause', 700]);
  }
  return { out: `v_${catId}`, segs };
}

function dialogueTrack(d) {
  const segs = [['zh', `情景对话：${d.zh}。先听一遍中英对照。`], ['pause', 500]];
  for (const [who, en, zh] of d.lines) segs.push([who === 'A' ? 'en' : 'en2', say(en)], ['zh', zh], ['pause', 300]);
  segs.push(['pause', 600], ['zh', '现在只听英文，试试能听懂多少。'], ['pause', 500]);
  for (const [who, en] of d.lines) segs.push([who === 'A' ? 'en' : 'en2', say(en)], ['pause', 450]);
  return { out: `d_${d.id}`, segs };
}

function build() {
  const tracks = [];
  const course = {
    id: 'course', zh: '零基础到进阶课程', en: 'Course',
    lists: LEVELS.map((lv) => ({
      id: lv.id, zh: lv.zh, en: lv.en,
      tracks: LESSONS.filter((l) => l.level === lv.id).map((l, i) => {
        tracks.push(lessonTrack(l));
        return { id: l.id, zh: `第 ${+l.id.slice(1)} 课 · ${l.zh}`, en: l.en };
      }),
    })),
  };
  const vocab = {
    id: 'vocab', zh: '场景单词', en: 'Vocabulary',
    lists: Object.keys(SCENES).map((scene) => ({
      id: `s_${scene}`, zh: SCENES[scene].zh, en: SCENES[scene].en,
      tracks: Object.keys(CATS).filter((c) => CATS[c].scene === scene).map((c) => {
        tracks.push(vocabTrack(c, WORDS.filter((w) => w.cat === c)));
        return { id: `v_${c}`, zh: CATS[c].zh, en: CATS[c].en };
      }),
    })),
  };
  const talk = {
    id: 'talk', zh: '情景对话', en: 'Dialogues',
    lists: [{
      id: 'talk', zh: '全部对话', en: 'All Dialogues',
      tracks: DIALOGUES.map((d) => {
        tracks.push(dialogueTrack(d));
        return { id: `d_${d.id}`, zh: d.zh, en: d.en };
      }),
    }],
  };
  return { tracks, manifest: { groups: [course, vocab, talk] } };
}

const mode = process.argv[2] || 'plan';
const { tracks, manifest } = build();
if (mode === 'plan') {
  writeFileSync(TRACKS, JSON.stringify(tracks));
  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1));
  console.log(`planned ${tracks.length} tracks`);
} else if (mode === 'finish') {
  const file = join(root, 'audio', '_durations.json');
  if (!existsSync(file)) throw new Error('run make-audio.ps1 first');
  const raw = JSON.parse(readFileSync(file, 'utf8').replace(/^﻿/, ''));
  const secs = Object.fromEntries((Array.isArray(raw) ? raw : [raw]).map((d) => [d.id, d.seconds]));
  let total = 0;
  let missing = 0;
  for (const g of manifest.groups)
    for (const l of g.lists)
      for (const t of l.tracks) {
        t.sec = secs[t.id] ?? 0;
        total += t.sec;
        if (!t.sec) missing++;
      }
  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1));
  console.log(`manifest: ${tracks.length} tracks, ${Math.round(total / 60)} minutes, ${missing} missing`);
}
