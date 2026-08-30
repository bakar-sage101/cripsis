/** A chapter opener: `NN —— TITLE`. Gives the scroll a sense of progression and
 *  re-anchors focus at the top of each act. */
export function ChapterMark({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[13px] font-medium tracking-[0.18em] text-accent">
        {n}
      </span>
      <span className="h-px w-10 bg-line-strong" />
      <span className="font-mono text-[12.5px] uppercase tracking-[0.22em] text-muted">
        {title}
      </span>
    </div>
  );
}
