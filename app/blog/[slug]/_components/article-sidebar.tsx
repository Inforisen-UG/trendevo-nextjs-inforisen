'use client';

import Image from 'next/image';
import Link from 'next/link';
import { startTransition, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { BlogShareLink, BlogTableOfContentLink } from '@/lib/blogs';
import { cn } from '@/lib/utils';

const HEADER_SCROLL_OFFSET = 112;

type TocNode = {
  item: BlogTableOfContentLink;
  children: BlogTableOfContentLink[];
};

function isParentLevel(level: number | undefined) {
  return level === undefined || level <= 2;
}

function buildTocTree(items: BlogTableOfContentLink[]): TocNode[] {
  const tree: TocNode[] = [];
  let currentParent: TocNode | null = null;

  for (const item of items) {
    if (isParentLevel(item.level)) {
      currentParent = { item, children: [] };
      tree.push(currentParent);
      continue;
    }

    if (currentParent) {
      currentParent.children.push(item);
    } else {
      tree.push({ item, children: [] });
    }
  }

  return tree;
}

function findParentIdForChild(tree: TocNode[], childId: string): string | null {
  for (const node of tree) {
    if (node.children.some((child) => child.id === childId)) {
      return node.item.id;
    }
  }
  return null;
}

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (!element) {
    return;
  }

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    HEADER_SCROLL_OFFSET;

  window.scrollTo({ top, behavior: 'smooth' });
  window.history.replaceState(null, '', `#${sectionId}`);
}

const shareLinkClassName =
  'flex size-[38px] items-center justify-center rounded-[7px] border border-[#ebecef] bg-white dark:border-transparent dark:bg-white/10 dark:backdrop-blur-sm';

type ArticleSidebarProps = {
  tableOfContents?: BlogTableOfContentLink[];
  shareLinks?: BlogShareLink[];
  authorName?: string;
  authorSlug?: string;
  authorAvatarSrc?: string;
  authorDesignation?: string;
};

async function copyShareUrl(url: string) {
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    window.prompt('Copy this blog link:', url);
  }
}

function tocLinkClass(isActive: boolean, nested = false) {
  return cn(
    'block cursor-pointer py-2 text-sm font-medium leading-normal transition-colors',
    nested ? 'pl-6 pr-3' : 'px-3',
    isActive
      ? 'rounded-lg bg-brand-gradient text-white'
      : 'text-[#404a60] hover:text-[#13203b] dark:text-[#dfe0e4] dark:hover:text-white',
  );
}

