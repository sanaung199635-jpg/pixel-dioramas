// Text content lives in /content as data; scenes refer to it only by id.
import stagesData from '../../content/stages.zh-CN.json';
import sourcesData from '../../content/sources.json';
import hotspotData from '../../content/hotspots.zh-CN.json';

export interface Term { zh: string; en: string; def: string }
export interface StageContent {
  id: string; no: number; title: string; en: string; summary: string;
  terms: Term[]; purpose: string; equipment: string[]; cautions: string[];
  sources: string[]; evidence: 'A' | 'B' | 'C'; simplification: string;
}
export interface Source { id: string; grade: string; retrieved: string; title: string; url: string }
export interface HotspotContent { label: string; sub: string; body: string; stage: string }

export const STAGES = stagesData.stages as StageContent[];
export const SOURCES = Object.fromEntries((sourcesData.sources as Source[]).map((s) => [s.id, s]));
export const HOTSPOTS = hotspotData.hotspots as Record<string, HotspotContent>;

export function stage(id: string): StageContent {
  const s = STAGES.find((x) => x.id === id);
  if (!s) throw new Error(`unknown stage ${id}`);
  return s;
}

export function hotspot(id: string): HotspotContent {
  const h = HOTSPOTS[id];
  if (!h) throw new Error(`unknown hotspot ${id}`);
  return h;
}
