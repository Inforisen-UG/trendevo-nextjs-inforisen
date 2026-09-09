import type { ThingsToKnowSectionData } from '@/components/sections/things-to-know-section';
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
    primaryButtonHref: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
  newToTrendEvo: ThingsToKnowSectionData;
};

export const data: FaqPageData = {
  seo: {
    title: 'TrendEvo FAQ | Orders, Payments, Refills & SMM Support',
    description:
      'Get answers about TrendEvo SMM services, orders, delivery, payments, bKash, Nagad, refills, order status, account security, reselling, refunds, and support.',
    canonical: '/faq',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    decoration: 'contact',
    title: 'Frequently Asked Questions gt<About TrendEvo>',
    titleClassName:
      'text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px]',
    description:
      'Have questions about TrendEvo, SMM services, payments, orders, delivery, refills, or your account? Find clear answers to the most common questions below. Whether you are placing your first order or managing social media services for multiple clients, this FAQ page will help you use TrendEvo with more confidence. You can also lnk</contact-us|contact our support team> anytime via WhatsApp or email.',
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
      "Can't find the answer you need? The TrendEvo support team can help you with orders, payments, service selection, refills, account issues, reseller questions, and other platform-related problems. For faster assistance, include your Order ID whenever your question relates to an existing order.",
    primaryButtonLabel: 'Contact Support',
    primaryButtonHref: '/contact-us',
    secondaryButtonLabel: 'How TrendEvo Works',
    secondaryButtonHref: '/how-it-works',
  },

  newToTrendEvo: {
    badge: 'New to TrendEvo?',
    title: 'Start Using TrendEvo gt<in a Few Simple Steps>',
    image: {
      src: '/images/services/services-trendevo-specialist-presenting-social-media-growth-services-illustration.webp',
      alt: 'TrendEvo specialist presenting how to get started with the SMM panel',
      width: 952,
      height: 1024,
    },
    paragraphs: [
      'Using TrendEvo is simple. lnk<Create your account|https://trendevo.com/signup>, add funds through an available payment method, choose the service that matches your goal, enter the correct link and quantity, and track the order directly from your dashboard.',
      'Always read the service description before ordering and start with an appropriate quantity when trying a service for the first time. You can also review lnk</how-it-works|how TrendEvo works> or browse the full lnk</services|service list> before placing your first order.',
    ],
    ctaLabel: 'Create Free Account',
    ctaHref: 'https://trendevo.com/signup',
    bg: 'section-13',
  },
};
