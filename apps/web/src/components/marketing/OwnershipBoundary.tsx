import { ownedAssets } from '@/content/about';

/** The doctrine made visual — a sealed "your walls" enclosure holding the
 *  intelligence assets, with the surrendered-to-a-vendor path crossed out. */
export function OwnershipBoundary() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="rounded-[8px] border border-line-strong bg-[linear-gradient(180deg,rgba(22,169,214,0.06),rgba(7,19,26,0.7))] p-5 shadow-[0_0_40px_rgba(104,216,255,0.06)] backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            your environment · your walls
          </span>
          <span className="signal-pulse font-mono text-[11px] text-muted">◈ sealed</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {ownedAssets.map((a) => (
            <div key={a.tag} className="rounded-[4px] border border-line bg-bg-0 px-3 py-2.5">
              <div className="font-mono text-[11px] text-accent">{a.tag}</div>
              <div className="mt-0.5 text-[12px] text-body">{a.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 border-t border-line pt-3 font-mono text-[11.5px] text-body">
          <span className="text-accent">✗</span> intelligence never leaves these walls
        </div>
      </div>

      {/* the default path, crossed out */}
      <div className="mt-3 flex items-center gap-2 pl-1 font-mono text-[11px] text-muted/70">
        <span className="text-accent-dim">→</span>
        <span className="line-through decoration-[rgba(104,216,255,0.4)]">
          uploaded to a shared vendor model
        </span>
      </div>
    </div>
  );
}
