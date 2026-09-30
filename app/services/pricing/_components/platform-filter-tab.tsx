'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { PricingPlatform } from './platform-data';
import WebsiteTrafficPlatformIcon from '@/components/icons/website-traffic-platform-icon';

const ACTIVE_TAB_BG =
  'linear-gradient(102.9deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const INACTIVE_TAB_BG =
  'linear-gradient(111.82deg, rgba(214, 144, 255, 0.08) 4.77%, rgba(215, 148, 255, 0.08) 39.51%, rgba(179, 100, 226, 0.08) 74.24%)';

function WebsiteTrafficIcon() {
  return <WebsiteTrafficPlatformIcon />;
}

function PlatformIcon({
  platform,
}: {
  platform: PricingPlatform;
}) {
  const { icon, label, iconClassName, composedIcon, id } = platform;

  if (composedIcon && id === 'soundcloud') {
    return (
      <div className="relative size-[38px] shrink-0">
        <Image
          src={icon}
              alt={`${label} platform icon`}
          aria-hidden
          fill
          className="object-contain"
          unoptimized
        />
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  if (composedIcon && id === 'website-traffic') {
    return (
      <div className="relative flex size-[38px] shrink-0 items-center justify-center p-[9px]">
        <Image
          src="/images/our-services/ui/hex-tab.svg"
          alt="Platform tab hexagon background"
          aria-hidden
          width={38}
          height={38}
          className="absolute left-1/2 top-1/2 size-[38px] -translate-x-1/2 -translate-y-1/2"
        />
        <WebsiteTrafficIcon />
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  return (
    <div className="relative flex size-[38px] shrink-0 items-center justify-center p-[9px]">
      <Image
        src="/images/our-services/ui/hex-tab.svg"
        alt="Platform tab hexagon background"
        aria-hidden
        width={38}
        height={38}
        className="absolute left-1/2 top-1/2 size-[38px] -translate-x-1/2 -translate-y-1/2"
      />
      <Image
        src={icon}
              alt={`${label} platform icon`}
        aria-hidden
        width={20}
        height={20}
        className={cn('relative z-10 size-5 object-contain', iconClassName)}
        unoptimized={icon.endsWith('.svg')}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function PlatformFilterTab({
  platform,
  isActive,
  onSelect,
}: {
  platform: PricingPlatform;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={cn(
        'flex w-full flex-col items-start justify-center rounded-[8px] px-4 py-[10px] transition-all lg:max-w-[220px]',
        !isActive && 'border-[0.5px] border-solid border-[#8f2acd]',
      )}
      style={{
        backgroundImage: isActive ? ACTIVE_TAB_BG : INACTIVE_TAB_BG,
      }}
    >
      <div className="flex w-full items-center justify-center gap-2">
        <PlatformIcon platform={platform} />
        <span
          className={cn(
            'whitespace-nowrap text-lg font-semibold leading-normal',
            isActive ? 'text-white' : 'text-[#343e56]',
          )}
        >
          {platform.label}
        </span>
      </div>
    </button>
  );
}
