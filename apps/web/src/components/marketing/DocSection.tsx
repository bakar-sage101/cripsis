import { Section } from '@/components/marketing/Section';
import { cn } from '@/lib/cn';

/** A "technical document" section: a bracketed `[ LABEL ]` margin marker on the
 *  left (sticky as you scroll it) with the content on the right, on the framed
 *  blueprint grid. */
export function DocSection({
  label,
  id,
  tone = 'bg-0',
  signal = false,
  children,
}: {
  label: string;
  id?: string;
  tone?: 'bg-0' | 'bg-1';
  signal?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Section id={id} tone={tone} signal={signal} className={cn('scroll-mt-[140px]')}>
      <div className="grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-12">
        <div className="self-start lg:sticky lg:top-[124px]">
          <span className="font-mono text-[13px] uppercase tracking-[0.22em] text-accent">
            [ {label} ]
          </span>
        </div>
        <div>{children}</div>
      </div>
    </Section>
  );
}
