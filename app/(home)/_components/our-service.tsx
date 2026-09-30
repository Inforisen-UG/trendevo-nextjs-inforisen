'use client';

import Image from 'next/image';
import { useState } from 'react';

import { data } from '@/app/(home)/page-data';
import type { HomePlatformService } from '@/app/(home)/page-data';
import PrimaryButton from '@/components/buttons/primary-button';
import WebsiteTrafficPlatformIcon from '@/components/icons/website-traffic-platform-icon';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import { renderText } from '@/lib/utils/renderText';

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#ad26ff] to-[#ff3f85] bg-clip-text text-transparent';

const ACTIVE_TAB_BG =
  'linear-gradient(102.904deg, rgb(209, 129, 255) 2.848%, rgb(255, 99, 190) 90.525%)';

const INACTIVE_TAB_BG =
  'linear-gradient(111.818deg, rgba(214, 144, 255, 0.08) 4.773%, rgba(215, 148, 255, 0.08) 39.506%, rgba(179, 100, 226, 0.08) 74.238%)';

const SERVICE_ILLUSTRATION_LIGHT_BG =
  'linear-gradient(180.062deg, rgb(250, 241, 255) 0%, rgb(235, 201, 255) 122.71%)';

const SERVICE_ILLUSTRATION_DARK_BG =
  'linear-gradient(180.015deg, rgba(44, 18, 58, 0.44) 24.705%, rgb(51, 23, 67) 109.05%)';

const { heading: ourServicesHeading, platforms } = data.ourServices;

const HEX_BG_PATH =
  'M13.5039 0.890625C15.3294 -0.163308 17.5788 -0.163308 19.4043 0.890625L29.8584 6.92676C31.6838 7.98065 32.8085 9.92836 32.8086 12.0361V24.1084C32.8085 26.2162 31.6838 28.1639 29.8584 29.2178L19.4043 35.2539C17.5788 36.3078 15.3294 36.3078 13.5039 35.2539L3.0498 29.2178C1.22441 28.1639 0.0996928 26.2162 0.0996094 24.1084V12.0361C0.0996928 9.92836 1.22441 7.98065 3.0498 6.92676L13.5039 0.890625Z';

function HexBgIcon({
  className,
  isActive,
}: {
  className?: string;
  isActive?: boolean;
}) {
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
      {isActive ? (
        <path
          d={HEX_BG_PATH}
          fill="white"
          stroke="#C081E6"
          strokeWidth="1"
        />
      ) : (
        <path
          d={HEX_BG_PATH}
          fill="white"
          fillOpacity="0.09"
          stroke="#C081E6"
          strokeWidth="1"
        />
      )}
    </svg>
  );
}

