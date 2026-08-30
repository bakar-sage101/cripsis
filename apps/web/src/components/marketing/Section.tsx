import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/cn';

type Tone = 'bg-0' | 'bg-1';

const tones: Record<Tone, string> = {
  'bg-0': 'bg-bg-0',
  'bg-1': 'bg-bg-1 border-y border-line',
};

/** A full-width section band with a centered container, matching the design's
 *  alternating bg-0 / bg-1 rhythm. */
export function Section({
  children,
  tone = 'bg-0',
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('py-[92px]', tones[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
