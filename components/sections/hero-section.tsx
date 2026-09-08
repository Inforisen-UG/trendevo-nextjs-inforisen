import Image from 'next/image';
import type { ReactNode } from 'react';
import PrimarySection, {
  type SectionBgKey,
  type SectionDarkBgKey,
} from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';

export type HeroSocialIcon = {
  label: string;
  src: string;
};

export type HeroTrustBadge = {
  avatarSrcs: string[];
  ratingIconSrc: string;
  rating: string;
  label: string;
};

export type HeroIllustration = {
  src: string;
  alt: string;
  width: number;
  height: number;
  maxWidthClassName?: string;
  aspectRatio?: string;
  unoptimized?: boolean;
};

export type HeroDecorationPreset = 'contact' | 'services';

export type HeroLayoutVariant = 'standard' | 'wide' | 'wide-responsive' | 'content';

export type HeroSectionProps = {
  bg: SectionBgKey;
  darkBg?: SectionDarkBgKey;
  variant?: HeroLayoutVariant;
  decoration?: HeroDecorationPreset;
  sectionClassName?: string;
  gridClassName?: string;
  leftColumnClassName?: string;
  contentClassName?: string;
  eyebrow?: ReactNode;
  eyebrowClassName?: string;
  trustBadge?: HeroTrustBadge;
  title: ReactNode;
  titleClassName?: string;
  description: ReactNode;
  descriptionClassName?: string;
  promo?: ReactNode;
  actions?: ReactNode;
  illustration: HeroIllustration;
  socialIcons?: HeroSocialIcon[];
};

const HERO_RING_SRC = '/images/contact-us/contact-us-hero-ring-illustration.svg';

const decorationPreset = {
  contact: {
    ringClassName:
      'absolute bottom-[6.94%] left-[1.37%] z-0 aspect-square w-[95.54%]',
    socialBarClassName: 'absolute bottom-0 left-[4.12%] z-20 w-[92.97%]',
  },
  services: {
    ringClassName:
      'absolute top-[11.02%] -left-[10.04%] z-0 aspect-square w-[118.97%]',
    socialBarClassName: 'absolute bottom-0 -left-[6.84%] z-20 w-[115.81%]',
  },
} satisfies Record<
  HeroDecorationPreset,
  { ringClassName: string; socialBarClassName: string }
>;

const sectionClassByVariant: Record<HeroLayoutVariant, string> = {
  standard: 'overflow-hidden px-0 pb-0',
  'wide-responsive': 'overflow-hidden px-0 pb-0',
  wide: 'overflow-hidden px-0 pb-0',
  content: 'overflow-hidden pt-28 pb-16 lg:pb-20',
};

const gridClassByVariant: Record<HeroLayoutVariant, string> = {
  standard:
    'container grid gap-8 pt-28 sm:gap-10 sm:pt-36 md:pt-40 lg:grid-cols-2 lg:items-end lg:gap-8 lg:pt-[154px] xl:pt-[198px]',
  'wide-responsive':
    'mx-auto grid max-w-[1440px] gap-8 px-6 pt-28 sm:gap-10 sm:pt-36 md:pt-40 lg:grid-cols-2 lg:items-end lg:gap-8 lg:pt-[154px] xl:pt-[198px]',
  wide: 'mx-auto grid max-w-[1440px] gap-10 px-6 pt-[154px] lg:grid-cols-2 lg:items-end lg:gap-8 lg:pt-[198px]',
  content: 'grid items-center gap-10 lg:grid-cols-2 lg:gap-8',
};

const leftColumnClassByVariant: Record<HeroLayoutVariant, string> = {
  standard: 'flex min-w-0 flex-col gap-6 lg:max-w-[762px] lg:gap-8 lg:self-start',
  'wide-responsive':
    'flex min-w-0 flex-col gap-4 lg:max-w-[762px] lg:gap-4 lg:self-start',
  wide: 'flex min-w-0 max-w-[762px] flex-col gap-4 lg:self-start',
  content: 'flex max-w-[762px] flex-col gap-[34px]',
};

const titleClassByVariant: Record<HeroLayoutVariant, string> = {
  standard:
    'text-[28px] font-semibold leading-[1.35] tracking-tight text-[#071431] sm:text-4xl md:text-5xl dark:text-[#efedf1]',
  'wide-responsive':
    'text-[28px] font-semibold leading-[1.35] tracking-[0.48px] text-[#313131] sm:text-4xl md:text-5xl dark:text-[#efedf1]',
  wide: 'text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px] dark:text-[#efedf1]',
  content:
    'text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px] dark:text-[#efedf1]',
};

