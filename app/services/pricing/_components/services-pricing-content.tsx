'use client';

import { useMemo, useState, useCallback } from 'react';
import type {
  PricingPlatform,
  ServicePricingGroup,
} from '@/app/services/pricing/page-data';
import { filterPricingGroups } from '@/lib/smm-panel/map-pricing';
import PlatformFiltersSection from './platform-filters-section';
import ServicesPricingTablesSection from './services-pricing-tables-section';

export default function ServicesPricingContent({
  pricingGroups,
  pricingPlatforms,
}: {
  pricingGroups: ServicePricingGroup[];
  pricingPlatforms: PricingPlatform[];
}) {
  const [activePlatformId, setActivePlatformId] = useState(
    pricingPlatforms[0]?.id ?? 'facebook',
  );
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroupIds, setSelectedGroupIds] = useState<string[] | null>(
    null,
  );
  const [scrollToFirstMatch, setScrollToFirstMatch] = useState(false);

  const platformGroups = useMemo(
    () =>
      pricingGroups.filter((group) => group.platformId === activePlatformId),
    [pricingGroups, activePlatformId],
  );

  const filteredGroups = useMemo(
    () =>
      filterPricingGroups({
        groups: pricingGroups,
        platformId: activePlatformId,
        searchQuery,
        groupIds: selectedGroupIds,
      }),
    [pricingGroups, activePlatformId, searchQuery, selectedGroupIds],
  );

  const applySearch = () => {
    setSelectedGroupIds(null);
    setSearchQuery(searchInput.trim());
    setScrollToFirstMatch(true);
  };

  const clearScrollToMatch = useCallback(() => {
    setScrollToFirstMatch(false);
  }, []);

  const handlePlatformChange = (platformId: string) => {
    setActivePlatformId(platformId);
    setSelectedGroupIds(null);
  };

  return (
    <>
      <PlatformFiltersSection
        pricingPlatforms={pricingPlatforms}
        activePlatformId={activePlatformId}
        onActivePlatformIdChange={handlePlatformChange}
        searchInput={searchInput}
        onSearchInputChange={setSearchInput}
        onSearchSubmit={applySearch}
        platformGroups={platformGroups}
        selectedGroupIds={selectedGroupIds}
        onGroupFilterApply={setSelectedGroupIds}
      />
      <ServicesPricingTablesSection
        groups={filteredGroups}
        scrollToFirstMatch={scrollToFirstMatch}
        onScrolledToMatch={clearScrollToMatch}
      />
    </>
  );
}
