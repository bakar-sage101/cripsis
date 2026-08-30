import { cn } from '@/lib/cn';

/** Terminal-style card with a header strip, used for "agent inquiry" and
 *  "practice" panels. */
export function DemoCard({
  label,
  labelBracketed = false,
  children,
  className,
}: {
  label: string;
  /** render label as `[ LABEL ]` with no leading dot */
  labelBracketed?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'crt-flicker overflow-hidden rounded-[5px] border border-line bg-bg-2 font-mono',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center gap-[7px] border-b border-line bg-bg-0 px-4 py-3',
          labelBracketed && 'justify-start',
        )}
      >
        {labelBracketed ? (
          <span className="text-[11px] tracking-[0.16em] text-muted">
            [ {label.toUpperCase()} ]
          </span>
        ) : (
          <>
            <span className="h-[9px] w-[9px] rounded-full bg-accent" />
            <span className="ml-1 text-[11.5px] text-muted">{label}</span>
          </>
        )}
      </div>
      <div className="px-5 py-[18px]">{children}</div>
    </div>
  );
}
