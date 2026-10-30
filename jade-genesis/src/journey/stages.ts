// Stage registry: order, content ids (content/stages.zh-CN.json), and
// timeline length at 1× speed. Durations follow docs/SCENE_SCRIPT.md.
export interface StageDef {
  /** Matches the id in content/stages.*.json. */
  id: string;
  /** Seconds at 1× speed. */
  duration: number;
  /** Named phases shown on the scrubber: [progress, ui-string key]. */
  phases: [number, string][];
}

export const STAGES: StageDef[] = [
  { id: 'mining', duration: 25, phases: [[0, 'ph.overview'], [0.25, 'ph.dig'], [0.6, 'ph.lift']] },
  { id: 'washing', duration: 16, phases: [[0, 'ph.transport'], [0.25, 'ph.wash'], [0.9, 'ph.done']] },
  { id: 'lighting', duration: 22, phases: [[0, 'ph.transport'], [0.2, 'ph.dim'], [0.3, 'ph.torch'], [0.86, 'ph.lightsOn']] },
  { id: 'window', duration: 20, phases: [[0, 'ph.approach'], [0.25, 'ph.grind'], [0.8, 'ph.done']] },
  { id: 'planning', duration: 24, phases: [[0, 'ph.orbit'], [0.15, 'ph.lineHalf'], [0.45, 'ph.lineSlab'], [0.85, 'ph.done']] },
  { id: 'slabbing', duration: 46, phases: [[0, 'ph.transport'], [0.12, 'ph.feed'], [0.2, 'ph.cut'], [0.42, 'ph.retract'], [0.47, 'ph.open'], [0.6, 'ph.slabCut'], [0.92, 'ph.separate']] },
  { id: 'marking', duration: 20, phases: [[0, 'ph.transport'], [0.35, 'ph.lightbox'], [0.45, 'ph.mark']] },
  { id: 'coring', duration: 32, phases: [[0, 'ph.transport'], [0.14, 'ph.outer'], [0.45, 'ph.toolChange'], [0.5, 'ph.inner'], [0.76, 'ph.liftBlank']] },
  { id: 'shaping', duration: 24, phases: [[0, 'ph.transport'], [0.18, 'ph.rough']] },
  { id: 'fine-grinding', duration: 20, phases: [[0, 'ph.toolChange'], [0.12, 'ph.fine']] },
  { id: 'polishing', duration: 20, phases: [[0, 'ph.toolChange'], [0.12, 'ph.polish']] },
  { id: 'showcase', duration: 32, phases: [[0, 'ph.transport'], [0.16, 'ph.inspect'], [0.5, 'ph.display']] },
];

export const STAGE_COUNT = STAGES.length;

export const stageDuration = (i: number): number => STAGES[i].duration;

export const totalDuration = (): number => STAGES.reduce((a, s) => a + s.duration, 0);

export function phaseKey(stage: number, progress: number): string {
  let key = STAGES[stage].phases[0][1];
  for (const [at, k] of STAGES[stage].phases) if (progress >= at) key = k;
  return key;
}
