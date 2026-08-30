import Link from 'next/link';
import { Container } from './Container';
import { footerColumns } from '@/content/nav';

export function Footer() {
  return (
    <footer className="bg-bg-0">
      <Container className="pb-10 pt-14">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-[300px]">
            <div className="font-display text-[18px] font-semibold tracking-[0.14em] text-heading">
              CRIPSIS
            </div>
            <p className="mt-3 font-mono text-[12.5px] text-muted">
              The Infrastructure of Cognition
            </p>
          </div>

          <div className="flex flex-wrap gap-14">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <div className="font-mono text-[11px] tracking-[0.14em] text-muted">
                  {col.heading.toUpperCase()}
                </div>
                <div className="mt-3.5 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-mono text-[13px] text-body hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 h-px border-0 bg-line" />

        <div className="flex flex-wrap justify-between gap-3">
          <span className="font-mono text-[12px] text-muted">
            <span className="text-accent">●</span> system: nominal
          </span>
          <span className="font-mono text-[12px] text-muted">
            © Cripsis, Inc. — The Infrastructure of Cognition
          </span>
        </div>
      </Container>
    </footer>
  );
}
