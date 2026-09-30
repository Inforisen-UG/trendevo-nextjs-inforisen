import { cache } from 'react';

import type { BlogPost } from '@/app/blog/_components/blog-post-card';
import { apiFetch } from '@/lib/api-fetch';

export const DEFAULT_AUTHOR_AVATAR =
  '/images/blog/blog-tiktok-marketing-complete-guide-for-businesses-avatar.webp';

export const DEFAULT_BLOG_DETAIL_AUTHOR_AVATAR =
  '/images/blog-details/blog-details-author-seam-rahman-avatar.webp';

type BlogAuthorAttributes = {
  name: string;
  slug: string;
  avatar: string | null;
  designation: string;
  bio?: string;
  socialLinks?: string[] | Record<string, string> | null;
};

type BlogCategoryAttributes = {
  name: string;
  slug: string;
};

type BlogSeoAttributes = {
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords?: string | null;
  canonicalUrl: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  ogImageAlt: string | null;
  ogType: string | null;
  ogLocale: string | null;
  ogSiteName: string | null;
};

type TableOfContentItem = {
  level: number;
  text: string;
  id: string;
};

type BlogApiItem = {
  type: string;
  id: number;
  attributes: {
    title: string;
    slug: string;
    summary: string;
    featuredImage: string;
    readingTime: number;
    publishedAt: string;
  };
  relationships: {
    author: {
      type: string;
      id: number;
      attributes: BlogAuthorAttributes;
    };
    category: {
      type: string;
      id: number;
      attributes: BlogCategoryAttributes;
    };
  };
};

type BlogDetailApiItem = {
  type: string;
  id: number;
  attributes: {
    title: string;
    coverImage: string;
    summary: string;
    htmlContent: string;
    contentEditor?: string;
    tableOfContent: TableOfContentItem[];
    editorCss?: {
      tailwind?: string;
      compiled?: string;
    };
    publishedAt: string;
  };
  relationships: {
    seo: {
      type: string;
      id: number;
      attributes: BlogSeoAttributes;
    };
    author: {
      type: string;
      id: number;
      attributes: BlogAuthorAttributes;
    };
    category: {
      type: string;
      id: number;
      attributes: BlogCategoryAttributes;
    };
  };
};

type BlogDetailApiResponse = {
  data: BlogDetailApiItem;
};

type BlogsApiResponse = {
  data: BlogApiItem[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
};

export type BlogTableOfContentLink = {
  id: string;
  label: string;
  href: string;
  level: number;
};

export type BlogShareLink = {
  label: 'Facebook' | 'Instagram' | 'X' | 'LinkedIn';
  href: string;
  iconSrc: string;
  action?: 'copy';
};

function getBlogShareUrl(slug: string, canonicalUrl: string | null): string {
  if (canonicalUrl) {
    return canonicalUrl;
  }

  // Prefer marketing site URL; panel app URL is not the public blog origin.
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    process.env.NEXT_PUBLIC_PERFECT_APP_URL?.replace(/\/$/, '') ||
    '';

  return `${siteUrl}/blog/${slug}`;
}

export function parseBlogMetaKeywords(
  metaKeywords: string | null | undefined,
): string[] {
  if (metaKeywords == null || metaKeywords === '') {
    return [];
  }

  return String(metaKeywords)
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);
}

function mapBlogSeo(
  seoAttributes: BlogSeoAttributes | undefined,
  fallback: {
    title: string;
    summary: string;
    coverImage: string;
  },
): BlogSeo {
  return {
    metaTitle: seoAttributes?.metaTitle ?? fallback.title,
    metaDescription: seoAttributes?.metaDescription ?? fallback.summary,
    metaKeywords: seoAttributes?.metaKeywords ?? '',
    canonicalUrl: seoAttributes?.canonicalUrl ?? '',
    ogTitle: seoAttributes?.ogTitle ?? fallback.title,
    ogDescription: seoAttributes?.ogDescription ?? fallback.summary,
    ogImage: seoAttributes?.ogImage ?? fallback.coverImage,
    ogImageAlt: seoAttributes?.ogImageAlt ?? fallback.title,
    ogType: seoAttributes?.ogType ?? 'article',
    ogLocale: seoAttributes?.ogLocale ?? 'en_US',
    ogSiteName: seoAttributes?.ogSiteName ?? null,
  };
}