const descriptionClassByVariant: Record<HeroLayoutVariant, string> = {
  standard:
    'max-w-2xl text-base leading-relaxed text-[#313131] sm:text-base md:text-lg dark:text-[#c1c4cc]',
  'wide-responsive':
    'max-w-[762px] text-base font-medium leading-[1.5] text-[#343e56] sm:text-lg dark:text-[#c1c4cc]',
  wide: 'max-w-[762px] text-lg font-medium leading-relaxed text-[#343e56] dark:text-[#c1c4cc]',
  content:
    'max-w-[762px] text-lg font-medium leading-relaxed text-[#343e56] dark:text-[#c1c4cc]',
};

const illustrationWrapClassByVariant: Record<HeroLayoutVariant, string> = {
  standard:
    'mx-auto w-full min-w-0 max-w-[669px] lg:mx-0 lg:-mt-16 lg:justify-self-end lg:self-end',
  'wide-responsive':
    'relative mx-auto w-full min-w-0 max-w-[581px] overflow-visible lg:mx-0 lg:-mt-16 lg:justify-self-end lg:self-end',
  wide: 'relative mx-auto w-full min-w-0 overflow-visible lg:mx-0 lg:-mt-16 lg:justify-self-end lg:self-end',
  content: 'relative mx-auto w-full',
};

function HeroTrustBadgeBar({ badge }: { badge: HeroTrustBadge }) {
  return (
    <div className="flex w-full max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border-l-2 border-[#cb7ef7] bg-white py-2 pl-1.5 pr-3 backdrop-blur-none sm:w-fit dark:bg-white/[0.07] dark:backdrop-blur-[10px]">
      <div className="flex -space-x-3">
        {badge.avatarSrcs.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt={`TrendEvo customer review avatar ${index + 1}`}
            width={24}
            height={24}
            className="size-6 rounded-full border border-white object-cover dark:border-[0.5px]"
          />
        ))}
      </div>
      <Image
        src={badge.ratingIconSrc}
        alt="rating"
        width={16}
        height={15}
        className="size-4 shrink-0"
      />
      <span className="text-gradient text-sm font-medium dark:bg-none dark:bg-clip-border dark:text-white">
        {badge.rating}
      </span>
      <span className="text-gradient text-sm font-medium dark:bg-none dark:bg-clip-border dark:text-white">
        {badge.label}
      </span>
    </div>
  );
}

