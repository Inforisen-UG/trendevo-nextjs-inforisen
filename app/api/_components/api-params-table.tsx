import { cn } from '@/lib/utils';
import type { ApiParamRow } from '@/app/api/api-docs-content';

type ApiParamsTableProps = {
  rows: ApiParamRow[];
  className?: string;
};

export default function ApiParamsTable({ rows, className }: ApiParamsTableProps) {
  return (
    <div
      className={cn(
        'overflow-x-auto rounded-xl border border-[#e6e6e6] dark:border-white/15',
        className,
      )}
    >
      <table className="w-full min-w-[280px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[#e6e6e6] bg-[#f9f4ff] dark:border-white/10 dark:bg-white/5">
            <th
              scope="col"
              className="px-4 py-3 font-semibold text-[#8f2acd] dark:text-[#d4a8ff]"
            >
              Parameters
            </th>
            <th
              scope="col"
              className="px-4 py-3 font-semibold text-[#8f2acd] dark:text-[#d4a8ff]"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className="border-b border-[#eee] last:border-b-0 dark:border-white/10"
            >
              <td className="px-4 py-3 align-top font-mono text-xs font-medium text-[#232323] sm:text-sm dark:text-white">
                {row.name}
              </td>
              <td className="px-4 py-3 align-top text-sm font-medium text-[#535353] dark:text-[#c1c4cc]">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
