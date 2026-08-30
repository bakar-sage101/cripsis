import { Container } from '@/components/layout/Container';
import { Blueprint } from '@/components/marketing/Blueprint';

/** A full-bleed editorial statement — a visual palette-cleanser between dense
 *  sections. */
export function PullQuote({
  kicker,
  children,
}: {
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-y border-line bg-bg-1">
      <Blueprint corners={false} />
      <Container className="relative z-10 py-24 text-center sm:py-28">
        {kicker ? (
          <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
            {kicker}
          </div>
        ) : null}
        <p className="mx-auto mt-6 max-w-[900px] font-display text-[clamp(28px,5vw,48px)] font-semibold leading-[1.1] tracking-[-0.02em] text-heading">
          {children}
        </p>
      </Container>
    </div>
  );
}
