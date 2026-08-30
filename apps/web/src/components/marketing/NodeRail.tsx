import { cn } from '@/lib/cn';

export type RailNode = { label: string; sub: string; active?: boolean };

/** The animated value-claim rail: labelled nodes on a glowing line with a
 *  traveling light. Collapses to a grid on smaller screens. */
export function NodeRail({ nodes }: { nodes: RailNode[] }) {
  return (
    <div className="relative">
      {/* the horizontal line + traveling light (desktop only) */}
      <div
        className="rail-travel absolute left-[10%] right-[10%] top-[58px] hidden h-px bg-[linear-gradient(90deg,rgba(104,216,255,0),rgba(104,216,255,0.4)_7%,rgba(104,216,255,0.4)_93%,rgba(104,216,255,0))] shadow-[0_0_9px_rgba(104,216,255,0.16)] lg:block"
        aria-hidden
      />
      <div className="relative z-[2] grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
        {nodes.map((node) => (
          <div key={node.label} className="group flex flex-col items-center text-center">
            <div className="flex min-h-[22px] items-end justify-center font-mono text-[11px] uppercase leading-none tracking-[0.1em] text-accent">
              {node.label}
            </div>
            <div
              className={cn(
                'relative mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(104,216,255,0.5)] bg-[radial-gradient(circle_at_50%_40%,rgba(104,216,255,0.13),rgba(4,11,16,0.9))] shadow-[0_0_12px_rgba(104,216,255,0.13)] transition-[box-shadow,transform] duration-[250ms] group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(104,216,255,0.4)]',
                node.active && 'halo shadow-[0_0_18px_rgba(104,216,255,0.3)]',
              )}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(104,216,255,0.8)] transition-[box-shadow] duration-[250ms] group-hover:shadow-[0_0_14px_rgba(104,216,255,1)]" />
            </div>
            <div className="mt-[18px] font-mono text-[10.5px] uppercase leading-none tracking-[0.08em] text-muted">
              {node.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
