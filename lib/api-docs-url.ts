import { getSiteUrl } from '@/lib/site-url';

/** Live public API docs page (marketing site). */
export const DEFAULT_API_DOCS_URL = 'https://trendevo.com/api';

/** Live public POST endpoint shown on the API docs page. */
export const DEFAULT_API_V2_URL = 'https://trendevo.com/api/v2';

/** Public POST endpoint for SMM panel API v2. */
export function getApiV2Url(): string {
  const configured = process.env.NEXT_PUBLIC_API_V2_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, '');
  }

  const siteUrl = getSiteUrl();
  if (siteUrl.includes('localhost') || siteUrl.includes('127.0.0.1')) {
    return DEFAULT_API_V2_URL;
  }

  return `${siteUrl.replace(/\/$/, '')}/api/v2`;
}

/** Canonical marketing URL for this documentation page. */
export function getApiDocsPageUrl(): string {
  const siteUrl = getSiteUrl();
  if (siteUrl.includes('localhost') || siteUrl.includes('127.0.0.1')) {
    return DEFAULT_API_DOCS_URL;
  }

  return `${siteUrl.replace(/\/$/, '')}/api`;
}
