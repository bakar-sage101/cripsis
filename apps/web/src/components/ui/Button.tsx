import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'ghost';

const base =
  'inline-flex items-center gap-2 rounded-[2px] font-mono text-[13.5px] px-[22px] py-[13px] transition-[filter,box-shadow,transform,border-color,color] duration-200 hover:-translate-y-px';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-[#04121a] font-semibold border border-accent hover:brightness-105 hover:shadow-[0_0_22px_rgba(104,216,255,0.45)]',
  ghost:
    'bg-transparent text-heading border border-line-strong hover:border-accent hover:text-accent hover:shadow-[0_0_16px_rgba(104,216,255,0.12)]',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
