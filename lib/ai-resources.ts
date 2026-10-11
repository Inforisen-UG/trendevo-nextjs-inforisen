import { getSiteUrl } from '@/lib/site-url';

/**
 * Public origin used in AI prompts and agent documents.
 * Local env points NEXT_PUBLIC_SITE_URL at localhost; page copy already
 * publishes the marketing site at https://trendevo.com.
 */
const LOCAL_ORIGIN = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i;
const PUBLISHED_SITE_ORIGIN = 'https://trendevo.com';

export const MARKDOWN_PATH = '/index.md';
export const LLMS_PATH = '/llms.txt';

export function getAiResourceOrigin(): string {
  const configured = getSiteUrl();
  if (LOCAL_ORIGIN.test(configured)) {
    return PUBLISHED_SITE_ORIGIN;
  }
  return configured;
}

export function buildSummarizePrompt(origin = getAiResourceOrigin()): string {
  const pageUrl = origin;
  const markdownUrl = `${origin}${MARKDOWN_PATH}`;
  const llmsUrl = `${origin}${LLMS_PATH}`;

  return `Summarize this TrendEvo page for me: ${pageUrl}. Read ${markdownUrl} for the page in Markdown, and use ${llmsUrl} for accurate service details, then help me evaluate whether TrendEvo fits what I need.`;
}

export type AiProvider = {
  id: string;
  label: string;
  href: string;
};

export function getAiProviders(prompt = buildSummarizePrompt()): AiProvider[] {
  const query = encodeURIComponent(prompt);

  return [
    {
      id: 'claude',
      label: 'Claude',
      href: `https://claude.ai/new?q=${query}`,
    },
    {
      id: 'chatgpt',
      label: 'ChatGPT',
      href: `https://chatgpt.com/?q=${query}`,
    },
    {
      id: 'gemini',
      label: 'Gemini',
      href: `https://www.google.com/search?udm=50&q=${query}`,
    },
    {
      id: 'grok',
      label: 'Grok',
      href: `https://grok.com/?q=${query}`,
    },
    {
      id: 'copilot',
      label: 'Copilot',
      href: `https://copilot.microsoft.com/?q=${query}`,
    },
    {
      id: 'perplexity',
      label: 'Perplexity',
      href: `https://www.perplexity.ai/search?q=${query}`,
    },
  ];
}
