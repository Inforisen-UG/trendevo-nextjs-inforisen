'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PrimarySection, {
  type SectionBgKey,
  type SectionDarkBgKey,
} from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import YoutubeVideoModal from '@/components/ui/youtube-video-modal';
import { cn } from '@/lib/utils';

import 'swiper/css';

const ACTIVE_TAB_BG =
  'linear-gradient(105.41deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const REVIEW_CARD_HEIGHT = 260;
const REVIEW_CARD_GAP = 18;

export type TestimonialTextReview = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export type TestimonialVideoReview = {
  id: string;
  name: string;
  role: string;
  thumbnail: string;
  avatar: string;
  youtubeVideoId: string;
};

export type TestimonialFeaturedReview = {
  name: string;
  role: string;
  avatar: string;
  image: string;
  quote: string;
  youtubeVideoId?: string;
};

export type TestimonialAssets = {
  starIconSrc: string;
  verifyBadgeSrc: string;
  customerReviewTabIconSrc: string;
  videoReviewTabIconSrc: string;
  quoteOpenSrc: string;
  quoteCloseSrc: string;
  playIconSrc: string;
  playOrbSrc: string;
};

export type TestimonialsSectionData = {
  sectionBackground?: string;
  sectionBg?: SectionBgKey;
  sectionDarkBg?: SectionDarkBgKey;
  badge: string;
  underlineSrc: string;
  underlineWidth: number;
  title: string | ReactNode;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
  customerTabLabel: string;
  videoTabLabel: string;
  assets: TestimonialAssets;
  leftTextReviews: TestimonialTextReview[];
  rightTextReviews: TestimonialTextReview[];
  featuredReview: TestimonialFeaturedReview;
  videoReviews: TestimonialVideoReview[];
  defaultTab?: 'customer' | 'video';
  showTabSwitcher?: boolean;
  showSectionDecorations?: boolean;
  className?: string;
};

export type TestimonialsSectionProps = {
  data: TestimonialsSectionData;
};

type ReviewTab = 'customer' | 'video';

function StarRating({
  starIconSrc,
  className,
}: {
  starIconSrc: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'w-fit rounded bg-white px-1.5 py-1 shadow-[0px_4px_6px_0px_rgba(106,106,106,0.1),0px_10px_15px_0px_rgba(96,96,96,0.1)] dark:bg-white/10 dark:shadow-none',
        className,
      )}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={starIconSrc}
            alt="Star rating icon"
            aria-hidden
            width={16}
            height={16}
            className="size-4 shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