function ServiceTopRightDecoration({ imageSrc }: { imageSrc: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1920px] -translate-x-1/2 lg:block"
    >
      <div className="absolute left-[91.5625%] top-[107px] h-[212px] w-[217.591px] overflow-hidden blur-[2px]">
        <div className="relative size-full">
          <Image
            key={imageSrc}
            src={imageSrc}
            alt="Decorative services section illustration"
            aria-hidden
            fill
            className="object-contain object-center"
            sizes="218px"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

function ServiceBottomLeftDecoration({ imageSrc }: { imageSrc: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-[88px] left-[calc((100%-100vw)/2-84px)] z-0 hidden h-[274px] w-[273px] items-center justify-center lg:flex"
    >
      <div className="-rotate-[21deg]">
        <div className="relative h-[212px] w-[211px] overflow-hidden blur-[2px]">
          <Image
            key={imageSrc}
            src={imageSrc}
            alt="Decorative services section illustration"
            aria-hidden
            fill
            className="object-contain object-center"
            sizes="211px"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

function PlatformIcon({
  platformId,
  src,
  label,
  className,
  isActive,
}: {
  platformId: string;
  src: string;
  label: string;
  className?: string;
  isActive?: boolean;
}) {
  const isSvg = src.endsWith('.svg');

  if (platformId === 'website-traffic') {
    return (
      <div className="relative flex size-8 shrink-0 items-center justify-center p-1.5 sm:size-[38px] sm:p-[9px]">
        <HexBgIcon
          isActive={isActive}
          className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 sm:size-[38px]"
        />
        <WebsiteTrafficPlatformIcon className="relative z-10" />
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  return (
    <div className="relative flex size-8 shrink-0 items-center justify-center p-1.5 sm:size-[38px] sm:p-[9px]">
      <HexBgIcon
        isActive={isActive}
        className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 sm:size-[38px]"
      />
      <Image
        src={src}
        alt={`${label} platform icon`}
        aria-hidden
        width={20}
        height={20}
        className={cn(
          'relative z-10 size-4 object-contain sm:size-5',
          className,
        )}
        unoptimized={isSvg}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

function ServiceCardGlow({ src, className }: { src: string; className?: string }) {
  return (
    <div className={cn('absolute size-[271px]', className)}>
      <div className="absolute inset-[-147.6%]">
        <div className="relative size-full">
          <Image
            src={src}
            alt="Decorative service card glow effect"
            aria-hidden
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCardGlowBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden dark:block"
    >
      <ServiceCardGlow
        src="/images/our-services/decorations/our-services-service-card-glow-top-decoration.svg"
        className="-top-[38%] right-[-14%] lg:-top-[209px] lg:right-[-199px]"
      />
      <ServiceCardGlow
        src="/images/our-services/decorations/our-services-service-card-glow-bottom-decoration.svg"
        className="right-[-14%] top-[72%] lg:right-[-199px] lg:top-[474px]"
      />
    </div>
  );
}

function ServiceIllustrationLayers({
  backgroundImage,
  bgSrc,
  foregroundSrc,
  className,
  priority,
}: {
  backgroundImage: string;
  bgSrc: string;
  foregroundSrc: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden rounded-[16px]', className)}
      style={{ backgroundImage }}
    >
      <div className="pointer-events-none absolute left-1/2 top-[22%] h-[70%] w-[82%] -translate-x-1/2 blur-[2px] lg:top-[107px] lg:h-[478px] lg:w-[466px]">
        <div className="relative size-full overflow-hidden">
          <div className="absolute h-[122.1%] w-[125%] -left-[15.25%] -top-[10.38%]">
            <Image
              src={bgSrc}
              alt="Social media services illustration background"
              aria-hidden
              fill
              className="object-cover"
              sizes="466px"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden lg:inset-auto lg:left-[5px] lg:top-[-1px] lg:h-[566px] lg:w-[565px]">
        <div className="relative size-full overflow-hidden">
          <div className="absolute inset-0 lg:h-[123.39%] lg:w-[114.99%] lg:-left-[8.26%] lg:top-0">
            <Image
              src={foregroundSrc}
              alt="Social media services hero illustration"
              aria-hidden
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 565px"
              priority={priority}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceIllustration() {
  return (
    <div className="relative h-[220px] w-full shrink-0 overflow-hidden sm:h-[320px] md:h-[420px] lg:h-[496px] lg:w-[571px]">
      <ServiceIllustrationLayers
        className="dark:hidden"
        backgroundImage={SERVICE_ILLUSTRATION_LIGHT_BG}
        bgSrc="/images/our-services/decorations/our-services-hero-illustration-light-bg-illustration.webp"
        foregroundSrc="/images/our-services/decorations/our-services-hero-illustration-light-illustration.webp"
        priority
      />
      <ServiceIllustrationLayers
        className="hidden dark:block"
        backgroundImage={SERVICE_ILLUSTRATION_DARK_BG}
        bgSrc="/images/our-services/decorations/our-services-hero-illustration-dark-bg-illustration.webp"
        foregroundSrc="/images/our-services/decorations/our-services-hero-illustration-dark-illustration.webp"
      />
    </div>
  );
}

function ServiceNumberBadge({ number }: { number: string }) {
  return (
    <div className="relative flex size-9 shrink-0 items-center justify-center sm:size-[44px]">
      <Image
        src="/images/our-services/ui/our-services-hex-number-decoration.svg"
        alt="Service step number badge decoration"
        aria-hidden
        width={38}
        height={38}
        className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 sm:size-[38px]"
      />
      <span className="relative z-10 text-sm font-semibold leading-normal text-white sm:text-base">
        {number}
      </span>
    </div>
  );
}

function PlatformTab({
  platform,
  isActive,
  onSelect,
}: {
  platform: HomePlatformService;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      aria-label={platform.label}
      className={cn(
        'flex w-full items-center justify-center rounded-[8px] bg-transparent px-2 py-2 transition-all sm:px-3 sm:py-2.5 md:px-[16px] md:py-[10px] cursor-pointer',
        !isActive && 'border-[0.5px] border-solid border-[#8f2acd]',
      )}
      style={{
        backgroundColor: 'transparent',
        backgroundImage: isActive ? ACTIVE_TAB_BG : INACTIVE_TAB_BG,
      }}
    >
      <div className="flex w-full items-center justify-center gap-0 sm:gap-2">
        <PlatformIcon
          platformId={platform.id}
          src={platform.icon}
          label={platform.label}
          className={platform.iconClassName}
          isActive={isActive}
        />
        <span
          className={cn(
            'hidden text-center text-xs font-semibold leading-tight sm:inline sm:whitespace-nowrap sm:text-sm md:text-[18px]',
            isActive ? 'text-white' : 'text-[#343e56] dark:text-[#ebecef]',
          )}
        >
          {platform.label}
        </span>
      </div>
    </button>
  );
}

export default function OurService() {
  const [activePlatformId, setActivePlatformId] = useState(platforms[0].id);
  const activePlatform =
    platforms.find((platform) => platform.id === activePlatformId) ?? platforms[0];

  return (
    <PrimarySection
      id="services"
      bg="section-2"
      darkBg="section-2-dark"
      className="overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <ServiceTopRightDecoration imageSrc={activePlatform.decorationImage} />

      <div className="container relative z-10 flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
        <SectionHeading
          badge={ourServicesHeading.badge}
          title={ourServicesHeading.title}
          subtitle={ourServicesHeading.subtitle}
          titleClassName={cn(
            ourServicesHeading.titleClassName,
            'dark:text-[#efedf1]',
          )}
          subtitleClassName={cn(
            ourServicesHeading.subtitleClassName,
            'dark:text-[#f5f6f7]',
          )}
        />

        <div className="flex w-full flex-col gap-6 sm:gap-8 lg:gap-9">
          <div className="grid w-full grid-cols-3 gap-2 sm:gap-3 md:gap-[18px] xl:grid-cols-6">
            {platforms.map((platform) => (
              <PlatformTab
                key={platform.id}
                platform={platform}
                isActive={activePlatformId === platform.id}
                onSelect={() => setActivePlatformId(platform.id)}
              />
            ))}
          </div>

          <div className="relative">
            <ServiceBottomLeftDecoration imageSrc={activePlatform.decorationImage} />

            <article className="relative z-10 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[12px] border border-[#d181ff] p-4 sm:gap-8 sm:p-6 lg:flex-row lg:py-7 lg:pl-7 lg:pr-8 dark:border-[rgba(143,42,205,0.7)]">
              <ServiceCardGlowBackground />
              <div className="relative z-10 w-full shrink-0 lg:w-[571px]">
                <ServiceIllustration />
              </div>

            <div className="relative z-10 flex w-full max-w-[745px] flex-col gap-4 sm:gap-[18px]">
              <div className="flex flex-col gap-3 sm:gap-[18px]">
                <h3
                  className={cn(
                    'text-xl font-semibold leading-tight sm:text-2xl md:text-[28px] md:leading-none',
                    GRADIENT_TEXT,
                  )}
                >
                  {activePlatform.marketingTitle}
                </h3>
                <p className="text-sm font-medium leading-normal text-[#222e48] sm:text-base dark:text-white">
                  {renderText(activePlatform.description)}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6">
                <ul className="flex flex-col gap-2">
                  {activePlatform.services.map((service) => (
                    <li
                      key={service.number}
                      className="flex items-start gap-2 sm:items-center"
                    >
                      <ServiceNumberBadge number={service.number} />
                      <p className="text-sm leading-normal sm:text-base">
                        <span
                          className={cn('font-medium', GRADIENT_TEXT)}
                        >
                          {service.title}{' '}
                        </span>
                        <span className="font-medium text-[#404a60] dark:text-[#ebecef]">
                          {service.description}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>

                <PrimaryButton
                  href={activePlatform.exploreHref}
                  className="self-start"
                >
                  {activePlatform.exploreLabel}
                </PrimaryButton>
              </div>
            </div>
            </article>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
