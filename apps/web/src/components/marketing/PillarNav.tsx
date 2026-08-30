'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/cn';

/** Sticky scroll-spy nav for the platform pillars. Highlights the pillar in view
 *  and jumps to it. Sits just under the site header. */
export function PillarNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    for (const it of items) {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[104px] z-30 border-b border-line bg-[rgba(2,6,8,0.85)] backdrop-blur-md">
      <Container className="flex gap-x-6 gap-y-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((it, i) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={cn(
              'flex items-center gap-2 whitespace-nowrap font-mono text-[12px] transition-colors',
              active === it.id ? 'text-accent' : 'text-muted hover:text-body',
            )}
          >
            <span className={active === it.id ? 'text-accent' : 'text-accent-dim'}>
              {String(i + 1).padStart(2, '0')}
            </span>
            {it.label}
          </a>
        ))}
      </Container>
    </div>
  );
}
