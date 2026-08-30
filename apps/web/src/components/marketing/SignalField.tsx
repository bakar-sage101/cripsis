import { cn } from '@/lib/cn';

type Block = {
  top: string;
  left: string;
  w: string;
  h: string;
  bright?: boolean;
  delay?: string;
};

/** Hero block-field — denser, kept to the right/edges so hero text stays clear. */
const heroBlocks: Block[] = [
  { top: '4%', left: '62%', w: '10%', h: '9%', delay: '0s' },
  { top: '2%', left: '86%', w: '11%', h: '11%', bright: true, delay: '1.2s' },
  { top: '20%', left: '74%', w: '9%', h: '8%', delay: '2.1s' },
  { top: '34%', left: '90%', w: '7%', h: '13%', bright: true, delay: '0.6s' },
  { top: '58%', left: '64%', w: '8%', h: '9%', delay: '1.8s' },
  { top: '70%', left: '82%', w: '12%', h: '10%', bright: true, delay: '2.6s' },
  { top: '84%', left: '70%', w: '9%', h: '8%', delay: '0.9s' },
  { top: '12%', left: '4%', w: '6%', h: '7%', delay: '3.1s' },
];

/** Ambient field — sparse, edge-hugging blocks that keep section backgrounds
 *  alive without crowding centered content. */
const ambientBlocks: Block[] = [
  { top: '14%', left: '90%', w: '7%', h: '30%', delay: '0.4s' },
  { top: '58%', left: '2%', w: '5%', h: '34%', delay: '2.2s' },
  { top: '70%', left: '93%', w: '6%', h: '22%', bright: true, delay: '1.4s' },
  { top: '4%', left: '3%', w: '4%', h: '18%', delay: '3.0s' },
];

/** Decorative cyan "signal blocks" tiled on the blueprint grid. `hero` fills the
 *  hero; `ambient` keeps sections from reading as flat black. Purely decorative. */
export function SignalField({
  variant = 'hero',
  className,
}: {
  variant?: 'hero' | 'ambient';
  className?: string;
}) {
  const blocks = variant === 'hero' ? heroBlocks : ambientBlocks;
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 z-0',
        variant === 'ambient' && 'opacity-60',
        className,
      )}
    >
      {blocks.map((b, i) => (
        <span
          key={i}
          className={cn(
            'absolute rounded-[3px] border',
            b.bright
              ? 'signal-pulse border-[rgba(104,216,255,0.28)] bg-[linear-gradient(135deg,rgba(104,216,255,0.22),rgba(22,169,214,0.04))] shadow-[0_0_28px_rgba(104,216,255,0.16)]'
              : 'signal-pulse border-line bg-[linear-gradient(135deg,rgba(22,169,214,0.12),transparent)]',
          )}
          style={{
            top: b.top,
            left: b.left,
            width: b.w,
            height: b.h,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
