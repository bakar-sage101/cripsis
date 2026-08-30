import { Container } from '@/components/layout/Container';

/** The closing call-to-action band used across interior pages. */
export function CtaBand({
  title,
  subtitle,
  children,
  footnote,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  footnote?: React.ReactNode;
}) {
  return (
    <div className="border-t border-line bg-[linear-gradient(180deg,var(--color-bg-1),var(--color-bg-0))]">
      <Container className="py-[92px] text-center">
        <h2 className="text-[clamp(30px,5vw,40px)]">{title}</h2>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-[560px] text-[18px] text-body">{subtitle}</p>
        ) : null}
        {children ? (
          <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
        ) : null}
        {footnote ? (
          <div className="mt-6 font-mono text-[13px] text-muted">{footnote}</div>
        ) : null}
      </Container>
    </div>
  );
}