function AuthorInfo({
  name,
  role,
  avatar,
  verifyBadgeSrc,
  variant = 'light',
  avatarUnoptimized = false,
}: {
  name: string;
  role: string;
  avatar: string;
  verifyBadgeSrc: string;
  variant?: 'light' | 'dark';
  avatarUnoptimized?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatar}
        alt={`${name} avatar`}
        width={110}
        height={110}
        quality={100}
        sizes="51px"
        unoptimized={avatarUnoptimized}
        className="size-[51px] shrink-0 rounded-full object-cover object-[center_15%]"
      />
      <div className="min-w-0">
        <div className="flex items-center gap-1">
          <p
            className={cn(
              'truncate text-sm font-semibold',
              variant === 'light'
                ? 'text-white'
                : 'text-[#343e56] dark:text-[#efedf1]',
            )}
          >
            {name}
          </p>
          <Image
            src={verifyBadgeSrc}
            alt="Verified customer badge"
            aria-hidden
            width={18}
            height={18}
            className="size-[18px] shrink-0"
          />
        </div>
        <p
          className={cn(
            'text-xs font-medium',
            variant === 'light'
              ? 'text-[#dfe0e4]'
              : 'text-[#5b6477] dark:text-[#c1c4cc]',
          )}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

function ReviewTabSwitcher({
  activeTab,
  customerTabLabel,
  videoTabLabel,
  assets,
  onChange,
}: {
  activeTab: ReviewTab;
  customerTabLabel: string;
  videoTabLabel: string;
  assets: TestimonialAssets;
  onChange: (tab: ReviewTab) => void;
}) {
  return (
    <div className="w-fit max-w-full rounded-xl border-[0.6px] border-[#f0d8ff] bg-[rgba(202,115,255,0.04)] p-2 dark:border-transparent dark:bg-[rgba(203,116,255,0.08)]">
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
        <button
          type="button"
          onClick={() => onChange('customer')}
          className={cn(
            'flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg border-[0.3px] border-[#d18dfa] px-4 py-2.5 transition-all sm:w-auto sm:px-6 sm:py-3',
            activeTab !== 'customer' && 'bg-white dark:bg-white/[0.06]',
          )}
          style={activeTab === 'customer' ? { backgroundImage: ACTIVE_TAB_BG } : undefined}
        >
          <Image
            src={assets.customerReviewTabIconSrc}
            alt="Customer reviews tab icon"
            aria-hidden
            width={24}
            height={24}
            className={cn(
              'size-5 shrink-0 sm:size-6',
              activeTab === 'customer'
                ? 'brightness-0 invert'
                : 'dark:brightness-0 dark:invert',
            )}
          />
          <span
            className={cn(
              'text-sm font-medium sm:text-base',
              activeTab === 'customer'
                ? 'text-white'
                : 'text-[#8f2acd] dark:text-white',
            )}
          >
            {customerTabLabel}
          </span>
        </button>
        <button
          type="button"
          onClick={() => onChange('video')}
          className={cn(
            'flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg border-[0.3px] border-[#d18dfa] px-4 py-2.5 transition-all sm:w-auto sm:px-6 sm:py-3',
            activeTab !== 'video' && 'bg-white dark:bg-white/[0.06]',
          )}
          style={activeTab === 'video' ? { backgroundImage: ACTIVE_TAB_BG } : undefined}
        >
          <Image
            src={assets.videoReviewTabIconSrc}
            alt="Video reviews tab icon"
            aria-hidden
            width={24}
            height={24}
            className={cn(
              'size-5 shrink-0 sm:size-6',
              activeTab === 'video'
                ? 'brightness-0 invert'
                : 'dark:brightness-0 dark:invert',
            )}
          />
          <span
            className={cn(
              'text-sm font-medium sm:text-base',
              activeTab === 'video'
                ? 'text-white'
                : 'text-[#8f2acd] dark:text-white',
            )}
          >
            {videoTabLabel}
          </span>
        </button>
      </div>
    </div>
  );
}

function TextReviewCard({
  review,
  assets,
}: {
  review: TestimonialTextReview;
  assets: TestimonialAssets;
}) {
  return (
    <article
      className="relative w-full shrink-0 overflow-hidden rounded-[30px] border border-[#f7deff] bg-[#f4e3fd] dark:border-[#d18dfa]/25 dark:bg-[#1f0f2a]"
      style={{ height: REVIEW_CARD_HEIGHT }}
    >
      <Image
        src={assets.quoteOpenSrc}
            alt="Opening quotation mark"
        aria-hidden
        width={90}
        height={78}
        className="pointer-events-none absolute left-[19px] top-[6px] h-[78px] w-[90px] opacity-100 dark:opacity-20"
      />
      <Image
        src={assets.quoteCloseSrc}
            alt="Closing quotation mark"
        aria-hidden
        width={90}
        height={78}
        className="pointer-events-none absolute bottom-[7px] right-[19px] h-[78px] w-[90px] -scale-y-100 rotate-180 opacity-100 dark:opacity-20"
      />

      <div className="relative flex h-full flex-col justify-center gap-4 px-6 py-5 sm:gap-6 sm:px-8 md:gap-[34px]">
        <div className="border-b border-dashed border-[#c1c4cc] pb-4 dark:border-white/15">
          <StarRating starIconSrc={assets.starIconSrc} className="mb-[19px]" />
          <p className="text-sm font-medium leading-normal text-[#364153] dark:text-[#c1c4cc]">
            {review.quote}
          </p>
        </div>
        <AuthorInfo
          name={review.name}
          role={review.role}
          avatar={review.avatar}
          verifyBadgeSrc={assets.verifyBadgeSrc}
          variant="dark"
        />
      </div>
    </article>
  );
}

function FeaturedReviewCard({
  featuredReview,
  assets,
  onPlay,
  className,
}: {
  featuredReview: TestimonialFeaturedReview;
  assets: TestimonialAssets;
  onPlay: () => void;
  className?: string;
}) {
  return (
    <article
      className={cn(
        'relative mx-auto h-[380px] w-full min-w-0 max-w-[464px] overflow-hidden rounded-[30px] sm:h-[460px] md:h-[440px] md:max-w-[600px] lg:mx-0 lg:h-full lg:min-h-[538px] lg:max-w-none',
        className,
      )}
    >
      <Image
        src={featuredReview.image}
        alt={`${featuredReview.name} featured review photo`}
        fill
        priority
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 480px"
        className="object-cover object-[center_20%]"
      />

      <StarRating
        starIconSrc={assets.starIconSrc}
        className="absolute left-6 top-5 z-10"
      />

      {featuredReview.youtubeVideoId ? (
        <button
          type="button"
          onClick={onPlay}
          aria-label={`Play ${featuredReview.name}'s video review`}
          className="absolute left-1/2 top-1/2 z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[32px] bg-white/12 p-4 transition hover:bg-white/20"
        >
          <Image
            src={assets.playIconSrc}
            alt="Play video review"
            aria-hidden
            width={33}
            height={33}
            className="size-[33px]"
          />
        </button>
      ) : null}

      <div className="absolute bottom-6 left-6 right-6 z-10 max-w-[363px] rounded-2xl border border-white/35 bg-white/30 p-4 backdrop-blur-[40px] dark:border-white/20 dark:bg-[#150b19]/70">
        <AuthorInfo
          name={featuredReview.name}
          role={featuredReview.role}
          avatar={featuredReview.avatar}
          verifyBadgeSrc={assets.verifyBadgeSrc}
          variant="dark"
          avatarUnoptimized
        />
        <p className="mt-3 text-xs font-medium leading-normal text-[#40454e] dark:text-[#dfe0e4]">
          {featuredReview.quote}
        </p>
      </div>
    </article>
  );
}

function ScrollMoreHint({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll to see more reviews"
      className="absolute inset-x-0 bottom-0 z-20 flex cursor-pointer flex-col items-center gap-1 pb-2 pt-6"
    >
      <span className="text-xs font-medium text-[#8f2acd] dark:text-[#d18dfa]">
        More reviews below
      </span>
      <span className="flex size-7 animate-bounce items-center justify-center rounded-full border border-[#d18dfa]/40 bg-white/90 shadow-sm dark:border-[#d18dfa]/50 dark:bg-white/10 dark:shadow-none">
        <svg
          aria-hidden
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8f2acd] dark:text-[#d18dfa]"
        >
          <path
            d="M3.5 4.75L7 8.25L10.5 4.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

function ScrollableReviewColumn({
  reviews,
  assets,
  className,
}: {
  reviews: TestimonialTextReview[];
  assets: TestimonialAssets;
  className?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasMoreBelow, setHasMoreBelow] = useState(reviews.length >= 2);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    setHasMoreBelow(el.scrollHeight - el.scrollTop - el.clientHeight > 12);
  }, []);

  useEffect(() => {
    updateScrollState();

    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState, reviews.length]);

  const scrollToNext = () => {
    scrollRef.current?.scrollBy({
      top: REVIEW_CARD_HEIGHT + REVIEW_CARD_GAP,
      behavior: 'smooth',
    });
  };

  const showScrollHint = hasMoreBelow && reviews.length >= 2;

  return (
    <div
      className={cn(
        'relative h-[380px] min-h-0 min-w-0 sm:h-[460px] md:h-[500px] lg:h-full lg:min-h-[538px]',
        className,
      )}
    >
      <div
        ref={scrollRef}
        className={cn(
          'flex h-full min-h-0 flex-col overflow-y-scroll overscroll-y-contain pr-1 scroll-smooth lg:h-[472px] lg:max-h-[472px] lg:shrink-0',
          '[scrollbar-gutter:stable]',
          '[scrollbar-width:thin] [scrollbar-color:rgba(209,129,255,0.65)_rgba(234,214,247,0.45)]',
          '[&::-webkit-scrollbar]:w-1.5',
          '[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#ead6f7]/70 dark:[&::-webkit-scrollbar-track]:bg-white/10',
          '[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#d18dfa]/70 hover:[&::-webkit-scrollbar-thumb]:bg-[#c76ef5]',
          showScrollHint &&
            '[mask-image:linear-gradient(to_bottom,black_calc(100%-56px),transparent_100%)]',
        )}
        style={{ gap: REVIEW_CARD_GAP }}
      >
        {reviews.map((review) => (
          <TextReviewCard key={review.id} review={review} assets={assets} />
        ))}
      </div>

      {showScrollHint ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#fdf5ff] via-[#fdf5ff]/85 to-transparent dark:from-[#150b19] dark:via-[#150b19]/90"
          />
          <ScrollMoreHint onClick={scrollToNext} />
        </>
      ) : null}
    </div>
  );
}

