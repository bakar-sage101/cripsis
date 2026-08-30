import { Container } from '@/components/layout/Container';
import { Blueprint } from '@/components/marketing/Blueprint';
import { SignalField } from '@/components/marketing/SignalField';
import { cn } from '@/lib/cn';

type Tone = 'bg-0' | 'bg-1';

const tones: Record<Tone, string> = {
  'bg-0': 'bg-bg-0',
  'bg-1': 'bg-bg-1 border-y border-line',
};

/** A full-width section band. Carries the blueprint grid + corner crop-marks so
 *  the schematic identity runs through the whole page (not just the hero).
 *  `signal` adds a faint ambient block-field to fill larger sections. */
export function Section({
  children,
  tone = 'bg-0',
  signal = false,
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  signal?: boolean;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn('relative overflow-hidden py-[92px]', tones[tone], className)}
    >
      <Blueprint />
      {signal ? <SignalField variant="ambient" /> : null}
      <Container className={cn('relative z-10', containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
