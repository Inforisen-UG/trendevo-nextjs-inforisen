import HeroSection from '@/components/sections/hero-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/how-it-works/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { renderText } from '@/lib/utils/renderText';

const { hero } = data;

export default function HowItWorksHeroSection() {
  return (
    <HeroSection
      bg={hero.bg}
      variant={hero.variant}
      decoration={hero.decoration}
      title={renderText(hero.title)}
      titleClassName={hero.titleClassName}
      description={renderText(hero.description)}
      descriptionClassName={hero.descriptionClassName}
      actions={
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <PrimaryButton href={signUpUrl} showArrow className="w-fit">
            {hero.primaryButtonLabel}
          </PrimaryButton>
          <SecondaryButton href={hero.secondaryButtonHref} className="w-fit">
            {hero.secondaryButtonLabel}
          </SecondaryButton>
        </div>
      }
      illustration={hero.illustration}
      socialIcons={hero.socialIcons}
    />
  );
}
