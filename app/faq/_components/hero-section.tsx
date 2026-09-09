import HeroSection from '@/components/sections/hero-section';
import PrimaryButton from '@/components/buttons/primary-button';
import { data } from '@/app/faq/page-data';
import { renderText } from '@/lib/utils/renderText';

const { hero } = data;

export default function FaqHeroSection() {
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
        <PrimaryButton href="/contact-us" showArrow className="w-fit">
          {hero.primaryButtonLabel}
        </PrimaryButton>
      }
      illustration={hero.illustration}
      socialIcons={hero.socialIcons}
    />
  );
}
