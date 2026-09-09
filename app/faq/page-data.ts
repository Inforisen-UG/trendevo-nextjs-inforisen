import type { HeroSocialIcon } from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type FaqPageData = {
  seo: SEO;
  hero: {
    bg: 'section-1';
    variant: 'wide';
    decoration: 'contact';
    title: string;
    titleClassName: string;
    description: string;
    descriptionClassName: string;
    primaryButtonLabel: string;
    illustration: {
      src: string;
      alt: string;
      width: number;
      height: number;
      maxWidthClassName: string;
    };
    socialIcons: HeroSocialIcon[];
  };
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

export const data: FaqPageData = {
  seo: {
    title: 'TrendEvo FAQs | SMM Panel Questions Answered',
    description:
      'Find answers to common TrendEvo questions about SMM panels, payments with bKash, Nagad, and Rocket, delivery speed, reseller accounts, and order support in Bangladesh.',
    canonical: '/faq',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    decoration: 'contact',
    title: 'TrendEvo FAQs gt<for SMM Panel Users>',
    titleClassName:
      'text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px]',
    description:
      'Whether you are new to SMM panels or need help with payments, orders, or services, find clear answers below. You can also lnk</contact-us|contact our support team> anytime via WhatsApp or email.',
    descriptionClassName:
      'max-w-2xl text-base leading-relaxed text-[#343e56] sm:text-base md:text-lg',
    primaryButtonLabel: 'Contact Support',
    illustration: {
      src: '/images/contact-us/email-address.webp',
      alt: 'TrendEvo support specialist ready to answer SMM panel questions',
      width: 583,
      height: 648,
      maxWidthClassName: 'max-w-[583px]',
    },
    socialIcons: heroSocialIcons,
  },

  cta: {
    title: 'Still Have gt<Questions About TrendEvo>?',
    description:
      "Can't find the answer you need? Contact our support team and get help with payments, orders, services, or dashboard use.",
    primaryButtonLabel: 'Get in Touch',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
  },
};
