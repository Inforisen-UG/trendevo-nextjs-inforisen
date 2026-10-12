import type { Metadata } from 'next';
import { data as servicesPricingPageData } from '@/app/services/pricing/page-data';
import { getServicesPricing } from '@/lib/services-pricing';
import ServicesPricingCtaSection from './_components/cta-section';
import HeadingSection from './_components/heading-section';
import ServicesPricingContent from './_components/services-pricing-content';

export const metadata: Metadata = {
  title: servicesPricingPageData.seo.title,
  description: servicesPricingPageData.seo.description,
};

export default async function ServicesPricingPage() {
  const pricingGroups = await getServicesPricing();

  return (
    <>
      <HeadingSection />
      <ServicesPricingContent
        pricingGroups={pricingGroups}
        pricingPlatforms={servicesPricingPageData.pricingPlatforms}
      />
      <ServicesPricingCtaSection />
    </>
  );
}
