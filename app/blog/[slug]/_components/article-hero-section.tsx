import Image from 'next/image';

import BlogPostAiSummarize from './blog-post-ai-summarize';

type ArticleHeroSectionProps = {
  postedAt?: string;
  title?: string;
  titleHighlight?: string;
  titleRest?: string;
  featuredImageSrc?: string;
  featuredImageAlt?: string;
};

export default function ArticleHeroSection({
  postedAt = '16 March 2026',
  title,
  titleHighlight = 'SMM Panel Vs. Organic Social Media',
  titleRest = 'Growth: Which Works Better in Bangladesh?',
  featuredImageSrc = '/images/blog-details/blog-details-hero-featured-image-illustration.webp',
  featuredImageAlt = 'Team reviewing social media growth analytics in an office',
}: ArticleHeroSectionProps) {
  const displayHighlight = title ?? titleHighlight;
  const displayRest = title ? undefined : titleRest;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex max-w-[683px] flex-col gap-[26px]">
        <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#e2b0ff] bg-[linear-gradient(9.59deg,rgb(251,245,255)_10.39%,rgb(255,250,252)_58.1%,rgb(238,209,255)_126.5%)] px-4 py-2 dark:border-[rgba(226,176,255,0.25)] dark:[background-image:linear-gradient(9.59deg,rgba(251,245,255,0.1)_10.39%,rgba(255,250,252,0.1)_58.1%,rgba(238,209,255,0.1)_126.5%)]">
          <Image
            src="/images/icons/blog-details-posted-at-clock-icon.webp"
            alt="Article posted date clock icon"
            width={21}
            height={20}
            aria-hidden
          />
          <span className="text-base font-semibold text-gradient whitespace-pre">
            {`Posted At :  ${postedAt}`}
          </span>
        </div>

        <h1 className="text-[32px] font-semibold leading-normal text-[#0c070f] dark:text-white">
          <span className="block text-gradient">{displayHighlight}</span>
          {displayRest ? <span className="block">{displayRest}</span> : null}
        </h1>
      </div>

      <div className="relative h-[280px] w-full overflow-hidden rounded-3xl sm:h-[320px] lg:h-[374px]">
        <Image
          src={featuredImageSrc}
          alt={featuredImageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 1075px"
        />
      </div>

      {displayHighlight ? (
        <BlogPostAiSummarize pageTitle={displayHighlight} />
      ) : null}
    </div>
  );
}
