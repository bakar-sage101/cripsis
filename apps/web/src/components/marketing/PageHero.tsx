import { Container } from '@/components/layout/Container';
import { Kicker } from '@/components/ui/Kicker';
import { cn } from '@/lib/cn';

/** Interior-page hero: kicker + title + optional subtitle, on the brand radial
 *  glow. `align` centers it; `scanlines` adds the faint CRT overlay; `children`
 *  slots extra content (buttons, chip strips) below the copy. */
export function PageHero({
  kicker,
  title,
  subtitle,
  align = 'left',
  scanlines = false,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  scanlines?: boolean;
  children?: React.ReactNode;
}) {
  const centered = align === 'center';
  return (
    <div className="relative overflow-hidden border-b border-line bg-[radial-gradient(1100px_500px_at_18%_-8%,rgba(22,169,214,0.11),transparent_60%)]">
      {scanlines ? (
        <div className="scanlines pointer-events-none absolute inset-0" aria-hidden />
      ) : null}
      <Container className={cn('relative py-20 sm:py-24', centered && 'text-center')}>
        <Kicker className={centered ? 'text-center' : undefined}>{kicker}</Kicker>
        <h1 className="mt-5 max-w-[860px] text-[clamp(34px,6vw,56px)]">
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
