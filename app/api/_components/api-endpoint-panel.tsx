'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ApiEndpoint } from '@/app/api/api-docs-content';
import ApiCodeBlock from './api-code-block';
import ApiParamsTable from './api-params-table';

const GROUP_HEADER_BG =
  'linear-gradient(154.04deg, rgba(224, 171, 255, 0.2) 4.77%, rgba(255, 177, 207, 0.2) 39.51%, rgba(255, 137, 206, 0.2) 74.24%)';

const TOGGLE_BTN_BG =
  'linear-gradient(93.46deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

type ApiEndpointPanelProps = {
  endpoint: ApiEndpoint;
  isOpen: boolean;
  onToggle: () => void;
};

export default function ApiEndpointPanel({
  endpoint,
  isOpen,
  onToggle,
}: ApiEndpointPanelProps) {
  return (
    <div
      id={`api-endpoint-${endpoint.id}`}
      className={cn(
        'flex scroll-mt-28 flex-col',
        isOpen
          ? 'overflow-hidden rounded-2xl border-[0.6px] border-[rgba(143,42,205,0.51)] dark:border-[#8f2acd]/45'
          : 'gap-0',
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`api-endpoint-panel-${endpoint.id}`}
        id={`api-endpoint-trigger-${endpoint.id}`}
        className={cn(
          'flex w-full items-center justify-between gap-3 p-4 text-left dark:border-[#8f2acd]/45',
          isOpen
            ? 'rounded-none border-0 border-b-[0.6px] border-b-[rgba(143,42,205,0.35)] dark:border-b-[#8f2acd]/35'
            : 'rounded-xl border-[0.6px] border-[rgba(143,42,205,0.51)]',
        )}
        style={{ backgroundImage: GROUP_HEADER_BG }}
      >
        <span className="min-w-0 truncate text-lg font-semibold tracking-[0.2px] text-[#ae4de8] sm:text-xl">
          {endpoint.title}
        </span>
        <div
          className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:size-[42px]"
          style={{ backgroundImage: TOGGLE_BTN_BG }}
        >
          <Image
            src="/images/services/pricing/services-pricing-accordion-arrow-icon.svg"
            alt=""
            aria-hidden
            width={34}
            height={34}
            className={cn(
              'size-7 transition-transform duration-200 sm:size-[34px]',
              isOpen ? 'rotate-180' : '',
            )}
          />
        </div>
      </button>

      {isOpen ? (
        <div
          id={`api-endpoint-panel-${endpoint.id}`}
          role="region"
          aria-labelledby={`api-endpoint-trigger-${endpoint.id}`}
          className="space-y-6 bg-white px-4 py-5 sm:px-6 sm:py-6 dark:bg-[#120619]/80"
        >
          {endpoint.paramGroups.map((group, index) => (
            <div key={`${endpoint.id}-group-${index}`} className="space-y-3">
              {group.label ? (
                <p className="text-sm font-semibold text-[#8f2acd] dark:text-[#d4a8ff]">
                  {group.label}
                </p>
              ) : null}
              <ApiParamsTable rows={group.rows} />
            </div>
          ))}

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#232323] dark:text-white">
              {endpoint.exampleLabel ?? 'Example response'}
            </p>
            <ApiCodeBlock code={endpoint.exampleCode} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
