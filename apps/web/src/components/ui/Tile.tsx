import { cn } from '@/lib/cn';

const cardBase =
  'rounded-[4px] border border-line bg-bg-2 p-6 transition-[border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-[3px] hover:border-line-strong hover:shadow-[0_10px_30px_rgba(2,6,8,0.55),0_0_22px_rgba(104,216,255,0.07)]';

/** A feature card.
 *  - `num`   : optional mono index shown at the top ("01").
 *  - `title` : optional heading.
 *  - `body`  : optional paragraph text (rendered in a styled <p>).
 *  - `children` : optional custom content, rendered as-is (no <p> wrapper). */
export function Tile({
  num,
  title,
  body,
  children,
  className,
}: {
  num?: string;
  title?: string;
  body?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(cardBase, className)}>
      {num ? (
        <div className="font-mono text-[13px] tracking-[0.14em] text-muted">{num}</div>
      ) : null}
      {title ? <h3 className="mt-3.5 text-[19px] text-heading">{title}</h3> : null}
      {body ? <p className="mt-2.5 text-[14.5px] text-body">{body}</p> : null}
      {children}
    </div>
  );
}
