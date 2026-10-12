'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ServicePricingGroup } from '@/app/services/pricing/page-data';

const APPLY_BTN_BG =
  'linear-gradient(108.43deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

type PricingFilterModalProps = {
  open: boolean;
  onClose: () => void;
  groups: ServicePricingGroup[];
  selectedGroupIds: string[] | null;
  onApply: (groupIds: string[] | null) => void;
};

export default function PricingFilterModal({
  open,
  onClose,
  groups,
  selectedGroupIds,
  onApply,
}: PricingFilterModalProps) {
  const [mounted, setMounted] = useState(false);
  const [draftGroupIds, setDraftGroupIds] = useState<string[]>([]);
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(
    groups[0]?.id ?? null,
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    setDraftGroupIds(selectedGroupIds ?? []);
    setExpandedGroupId(groups[0]?.id ?? null);
  }, [open, selectedGroupIds, groups]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  const toggleGroup = (groupId: string) => {
    setDraftGroupIds((current) =>
      current.includes(groupId)
        ? current.filter((id) => id !== groupId)
        : [...current, groupId],
    );
  };

  const handleSelectAll = () => {
    setDraftGroupIds(groups.map((group) => group.id));
  };

  const handleClearSelection = () => {
    setDraftGroupIds([]);
  };

  const resolveAppliedGroupIds = (): string[] | null => {
    if (draftGroupIds.length === 0 || draftGroupIds.length >= groups.length) {
      return null;
    }

    return draftGroupIds;
  };

  const selectionHint =
    draftGroupIds.length === 0
      ? 'No category selected — all services will show'
      : draftGroupIds.length >= groups.length
        ? 'All categories selected — all services will show'
        : `${draftGroupIds.length} of ${groups.length} categories selected`;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="flex max-h-[min(90dvh,820px)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#d181ff] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pricing-filter-modal-title"
      >
        <div className="flex items-center justify-between border-b border-[#e0acff] px-6 py-4">
          <h2
            id="pricing-filter-modal-title"
            className="text-xl font-semibold text-[#ae4de8]"
          >
            Filter by category
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filter"
            className="flex size-10 items-center justify-center rounded-full border border-[#e0acff] text-[#0c070f] transition hover:bg-[#faf5ff]"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-b border-[#f0e6ff] px-6 py-3">
          <button
            type="button"
            onClick={handleSelectAll}
            className="rounded-lg border border-[#e0acff] px-4 py-2 text-sm font-medium text-[#ae4de8]"
          >
            Select all
          </button>
          <button
            type="button"
            onClick={handleClearSelection}
            className="rounded-lg border border-[#e0acff] px-4 py-2 text-sm font-medium text-[#0c070f]"
          >
            Clear selection
          </button>
          <span className="text-sm text-[#5c5c5c]">{selectionHint}</span>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {groups.length === 0 ? (
            <p className="py-8 text-center text-[#5c5c5c]">
              No categories for this platform.
            </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {groups.map((group) => {
                const isExpanded = expandedGroupId === group.id;
                const checked = draftGroupIds.includes(group.id);

                return (
                  <li
                    key={group.id}
                    className="overflow-hidden rounded-xl border border-[#e0acff]/80"
                  >
                    <div className="flex items-center gap-3 bg-[#faf5ff] px-4 py-3">
                      <label
                        className="flex size-5 shrink-0 cursor-pointer items-center justify-center"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleGroup(group.id)}
                          className="peer sr-only"
                        />
                        <span
                          className={cn(
                            'flex size-5 items-center justify-center rounded border-2 transition-colors',
                            'border-[#d181ff] bg-white',
                            'peer-checked:border-[#ae4de8] peer-checked:bg-[#ae4de8]',
                            'peer-focus-visible:ring-2 peer-focus-visible:ring-[#ae4de8]/35',
                          )}
                          aria-hidden
                        >
                          <Check
                            className={cn(
                              'size-3.5 text-white transition-opacity',
                              checked ? 'opacity-100' : 'opacity-0',
                            )}
                            strokeWidth={3}
                          />
                        </span>
                      </label>
                      <button
                        type="button"
                        className="flex min-w-0 flex-1 items-center gap-3 text-left"
                        onClick={() =>
                          setExpandedGroupId((current) =>
                            current === group.id ? null : group.id,
                          )
                        }
                        aria-expanded={isExpanded}
                      >
                        <div className="relative size-7 shrink-0">
                          <Image
                            src={group.platformIcon}
                            alt=""
                            aria-hidden
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <span className="truncate text-base font-semibold text-[#ae4de8]">
                          {group.title}
                        </span>
                        <span className="ml-auto shrink-0 text-sm text-[#5c5c5c]">
                          {group.rows.length} services
                        </span>
                      </button>
                    </div>

                    {isExpanded ? (
                      <div className="max-h-56 overflow-auto border-t border-[#f0e6ff]">
                        <table className="w-full min-w-[640px] text-left text-sm">
                          <thead className="sticky top-0 bg-white">
                            <tr className="border-b border-[#f0e6ff] text-[#5c5c5c]">
                              <th className="px-4 py-2 font-medium">ID</th>
                              <th className="px-4 py-2 font-medium">Service</th>
                              <th className="px-4 py-2 font-medium">Rate / 1k</th>
                              <th className="px-4 py-2 font-medium">Min</th>
                              <th className="px-4 py-2 font-medium">Max</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.rows.map((row) => (
                              <tr
                                key={row.id}
                                className="border-b border-dashed border-[#f0e6ff] last:border-0"
                              >
                                <td className="px-4 py-2 font-medium text-[#0c070f]">
                                  {row.id}
                                </td>
                                <td className="max-w-[240px] truncate px-4 py-2 text-[#0c070f]">
                                  {row.serviceName}
                                </td>
                                <td className="px-4 py-2 text-[#0c070f]">
                                  {row.ratePer1000}
                                </td>
                                <td className="px-4 py-2 text-[#0c070f]">
                                  {row.minOrder}
                                </td>
                                <td className="px-4 py-2 text-[#0c070f]">
                                  {row.maxOrder}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-3 border-t border-[#e0acff] px-6 py-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="h-12 rounded-lg border border-[#e0acff] px-6 text-base font-medium text-[#0c070f]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onApply(resolveAppliedGroupIds());
              onClose();
            }}
            className={cn(
              'h-12 rounded-lg px-8 text-base font-semibold text-white',
            )}
            style={{ backgroundImage: APPLY_BTN_BG }}
          >
            Apply filters
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
