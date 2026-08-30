import { cn } from '@/lib/cn';

/** A small monospace technical annotation — coordinate tags, path labels,
 *  bracketed captions. Part of the "system voice" layer. */
export function TechTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'font-mono text-[11px] uppercase tracking-[0.16em] text-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}
