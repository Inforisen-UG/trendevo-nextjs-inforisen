import type { HeroSocialIcon } from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type HowItWorksPageData = {
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

export const data: HowItWorksPageData = {
  seo: {
    title: 'How TrendEvo Works | SMM Panel Steps in Bangladesh',
    description:
      'Learn how TrendEvo works in 4 simple steps. Create a free account, add funds with bKash, Nagad, or Rocket, choose your SMM service, and track every order from one dashboard.',
    canonical: '/how-it-works',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    decoration: 'contact',
    title: 'How TrendEvo Works gt<in 4 Simple Steps>',
    titleClassName:
      'text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px]',
    description:
      'TrendEvo makes SMM panel ordering easy for users in Bangladesh. lnk<Create a free account|https://trendevo.com/signup>, add funds with local payment methods, choose a service, and track every order from one clean dashboard.',
    descriptionClassName:
      'max-w-2xl text-base leading-relaxed text-[#343e56] sm:text-base md:text-lg',
    primaryButtonLabel: 'Create Free Account',
    illustration: {
      src: '/images/services/services-trendevo-specialist-presenting-social-media-growth-services-illustration.webp',
      alt: 'TrendEvo specialist explaining how the SMM panel ordering process works',
      width: 583,
      height: 648,
      maxWidthClassName: 'max-w-[583px]',
    },
    socialIcons: heroSocialIcons,
  },

  cta: {
    title: 'Ready to gt<Start Your First Order> on TrendEvo?',
    description:
      'Join TrendEvo and manage your Facebook, Instagram, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket and start growing today.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
  },
};
