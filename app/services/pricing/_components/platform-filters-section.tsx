'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';
import type { ServicePricingGroup } from '@/app/services/pricing/page-data';
import PricingFilterModal from './pricing-filter-modal';
import type { PricingPlatform } from './platform-data';
import { pricingPlatforms } from './platform-data';
import PlatformFilterTab from './platform-filter-tab';

const FILTER_BAR_CLASS =
  'bg-[linear-gradient(133.39deg,rgba(209,129,255,0.06)_2.85%,rgba(255,99,190,0.06)_90.53%)]';

const FILTER_BTN_BG =
  'linear-gradient(108.43deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const SEARCH_BTN_BG =
  'linear-gradient(96.45deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const MOBILE_TAB_SCROLL_CLASS =
  'flex gap-3 overflow-x-auto overscroll-x-contain scroll-smooth pb-1 snap-x snap-mandatory touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden';

function PlatformTabRowScroller({
  platforms,
  activePlatformId,
  onSelect,
}: {
  platforms: PricingPlatform[];
  activePlatformId: string;
  onSelect: (platformId: string) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollTabIntoView = useCallback((platformId: string) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const tab = scroller.querySelector<HTMLElement>(
      `[data-platform-id="${platformId}"]`,
    );
    tab?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, []);

  const handleSelect = (platformId: string) => {
    onSelect(platformId);
    requestAnimationFrame(() => scrollTabIntoView(platformId));
  };

  return (
    <div
      ref={scrollerRef}
      role="tablist"
      aria-label="Filter pricing by platform"
      className={MOBILE_TAB_SCROLL_CLASS}
    >
      {platforms.map((platform) => (
        <div
          key={platform.id}
          data-platform-id={platform.id}
          role="presentation"
          className="w-[min(72vw,196px)] shrink-0 snap-center sm:w-[188px]"
        >
          <PlatformFilterTab
            platform={platform}
            isActive={activePlatformId === platform.id}
            onSelect={() => handleSelect(platform.id)}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
}

export default function PlatformFiltersSection({
  pricingPlatforms: platforms = pricingPlatforms,
  activePlatformId,
  onActivePlatformIdChange,
  searchInput,
  onSearchInputChange,
  onSearchSubmit,
  platformGroups,
  selectedGroupIds,
  onGroupFilterApply,
}: {
  pricingPlatforms?: PricingPlatform[];
  activePlatformId: string;
  onActivePlatformIdChange: (platformId: string) => void;
  searchInput: string;
  onSearchInputChange: (query: string) => void;
  onSearchSubmit: () => void;
  platformGroups: ServicePricingGroup[];
  selectedGroupIds: string[] | null;
  onGroupFilterApply: (groupIds: string[] | null) => void;
}) {
  const firstRowPlatforms = platforms.slice(0, 6);
  const secondRowPlatforms = platforms.slice(6);
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const activeFilterCount =
    selectedGroupIds === null ? 0 : selectedGroupIds.length;

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearchSubmit();
  };

  return (
    <PrimarySection className="pb-10">
      <div className="container">
        <div className="flex flex-col gap-9">
          <div
            className={cn(
              'flex flex-col gap-6 rounded-[14px] bg-white p-4 shadow-[0px_2px_3px_rgba(0,0,0,0.1)]',
              'dark:border dark:border-white/20 dark:bg-[rgba(30,12,41,0.51)] dark:shadow-none',
            )}
          >
            <PlatformTabRowScroller
              platforms={platforms}
              activePlatformId={activePlatformId}
              onSelect={onActivePlatformIdChange}
            />

            <div className="hidden flex-col gap-6 lg:flex">
              <div className="grid grid-cols-6 justify-between gap-4">
                {firstRowPlatforms.map((platform) => (
                  <PlatformFilterTab
                    key={platform.id}
                    platform={platform}
                    isActive={activePlatformId === platform.id}
                    onSelect={() => onActivePlatformIdChange(platform.id)}
                  />
                ))}
              </div>
              <div className="grid grid-cols-6 justify-between gap-4">
                {secondRowPlatforms.map((platform) => (
                  <PlatformFilterTab
                    key={platform.id}
                    platform={platform}
                    isActive={activePlatformId === platform.id}
                    onSelect={() => onActivePlatformIdChange(platform.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className={cn(
              'rounded-2xl border border-[#d181ff] p-[18px]',
              FILTER_BAR_CLASS,
              'dark:border-[#8f2acd]/55 dark:bg-[rgba(30,12,41,0.35)]',
            )}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <button
                type="button"
                onClick={() => setFilterModalOpen(true)}
                className="flex h-14 w-full shrink-0 items-center justify-center gap-3 rounded-lg px-4 py-[10px] lg:w-[309px]"
                style={{ backgroundImage: FILTER_BTN_BG }}
              >
                <Image
                  src="/images/services/pricing/services-pricing-filter-icon.svg"
                  alt="Filter services icon"
                  aria-hidden
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
                <span className="text-lg font-semibold leading-normal text-white">
                  Filter
                  {activeFilterCount > 0 ? ` (${activeFilterCount})` : ''}
                </span>
                <Image
                  src="/images/services/pricing/services-pricing-filter-arrow-icon.svg"
                  alt="Filter dropdown arrow icon"
                  aria-hidden
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
              </button>

              <form
                onSubmit={handleSearchSubmit}
                className={cn(
                  'relative flex h-14 w-full items-center overflow-hidden rounded-xl border border-[#e0acff] bg-white/60 lg:flex-1',
                  'dark:border-[#8f2acd]/45 dark:bg-white/10',
                )}
              >
                <input
                  type="search"
                  value={searchInput}
                  onChange={(event) => onSearchInputChange(event.target.value)}
                  placeholder="Search..."
                  className={cn(
                    'h-full flex-1 border-0 bg-transparent pl-6 pr-4 text-lg font-medium leading-normal text-[#0c070f] outline-none dark:text-white',
                    'placeholder:bg-gradient-to-r placeholder:from-[#ad26ff] placeholder:to-[#ff3f85] placeholder:bg-clip-text placeholder:text-transparent',
                    'dark:placeholder:from-[#d181ff] dark:placeholder:to-[#ff99be]',
                  )}
                />
                <button
                  type="submit"
                  aria-label="Search services"
                  className="flex h-[54px] w-[101px] shrink-0 items-center justify-center rounded-br-[11px] rounded-tr-[11px]"
                  style={{ backgroundImage: SEARCH_BTN_BG }}
                >
                  <Image
                    src="/images/services/pricing/services-pricing-search-icon.svg"
                    alt="Search services icon"
                    aria-hidden
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <PricingFilterModal
        open={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        groups={platformGroups}
        selectedGroupIds={selectedGroupIds}
        onApply={(groupIds) => {
          onGroupFilterApply(groupIds);
          document
            .getElementById('pricing-service-tables')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />
    </PrimarySection>
  );
}
