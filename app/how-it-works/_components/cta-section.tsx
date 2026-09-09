import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/how-it-works/page-data';
import { signUpUrl } from '@/lib/auth-urls';

const { cta } = data;

export default function HowItWorksCtaSection() {
  return (
    <CtaSection
      title={cta.title}
      description={cta.description}
      buttonsOutlet={
        <>
          <PrimaryButton
            href={signUpUrl}
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
