'use client';

import Image from 'next/image';
import PlatformTabHexIcon from '@/components/icons/platform-tab-hex-icon';
import WebsiteTrafficPlatformIcon from '@/components/icons/website-traffic-platform-icon';
import { cn } from '@/lib/utils';
import type { PricingPlatform } from './platform-data';

const ACTIVE_TAB_CLASS =
  'bg-[linear-gradient(102.9deg,rgb(209,129,255)_2.85%,rgb(255,99,190)_90.53%)]';

const INACTIVE_TAB_CLASS =
  'bg-[linear-gradient(111.82deg,rgba(214,144,255,0.08)_4.77%,rgba(215,148,255,0.08)_39.51%,rgba(179,100,226,0.08)_74.24%)] dark:bg-[rgba(255,255,255,0.07)]';

function PlatformIcon({
  platform,
  isActive,
}: {
  platform: PricingPlatform;
  isActive: boolean;
}) {
  const { icon, iconClassName, composedIcon, id } = platform;
  const isSvg = icon.endsWith('.svg');

  if (composedIcon && id === 'soundcloud') {
    return (
      <div className="relative size-[38px] shrink-0">
        <Image
          src={icon}
          alt=""
          aria-hidden
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    );
  }

  if (composedIcon && id === 'website-traffic') {
    return (
      <div className="relative flex size-[38px] shrink-0 items-center justify-center">
        <PlatformTabHexIcon
          isActive={isActive}
          className="pointer-events-none absolute left-1/2 top-1/2 size-[38px] -translate-x-1/2 -translate-y-1/2"
        />
        <WebsiteTrafficPlatformIcon className="relative z-10" />
      </div>
    );
  }

  return (
    <div className="relative flex size-[38px] shrink-0 items-center justify-center">
      <PlatformTabHexIcon
        isActive={isActive}
        className="pointer-events-none absolute left-1/2 top-1/2 size-[38px] -translate-x-1/2 -translate-y-1/2"
      />
      <Image
        src={icon}
        alt=""
        aria-hidden
        width={20}
        height={20}
        className={cn('relative z-10 size-5 object-contain', iconClassName)}
        unoptimized={isSvg}
      />
    </div>
  );
}

export default function PlatformFilterTab({
  platform,
  isActive,
  onSelect,
  className,
}: {
  platform: PricingPlatform;
  isActive: boolean;
  onSelect: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={cn(
        'flex w-full touch-manipulation flex-col items-start justify-center rounded-[8px] px-4 py-[10px] transition-all lg:max-w-[220px]',
        !isActive &&
          'border-[0.5px] border-solid border-[#8f2acd] dark:border-[#c081e6]/55',
        isActive && 'shadow-sm dark:shadow-[0_0_20px_rgba(209,129,255,0.25)]',
        isActive ? ACTIVE_TAB_CLASS : INACTIVE_TAB_CLASS,
        className,
      )}
    >
      <div className="flex w-full items-center justify-center gap-2">
        <PlatformIcon platform={platform} isActive={isActive} />
        <span
          className={cn(
            'whitespace-nowrap text-lg font-semibold leading-normal',
            isActive ? 'text-white' : 'text-[#343e56] dark:text-[#efedf1]',
          )}
        >
          {platform.label}
        </span>
      </div>
    </button>
  );
}
