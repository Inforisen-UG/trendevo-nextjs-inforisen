'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { data } from '@/app/(home)/page-data';
import type { HomePricingPlan } from '@/app/(home)/page-data';
import WebsiteTrafficPlatformIcon from '@/components/icons/website-traffic-platform-icon';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const CARD_HEADER_GRADIENT =
  'linear-gradient(34.63deg, rgb(251, 245, 255) 10.39%, rgb(255, 250, 252) 58.1%, rgb(255, 137, 198) 126.5%)';

const ACTIVE_TAB_BG =
  'linear-gradient(102.9deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const INACTIVE_TAB_BG =
  'linear-gradient(111.82deg, rgba(214, 144, 255, 0.08) 4.77%, rgba(215, 148, 255, 0.08) 39.51%, rgba(179, 100, 226, 0.08) 74.24%)';

const { pricing } = data;
const { heading, features: homePricingFeatures, platforms: homePricingPlatforms } =
  pricing;

function HexBgIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="37"
      viewBox="0 0 33 37"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M13.5039 0.890625C15.3294 -0.163308 17.5788 -0.163308 19.4043 0.890625L29.8584 6.92676C31.6838 7.98065 32.8085 9.92836 32.8086 12.0361V24.1084C32.8085 26.2162 31.6838 28.1639 29.8584 29.2178L19.4043 35.2539C17.5788 36.3078 15.3294 36.3078 13.5039 35.2539L3.0498 29.2178C1.22441 28.1639 0.0996928 26.2162 0.0996094 24.1084V12.0361C0.0996928 9.92836 1.22441 7.98065 3.0498 6.92676L13.5039 0.890625Z"
        fill="white"
        stroke="#C081E6"
        strokeWidth="1"
      />
    </svg>
  );
}

function PlatformTab({
  platformId,
  label,
  icon,
  isActive,
  onClick,
}: {
  platformId: string;
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const isSvg = icon.endsWith('.svg');

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        'flex w-full items-center justify-center rounded-[8px] px-2 py-2 transition-all sm:w-[220px] sm:px-3 sm:py-2.5 md:px-[16px] md:py-[10px]',
        !isActive && 'border-[0.5px] border-solid border-[#8f2acd]',
      )}
      style={{
        backgroundImage: isActive ? ACTIVE_TAB_BG : INACTIVE_TAB_BG,
      }}
    >
      <span className="flex w-full items-center justify-center gap-0 sm:gap-2">
        <span className="relative flex size-8 shrink-0 items-center justify-center p-1.5 sm:size-[38px] sm:p-[9px]">
          <HexBgIcon className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 sm:size-[38px]" />
          {platformId === 'website-traffic' ? (
            <WebsiteTrafficPlatformIcon className="relative z-10" />
          ) : (
            <Image
              src={icon}
              alt={`${label} service icon`}
              aria-hidden
              width={20}
              height={20}
              className="relative z-10 size-4 object-contain sm:size-5"
              unoptimized={isSvg}
            />
          )}
          <span className="sr-only">{label}</span>
        </span>
        <span
          className={cn(
            'hidden whitespace-nowrap text-sm font-semibold leading-normal sm:inline md:text-[18px]',
            isActive ? 'text-white' : 'text-[#343e56] dark:text-[#ebecef]',
          )}
        >
          {label}
        </span>
      </span>
    </button>
  );
}

function PricingCard({
  plan,
  featured,
}: {
  plan: HomePricingPlan;
  featured: boolean;
}) {
  return (
    <article className="relative isolate flex h-full w-full min-w-0 max-w-[464px] flex-[1_1_100%] flex-col gap-4 overflow-visible rounded-3xl border-[0.7px] border-[#ffc0e4] bg-white pb-8 dark:border-[#5c3d72] dark:bg-transparent sm:min-w-[min(100%,280px)] sm:flex-[1_1_320px] sm:gap-6 sm:pb-12 xl:max-w-none xl:flex-1 xl:basis-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden rounded-3xl dark:block"
      >
        <img
          src="/images/backgrounds/card-bg-4-dark.svg"
          alt="Decorative pricing plan card background"
          className="size-full object-cover"
        />
      </div>

      <div className="relative z-10 flex w-full flex-col gap-4 overflow-hidden rounded-t-3xl border-x border-t border-[#ffc0e4] px-4 py-5 dark:border-[#5c3d72] sm:gap-6 sm:px-6 sm:py-7">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 dark:hidden"
          style={{ backgroundImage: CARD_HEADER_GRADIENT }}
        />

        <div className="relative z-10 flex flex-col gap-4 sm:gap-[22px]">
          <div className="flex flex-col gap-1 sm:gap-[5px]">
            <p className="text-sm font-medium leading-normal text-[#404a60] dark:text-[#ebecef] sm:text-base">
              Starting From
            </p>
            <h3 className="text-3xl font-semibold leading-[1.35] tracking-[0.48px] text-[#222e48] dark:text-white sm:text-[36px] md:text-[48px]">
              {plan.startingPrice}
            </h3>
            <p className="text-sm font-medium leading-normal text-[#404a60] dark:text-[#ebecef] sm:text-base">
              {plan.serviceName}
            </p>
          </div>
        </div>

        <Link
          href={plan.buyHref}
          className={cn(
            'relative z-10 flex h-10 w-full items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] px-4 py-2 text-sm font-semibold sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:px-[18px]',
            featured
              ? 'border-[#cc7aff] bg-brand-gradient text-white'
              : 'border-[#d181ff] bg-transparent',
          )}
        >
          <span className={cn(!featured && 'text-gradient')}>{plan.buyLabel}</span>
        </Link>
      </div>

      <ul className="relative z-10 flex flex-col gap-3 px-4 sm:gap-4 sm:px-6">
        {homePricingFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Image
              src="/images/pricing/pricing-guarantee-fast-delivery-icon.svg"
              alt="Fast delivery guarantee icon"
              aria-hidden
              width={20}
              height={20}
              className="mt-0.5 size-5 shrink-0"
            />
            <span className="text-sm font-medium leading-normal text-[#0c070f] dark:text-[#ebecef] sm:text-base">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function PricingSection() {
  const [activePlatformId, setActivePlatformId] = useState(
    homePricingPlatforms[0].id,
  );
  const activePlatform =
    homePricingPlatforms.find((p) => p.id === activePlatformId) ??
    homePricingPlatforms[0];

  return (
    <PrimarySection
      bg="section-11"
      darkBg="section-20-dark"
      className="overflow-x-hidden py-12 sm:py-16 lg:py-20 dark:bg-transparent"
    >
      <div className="container flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 lg:gap-[34px]">
          <SectionHeading
            badge={heading.badge}
            underlineWidth={heading.underlineWidth}
            title={heading.title}
            subtitle={heading.subtitle}
            badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
            titleClassName={heading.titleClassName}
            subtitleClassName={heading.subtitleClassName}
          />

          <div className="grid w-full grid-cols-3 gap-2 sm:gap-3 md:gap-[18px] xl:grid-cols-6">
            {homePricingPlatforms.map((platform) => (
              <PlatformTab
                key={platform.id}
                platformId={platform.id}
                label={platform.label}
                icon={platform.icon}
                isActive={activePlatformId === platform.id}
                onClick={() => setActivePlatformId(platform.id)}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-[1440px] flex-col items-stretch justify-center gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:gap-6 xl:flex-nowrap xl:justify-between">
          {activePlatform.plans.map((plan, index) => (
            <PricingCard
              key={`${activePlatform.id}-${plan.serviceName}`}
              plan={plan}
              featured={index === 1}
            />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
