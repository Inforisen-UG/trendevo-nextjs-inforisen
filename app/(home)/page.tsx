import type { Metadata } from 'next';
import { Suspense } from 'react';
import AboutSection from '@/app/(home)/_components/about-section';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import CtaSection from '@/app/(home)/_components/cta-section';
import HeroSection from '@/app/(home)/_components/hero-section';
import HomeBlog from '@/app/(home)/_components/home-blog';
import PaymentMethodsSection from '@/app/(home)/_components/payment-methods-section';
import PlatformMarqueeSection from '@/app/(home)/_components/platform-marquee-section';
import PricingSection from '@/app/(home)/_components/pricing-section';
import { data as homePageData } from '@/app/(home)/page-data';
import TestimonialsSection from '@/components/sections/testimonials-section';
import WhyChooseUsSection from '@/app/(home)/_components/why-choose-us-section';
import OurService from '@/app/(home)/_components/our-service';
import StatsSection from '@/app/(home)/_components/stats-section';
import JsonLdScript from '@/components/seo/json-ld-script';
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from '@/lib/seo/json-ld';

export const metadata: Metadata = {
  title: homePageData.seo.title,
  description: homePageData.seo.description,
  alternates: {
    canonical: homePageData.seo.canonical,
  },
};

export default function Home() {
  return (
    <>
      <JsonLdScript
        data={[buildOrganizationSchema(), buildWebSiteSchema()]}
      />
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={null}>
        <StatsSection />
      </Suspense>
      <OurService />
      <AboutSection />
      <WhyChooseUsSection />
      <PaymentMethodsSection />
      <PlatformMarqueeSection />
      <AdvantagesSection />
      <PricingSection />
      <TestimonialsSection data={homePageData.testimonials} />
      <Suspense fallback={null}>
        <HomeBlog />
      </Suspense>
      <CtaSection />
    </>
  );
}
