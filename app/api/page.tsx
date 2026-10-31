import type { Metadata } from 'next';
import { data } from '@/app/api/page-data';
import ApiDocsSection from '@/app/api/_components/api-docs-section';
import JsonLdScript from '@/components/seo/json-ld-script';
import { getApiV2Url } from '@/lib/api-docs-url';
import { absoluteUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  alternates: {
    canonical: data.seo.canonical,
  },
};

export default function ApiDocsPage() {
  const apiUrl = getApiV2Url();

  return (
    <>
      <JsonLdScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: data.seo.title,
          description: data.seo.description,
          url: absoluteUrl('/api'),
        }}
      />
      <ApiDocsSection apiUrl={apiUrl} />
    </>
  );
}