function TextReviewsSlider({
  reviews,
  assets,
}: {
  reviews: TestimonialTextReview[];
  assets: TestimonialAssets;
}) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <Swiper
        className="testimonials-text-swiper w-full"
        spaceBetween={18}
        slidesPerView={1.08}
        slidesPerGroup={1}
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
        onBreakpoint={(instance) => setActiveIndex(instance.activeIndex)}
        breakpoints={{
          480: {
            slidesPerView: 1.2,
            spaceBetween: 18,
          },
          640: {
            slidesPerView: 1.45,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="!h-auto">
            <TextReviewCard review={review} assets={assets} />
          </SwiperSlide>
        ))}
      </Swiper>

      <TestimonialsPagination swiper={swiper} activeIndex={activeIndex} />
    </div>
  );
}

function CustomerReviewsGrid({
  leftTextReviews,
  rightTextReviews,
  featuredReview,
  assets,
  onPlayFeatured,
}: {
  leftTextReviews: TestimonialTextReview[];
  rightTextReviews: TestimonialTextReview[];
  featuredReview: TestimonialFeaturedReview;
  assets: TestimonialAssets;
  onPlayFeatured: () => void;
}) {
  const mobileTabletReviews = [...leftTextReviews, ...rightTextReviews];

  return (
    <>
      <div className="flex w-full max-w-[1440px] flex-col gap-[18px] lg:hidden">
        <FeaturedReviewCard
          featuredReview={featuredReview}
          assets={assets}
          onPlay={onPlayFeatured}
          className="w-full"
        />
        <TextReviewsSlider reviews={mobileTabletReviews} assets={assets} />
      </div>

      <div
        className="hidden w-full max-w-[1440px] grid-cols-1 gap-[18px] lg:grid lg:grid-cols-3 lg:items-stretch lg:min-h-[538px]"
      >
        <ScrollableReviewColumn
          reviews={leftTextReviews}
          assets={assets}
          className="min-w-0 lg:order-1"
        />

        <div className="flex min-h-0 min-w-0 lg:order-2 lg:min-h-[538px]">
          <FeaturedReviewCard
            featuredReview={featuredReview}
            assets={assets}
            onPlay={onPlayFeatured}
            className="h-full w-full"
          />
        </div>

        <ScrollableReviewColumn
          reviews={rightTextReviews}
          assets={assets}
          className="min-w-0 lg:order-3"
        />
      </div>
    </>
  );
}

