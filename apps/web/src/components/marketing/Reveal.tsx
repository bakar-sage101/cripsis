'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

/** Reveals its children on first scroll into view: a subtle fade + rise.
 *  Honors prefers-reduced-motion (shows immediately, no transform). */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  /** stagger in ms */
  delay?: number;
  className?: string;
  as?: 'div' | 'section';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLElement>}
      style={shown ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