export function buildBlogShareLinks(blog: {
  slug: string;
  title: string;
  seo: BlogSeo;
}): BlogShareLink[] {
  const shareUrl = getBlogShareUrl(blog.slug, blog.seo.canonicalUrl);
  const shareTitle = blog.seo.ogTitle || blog.title;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);

  return [
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      iconSrc: '/images/icons/blog-details-facebook-icon.webp',
    },
    {
      label: 'Instagram',
      href: shareUrl,
      iconSrc: '/images/icons/blog-details-instagram-icon.webp',
      action: 'copy',
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      iconSrc: '/images/icons/blog-details-x-icon.webp',
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      iconSrc: '/images/icons/blog-details-linkedin-icon.webp',
    },
  ];
}

export type BlogAuthorSocialLink = {
  label: string;
  href: string;
  iconSrc: string;
};

export type BlogAuthor = {
  name: string;
  slug: string;
  avatar: string;
  designation: string;
  bio: string;
  socialLinks: BlogAuthorSocialLink[];
};

export type BlogSeo = BlogSeoAttributes;

export type BlogCategory = BlogCategoryAttributes;

export type BlogContentEditor = 'richtext' | 'grapes';

export type BlogEditorCss = {
  tailwind?: string;
  compiled?: string;
};

export type BlogDetail = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  htmlContent: string;
  contentEditor: BlogContentEditor;
  editorCss: BlogEditorCss;
  tableOfContents: BlogTableOfContentLink[];
  publishedAt: string;
  postedAtLabel: string;
  author: BlogAuthor;
  category: BlogCategory;
  seo: BlogSeo;
};

export type BlogsResult = {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  latestPublishedAt: string | null;
};

export type AuthorPageResult = {
  author: BlogAuthor;
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
};

function normalizeAuthorSocialLinks(
  links: string[] | Record<string, string> | null | undefined,
): BlogAuthorSocialLink[] {
  if (!links) return [];

  const entries: Array<{ key: string; href: string }> = Array.isArray(links)
    ? links.filter(Boolean).map((href) => ({ key: href, href }))
    : Object.entries(links)
        .filter(([, href]) => Boolean(href))
        .map(([key, href]) => ({ key, href }));

  const iconByKey = [
    {
      match: /facebook|fb\.com/i,
      label: 'Facebook',
      iconSrc: '/images/icons/blog-details-facebook-icon.webp',
    },
    {
      match: /instagram/i,
      label: 'Instagram',
      iconSrc: '/images/icons/blog-details-instagram-icon.webp',
    },
    {
      match: /\bx\b|twitter/i,
      label: 'X',
      iconSrc: '/images/icons/blog-details-x-icon.webp',
    },
    {
      match: /linkedin/i,
      label: 'LinkedIn',
      iconSrc: '/images/icons/blog-details-linkedin-icon.webp',
    },
  ] as const;

  return entries.map(({ key, href }, index) => {
    const haystack = `${key} ${href}`;
    const matched = iconByKey.find((entry) => entry.match.test(haystack));

    if (matched) {
      return {
        label: matched.label,
        href,
        iconSrc: matched.iconSrc,
      };
    }

    const fallback = iconByKey[index % iconByKey.length];
    return {
      label: fallback.label,
      href,
      iconSrc: fallback.iconSrc,
    };
  });
}

function mapAuthorAttributes(
  attributes: BlogAuthorAttributes,
  bio = '',
  socialLinks?: BlogAuthorSocialLink[],
): BlogAuthor {
  return {
    name: attributes.name,
    slug: attributes.slug,
    avatar: attributes.avatar ?? DEFAULT_BLOG_DETAIL_AUTHOR_AVATAR,
    designation: attributes.designation,
    bio,
    socialLinks:
      socialLinks ?? normalizeAuthorSocialLinks(attributes.socialLinks),
  };
}

