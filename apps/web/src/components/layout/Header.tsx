'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { primaryNav, partnerCta } from '@/content/nav';
import { cn } from '@/lib/cn';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* announcement banner */}
      <div className="border-b border-line bg-bg-1">
        <Container className="flex h-10 flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-center">
          <span className="font-mono text-[12.5px] text-muted">
            <span className="text-accent">{'//'}</span> now selecting founding design partners
          </span>
          <Link
            href={partnerCta.href}
            className="font-mono text-[12.5px] text-accent hover:text-accent"
          >
            Start with one workflow →
          </Link>
        </Container>
      </div>

      {/* nav */}
      <div className="border-b border-line bg-[rgba(2,6,8,0.9)] backdrop-blur-md">
        <Container className="flex h-[66px] items-center justify-between">
          <Link
            href="/"
            className="font-display text-[19px] font-semibold tracking-[0.14em] text-heading hover:text-heading"
          >
            CRIPSIS
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-[30px] md:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[13px] text-muted hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Button href={partnerCta.href}>{partnerCta.label}</Button>
          </nav>

          {/* mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-line text-accent md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-[5px]">
              <span
                className={cn(
                  'block h-px w-5 bg-accent transition-transform',
                  open && 'translate-y-[6px] rotate-45',
                )}
              />
              <span className={cn('block h-px w-5 bg-accent transition-opacity', open && 'opacity-0')} />
              <span
                className={cn(
                  'block h-px w-5 bg-accent transition-transform',
                  open && '-translate-y-[6px] -rotate-45',
                )}
              />
            </div>
          </button>
        </Container>

        {/* mobile menu panel */}
        {open ? (
          <div className="border-t border-line bg-bg-1 md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 font-mono text-sm text-muted hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href={partnerCta.href}
                className="mt-2 justify-center"
              >
                {partnerCta.label}
              </Button>
            </Container>
          </div>
        ) : null}
      </div>
    </header>
  );
}
