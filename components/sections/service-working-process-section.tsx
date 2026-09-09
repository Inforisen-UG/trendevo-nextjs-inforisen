import Image from 'next/image';
import type { ReactNode } from 'react';

import PrimaryCard, {
  type CardBgKey,
  type CardDarkBgKey,
} from '@/components/cards/primary-card';
import PrimarySection, {
  type SectionBgKey,
  type SectionDarkBgKey,
  sectionBackgroundCoverClassName,
} from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import { renderText } from '@/lib/utils/renderText';

export type ServiceWorkingProcessStep = {
  number: string;
  title: ReactNode;
  description: string;
};

export type ServiceWorkingProcessSectionProps = {
  badge: string;
  title: ReactNode;
  subtitle: string;
  steps: ServiceWorkingProcessStep[];
  bg?: SectionBgKey;
  darkBg?: SectionDarkBgKey;
  cardBg?: CardBgKey;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  underlineSrc?: string;
  underlineWidth?: number;
  stepHexSrc?: string;
  stepHexDarkSrc?: string;
  flowConnectorsSrc?: string;
  titleBulletSrc?: string;
  showFlowConnectors?: boolean;
  showTitleBullet?: boolean;
  centerOrphanStep?: boolean;
  stepsGridClassName?: string;
};

const DEFAULT_STEP_HEX_SRC = '/images/service-smm-panel/facebook-smm-panel-working-process-step-hex-decoration.svg';
const DEFAULT_STEP_HEX_DARK_SRC = '/images/why-choose-us/why-choose-us-hex-icon-dark-decoration.svg';
const DEFAULT_FLOW_CONNECTORS_SRC =
  '/images/service-smm-panel/facebook-smm-panel-working-process-flow-connectors-decoration.svg';
const DEFAULT_TITLE_BULLET_SRC = '/images/why-choose-us/why-choose-us-title-bullet-decoration.svg';

const CARD_DARK_BG_MAP: Partial<Record<CardBgKey, CardDarkBgKey>> = {
  'card-9': 'card-9-dark',
};

function ProcessStepCard({
  number,
  title,
  description,
  cardBg,
  stepHexSrc,
  stepHexDarkSrc,
  titleBulletSrc,
  showTitleBullet = true,
}: ServiceWorkingProcessStep & {
  cardBg: CardBgKey;
  stepHexSrc: string;
  stepHexDarkSrc: string;
  titleBulletSrc: string;
  showTitleBullet?: boolean;
}) {
  return (
    <PrimaryCard
      bg={cardBg}
      darkBg={CARD_DARK_BG_MAP[cardBg]}
      className="relative flex h-full min-h-[240px] flex-col gap-6 rounded-xl border border-[#e1d8ff] p-3 ring-0 dark:border-[#FFFFFF1F]"
    >
      <div className="relative z-10 flex h-full flex-col gap-6">
        <div className="relative flex size-[60px] shrink-0 items-center justify-center sm:size-[82px]">
          <Image
            src={stepHexSrc}
            alt="Decorative working process step hexagon background"
            aria-hidden
            width={82}
            height={82}
            className="absolute inset-0 size-[60px] sm:size-[82px] dark:hidden"
          />
          <Image
            src={stepHexDarkSrc}
            alt="Decorative working process step hexagon background for dark mode"
            aria-hidden
            width={82}
            height={82}
            className="absolute inset-0 hidden size-[60px] sm:size-[82px] dark:block"
          />
          <span className="text-gradient relative z-10 text-[22px] font-semibold leading-none sm:text-[28px] dark:bg-none dark:bg-clip-border dark:text-white">
            {number}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div className={cn('flex items-center', showTitleBullet ? 'gap-2' : '')}>
            {showTitleBullet ? (
              <Image
                src={titleBulletSrc}
                alt="Section title bullet decoration"
                aria-hidden
                width={10}
                height={10}
                className="size-2.5 shrink-0"
              />
            ) : null}
            <h3 className="text-lg font-semibold leading-normal tracking-[0.2px] text-[#232323] sm:text-xl dark:text-white">
              {title}
            </h3>
          </div>
          <p className="text-base leading-normal text-[#5a5a5a] dark:text-[#dfe0e4]">
            {renderText(description)}
          </p>
        </div>
      </div>
    </PrimaryCard>
  );
}

export default function ServiceWorkingProcessSection({
  badge,
  title,
  subtitle,
  steps,
  bg = 'section-9',
  darkBg = 'section-15-dark',
  cardBg = 'card-9',
  className,
  titleClassName,
  subtitleClassName,
  underlineSrc,
  underlineWidth,
  stepHexSrc = DEFAULT_STEP_HEX_SRC,
  stepHexDarkSrc = DEFAULT_STEP_HEX_DARK_SRC,
  flowConnectorsSrc = DEFAULT_FLOW_CONNECTORS_SRC,
  titleBulletSrc = DEFAULT_TITLE_BULLET_SRC,
  showFlowConnectors = true,
  showTitleBullet = true,
  centerOrphanStep = false,
  stepsGridClassName,
}: ServiceWorkingProcessSectionProps) {
  const orphanStepClasses =
    centerOrphanStep && steps.length % 2 !== 0
      ? '[&>*:last-child]:sm:col-span-2 [&>*:last-child]:sm:max-w-[calc(50%-0.75rem)] [&>*:last-child]:sm:justify-self-center xl:[&>*:last-child]:col-span-4 xl:[&>*:last-child]:max-w-[calc(25%-0.5625rem)] xl:[&>*:last-child]:justify-self-center'
      : centerOrphanStep && steps.length % 4 !== 0
        ? 'xl:[&>*:last-child]:col-span-4 xl:[&>*:last-child]:max-w-[calc(25%-0.5625rem)] xl:[&>*:last-child]:justify-self-center'
        : undefined;
  return (
    <PrimarySection
      bg={bg}
      darkBg={darkBg}
      backgroundClassName={sectionBackgroundCoverClassName}
      className={cn('relative overflow-hidden py-16 sm:py-20', className)}
    >
   
      <div className="container flex flex-col gap-10 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          underlineSrc={underlineSrc}
          underlineWidth={underlineWidth}
          badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
          titleClassName={cn(
            titleClassName,
            'text-[#13203b] dark:text-[#efedf1]',
          )}
          subtitleClassName={cn(
            subtitleClassName,
            'text-[#4f586d] dark:text-[#c1c4cc]',
          )}
        />

        <div className="flex flex-col items-center gap-3">
          <div
            className={cn(
              'grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6',
              orphanStepClasses,
              stepsGridClassName,
            )}
          >
            {steps.map((step) => (
              <ProcessStepCard
                key={step.number}
                {...step}
                cardBg={cardBg}
                stepHexSrc={stepHexSrc}
                stepHexDarkSrc={stepHexDarkSrc}
                titleBulletSrc={titleBulletSrc}
                showTitleBullet={showTitleBullet}
              />
            ))}
          </div>

          {showFlowConnectors ? (
            <Image
              src={flowConnectorsSrc}
              alt="Decorative working process flow connectors"
              aria-hidden
              width={1123}
              height={74}
              className="hidden h-auto w-full max-w-[1123px] xl:block"
              unoptimized
            />
          ) : null}
        </div>
      </div>
    </PrimarySection>
  );
}