export function formatBlogLastUpdated(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

export function formatBlogPublishedAt(isoDate: string): string {
  const date = new Date(isoDate);

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function formatBlogHeroPostedAt(isoDate: string): string {
  const date = new Date(isoDate);

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

function mapBlogItemToPost(item: BlogApiItem): BlogPost {
  const { attributes, relationships } = item;

  return {
    slug: attributes.slug,
    title: attributes.title,
    excerpt: attributes.summary,
    imageSrc: attributes.featuredImage,
    authorName: relationships.author.attributes.name,
    authorSlug: relationships.author.attributes.slug,
    authorAvatarSrc:
      relationships.author.attributes.avatar ?? DEFAULT_AUTHOR_AVATAR,
    authorDesignation: relationships.author.attributes.designation,
    categoryName: relationships.category.attributes.name,
    publishedAt: formatBlogPublishedAt(attributes.publishedAt),
    readTime: formatReadingTime(attributes.readingTime),
  };
}

export async function getBlogs(
  page = 1,
  perPage = 25,
): Promise<BlogsResult> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;
  const emptyResult: BlogsResult = {
    posts: [],
    currentPage: page,
    totalPages: 1,
    latestPublishedAt: null,
  };

  if (!apiBase) {
    return emptyResult;
  }

  try {
    const response = await apiFetch(
      `${apiBase}/blogs?per_page=${perPage}&page=${page}`,
      { next: { revalidate: 60 } },
    );

    if (!response.ok) {
      return emptyResult;
    }

    const json = (await response.json()) as BlogsApiResponse;

    if (!Array.isArray(json.data)) {
      return emptyResult;
    }

    return {
      posts: json.data.map(mapBlogItemToPost),
      currentPage: json.meta?.current_page ?? page,
      totalPages: Math.max(json.meta?.last_page ?? 1, 1),
      latestPublishedAt: json.data[0]?.attributes.publishedAt ?? null,
    };
  } catch {
    return emptyResult;
  }
}

function mapBlogDetailItem(item: BlogDetailApiItem, slug: string): BlogDetail {
  const { attributes, relationships } = item;
  const authorAttributes = relationships.author.attributes;

  return {
    id: item.id,
    title: attributes.title,
    slug,
    summary: attributes.summary,
    coverImage: attributes.coverImage,
    htmlContent: attributes.htmlContent,
    contentEditor:
      attributes.contentEditor === 'richtext' ? 'richtext' : 'grapes',
    editorCss: {
      tailwind: attributes.editorCss?.tailwind,
      compiled: attributes.editorCss?.compiled,
    },
    tableOfContents: (attributes.tableOfContent ?? []).map((entry) => ({
      id: entry.id,
      label: entry.text,
      href: `#${entry.id}`,
      level: entry.level,
    })),
    publishedAt: attributes.publishedAt,
    postedAtLabel: formatBlogHeroPostedAt(attributes.publishedAt),
    author: {
      name: authorAttributes.name,
      slug: authorAttributes.slug,
      avatar:
        authorAttributes.avatar ?? DEFAULT_BLOG_DETAIL_AUTHOR_AVATAR,
      designation: authorAttributes.designation,
      bio: authorAttributes.bio ?? '',
      socialLinks: normalizeAuthorSocialLinks(authorAttributes.socialLinks),
    },
    category: relationships.category.attributes,
    seo: mapBlogSeo(relationships.seo?.attributes, {
      title: attributes.title,
      summary: attributes.summary,
      coverImage: attributes.coverImage,
    }),
  };
}

export async function getBlogBySlug(slug: string): Promise<BlogDetail | null> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  if (!apiBase || !slug) {
    return null;
  }

  try {
    const response = await apiFetch(`${apiBase}/blogs/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    const json = (await response.json()) as BlogDetailApiResponse;

    if (!json.data?.attributes) {
      return null;
    }

    return mapBlogDetailItem(json.data, slug);
  } catch {
    return null;
  }
}

export type BlogSitemapEntry = {
  slug: string;
  publishedAt: string;
  authorSlug: string;
};

/**
 * Paginate the blogs API for sitemap generation.
 * Keeps ISO `publishedAt` (unlike `getBlogs` card mapping) and unique author slugs.
 */
export async function getAllBlogsForSitemap(
  perPage = 100,
): Promise<BlogSitemapEntry[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  if (!apiBase) {
    return [];
  }

  const entries: BlogSitemapEntry[] = [];
  let page = 1;
  let lastPage = 1;

  try {
    do {
      const response = await apiFetch(
        `${apiBase}/blogs?per_page=${perPage}&page=${page}`,
        { next: { revalidate: 3600 } },
      );

      if (!response.ok) {
        break;
      }

      const json = (await response.json()) as BlogsApiResponse;

      if (!Array.isArray(json.data)) {
        break;
      }

      for (const item of json.data) {
        const slug = item.attributes?.slug;
        const publishedAt = item.attributes?.publishedAt;
        const authorSlug = item.relationships?.author?.attributes?.slug;

        if (!slug || !publishedAt) continue;

        entries.push({
          slug,
          publishedAt,
          authorSlug: authorSlug ?? '',
        });
      }

      lastPage = Math.max(json.meta?.last_page ?? 1, 1);
      page += 1;
    } while (page <= lastPage);
  } catch {
    return entries;
  }

  return entries;
}

const BLOGS_LIST_PAGE_SIZE = 100;

/**
 * The public blogs API ignores `?author=`; collect posts by scanning list pages.
 */
const getBlogItemsByAuthorSlug = cache(
  async (authorSlug: string): Promise<BlogApiItem[]> => {
    const apiBase = process.env.NEXT_PUBLIC_API_URL;

    if (!apiBase || !authorSlug) {
      return [];
    }

    const matches: BlogApiItem[] = [];
    let page = 1;
    let lastPage = 1;

    try {
      do {
        const response = await apiFetch(
          `${apiBase}/blogs?per_page=${BLOGS_LIST_PAGE_SIZE}&page=${page}`,
          { next: { revalidate: 60 } },
        );

        if (!response.ok) {
          break;
        }

        const json = (await response.json()) as BlogsApiResponse;

        if (!Array.isArray(json.data)) {
          break;
        }

        for (const item of json.data) {
          const slug = item.relationships?.author?.attributes?.slug;
          if (slug === authorSlug) {
            matches.push(item);
          }
        }

        lastPage = Math.max(json.meta?.last_page ?? 1, 1);
        page += 1;
      } while (page <= lastPage);
    } catch {
      return matches;
    }

    return matches;
  },
);

export async function getAuthorPage(
  authorSlug: string,
  page = 1,
  perPage = 25,
): Promise<AuthorPageResult | null> {
  if (!authorSlug) {
    return null;
  }

  try {
    const allItems = await getBlogItemsByAuthorSlug(authorSlug);

    if (allItems.length === 0) {
      return null;
    }

    const totalPages = Math.max(Math.ceil(allItems.length / perPage), 1);
    const activePage = Math.min(Math.max(page, 1), totalPages);
    const start = (activePage - 1) * perPage;
    const pageItems = allItems.slice(start, start + perPage);

    const firstAuthor = allItems[0].relationships.author.attributes;

    let bio = firstAuthor.bio ?? '';
    let socialLinks = normalizeAuthorSocialLinks(firstAuthor.socialLinks);
    const firstPostSlug = allItems[0].attributes.slug;
    const firstPostDetail = await getBlogBySlug(firstPostSlug);

    if (firstPostDetail && firstPostDetail.author.slug === authorSlug) {
      if (firstPostDetail.author.bio) {
        bio = firstPostDetail.author.bio;
      }
      if (firstPostDetail.author.socialLinks.length > 0) {
        socialLinks = firstPostDetail.author.socialLinks;
      }
    }

    return {
      author: mapAuthorAttributes(firstAuthor, bio, socialLinks),
      posts: pageItems.map(mapBlogItemToPost),
      currentPage: activePage,
      totalPages,
    };
  } catch {
    return null;
  }
}
