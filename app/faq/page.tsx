import type { Metadata } from 'next';
import { data as homePageData } from '@/app/(home)/page-data';
import { data as faqPageData } from '@/app/faq/page-data';
import FaqSection from '@/components/sections/faq-section';
import FaqCtaSection from './_components/cta-section';
import FaqHeroSection from './_components/hero-section';

export const metadata: Metadata = {
  title: faqPageData.seo.title,
  description: faqPageData.seo.description,
  alternates: {
    canonical: faqPageData.seo.canonical,
  },
};

export default function FaqPage() {
  return (
    <>
      <FaqHeroSection />
      <FaqSection data={homePageData.faq} />
      <FaqCtaSection />
    </>
  );
}
