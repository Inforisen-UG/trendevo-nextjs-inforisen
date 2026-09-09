import type { MetadataRoute } from 'next';
import { getAllBlogsForSitemap } from '@/lib/blogs';
import { absoluteUrl } from '@/lib/site-url';

/** Revalidate sitemap hourly so blog/author URLs stay reasonably fresh. */
export const revalidate = 3600;

type StaticSitemapEntry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
};

/**
 * All public App Router pages that are file-based (not CMS-driven).
 * Paths match each page's `seo.canonical` / route segment.
 */
const STATIC_ROUTES: StaticSitemapEntry[] = [
  // Core
  { path: '/', changeFrequency: 'daily', priority: 1 },
  { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/pricing', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/how-it-works', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.8 },

  // Platform SMM panels
  { path: '/facebook-smm-panel', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/instagram-smm-panel', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/youtube-smm-panel', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/tiktok-smm-panel', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/x-twitter-smm-panel', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/telegram-smm-panel', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/spotify-smm-panel', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/soundcloud-smm-panel', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/twitch-smm-panel', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/snapchat-smm-panel', changeFrequency: 'weekly', priority: 0.8 },

  // Country panels
  { path: '/smm-panel-uk', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/smm-panel-india', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/smm-panel-pakistan', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/smm-panel-indonesia', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/smm-panel-brazil', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/smm-panel-egypt', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/smm-panel-nigeria', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/smm-panel-thailand', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/smm-panel-vietnam', changeFrequency: 'weekly', priority: 0.75 },

  // Buy / subservice pages
  { path: '/buy-facebook-followers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-facebook-page-likes', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-facebook-comments', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-instagram-followers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-instagram-likes', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-instagram-views', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-instagram-comments', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-instagram-shares', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-instagram-auto-likes', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-instagram-story-views', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-youtube-subscribers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-youtube-views', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-youtube-likes', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-youtube-comments', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-tiktok-followers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-tiktok-likes', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-tiktok-views', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-x-twitter-followers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-x-twitter-likes', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-telegram-members', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-linkedin-followers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-linkedin-likes', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buy-spotify-followers', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/buy-spotify-plays', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/buy-spotify-monthly-listeners', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/buy-soundcloud-followers', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/buy-soundcloud-plays', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/buy-twitch-followers', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/buy-twitch-viewers', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/buy-snapchat-followers', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/buy-discord-members', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/buy-discord-account', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/buy-kick-followers', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/buy-kick-viewers', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/buy-reddit-upvotes', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/buy-reddit-accounts', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/buy-quora-followers', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/buy-quora-upvotes', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/buy-vimeo-followers', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/buy-threads-followers', changeFrequency: 'weekly', priority: 0.7 },

  // Legal / utility (lowest priority)
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/refund-policy', changeFrequency: 'yearly', priority: 0.3 },
];

function parseDate(iso: string): Date | undefined {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path === '/' ? '/' : route.path),
    // Omit lastModified for static TS pages — no CMS updatedAt available.
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = await getAllBlogsForSitemap();

  const blogUrls: MetadataRoute.Sitemap = blogEntries.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: parseDate(post.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.65,
  }));

  const authorLatest = new Map<string, string>();
  for (const post of blogEntries) {
    if (!post.authorSlug) continue;
    const prev = authorLatest.get(post.authorSlug);
    if (!prev || post.publishedAt > prev) {
      authorLatest.set(post.authorSlug, post.publishedAt);
    }
  }

  const authorUrls: MetadataRoute.Sitemap = [...authorLatest.entries()].map(
    ([slug, publishedAt]) => ({
      url: absoluteUrl(`/author/${slug}`),
      lastModified: parseDate(publishedAt),
      changeFrequency: 'weekly',
      priority: 0.55,
    }),
  );

  // Deduplicate by URL (defensive — static + API should not overlap)
  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of [...staticEntries, ...blogUrls, ...authorUrls]) {
    byUrl.set(entry.url, entry);
  }

  return [...byUrl.values()];
}
