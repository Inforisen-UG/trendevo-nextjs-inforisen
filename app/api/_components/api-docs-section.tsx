'use client';

import { useState } from 'react';
import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';
import { apiCredentialsUrl } from '@/lib/auth-urls';
import { cn } from '@/lib/utils';
import {
  apiEndpoints,
  apiOverviewRows,
} from '@/app/api/api-docs-content';
import { data } from '@/app/api/page-data';
import ApiEndpointPanel from './api-endpoint-panel';

type ApiDocsSectionProps = {
  apiUrl: string;
};

export default function ApiDocsSection({ apiUrl }: ApiDocsSectionProps) {
  const [openId, setOpenId] = useState<string>(apiEndpoints[0]?.id ?? '');

  return (
    <PrimarySection className="overflow-hidden bg-[#FCF8FF] pb-16 pt-28 dark:bg-[#120619] sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="container max-w-4xl">
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="flex min-w-0 flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f2acd] dark:text-[#cb7ef7]">
                {data.hero.breadcrumbLabel}
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-[#232323] sm:text-5xl dark:text-white">
                {data.hero.title}
              </h1>
            </div>
            <PrimaryButton
              href={apiCredentialsUrl}
              className="hidden w-full shrink-0 sm:inline-flex sm:w-auto"
            >
              {data.hero.credentialsButtonLabel}
            </PrimaryButton>
          </div>

          <p className="max-w-3xl text-base font-medium leading-relaxed text-[#343e56] sm:text-lg dark:text-[#c1c4cc]">
            {data.hero.description}
          </p>
        </div>

        <div
          className={cn(
            'mb-8 overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white p-5 shadow-[0_1px_1px_rgba(0,0,0,0.05)] sm:p-6',
            'dark:border-white/20 dark:bg-transparent dark:shadow-none dark:[background-image:linear-gradient(-85deg,rgba(38,10,56,0.5)_7.42%,rgba(76,18,111,0.5)_107.66%)] dark:backdrop-blur-[20px]',
          )}
        >
          <h2 className="mb-4 text-xl font-semibold text-[#8f2acd] sm:text-2xl dark:text-white">
            {data.overviewTitle}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[280px] border-collapse text-left text-sm">
              <tbody>
                {apiOverviewRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-[#eee] last:border-b-0 dark:border-white/10"
                  >
                    <th
                      scope="row"
                      className="w-[40%] px-0 py-3 pr-4 align-top font-semibold text-[#232323] sm:w-48 dark:text-white"
                    >
                      {row.label}
                    </th>
                    <td className="py-3 align-top font-medium text-[#535353] dark:text-[#c1c4cc]">
                      {'valueKey' in row && row.valueKey === 'apiUrl' ? (
                        <code className="break-all font-mono text-xs text-[#8f2acd] sm:text-sm dark:text-[#d4a8ff]">
                          {apiUrl}
                        </code>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <th
                    scope="row"
                    className="w-[40%] px-0 py-3 pr-4 align-top font-semibold text-[#232323] sm:w-48 dark:text-white"
                  >
                    {data.apiKeyRowLabel}
                  </th>
                  <td className="py-3 align-top">
                    <PrimaryButton href={apiCredentialsUrl} className="h-10 px-5 text-sm">
                      {data.hero.apiKeyButtonLabel}
                    </PrimaryButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          {apiEndpoints.map((endpoint) => (
            <ApiEndpointPanel
              key={endpoint.id}
              endpoint={endpoint}
              isOpen={openId === endpoint.id}
              onToggle={() =>
                setOpenId((current) =>
                  current === endpoint.id ? '' : endpoint.id,
                )
              }
            />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
