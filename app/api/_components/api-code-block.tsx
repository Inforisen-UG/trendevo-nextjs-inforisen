import { cn } from '@/lib/utils';

type ApiCodeBlockProps = {
  code: string;
  className?: string;
};

export default function ApiCodeBlock({ code, className }: ApiCodeBlockProps) {
  return (
    <pre
      className={cn(
        'overflow-x-auto rounded-xl border border-[#8f2acd]/20 bg-[#1a0b2e] p-4 text-xs leading-relaxed text-[#e8dff5] sm:p-5 sm:text-sm',
        'dark:border-white/10 dark:bg-[#0d0518]',
        className,
      )}
    >
      <code className="font-mono whitespace-pre">{code}</code>
    </pre>
  );
}
