'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

export type TermLine = {
  prefix?: string;
  prefixTone?: 'accent' | 'dim' | 'muted';
  text?: string;
  tone?: 'body' | 'muted' | 'accent' | 'heading';
  /** extra top gap before this line */
  gap?: boolean;
};

const toneClass: Record<NonNullable<TermLine['tone']>, string> = {
  body: 'text-body',
  muted: 'text-muted',
  accent: 'text-accent',
  heading: 'text-heading',
};

const prefixToneClass: Record<NonNullable<TermLine['prefixTone']>, string> = {
  accent: 'text-accent',
  dim: 'text-accent-dim',
  muted: 'text-muted',
};

/** Streams terminal lines in one-by-one when scrolled into view, then holds with
 *  a blinking cursor. `loop` re-runs the sequence. Reduced-motion shows all lines
 *  at once. Container (CRT / window chrome) is supplied by the caller. */
export function LiveTerminal({
  lines,
  loop = false,
  lineDelay = 340,
  startDelay = 250,
  className,
}: {
  lines: TermLine[];
  loop?: boolean;
  lineDelay?: number;
  startDelay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setCount(lines.length);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setStarted(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [lines.length]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < lines.length) {
        timer = setTimeout(tick, lineDelay);
      } else if (loop) {
        timer = setTimeout(() => {
          i = 0;
          setCount(0);
          timer = setTimeout(tick, lineDelay);
        }, 3400);
      }
    };
    timer = setTimeout(tick, startDelay);
    return () => clearTimeout(timer);
  }, [started, lines, loop, lineDelay, startDelay]);

  return (
    <div ref={ref} className={cn('font-mono', className)}>
      {lines.slice(0, count).map((ln, idx) => (
        <div key={idx} className={cn(toneClass[ln.tone ?? 'body'], ln.gap && 'mt-2')}>
          {ln.prefix ? (
            <span className={prefixToneClass[ln.prefixTone ?? 'accent']}>
              {ln.prefix}{' '}
            </span>
          ) : null}
          {ln.text}
          {idx === count - 1 ? <span className="blink">▍</span> : null}
        </div>
      ))}
    </div>
  );
}