export default function ArticleSidebar({
  tableOfContents = [],
  shareLinks = [],
  authorName = 'Seam Rahman',
  authorSlug,
  authorAvatarSrc = '/images/blog-details/blog-details-author-seam-rahman-avatar.webp',
  authorDesignation = 'CEO,Trend Evo',
}: ArticleSidebarProps) {
  const tocTree = useMemo(
    () => buildTocTree(tableOfContents),
    [tableOfContents],
  );
  const [activeId, setActiveId] = useState(tableOfContents[0]?.id ?? '');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(),
  );
  const activeIdRef = useRef(activeId);

  const selectActiveId = (id: string) => {
    activeIdRef.current = id;
    setActiveId(id);
  };

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    const headingElements = tableOfContents
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headingElements.length === 0) return;

    const visibleIds = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        }

        const nextActive = tableOfContents.find((item) =>
          visibleIds.has(item.id),
        )?.id;

        if (!nextActive || nextActive === activeIdRef.current) {
          return;
        }

        startTransition(() => {
          activeIdRef.current = nextActive;
          setActiveId(nextActive);
          const parentId = findParentIdForChild(tocTree, nextActive);
          if (parentId) {
            setExpandedIds((prev) => {
              if (prev.has(parentId)) return prev;
              const next = new Set(prev);
              next.add(parentId);
              return next;
            });
          }
        });
      },
      {
        rootMargin: '-15% 0px -65% 0px',
        threshold: 0,
      },
    );

    for (const el of headingElements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [tableOfContents, tocTree]);

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <aside className="flex w-full max-w-85.25 flex-col gap-12 self-start lg:sticky lg:top-28">
      <div className="flex items-start gap-3">
        <div
          aria-hidden
          className="mt-1 flex min-h-30 w-1 shrink-0 self-stretch overflow-hidden rounded-full bg-[#ebecef] dark:bg-[rgba(235,236,239,0.25)] dark:backdrop-blur-[10px]"
        >
          <div className="h-11 w-full rounded-full bg-brand-gradient" />
        </div>

        <nav aria-label="Table of contents" className="min-w-0 flex-1">
          <div className="rounded-lg bg-brand-gradient p-3">
            <p className="text-lg font-medium leading-[1.45] text-white">
              Table of content
            </p>
          </div>

          <div className="mt-1 flex flex-col">
            {tocTree.map((node) => {
              const parent = node.item;
              const isActive = parent.id === activeId;
              const hasChildren = node.children.length > 0;
              const isExpanded = expandedIds.has(parent.id);
              const childActive = node.children.some(
                (child) => child.id === activeId,
              );

              return (
                <div
                  key={parent.id}
                  className="border-b border-dashed border-[#dfe0e4] last:border-b-0 dark:border-[#6a7283]"
                >
                  <div className="relative flex items-stretch">
                    <a
                      href={parent.href}
                      onClick={(event) => {
                        event.preventDefault();
                        selectActiveId(parent.id);
                        scrollToSection(parent.id);
                        if (hasChildren) {
                          setExpandedIds((prev) => {
                            const next = new Set(prev);
                            next.add(parent.id);
                            return next;
                          });
                        }
                      }}
                      className={cn(
                        tocLinkClass(
                          isActive || (childActive && !isExpanded),
                        ),
                        'min-w-0 flex-1',
                        hasChildren && 'pr-10',
                      )}
                    >
                      {parent.label}
                    </a>
                    {hasChildren ? (
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-label={
                          isExpanded
                            ? `Collapse ${parent.label}`
                            : `Expand ${parent.label}`
                        }
                        onClick={() => toggleExpanded(parent.id)}
                        className="absolute right-1 top-1/2 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-[#6a7283] transition-colors hover:text-[#13203b] dark:text-[#dfe0e4] dark:hover:text-white"
                      >
                        {isExpanded ? (
                          <ChevronUp className="size-4" aria-hidden />
                        ) : (
                          <ChevronDown className="size-4" aria-hidden />
                        )}
                      </button>
                    ) : null}
                  </div>

                  {hasChildren && isExpanded ? (
                    <div className="flex flex-col pb-1">
                      {node.children.map((child) => {
                        const isChildActive = child.id === activeId;

                        return (
                          <a
                            key={child.id}
                            href={child.href}
                            onClick={(event) => {
                              event.preventDefault();
                              selectActiveId(child.id);
                              scrollToSection(child.id);
                            }}
                            className={tocLinkClass(isChildActive, true)}
                          >
                            {child.label}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </nav>
      </div>

      <div className="flex flex-col gap-5">
        <div className="rounded-xl border border-[rgba(42,42,42,0.14)] bg-[linear-gradient(36.37deg,rgb(251,245,255)_10.39%,rgb(255,250,252)_58.1%,rgb(255,137,198)_126.5%)] p-6 dark:border-[0.5px] dark:border-[rgba(42,42,42,0.14)] dark:bg-[rgba(255,255,255,0.12)] dark:bg-none dark:backdrop-blur-[250px]">
          <div className="flex flex-col items-center gap-[13px] text-center">
            <div className="relative size-27.25 overflow-hidden rounded-lg border border-[rgba(188,188,188,0.21)] bg-white dark:bg-[rgba(255,255,255,0.93)] dark:backdrop-blur-[2px]">
              <Image
                src={authorAvatarSrc}
                alt={authorName}
                fill
                sizes="109px"
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-base font-semibold text-[#13203b] dark:text-white">
                Author :{' '}
                {authorSlug ? (
                  <Link
                    href={`/author/${authorSlug}`}
                    className="text-gradient hover:opacity-90"
                  >
                    {authorName}
                  </Link>
                ) : (
                  authorName
                )}
              </p>
              <p className="text-sm font-medium text-[#6a7283] dark:text-[#dfe0e4]">
                {authorDesignation}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-base font-medium text-[#4f586d] dark:text-[#f5f6f7]">
            Share this blog
          </p>
          <div className="flex flex-wrap gap-2">
            {shareLinks.map((link) =>
              link.action === 'copy' ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => copyShareUrl(link.href)}
                  aria-label={`Copy blog link to share on ${link.label}`}
                  className={shareLinkClassName}
                >
                  <Image
                    src={link.iconSrc}
                    alt={`Share on ${link.label} icon`}
                    width={22}
                    height={22}
                    aria-hidden
                  />
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${link.label}`}
                  className={shareLinkClassName}
                >
                  <Image
                    src={link.iconSrc}
                    alt={`Share on ${link.label} icon`}
                    width={22}
                    height={22}
                    aria-hidden
                  />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
