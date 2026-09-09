import Image from 'next/image';

import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { signUpUrl } from '@/lib/auth-urls';
import { cn } from '@/lib/utils';
import { renderText } from '@/lib/utils/renderText';

export type ThingsToKnowSectionData = {
  badge?: string;
  title: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  paragraphs: string[];
  ctaLabel: string;
  ctaHref?: string;
  titleClassName?: string;
  bg?: 'section-9' | 'section-13';
};

type ThingsToKnowSectionProps = {
  data: ThingsToKnowSectionData;
};

export default function ThingsToKnowSection({ data }: ThingsToKnowSectionProps) {
  return (
    <PrimarySection
      bg={data.bg ?? 'section-9'}
      darkBg="section-15-dark"
      className="py-16 sm:py-20"
    >
      <div className="container grid items-center gap-10 sm:gap-12 xl:grid-cols-2 xl:gap-16">
        <div className="flex flex-col items-start gap-6 sm:gap-8">
          <SectionHeading
            align="left"
            badge={data.badge}
            title={renderText(data.title)}
            badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
            titleClassName={cn(
              'whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[36px] lg:text-[40px] dark:text-[#efedf1]',
              data.titleClassName,
            )}
          />

          <div className="flex flex-col gap-4 text-base leading-relaxed text-[#404a60] sm:text-lg dark:text-[#c1c4cc]">
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{renderText(paragraph)}</p>
            ))}
          </div>

          <PrimaryButton href={data.ctaHref ?? signUpUrl} showArrow className="w-fit">
            {data.ctaLabel}
          </PrimaryButton>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] xl:mx-0 xl:max-w-none">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width ?? 952}
            height={data.image.height ?? 1024}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