function HeroSocialOverlay({ icons }: { icons: HeroSocialIcon[] }) {
  return (
    <div className="absolute inset-x-0 bottom-0 rounded-[20px] bg-white/5 px-4 py-5 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {icons.map((icon) => (
          <div
            key={icon.label}
            className="relative size-16 overflow-hidden rounded-xl sm:size-20"
          >
            <Image src={icon.src} alt={icon.label} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroGlassSocialBar({
  icons,
  className,
}: {
  icons: HeroSocialIcon[];
  className: string;
}) {
  return (
    <div className={cn(className, 'overflow-visible')}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 h-20 rounded-[20px] bg-white/[0.04] backdrop-blur-md backdrop-saturate-150 sm:h-24 lg:h-28"
      />
      <div className="relative grid h-20 grid-cols-6 items-center gap-0.5 overflow-visible px-2 py-2 sm:h-24 sm:gap-2 sm:px-4 sm:py-3 lg:h-28 lg:gap-3 lg:px-5 lg:pb-4">
        {icons.map((icon, index) => (
          <div
            key={icon.label}
            className="contact-hero-icon-wave flex shrink-0 justify-center self-center"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative aspect-square w-full max-w-9 shrink-0 overflow-hidden rounded-lg sm:max-w-14 sm:rounded-xl md:max-w-16 lg:max-w-20">
              <Image
                src={icon.src}
                alt={icon.label}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 36px, (max-width: 1024px) 56px, 80px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroIllustrationBlock({
  illustration,
  variant,
  socialIcons,
  decoration,
}: {
  illustration: HeroIllustration;
  variant: HeroLayoutVariant;
  socialIcons?: HeroSocialIcon[];
  decoration?: HeroDecorationPreset;
}) {
  const wrapClassName = cn(
    illustrationWrapClassByVariant[variant],
    illustration.maxWidthClassName,
  );

  const socialBar =
    socialIcons && socialIcons.length > 0 ? (
      decoration ? (
        <HeroGlassSocialBar
          icons={socialIcons}
          className={decorationPreset[decoration].socialBarClassName}
        />
      ) : (
        <HeroSocialOverlay icons={socialIcons} />
      )
    ) : null;

  if (illustration.aspectRatio) {
    return (
      <div className={wrapClassName}>
        {decoration ? (
          <div
            aria-hidden
            className={cn(
              'pointer-events-none',
              decorationPreset[decoration].ringClassName,
            )}
          >
            <Image
              src={HERO_RING_SRC}
              alt="Decorative gradient ring around hero illustration"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        ) : null}
        <div
          className="relative z-10 w-full"
          style={{ aspectRatio: illustration.aspectRatio }}
        >
          <Image
            src={illustration.src}
            alt={illustration.alt}
            fill
            priority
            unoptimized={illustration.unoptimized}
            className="object-contain object-bottom"
            sizes={`(max-width: 1024px) 100vw, ${illustration.width}px`}
          />
        </div>
        {socialBar} 
      </div>
    );
  }

  return (
    <div className={wrapClassName}>
      {decoration ? (
        <div
          aria-hidden
          className={cn(
            'pointer-events-none',
            decorationPreset[decoration].ringClassName,
          )}
        >
          <Image
            src={HERO_RING_SRC}
              alt="Decorative gradient ring around hero illustration"
            fill
            unoptimized
            className="object-contain"
          />
        </div>
      ) : null}
      <Image
        src={illustration.src}
        alt={illustration.alt}
        width={illustration.width}
        height={illustration.height}
        priority
        unoptimized={illustration.unoptimized}
        sizes={`(max-width: 1024px) 100vw, ${illustration.width}px`}
        className="relative z-10 block h-auto w-full"
      />
      {socialBar}
    </div>
  );
}

export default function HeroSection({
  bg,
  darkBg = bg === 'section-1' ? 'page-hero-dark' : undefined,
  variant = 'standard',
  decoration,
  sectionClassName,
  gridClassName,
  leftColumnClassName,
  contentClassName,
  eyebrow,
  eyebrowClassName,
  trustBadge,
  title,
  titleClassName,
  description,
  descriptionClassName,
  promo,
  actions,
  illustration,
  socialIcons,
}: HeroSectionProps) {
  const isContentVariant = variant === 'content';
  const isWideVariant = variant === 'wide';
  const isWideResponsiveVariant = variant === 'wide-responsive';

  const resolvedLeftColumnClassName = cn(
    leftColumnClassByVariant[variant],
    variant === 'wide' && trustBadge
      ? 'max-w-none gap-6 lg:max-w-[762px] lg:gap-8'
      : null,
    leftColumnClassName,
  );

  const leftContent = (
    <div className={resolvedLeftColumnClassName}>
      {eyebrow ? (
        <p
          className={cn(
            'text-gradient text-2xl font-semibold leading-[1.45] dark:bg-none dark:bg-clip-border dark:text-white',
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      {trustBadge ? <HeroTrustBadgeBar badge={trustBadge} /> : null}

      {isWideVariant && trustBadge ? (
        <>
          <div className={cn('space-y-6', contentClassName)}>
            <h1 className={cn(titleClassByVariant[variant], titleClassName)}>
              {title}
            </h1>
            <div
              className={cn(
                descriptionClassByVariant[variant],
                descriptionClassName,
              )}
            >
              {description}
            </div>
          </div>
          {actions}
        </>
      ) : isWideVariant ? (
        <div className="flex flex-col gap-[34px]">
          <div className={cn('flex flex-col gap-7', contentClassName)}>
            <h1 className={cn(titleClassByVariant[variant], titleClassName)}>
              {title}
            </h1>
            <div
              className={cn(
                descriptionClassByVariant[variant],
                descriptionClassName,
              )}
            >
              {description}
            </div>
          </div>
          {actions}
        </div>
      ) : isWideResponsiveVariant ? (
        <div className="flex flex-col gap-8 lg:gap-[34px]">
          <div className={cn('flex flex-col gap-6 lg:gap-7', contentClassName)}>
            <h1 className={cn(titleClassByVariant[variant], titleClassName)}>
              {title}
            </h1>
            <div
              className={cn(
                descriptionClassByVariant[variant],
                descriptionClassName,
              )}
            >
              {description}
            </div>
          </div>
          {actions}
        </div>
      ) : isContentVariant ? (
        <>
          <div className={cn('flex flex-col gap-7', contentClassName)}>
            <h1 className={cn(titleClassByVariant[variant], titleClassName)}>
              {title}
            </h1>
            <div
              className={cn(
                descriptionClassByVariant[variant],
                descriptionClassName,
              )}
            >
              {description}
            </div>
          </div>
          {actions}
        </>
      ) : (
        <>
          <div className={cn('space-y-6', contentClassName)}>
            <h1 className={cn(titleClassByVariant[variant], titleClassName)}>
              {title}
            </h1>
            <div
              className={cn(
                descriptionClassByVariant[variant],
                descriptionClassName,
              )}
            >
              {description}
            </div>
            {promo}
          </div>
          {actions}
        </>
      )}
    </div>
  );

  const grid = (
    <div className={cn(gridClassByVariant[variant], gridClassName)}>
      {leftContent}
      <HeroIllustrationBlock
        illustration={illustration}
        variant={variant}
        socialIcons={socialIcons}
        decoration={decoration}
      />
    </div>
  );

  return (
    <PrimarySection
      bg={bg}
      darkBg={darkBg}
      className={cn(sectionClassByVariant[variant], sectionClassName)}
    >
      {isContentVariant ? <div className="container">{grid}</div> : grid}
    </PrimarySection>
  );
}
