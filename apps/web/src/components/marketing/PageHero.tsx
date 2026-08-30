import { Container } from '@/components/layout/Container';
import { Kicker } from '@/components/ui/Kicker';
import { TechTag } from '@/components/ui/TechTag';
import { Blueprint } from '@/components/marketing/Blueprint';
import { SignalField } from '@/components/marketing/SignalField';
import { cn } from '@/lib/cn';

/** Interior-page hero: blueprint frame + optional path tag + kicker + title +
 *  optional subtitle. `align` centers it; `scanlines` adds the CRT overlay;
 *  `children` slots extra content (buttons, chip strips) below the copy. */
export function PageHero({
  kicker,
  title,
  subtitle,
  tag,
  align = 'left',
  scanlines = false,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  tag?: string;
  align?: 'left' | 'center';
  scanlines?: boolean;
  children?: React.ReactNode;
}) {
  const centered = align === 'center';
  return (
    <div className="relative overflow-hidden border-b border-line bg-[radial-gradient(1100px_500px_at_18%_-8%,rgba(22,169,214,0.11),transparent_60%)]">
      <Blueprint dense />
      <SignalField />
      {scanlines ? (
        <div className="scanlines pointer-events-none absolute inset-0 z-0" aria-hidden />
      ) : null}
      <Container className={cn('relative z-10 py-20 sm:py-24', centered && 'text-center')}>
        {tag ? (
          <TechTag className={cn('mb-5 block', centered && 'text-center')}>{tag}</TechTag>
        ) : null}
        <Kicker className={centered ? 'text-center' : undefined}>{kicker}</Kicker>
        <h1 className="mt-5 max-w-[880px] text-[clamp(38px,7vw,64px)] font-bold tracking-[-0.03em]">
          {centered ? <span className="mx-auto block">{title}</span> : title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              'mt-6 max-w-[720px] text-[18px] text-body',
              centered && 'mx-auto',
            )}
          >
            {subtitle}
          </p>
        ) : null}
        {children}
      </Container>
    </div>
  );
}
