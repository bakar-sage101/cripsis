import { cn } from '@/lib/cn';
import { comparison } from '@/content/pricing';

/** Renders a single comparison cell — '✓'/'–' get semantic styling. */
function Cell({ value }: { value: string }) {
  if (value === '–') return <span className="text-muted/60">–</span>;
  if (value.startsWith('✓')) return <span className="text-accent">{value}</span>;
  return <span className="text-body">{value}</span>;
}

/** The tier comparison "spec sheet" — a gapless, hairline-bordered schematic
 *  table. Horizontal-scrolls on small screens; Pro column is highlighted. */
export function SpecTable() {
  const { columns, rows, popularIndex } = comparison;
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse font-mono text-[13px]">
        <thead>
          <tr>
            <th className="border border-line bg-bg-0 p-4 text-left text-[11px] uppercase tracking-[0.14em] text-muted">
              <span className="text-accent">❯</span> spec
            </th>
            {columns.map((col, i) => (
              <th
                key={col}
                className={cn(
                  'border border-line p-4 text-center text-[12px] tracking-[0.1em]',
                  i === popularIndex
                    ? 'bg-[linear-gradient(180deg,rgba(22,169,214,0.08),var(--color-bg-1))] text-accent'
                    : 'bg-bg-0 text-heading',
                )}
              >
                {col.toUpperCase()}
                {i === popularIndex ? (
                  <span className="ml-2 rounded-[2px] bg-accent px-1.5 py-px text-[9px] text-[#04121a]">
                    POPULAR
                  </span>
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="border border-line bg-bg-1 p-4 text-left text-[12.5px] normal-case tracking-normal text-body">
                {row.label}
              </td>
              {row.values.map((v, i) => (
                <td
                  key={i}
                  className={cn(
                    'border border-line p-4 text-center',
                    i === popularIndex ? 'bg-[rgba(22,169,214,0.04)]' : 'bg-bg-2',
                  )}
                >
                  <Cell value={v} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
