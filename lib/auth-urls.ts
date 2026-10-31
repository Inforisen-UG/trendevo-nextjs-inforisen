import { DEFAULT_API_DOCS_URL } from '@/lib/api-docs-url';
import { getSiteUrl } from '@/lib/site-url';

const perfectAppBaseUrl =
  process.env.NEXT_PUBLIC_PERFECT_APP_URL?.replace(/\/$/, '') ||
  'https://my.trendevo.com';

function getPublicApiDocsUrl() {
  const siteUrl = getSiteUrl();
  if (siteUrl.includes('localhost') || siteUrl.includes('127.0.0.1')) {
    return DEFAULT_API_DOCS_URL;
  }

  return `${siteUrl}/api`;
}

export const signInUrl = perfectAppBaseUrl;
export const signUpUrl = `${perfectAppBaseUrl}/signup`;
/** Reseller / developer API documentation (marketing site). */
export const resellerApiUrl = getPublicApiDocsUrl();
export const apiCredentialsUrl = perfectAppBaseUrl
  ? `${perfectAppBaseUrl}/account`
  : signInUrl;
