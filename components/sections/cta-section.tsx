import Image from 'next/image';
import type { ReactNode } from 'react';

import PrimarySection from '@/components/sections/primary-section';
import { resolveCtaDescription } from '@/lib/stats';
import { cn } from '@/lib/utils';
import { renderText } from '@/lib/utils/renderText';

const CTA_GRADIENT =
  'linear-gradient(219.3deg, rgb(255, 213, 245) 8.67%, rgb(254, 251, 255) 41.83%, rgb(236, 205, 255) 89.38%)';

const CTA_CARD_DARK_BG =
  "bg-[url('/images/backgrounds/section-bg-12-dark.svg')]";

type CtaSectionProps = {
  title: ReactNode;
  description: string;
  buttonsOutlet?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export default async function CtaSection({
  title,
  description,
  buttonsOutlet,
  imageSrc = '/images/cta/cta-character-illustration.webp',
  imageAlt = 'Start growing with TrendEvo',
  className,
}: CtaSectionProps) {
  const resolvedDescription = await resolveCtaDescription(description);

  return (
    <PrimarySection
      className={cn('py-12 sm:py-16', className)}
    >
      <div className="container">
        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-0 z-20 hidden origin-bottom scale-[1.08] lg:left-[66px] lg:block">
            <div className="relative h-[594px] w-[427px] max-w-[38vw] overflow-visible">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={552}
                height={594}
                className="absolute bottom-0 h-full w-[132%] max-w-none -left-[24%]"
                sizes="427px"
                priority
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] lg:min-h-[486px]">
            <div
              aria-hidden
              className="absolute inset-0 dark:hidden"
              style={{ backgroundImage: CTA_GRADIENT }}
            />

            <div
              aria-hidden
              className={cn(
                'absolute inset-0 hidden bg-cover bg-center bg-no-repeat dark:block',
                CTA_CARD_DARK_BG,
              )}
            />

            <div className="pointer-events-none absolute inset-0 opacity-[0.06] dark:hidden">
              <Image
                src="/images/cta/cta-hex-pattern-1-decoration.png"
                alt="Decorative hex pattern background"
                aria-hidden
                width={1200}
                height={600}
                className="absolute -left-[10%] top-[8%] h-auto w-[70%] max-w-none"
                unoptimized
              />
              <Image
                src="/images/cta/cta-hex-pattern-2-decoration.png"
                alt="Decorative hex pattern background"
                aria-hidden
                width={1200}
                height={600}
                className="absolute -right-[8%] bottom-[4%] h-auto w-[65%] max-w-none"
                unoptimized
              />
            </div>

            <div className="relative z-10 flex flex-col lg:min-h-[486px] lg:grid lg:grid-cols-[minmax(0,427px)_minmax(0,732px)] lg:items-stretch lg:justify-between lg:gap-12">
              <div aria-hidden className="hidden lg:block" />

              <div className="flex flex-col gap-6 px-4 py-8 sm:gap-[34px] sm:px-6 sm:py-10 lg:col-start-2 lg:justify-center lg:px-[66px] lg:py-[72px]">
                <div className="relative flex flex-col gap-5 sm:gap-8">
                  <div className="pointer-events-none absolute -left-8 top-[-75px] hidden h-[485px] w-[min(934px,120%)] opacity-[0.06] lg:block dark:lg:hidden">
                    <Image
                      src="/images/cta/cta-world-map-decoration.png"
                      alt="Decorative world map background"
                      aria-hidden
                      fill
                      className="object-cover object-left-top"
                      sizes="934px"
                      unoptimized
                    />
                  </div>

                  <h2 className="relative z-10 text-2xl font-semibold leading-[1.35] tracking-[0.48px] text-[#313131] sm:text-[32px] md:text-[40px] lg:text-[48px] dark:text-white">
                    {typeof title === 'string' ? renderText(title) : title}
                  </h2>
                  <p className="relative z-10 text-sm font-normal leading-normal text-[#13203b] sm:text-base dark:text-white">
                    {renderText(resolvedDescription)}
                  </p>
                </div>

                {buttonsOutlet ? (
                  <div className="relative z-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center [&>*:nth-child(2)]:dark:border-[#CB7EF7] [&>*:nth-child(2)]:dark:bg-[#FFFFFF1A] [&>*:nth-child(2)]:dark:bg-none [&>*:nth-child(2)]:dark:bg-clip-border [&>*:nth-child(2)]:dark:text-white [&>*:nth-child(2)]:dark:hover:bg-[rgba(255,255,255,0.15)]">
                    {buttonsOutlet}
                  </div>
                ) : null}
              </div>

              <div className="relative mx-auto mt-4 h-[220px] w-full max-w-[280px] shrink-0 pb-2 sm:mt-6 sm:h-[280px] sm:max-w-[340px] sm:pb-4 md:h-[320px] md:max-w-[380px] lg:hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 640px) 280px, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