function VideoReviewCard({
  review,
  assets,
  onPlay,
}: {
  review: TestimonialVideoReview;
  assets: TestimonialAssets;
  onPlay: () => void;
}) {
  return (
    <article className="relative mx-auto h-[300px] w-full max-w-[336px] overflow-hidden rounded-2xl p-2.5 sm:h-[340px]">
      <Image
        src={review.thumbnail}
        alt={`${review.name} video review thumbnail`}
        fill
        sizes="(max-width: 768px) 85vw, 336px"
        className="rounded-2xl object-cover"
        unoptimized
      />

      <div className="absolute bottom-0 left-1/2 h-[79px] w-full -translate-x-1/2 rounded-b-2xl bg-gradient-to-b from-transparent to-black/[0.06] backdrop-blur-[2.6px]" />

      <div className="absolute left-2.5 top-[11px] rounded-md bg-white/10 px-2 py-1.5">
        <div className="flex items-center gap-1">
          <Image
            src={assets.starIconSrc}
            alt="Star rating icon"
            aria-hidden
            width={16}
            height={16}
            className="size-4 shrink-0"
          />
          <span className="text-xs font-bold text-white">5.00</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onPlay}
        aria-label={`Play ${review.name}'s video review`}
        className="absolute left-1/2 top-1/2 flex size-[42px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[21px] bg-white/12 p-2.5 transition hover:bg-white/20"
      >
        <Image
          src={assets.playIconSrc}
            alt="Play video review"
          aria-hidden
          width={22}
          height={22}
          className="size-[22px]"
        />
      </button>

      <div className="absolute bottom-5 left-3 flex items-center gap-2">
        <AuthorInfo
          name={review.name}
          role={review.role}
          avatar={review.avatar}
          verifyBadgeSrc={assets.verifyBadgeSrc}
          variant="light"
        />
      </div>
    </article>
  );
}

