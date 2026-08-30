import { cn } from '@/lib/cn';

const layers = [
  { name: 'CripsisAI', verb: 'Thinks', role: 'reasons · recommends' },
  { name: 'Kybernite', verb: 'Knows', role: 'evidence · provenance' },
  { name: 'Trilithium', verb: 'Allows', role: 'policy · receipts', gate: true },
];

/** Compact hero schematic — the three planes as stacked slabs with a data path
 *  running down to the Trilithium gate. Decorative + informative. */
export function PlaneStack() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* spine */}
      <div className="absolute bottom-6 left-[26px] top-6 w-px bg-[linear-gradient(180deg,rgba(104,216,255,0),rgba(104,216,255,0.45)_12%,rgba(104,216,255,0.45)_88%,rgba(104,216,255,0))]">
        <span className="travel-y absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_10px_rgba(104,216,255,0.9)]" />
      </div>

      <div className="flex flex-col gap-4">
        {layers.map((l) => (
          <div key={l.name} className="grid grid-cols-[52px_1fr] items-center gap-1">
            <div className="flex justify-center">
              <span
                className={cn(
                  'relative z-10 rounded-full bg-accent',
                  l.gate
                    ? 'h-3 w-3 shadow-[0_0_16px_rgba(104,216,255,0.95)]'
                    : 'h-2.5 w-2.5 shadow-[0_0_8px_rgba(104,216,255,0.7)]',
                )}
              />
            </div>
            <div
              className={cn(
                'rounded-[6px] border px-5 py-4 backdrop-blur-sm',
                l.gate
                  ? 'border-line-strong bg-[linear-gradient(180deg,rgba(22,169,214,0.10),rgba(7,19,26,0.6))]'
                  : 'border-line bg-[rgba(7,19,26,0.6)]',
              )}
            >
              <div className="flex items-center justify-between">
                <div className="font-display text-[16px] font-semibold text-heading">
                  {l.name}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {l.verb}
                </div>
              </div>
              <div className="mt-1 font-mono text-[11.5px] text-muted">{l.role}</div>
              {l.gate ? (
                <div className="mt-2 flex items-center gap-2 font-mono text-[10.5px]">
                  <span className="text-accent">✓ allow</span>
                  <span className="text-muted/60">/ ✗ deny</span>
                  <span className="text-muted/60">→ receipt</span>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
