'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
import {
  FaqAccordion,
  FaqAccordionContent,
  FaqAccordionItem,
  FaqAccordionTrigger,
} from '@/components/ui/faq-accordion';
import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection, {
  type SectionBgKey,
  type SectionDarkBgKey,
} from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import { renderText } from '@/lib/utils/renderText';

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionData = {
  label?: string;
  title?: string | ReactNode;
  subtitle?: string;
  items?: FaqItem[];
  bg?: SectionBgKey | null;
  darkBg?: SectionDarkBgKey | null;
  className?: string;
  ctaTitle?: string;
  ctaSubtitle?: ReactNode;
  ctaButtonLabel?: string;
  ctaButtonHref?: string;
};

export type FaqSectionProps = {
  data?: FaqSectionData;
};

function splitFaqColumns(items: FaqItem[]) {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
}

function FaqColumn({ items, columnId }: { items: FaqItem[]; columnId: string }) {
  return (
    <div className="rounded-xl border border-[#f2e9f8] bg-[rgba(143,42,205,0.1)] p-3 sm:p-4 dark:border-[rgba(215,148,255,0)] dark:bg-[rgba(112,23,165,0.11)]">
      <FaqAccordion type="single" collapsible>
        {items.map((item, index) => (
          <FaqAccordionItem key={item.question} value={`${columnId}-${index}`}>
            <FaqAccordionTrigger>{renderText(item.question)}</FaqAccordionTrigger>
            <FaqAccordionContent>{renderText(item.answer)}</FaqAccordionContent>
          </FaqAccordionItem>
        ))}
      </FaqAccordion>
    </div>
  );
}

function FaqSectionDecorations() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1920px] -translate-x-1/2 lg:block"
    >
      <div className="absolute bottom-10 left-[-4.36%] flex h-[220px] w-[209px] items-center justify-center">
        <div className="rotate-[-4deg]">
          <div className="relative h-[212px] w-[211px] overflow-hidden blur-[3px]">
            <Image
              src="/images/faq/faq-decorative-purple-question-decoration.webp"
              alt="Decorative purple FAQ question mark"
              aria-hidden
              width={224}
              height={234}
              loading="lazy"
              className="absolute left-[-26.42%] top-[-24.18%] h-[148.81%] w-[149.7%] max-w-none"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-[91.5625%] top-[27px] h-[212px] w-[217.591px] overflow-hidden blur-[3px]">
        <Image
          src="/images/faq/faq-decorative-orange-question-decoration.webp"
          alt="Decorative orange FAQ question mark"
          aria-hidden
          width={225}
          height={225}
          loading="lazy"
          className="absolute left-[-23.27%] top-[-24.25%] h-[146.52%] w-[142.76%] max-w-none rotate-[1.5deg]"
        />
      </div>
    </div>
  );
}

export default function FaqSection({ data = {} }: FaqSectionProps) {
  const {
    label = 'FAQ',
    title = 'gt<Frequently> Asked Questions',
    subtitle = 'Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.',
    items = [],
    bg = 'section-7',
    darkBg = 'section-21-dark',
    className,
    ctaTitle = 'Still have questions?',
    ctaSubtitle = (
      <>
        Can&apos;t find the answer you&apos;re looking for? Please{' '}
        <span className="text-gradient font-semibold">get in touch</span> with our team.
      </>
    ),
    ctaButtonLabel = 'Get in Touch',
    ctaButtonHref = '/contact-us',
  } = data;
  const [leftColumn, rightColumn] = splitFaqColumns(items);
  const hasFaqItems = items.length > 0;

  return (
    <PrimarySection
      id="faq"
      bg={bg ?? undefined}
      darkBg={darkBg ?? undefined}
      className={cn('overflow-hidden py-12 sm:py-16 lg:py-20', className)}
    >
      <FaqSectionDecorations />

      <div className="container relative z-10 flex flex-col gap-8 sm:gap-12">
        <SectionHeading
          badge={label}
          title={title}
          subtitle={subtitle}
          underlineWidth={44}
          titleClassName="max-w-[996px] text-2xl tracking-wide sm:text-4xl md:text-5xl"
          subtitleClassName="max-w-3xl text-sm sm:text-base md:text-lg"
          className="mx-auto"
        />

        {hasFaqItems ? (
          <div className="grid items-start gap-4 sm:gap-6 lg:grid-cols-2">
            <FaqColumn items={leftColumn} columnId="left" />
            <FaqColumn items={rightColumn} columnId="right" />
          </div>
        ) : null}

        <div
          className={cn(
            'mx-auto w-full max-w-4xl rounded-[14px] border border-[#d181ff]/60 px-4 py-4 sm:px-7 sm:py-[22px]',
            'bg-[linear-gradient(119.56deg,rgb(255,255,255)_3.42%,rgb(255,243,253)_55.68%,rgb(255,255,255)_107.93%)]',
            'dark:border-[#8a22c8]/60 dark:bg-[#260d35] dark:bg-none',
          )}
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1">
                <Image
                  src="/images/faq/faq-cta-question-dice-decoration.webp"
                  alt="Decorative FAQ call-to-action dice illustration"
                  width={36}
                  height={34}
                  className="size-9 rotate-[-20deg] object-contain"
                />
                <h3 className="text-gradient text-sm font-medium sm:text-base">
                  {ctaTitle}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#071431] sm:text-base dark:text-white">
                {typeof ctaSubtitle === 'string'
                  ? renderText(ctaSubtitle)
                  : ctaSubtitle}
              </p>
            </div>
            <PrimaryButton
              href={ctaButtonHref}
              className="w-full shrink-0 rounded-xl border-0 shadow-[inset_0_2px_8px_rgba(255,255,255,0.12)] sm:w-auto"
            >
              {ctaButtonLabel}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