function TestimonialsPagination({
  swiper,
  activeIndex,
}: {
  swiper: SwiperType | null;
  activeIndex: number;
}) {
  const pageCount = swiper?.snapGrid.length ?? 0;

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-[3px]">
      {Array.from({ length: pageCount }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide group ${index + 1}`}
          aria-current={activeIndex === index ? 'true' : undefined}
          onClick={() => swiper?.slideTo(index)}
          className={cn(
            'h-[11px] shrink-0 rounded-[14.5px] border-0 p-0 transition-all duration-300',
            activeIndex === index
              ? 'w-[47px] bg-brand-gradient'
              : 'w-[18px] bg-[rgba(235,235,235,0.88)] dark:bg-white/20',
          )}
        />
      ))}
    </div>
  );
}

function VideoReviewsSlider({
  videoReviews,
  assets,
  onPlay,
}: {
  videoReviews: TestimonialVideoReview[];
  assets: TestimonialAssets;
  onPlay: (videoId: string) => void;
}) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-full max-w-[1440px] flex-col items-center gap-8">
      <Swiper
        className="testimonials-video-swiper w-full"
        spaceBetween={16}
        slidesPerView={1.15}
        slidesPerGroup={1}
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
        onBreakpoint={(instance) => setActiveIndex(instance.activeIndex)}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {videoReviews.map((review) => (
          <SwiperSlide key={review.id}>
            <VideoReviewCard
              review={review}
              assets={assets}
              onPlay={() => onPlay(review.youtubeVideoId)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <TestimonialsPagination swiper={swiper} activeIndex={activeIndex} />
    </div>
  );
}

function SectionDecorations({ playOrbSrc }: { playOrbSrc: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1920px] -translate-x-1/2 lg:block"
    >
      <div className="absolute bottom-10 left-[-4.36%] flex h-[220px] w-[209px] items-center justify-center">
        <div className="rotate-[3.48deg]">
          <div className="relative h-[212px] w-[211px] overflow-hidden blur-[3px]">
            <Image
              src={playOrbSrc}
            alt="Video play button background"
              aria-hidden
              width={2000}
              height={2000}
              className="absolute left-[-26.42%] top-[-24.18%] h-[148.81%] w-[149.7%] max-w-none"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="absolute left-[91.5625%] top-[27px] h-[212px] w-[217.591px] overflow-hidden blur-[3px]">
        <Image
          src={playOrbSrc}
            alt="Video play button background"
          aria-hidden
          width={2000}
          height={2000}
          className="absolute left-[-23.27%] top-[-24.25%] h-[146.52%] w-[142.76%] max-w-none -scale-y-100 rotate-[172.66deg]"
          unoptimized
        />
      </div>
    </div>
  );
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const {
    sectionBackground,
    sectionBg,
    sectionDarkBg = 'section-testimonials-dark',
    badge,
    underlineSrc,
    underlineWidth,
    title,
    subtitle,
    titleClassName,
    subtitleClassName,
    customerTabLabel,
    videoTabLabel,
    assets,
    leftTextReviews,
    rightTextReviews,
    featuredReview,
    videoReviews,
    defaultTab = 'video',
    showTabSwitcher = true,
    showSectionDecorations = true,
    className,
  } = data;
  const [activeTab, setActiveTab] = useState<ReviewTab>(defaultTab);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const openVideo = (videoId: string) => setActiveVideoId(videoId);
  const closeVideo = () => setActiveVideoId(null);

  return (
    <PrimarySection
      bg={sectionBg}
      darkBg={sectionDarkBg}
      lightBackgroundImage={
        sectionBg ? undefined : sectionBackground
      }
      className={cn('overflow-hidden py-12 sm:py-16 lg:py-20', className)}
    >
      {showSectionDecorations ? (
        <SectionDecorations playOrbSrc={assets.playOrbSrc} />
      ) : null}

      <div className="container relative z-10 flex flex-col items-center gap-8 sm:gap-12">
        <SectionHeading
          badge={badge}
          underlineSrc={underlineSrc}
          underlineWidth={underlineWidth}
          title={title}
          subtitle={subtitle}
          titleClassName={titleClassName}
          subtitleClassName={subtitleClassName}
        />

        {showTabSwitcher ? (
          <ReviewTabSwitcher
            activeTab={activeTab}
            customerTabLabel={customerTabLabel}
            videoTabLabel={videoTabLabel}
            assets={assets}
            onChange={setActiveTab}
          />
        ) : null}

        {activeTab === 'customer' || !showTabSwitcher ? (
          <CustomerReviewsGrid
            leftTextReviews={leftTextReviews}
            rightTextReviews={rightTextReviews}
            featuredReview={featuredReview}
            assets={assets}
            onPlayFeatured={() => {
              if (featuredReview.youtubeVideoId) {
                openVideo(featuredReview.youtubeVideoId);
              }
            }}
          />
        ) : (
          <VideoReviewsSlider
            videoReviews={videoReviews}
            assets={assets}
            onPlay={openVideo}
          />
        )}
      </div>

      <YoutubeVideoModal videoId={activeVideoId} onClose={closeVideo} />
    </PrimarySection>
  );
}
