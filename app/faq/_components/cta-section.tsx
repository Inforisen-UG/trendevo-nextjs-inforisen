import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/faq/page-data';

const { cta } = data;

export default function FaqCtaSection() {
  return (
    <CtaSection
      title={cta.title}
      description={cta.description}
      buttonsOutlet={
        <>
          <PrimaryButton
            href={cta.primaryButtonHref}
            className="border-[1.5px] border-[#cc7aff]"
          >
            {cta.primaryButtonLabel}
          </PrimaryButton>
          <SecondaryButton href={cta.secondaryButtonHref}>
            {cta.secondaryButtonLabel}
          </SecondaryButton>
        </>
      }
    />
  );
}
