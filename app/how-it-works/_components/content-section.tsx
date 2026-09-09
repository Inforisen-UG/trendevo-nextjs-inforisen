import IconSectionCard from '@/app/(legal)/_components/icon-section-card';
import {
  legalBodyTextClassName,
  legalSectionClassName,
  legalSubheadingClassName,
} from '@/app/(legal)/_components/primitives';
import PrimarySection from '@/components/sections/primary-section';
import { data, type HowItWorksSubsection } from '@/app/how-it-works/page-data';
import { cn } from '@/lib/utils';
import { renderText } from '@/lib/utils/renderText';

function ContentTable({
  rows,
  headers = ['Detail', 'Why It Matters'],
}: {
  rows: NonNullable<HowItWorksSubsection['table']>;
  headers?: [string, string];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ead4fb] dark:border-white/10">
            <th className="px-3 py-3 text-sm font-semibold text-[#13203b] sm:px-4 sm:text-base dark:text-white">
              {headers[0]}
            </th>
            <th className="px-3 py-3 text-sm font-semibold text-[#13203b] sm:px-4 sm:text-base dark:text-white">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              className="border-b border-[#f2e9f8] last:border-0 dark:border-white/10"
            >
              <td className="px-3 py-3 align-top text-sm font-medium text-[#13203b] sm:px-4 sm:text-base dark:text-white">
                {row.label}
              </td>
              <td className={cn('px-3 py-3 align-top sm:px-4', legalBodyTextClassName)}>
                {renderText(row.value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SubsectionContent({ subsection }: { subsection: HowItWorksSubsection }) {
  return (
    <>
      {subsection.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{renderText(paragraph)}</p>
      ))}
      {subsection.bullets?.length ? (
        <ul className="list-disc space-y-2 pl-5">
          {subsection.bullets.map((item) => (
            <li key={item}>{renderText(item)}</li>
          ))}
        </ul>
      ) : null}
      {subsection.numbered?.length ? (
        <ol className="list-decimal space-y-2 pl-5">
          {subsection.numbered.map((item) => (
            <li key={item}>{renderText(item)}</li>
          ))}
        </ol>
      ) : null}
      {subsection.table ? (
        <ContentTable
          rows={subsection.table}
          headers={subsection.tableHeaders}
        />
      ) : null}
    </>
  );
}

function SectionBody({
  paragraphs,
  bullets,
}: {
  paragraphs?: string[];
  bullets?: string[];
}) {
  return (
    <div className={cn('space-y-4', legalBodyTextClassName)}>
      {paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{renderText(paragraph)}</p>
      ))}
      {bullets?.length ? (
        <ul className="list-disc space-y-2 pl-5">
          {bullets.map((item) => (
            <li key={item}>{renderText(item)}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function HowItWorksContentSection() {
  return (
    <PrimarySection bg="section-4" darkBg="section-18-dark" className={legalSectionClassName}>
      <div className="container flex flex-col gap-8 sm:gap-10">
        {data.contentSections.map((section) => (
          <IconSectionCard
            key={section.id ?? section.title}
            icon={section.icon}
            title={section.title}
            intro={
              <>
                {section.intro ? (
                  <p>{renderText(section.intro)}</p>
                ) : null}
                <SectionBody paragraphs={section.paragraphs} bullets={section.bullets} />
              </>
            }
            subsections={section.subsections?.map((subsection) => ({
              title: subsection.title,
              content: <SubsectionContent subsection={subsection} />,
            }))}
          />
        ))}

        <div id="ordering-mistakes" className="scroll-mt-28">
          <div className="mb-6 flex flex-col gap-3">
            <h2 className={legalSubheadingClassName}>{data.mistakes.title}</h2>
            <p className={legalBodyTextClassName}>{renderText(data.mistakes.subtitle)}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.mistakes.items.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#e6e6e6] bg-white p-6 dark:border-white/20 dark:bg-transparent"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#ffe4e6] text-sm font-semibold text-[#8f2acd] dark:bg-white/10 dark:text-[#ae4de8]">
                    {index + 1}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-[#1a1a1a] dark:text-white">
                      {item.title}
                    </h3>
                    <p className={legalBodyTextClassName}>{renderText(item.description)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
