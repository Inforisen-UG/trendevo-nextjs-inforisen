import type { BlogDetail } from '@/lib/blogs';
import type { FaqItem } from '@/components/sections/faq-section';
import { absoluteUrl, getSiteUrl } from '@/lib/site-url';

export type JsonLd = Record<string, unknown>;

/** TrendEvo org fields from real site/footer data only — no invented ratings. */
export function buildOrganizationSchema(): JsonLd {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TrendEvo',
    url: siteUrl,
    logo: absoluteUrl('/images/icons/site-logo.png'),
    email: 'info@trendevo.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
      streetAddress: 'Dhanmondi, Road 7A',
    },
  };
}

/** WebSite schema for the marketing homepage. No SearchAction (no site search). */
export function buildWebSiteSchema(): JsonLd {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TrendEvo',
    url: siteUrl,
    description:
      'TrendEvo is a trusted SMM Panel Bangladesh platform for Facebook, Instagram, YouTube, TikTok, and more. Pay easily with bKash, Nagad, or Rocket.',
    publisher: {
      '@type': 'Organization',
      name: 'TrendEvo',
      url: siteUrl,
    },
  };
}

export function buildBlogPostingSchema(blog: BlogDetail): JsonLd {
  const siteUrl = getSiteUrl();
  const pageUrl =
    blog.seo.canonicalUrl?.trim() || absoluteUrl(`/blog/${blog.slug}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.seo.metaTitle || blog.title,
    description: blog.seo.metaDescription || blog.summary,
    image: blog.seo.ogImage || blog.coverImage || undefined,
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    author: {
      '@type': 'Person',
      name: blog.author.name,
      url: absoluteUrl(`/author/${blog.author.slug}`),
      jobTitle: blog.author.designation || undefined,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TrendEvo',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/icons/site-logo.png'),
      },
    },
    articleSection: blog.category.name || undefined,
    inLanguage: blog.seo.ogLocale?.replace('_', '-') || 'en',
  };
}

export function buildServiceProvider(): JsonLd {
  return {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: getSiteUrl(),
  };
}

export function buildFaqPageSchema(items: FaqItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.replace(/lnk<[^|>]+\|([^>]+)>/g, '$1').replace(/gt<([^>]+)>/g, '$1'),
      },
    })),
    url: absoluteUrl('/faq'),
  };
}

type HowToStep = {
  title: string;
  description: string;
};

export function buildHowToSchema(
  steps: Array<{ title: unknown; description: string }>,
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How TrendEvo Works',
    description:
      'Learn how TrendEvo works. Create an account, add funds, choose an SMM service, place your order, and track delivery from one simple dashboard.',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: typeof step.title === 'string' ? step.title : `Step ${index + 1}`,
      text: step.description,
    })),
    url: absoluteUrl('/how-it-works'),
  };
}
