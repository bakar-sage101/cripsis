'use client';

import { useEffect, useState } from 'react';

/** A thin cyan progress bar pinned to the very top — a quiet momentum cue that
 *  shows how far through the story the reader is. */
export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px]" aria-hidden>
      <div
        className="h-full bg-accent shadow-[0_0_8px_rgba(104,216,255,0.7)]"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
