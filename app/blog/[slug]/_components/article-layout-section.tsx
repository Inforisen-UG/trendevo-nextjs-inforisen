import type { ReactNode } from 'react';
import PrimarySection from '@/components/sections/primary-section';
import ArticleBreadcrumb from './article-breadcrumb';
import ArticleSidebar from './article-sidebar';
import type { BlogShareLink, BlogTableOfContentLink } from '@/lib/blogs';

type ArticleLayoutSectionProps = {
  breadcrumbLabel?: string;
  tableOfContents?: BlogTableOfContentLink[];
  shareLinks?: BlogShareLink[];
  authorName?: string;
  authorSlug?: string;
  authorAvatarSrc?: string;
  authorDesignation?: string;
  children?: ReactNode;
};

export default function ArticleLayoutSection({
  breadcrumbLabel,
  tableOfContents,
  shareLinks,
  authorName,
  authorSlug,
  authorAvatarSrc,
  authorDesignation,
  children,
}: ArticleLayoutSectionProps) {
  return (
    <PrimarySection
      darkBg="section-6-dark"
      lightBackgroundImage="linear-gradient(165deg, #fbf5ff 10.39%, #fffafc 58.1%, #eed1ff 126.5%)"
      className="pt-28 pb-8 lg:pb-12"
    >
      <div className="container">
        <ArticleBreadcrumb currentLabel={breadcrumbLabel} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[341px_minmax(0,1fr)] lg:gap-6">
          <ArticleSidebar
            tableOfContents={tableOfContents}
            shareLinks={shareLinks}
            authorName={authorName}
            authorSlug={authorSlug}
            authorAvatarSrc={authorAvatarSrc}
            authorDesignation={authorDesignation}
          />
          {children}
        </div>
      </div>
    </PrimarySection>
  );
}
