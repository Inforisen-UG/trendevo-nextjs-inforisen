'use client';

import { useEffect, useState } from 'react';
import PrimarySection from '@/components/sections/primary-section';
import type { ServicePricingGroup as ServicePricingGroupData } from './services-pricing-data';
import ServicePricingGroup from './service-pricing-group';

export default function ServicesPricingTablesSection({
  groups,
  scrollToFirstMatch = false,
  onScrolledToMatch,
}: {
  groups: ServicePricingGroupData[];
  scrollToFirstMatch?: boolean;
  onScrolledToMatch?: () => void;
}) {
  const [openGroupId, setOpenGroupId] = useState(groups[0]?.id ?? '');

  useEffect(() => {
    setOpenGroupId((current) => {
      if (current && groups.some((group) => group.id === current)) {
        return current;
      }
      return groups[0]?.id ?? '';
    });
  }, [groups]);

  useEffect(() => {
    if (!scrollToFirstMatch) return;

    if (groups[0]?.id) {
      setOpenGroupId(groups[0].id);
    }

    requestAnimationFrame(() => {
      if (groups.length === 0) {
        document
          .getElementById('pricing-service-tables')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        document
          .getElementById(`pricing-group-${groups[0].id}`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      onScrolledToMatch?.();
    });
  }, [scrollToFirstMatch, groups, onScrolledToMatch]);

  const toggleGroup = (groupId: string) => {
    setOpenGroupId((current) => (current === groupId ? '' : groupId));
  };

  return (
    <PrimarySection id="pricing-service-tables" className="pb-16">
      <div className="container">
        <div className="flex flex-col gap-[18px]">
          {groups.length === 0 ? (
            <p className="rounded-xl border border-[#e0acff] bg-white/80 px-6 py-10 text-center text-lg font-medium text-[#0c070f]">
              No services match your search for this platform.
            </p>
          ) : null}
          {groups.map((group) => (
            <ServicePricingGroup
              key={group.id}
              group={group}
              isOpen={openGroupId === group.id}
              onToggle={() => toggleGroup(group.id)}
            />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
