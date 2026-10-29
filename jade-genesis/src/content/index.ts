// Text content lives in /content as data; code refers to it only by id/key.
// Adding a language = adding *.en.json files and a loader entry here.
import stagesData from '../../content/stages.zh-CN.json';
import sourcesData from '../../content/sources.json';
import hotspotData from '../../content/hotspots.zh-CN.json';
import uiData from '../../content/ui.zh-CN.json';

export interface Term { zh: string; en: string; def: string }
export interface StageContent {
  id: string; no: number; title: string; en: string; summary: string;
  terms: Term[]; purpose: string; equipment: string[]; cautions: string[];
  sources: string[]; evidence: 'A' | 'B' | 'C'; simplification: string;
}
export interface Source { id: string; grade: string; retrieved: string; title: string; url: string }
export interface HotspotContent { label: string; sub: string; body: string; stage: string }

export const LOCALE = uiData.locale;
export const STAGE_CONTENT = stagesData.stages as StageContent[];
export const SOURCES = Object.fromEntries((sourcesData.sources as Source[]).map((s) => [s.id, s]));
export const HOTSPOTS = hotspotData.hotspots as Record<string, HotspotContent>;
const STRINGS = uiData.strings as Record<string, string>;

export function stage(id: string): StageContent {
  const s = STAGE_CONTENT.find((x) => x.id === id);
  if (!s) throw new Error(`unknown stage ${id}`);
  return s;
}

export function hotspot(id: string): HotspotContent {
  const h = HOTSPOTS[id];
  if (!h) throw new Error(`unknown hotspot ${id}`);
  return h;
}

/** UI string with {var} substitution. Unknown keys fail loudly in development. */
export function t(key: string, vars: Record<string, string | number> = {}): string {
  const s = STRINGS[key];
  if (s === undefined) {
    if (import.meta.env.DEV) console.warn(`missing ui string ${key}`);
    return key;
  }
  return s.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? ''));
}
