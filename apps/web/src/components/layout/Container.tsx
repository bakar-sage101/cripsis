import { cn } from '@/lib/cn';

/** The `.wrap` container from the designs: centered, max 1180px, responsive gutter. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1180px] px-6 sm:px-12', className)}>
      {children}
    </div>
  );
}
