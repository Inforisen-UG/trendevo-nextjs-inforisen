import type { Metadata } from 'next';
import { data as howItWorksPageData } from '@/app/how-it-works/page-data';
import HowItWorksContentSection from './_components/content-section';
import HowItWorksCtaSection from './_components/cta-section';
import HowItWorksFaqSection from './_components/faq-section';
import HowItWorksHeroSection from './_components/hero-section';
import HowItWorksProcessSection from './_components/working-process-section';
import JsonLdScript from '@/components/seo/json-ld-script';
import { buildHowToSchema } from '@/lib/seo/json-ld';

export const metadata: Metadata = {
  title: howItWorksPageData.seo.title,
  description: howItWorksPageData.seo.description,
  alternates: {
    canonical: howItWorksPageData.seo.canonical,
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <JsonLdScript data={buildHowToSchema(howItWorksPageData.workingProcess.steps)} />
      <HowItWorksHeroSection />
      <HowItWorksProcessSection />
      <HowItWorksContentSection />
      <HowItWorksFaqSection />
      <HowItWorksCtaSection />
    </>
  );
}
