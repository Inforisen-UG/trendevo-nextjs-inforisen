'use client';

import { FileText, ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { AiProviderIcon } from '@/components/sections/ai-provider-icons';
import {
  buildAiSummaryPrompt,
  getAiProviders,
  isBlogPostPath,
  LLMS_PATH,
  MARKDOWN_PATH,
} from '@/lib/ai-resources';

const providerButtonClassName =
  'inline-flex h-10 min-w-0 items-center justify-center gap-2 rounded-[10px] border border-[#d181ff] bg-white/70 px-3 text-xs font-semibold text-[#13203b] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f2acd] dark:border-[#CB7EF7] dark:bg-white/10 dark:text-white dark:hover:bg-white/15';

const docLinkClassName =
  'inline-flex items-center gap-2 rounded-md text-xs font-semibold text-[#13203b] transition-colors hover:text-[#8f2acd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f2acd] dark:text-[#ebecef] dark:hover:text-[#eac8ff]';

export default function AiResourcesSection() {
  const pathname = usePathname() ?? '/';

  if (isBlogPostPath(pathname)) {
    return null;
  }

  const isHome = pathname === '/';
  const providers = getAiProviders(buildAiSummaryPrompt(pathname));

  return (
    <section aria-label="AI resources" className="mt-2 mb-1">
      <div className="container">
        <div className="rounded-2xl border border-[#d99aff]/50 bg-white px-4 py-4 sm:rounded-3xl sm:px-6 sm:py-5 dark:border-white/20 dark:bg-[rgba(255,255,255,0.06)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <p className="text-xs font-semibold text-[#4f586d] dark:text-[#eac8ff]">
                Summarize with AI
              </p>
              <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:flex sm:flex-wrap">
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
            </div>

            <div className="flex flex-col items-center gap-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-x-6">
              {isHome ? (
                <a
                  href={MARKDOWN_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={docLinkClassName}
                >
                  <FileText className="size-4 shrink-0" aria-hidden />
                  Read as Markdown
                </a>
              ) : null}
              <a
                href={LLMS_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className={docLinkClassName}
              >
                Agents, use LLMs.txt
                <ArrowUpRight className="size-4 shrink-0" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
