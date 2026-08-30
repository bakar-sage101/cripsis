import { cn } from '@/lib/cn';

/** The mono "// eyebrow" label above section headings. Uses a non-breaking
 *  space so the gap survives flex/centered contexts. */
export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('font-mono text-[13.5px] tracking-[0.06em] text-muted', className)}>
      <span className="text-accent">{'//'}</span>
      {' '}
      {children}
    </div>
  );
}
