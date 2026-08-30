import { cn } from '@/lib/cn';

/**
 * Blueprint framing overlay — a faint dashed cyan grid plus corner crop-marks,
 * giving sections a precise "engineering schematic" feel.
 *
 * `dense` raises grid visibility and adds `+` intersection ticks (used on the
 * home hero). Drop into a `relative overflow-hidden` parent. Purely decorative.
 */
export function Blueprint({
  grid = true,
  corners = true,
  dense = false,
  className,
}: {
  grid?: boolean;
  corners?: boolean;
  dense?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 z-0', className)}
    >
      {grid ? (
        <svg className={cn('absolute inset-0 h-full w-full', dense ? 'opacity-100' : 'opacity-60')}>
          <defs>
            <pattern id="bp-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path
                d="M72 0 H0 V72"
                fill="none"
                style={{ stroke: 'var(--color-line)' }}
                strokeWidth={1}
                strokeDasharray="3 7"
              />
            </pattern>
            {dense ? (
              <pattern id="bp-ticks" width="72" height="72" patternUnits="userSpaceOnUse">
                <path
                  d="M36 31 V41 M31 36 H41"
                  fill="none"
                  style={{ stroke: 'var(--color-accent-dim)' }}
                  strokeWidth={1}
                />
              </pattern>
            ) : null}
          </defs>
          <rect width="100%" height="100%" fill="url(#bp-grid)" />
          {dense ? (
            <rect width="100%" height="100%" fill="url(#bp-ticks)" className="opacity-70" />
          ) : null}
        </svg>
      ) : null}

      {corners ? (
        <>
          <span className="absolute left-4 top-4 h-3.5 w-3.5 border-l border-t border-line-strong" />
          <span className="absolute right-4 top-4 h-3.5 w-3.5 border-r border-t border-line-strong" />
          <span className="absolute bottom-4 left-4 h-3.5 w-3.5 border-b border-l border-line-strong" />
          <span className="absolute bottom-4 right-4 h-3.5 w-3.5 border-b border-r border-line-strong" />
        </>
      ) : null}
    </div>
  );
}
