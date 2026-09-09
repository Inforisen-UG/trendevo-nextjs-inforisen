import type { Metadata } from 'next';
import WorkingProcessSection from '@/app/(home)/_components/working-process-section';
import { data as howItWorksPageData } from '@/app/how-it-works/page-data';
import HowItWorksCtaSection from './_components/cta-section';
import HowItWorksHeroSection from './_components/hero-section';

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
      <HowItWorksHeroSection />
      <WorkingProcessSection />
      <HowItWorksCtaSection />
    </>
  );
}
