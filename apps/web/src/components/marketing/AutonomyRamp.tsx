import { delegationStages } from '@/content/platform';

/** Pillar 05 — the autonomy ramp: three staged panels rising left → right, so
 *  "assistance before autonomy" reads visually. */
export function AutonomyRamp() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-end">
        {delegationStages.map((s, i) => (
          <div
            key={s.from}
            className="rounded-[6px] border border-line bg-[linear-gradient(180deg,rgba(22,169,214,0.05),var(--color-bg-2))] p-5"
            style={{ minHeight: `${168 + i * 40}px` }}
          >
            <div className="font-mono text-[11px] tracking-[0.14em] text-muted">
              STAGE {String(i + 1).padStart(2, '0')}
            </div>
            <div className="mt-3 font-mono text-[15px] text-accent">
              {s.from} <span className="text-accent-dim">→</span> {s.to}
            </div>
            <p className="mt-3 text-[13.5px] text-body">{s.body}</p>
          </div>
        ))}
      </div>
      {/* rising baseline */}
      <div className="mt-4 flex items-center justify-between font-mono text-[11.5px] text-muted">
        <span>
          <span className="text-accent">└</span> assistance
        </span>
        <span className="mx-3 h-px flex-1 bg-[linear-gradient(90deg,rgba(104,216,255,0.15),rgba(104,216,255,0.5))]" />
        <span>
          autonomy <span className="text-accent">┘</span>
        </span>
      </div>
      <p className="mt-3 font-mono text-[12px] text-muted">
        assistance before autonomy — the control substrate decides at every step.
      </p>
    </div>
  );
}
