import { cn } from '@/lib/cn';

type Row = {
  kind: 'io' | 'plane' | 'gate';
  dotLabel?: string; // for io rows
  name?: string;
  verb?: string;
  desc: string;
};

const rows: Row[] = [
  { kind: 'io', dotLabel: '❯', desc: 'proposal — an action is requested' },
  {
    kind: 'plane',
    name: 'CripsisAI',
    verb: 'Thinks',
    desc: 'Observes, reasons over context, and recommends an action.',
  },
  {
    kind: 'plane',
    name: 'Kybernite',
    verb: 'Knows',
    desc: 'Checks evidence, provenance, and validated practice.',
  },
  {
    kind: 'gate',
    name: 'Trilithium',
    verb: 'Allows',
    desc: 'Policy decides: permit, require approval, or refuse.',
  },
  { kind: 'io', dotLabel: '✓', desc: 'receipt recorded — traceable to evidence' },
];

/** The signature control-plane diagram: a proposal flowing down the three planes
 *  through the Trilithium gate to a receipt. A dot travels the spine on loop. */
export function ControlPlaneDiagram() {
  return (
    <div className="relative">
      {/* spine + travelling signal */}
      <div className="absolute bottom-5 left-[21px] top-5 w-px bg-[linear-gradient(180deg,rgba(104,216,255,0),rgba(104,216,255,0.45)_10%,rgba(104,216,255,0.45)_90%,rgba(104,216,255,0))]">
        <span className="travel-y absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_10px_rgba(104,216,255,0.9)]" />
      </div>

      <div className="flex flex-col gap-3">
        {rows.map((row, i) => (
          <div key={i} className="relative grid grid-cols-[44px_1fr] items-center gap-1">
            {/* spine node */}
            <div className="flex justify-center">
              {row.kind === 'io' ? (
                <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-line bg-bg-0 font-mono text-[11px] text-accent">
                  {row.dotLabel}
                </span>
              ) : (
                <span
                  className={cn(
                    'relative z-10 rounded-full bg-accent',
                    row.kind === 'gate'
                      ? 'h-3 w-3 shadow-[0_0_16px_rgba(104,216,255,0.95)]'
                      : 'h-2.5 w-2.5 shadow-[0_0_8px_rgba(104,216,255,0.7)]',
                  )}
                />
              )}
            </div>

            {/* panel */}
            {row.kind === 'io' ? (
              <div className="font-mono text-[12.5px] text-muted">{row.desc}</div>
            ) : (
              <div
                className={cn(
                  'rounded-[5px] border p-4',
                  row.kind === 'gate'
                    ? 'border-line-strong bg-[linear-gradient(180deg,rgba(22,169,214,0.07),var(--color-bg-2))]'
                    : 'border-line bg-bg-2',
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[11.5px] tracking-[0.14em] text-muted">
                    {row.name?.toUpperCase()} &nbsp;·&nbsp;{' '}
                    <span className="text-accent">{row.verb?.toUpperCase()}</span>
                  </div>
                  {row.kind === 'gate' ? (
                    <div className="flex items-center gap-2 font-mono text-[10.5px]">
                      <span className="text-accent">✓ ALLOW</span>
                      <span className="text-muted/60">/ ✗ DENY</span>
                    </div>
                  ) : null}
                </div>
                <p className="mt-1.5 text-[13.5px] text-body">{row.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
