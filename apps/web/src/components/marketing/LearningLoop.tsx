import { learningStages } from '@/content/platform';

/** Pillar 02 — the learning cycle as a connected horizontal flow that loops. */
export function LearningLoop() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {learningStages.map((s, i) => (
          <div
            key={s.step}
            className="relative rounded-[6px] border border-line bg-bg-2 p-5 transition-[border-color,transform] duration-[250ms] hover:-translate-y-[3px] hover:border-line-strong"
          >
            {i < learningStages.length - 1 ? (
              <span className="absolute -right-[14px] top-1/2 z-10 hidden -translate-y-1/2 font-mono text-accent-dim lg:block">
                →
              </span>
            ) : null}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {s.step}
              </span>
            </div>
            <h3 className="mt-3 text-[16px]">{s.title}</h3>
            <p className="mt-2 text-[13px] text-body">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 font-mono text-[12px] text-muted">
        <span className="text-accent">↺</span> the loop never stops — every validation
        feeds the next hypothesis
      </div>
    </div>
  );
}
