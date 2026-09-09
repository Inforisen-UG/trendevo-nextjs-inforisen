import type { Metadata } from 'next';
import { faqCategories } from '@/app/faq/faq-content';
import { data as faqPageData } from '@/app/faq/page-data';
import FaqCategoryNav from './_components/faq-category-nav';
import FaqCtaSection from './_components/cta-section';
import FaqHeroSection from './_components/hero-section';
import FaqNewUserSection from './_components/new-user-section';
import FaqSection from '@/components/sections/faq-section';
import JsonLdScript from '@/components/seo/json-ld-script';
import { buildFaqPageSchema } from '@/lib/seo/json-ld';

const faqSchemaItems = faqCategories.flatMap((category) => category.items);

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
      <JsonLdScript data={buildFaqPageSchema(faqSchemaItems)} />
      <FaqHeroSection />
      <FaqCategoryNav />
      {faqCategories.map((category, index) => (
        <FaqSection
          key={category.id}
          data={{
            label: category.shortLabel,
            title: category.title,
            subtitle: category.subtitle,
            items: category.items,
            sectionId: category.id,
            showDecorations: index === 0,
            showCta: false,
            className:
              index === 0 ? undefined : 'py-8 sm:py-12 lg:py-14',
          }}
        />
      ))}
      <FaqCtaSection />
      <FaqNewUserSection />
    </>
  );
}
