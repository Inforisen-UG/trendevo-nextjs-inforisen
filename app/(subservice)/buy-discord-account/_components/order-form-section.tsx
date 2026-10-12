'use client';

import Image from 'next/image';
import { useMemo, useState, type ReactNode } from 'react';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection, {
  sectionBackgroundCoverClassName,
} from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import PrimaryButton from '@/components/buttons/primary-button';
import { cn } from '@/lib/utils';
import { OrderFormQuantitySlider } from '@/components/subservice/order-form-quantity-slider';

const MIN_QUANTITY = 100;
const MAX_QUANTITY = 10000;
const QUANTITY_STEP = 100;
const PRICE_PER_UNIT = 1.2;

const DISCORD_ICON =
  '/images/platform-marquee/platform-marquee-discord-platform-icon.webp';
const TITLE_DISCORD_ICON_SIZE = 29;
const FORM_DISCORD_ICON_SIZE = 20;

function DiscordIcon({
  variant,
  alt = 'Discord icon',
}: {
  variant: 'title' | 'field';
  alt?: string;
}) {
  const size = variant === 'title' ? TITLE_DISCORD_ICON_SIZE : FORM_DISCORD_ICON_SIZE;

  return (
    <Image
      src={DISCORD_ICON}
      alt={alt}
      width={size}
      height={size}
      unoptimized
      className={cn(
        'shrink-0 object-contain',
        variant === 'title' ? 'size-[29px]' : 'size-5',
      )}
    />
  );
}

function formatCurrency(amount: number) {
  return `$${amount.toFixed(2)}`;
}

function FormField({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-[10px]', className)}>
      <label className="text-base font-medium text-[#1a1a1a] dark:text-[#f5f6f7]">
        {label}
      </label>
      {children}
    </div>
  );
}

function FieldShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex h-[52px] items-center rounded-[12px] border border-[#f1daff] bg-white px-5 dark:border-[rgba(215,215,215,0.13)] dark:bg-[rgba(116,116,116,0.16)] dark:backdrop-blur-[2px]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default function DiscordAccountOrderFormSection() {
  const [targetUrl, setTargetUrl] = useState('yourusername');
  const [quantity, setQuantity] = useState(100);

  const totalAmount = useMemo(() => quantity * PRICE_PER_UNIT, [quantity]);

  return (
    <PrimarySection
      bg="section-13"
      darkBg="section-24-dark"
      backgroundClassName={sectionBackgroundCoverClassName}
      className="py-16 lg:py-[60px]"
    >
      <div className="container flex justify-center">
        <PrimaryCard
          bg="card-8"
          darkBg="card-11-dark"
          className="relative w-full max-w-[796px] !overflow-visible rounded-[24px] border border-[rgba(203,126,247,0.45)] p-6 shadow-none ring-0 ring-offset-0 dark:border-[rgba(255,255,255,0.13)] sm:p-10 lg:p-[50px]"
        >
          <div className="relative z-10 flex flex-col gap-[30px]">
            <SectionHeading
              badge="Discord Services"
              underlineSrc="/images/subservice/shared/order-form-section-underline.svg"
              underlineWidth={203}
              title={
                <span className="flex flex-wrap items-center justify-center gap-[8px]">
                  <span className="text-[32px] font-semibold leading-none text-[#1a1a1a] dark:text-[#f5f6f7]">
                    Order Discord
                  </span>
                  <span
                    className="flex size-[54px] shrink-0 items-center justify-center rounded-[27px] border border-[#d181ff] bg-[linear-gradient(93.46deg,rgba(209,129,255,0.1)_2.85%,rgba(255,99,190,0.1)_90.53%)] pb-3 pl-[13px] pr-3 pt-[13px]"
                    aria-hidden
                  >
                    <DiscordIcon variant="title" alt="Discord" />
                  </span>
                  <span className="text-gradient text-[32px] font-semibold leading-none dark:from-[#9f00ff] dark:to-[#ff3fa2]">
                    Account
                  </span>
                </span>
              }
              titleClassName="max-w-none text-[32px] leading-none"
            />

            <div className="relative z-10 flex w-full min-w-0 flex-col gap-6 overflow-visible">
              <div className="grid gap-[15px] sm:grid-cols-2">
                <FormField label="Platform">
                  <FieldShell>
                    <div className="flex items-center gap-[5px]">
                      <DiscordIcon variant="field" />
                      <span className="text-sm leading-normal text-[#535353] dark:text-[#f5f6f7]">
                        Discord
                      </span>
                    </div>
                  </FieldShell>
                </FormField>

                <FormField label="Service Type">
                  <FieldShell>
                    <div className="flex items-center gap-[5px]">
                      <DiscordIcon variant="field" />
                      <span className="text-sm leading-normal text-[#535353] dark:text-[#f5f6f7]">
                        Account
                      </span>
                    </div>
                  </FieldShell>
                </FormField>
              </div>

              <FormField label="Discord Post URL">
                <FieldShell>
                  <input
                    type="text"
                    value={targetUrl}
                    onChange={(event) => setTargetUrl(event.target.value)}
                    placeholder="yourusername"
                    className="w-full bg-transparent text-sm text-[#535353] outline-none placeholder:text-[#535353] dark:text-[#f5f6f7] dark:placeholder:text-[#f5f6f7]"
                  />
                </FieldShell>
              </FormField>

              <OrderFormQuantitySlider value={quantity} onChange={setQuantity} ariaLabel="Account quantity" />

              <div className="flex items-center justify-between rounded-[12px] border border-[#f1daff] bg-white px-6 py-5 dark:border-[rgba(215,215,215,0.13)] dark:bg-[rgba(116,116,116,0.16)] dark:backdrop-blur-[2px]">
                <span className="text-base font-medium text-[#313131] dark:text-[#f5f6f7]">
                  TOTAL AMOUNT:
                </span>
                <span className="text-lg font-semibold text-[#ae4de8]">
                  {formatCurrency(totalAmount)}
                </span>
              </div>
            </div>

            <PrimaryButton
              type="button"
              className="w-full rounded-[12px] border-0 md:h-[52px] md:px-7 md:text-lg"
            >
              Buy Now
            </PrimaryButton>
          </div>
        </PrimaryCard>
      </div>
    </PrimarySection>
  );
}
