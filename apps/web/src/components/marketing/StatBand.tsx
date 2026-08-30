import { Reveal } from './Reveal';

export type Stat = { value: string; caption: string };

/** Default trust stats — honest, pre-launch, no fabricated numbers. */
export const trustStats: Stat[] = [
  { value: 'DEFAULT-DENY', caption: 'every action gated before it happens' },
  { value: 'FAIL-CLOSED', caption: 'denials win — always' },
  { value: 'RECEIPTS', caption: 'on every action, traceable to evidence' },
  { value: 'YOUR WALLS', caption: 'intelligence never leaves your environment' },
];

/** A gapless bordered "control-matrix" of monospace trust callouts. */
export function StatBand({ stats = trustStats }: { stats?: Stat[] }) {
  return (
    <div className="border-l border-t border-line">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.value}
            delay={i * 80}
            className="border-b border-r border-line p-7"
          >
            <div className="font-mono text-[clamp(18px,2.4vw,24px)] tracking-[0.02em] text-accent">
              {s.value}
            </div>
            <div className="mt-2.5 font-mono text-[12.5px] leading-relaxed text-muted">
              {s.caption}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
