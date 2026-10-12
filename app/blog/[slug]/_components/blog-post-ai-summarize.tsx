'use client';

import { usePathname } from 'next/navigation';

import { AiProviderIcon, GoogleMarkIcon } from '@/components/sections/ai-provider-icons';
import {
  buildAiSummaryPrompt,
  getAiProviders,
  getGooglePreferredSourceUrl,
} from '@/lib/ai-resources';

const providerButtonClassName =
  'inline-flex h-10 min-w-0 items-center justify-center gap-2 rounded-[10px] border border-gray-300 bg-white px-3 text-xs font-semibold text-[#13203b] transition-colors hover:border-[#8f2acd] hover:text-[#8f2acd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f2acd] dark:border-white/25 dark:bg-white/10 dark:text-white dark:hover:border-[#eac8ff] dark:hover:text-[#eac8ff]';

type BlogPostAiSummarizeProps = {
  pageTitle: string;
};

export default function BlogPostAiSummarize({
  pageTitle,
}: BlogPostAiSummarizeProps) {
  const pathname = usePathname() ?? '/';
  const providers = getAiProviders(
    buildAiSummaryPrompt(pathname, { pageTitle }),
  );

  return (
    <section
      aria-label="Summarize with AI"
      className="flex flex-col gap-4 border-t border-[#d99aff]/25 pt-6 dark:border-white/15"
    >
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xs font-semibold tracking-wide text-[#4f586d] uppercase dark:text-[#ebecef]">
          Summarize with AI
        </p>
        {providers.map((provider) => (
          <a
            key={provider.id}
            href={provider.href}
            target="_blank"
            rel="noopener noreferrer"
            className={providerButtonClassName}
          >
            <AiProviderIcon id={provider.id} />
            <span className="truncate">{provider.label}</span>
          </a>
        ))}
      </div>

      <a
        href={getGooglePreferredSourceUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 w-fit items-center gap-2.5 rounded-[10px] border border-gray-300 bg-white px-4 text-sm font-semibold text-[#13203b] transition-colors hover:border-[#8f2acd] hover:text-[#8f2acd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f2acd] dark:border-white/25 dark:bg-white/10 dark:text-white dark:hover:border-[#eac8ff] dark:hover:text-[#eac8ff]"
      >
        <GoogleMarkIcon />
        Add as Preferred Source
      </a>
    </section>
  );
}
