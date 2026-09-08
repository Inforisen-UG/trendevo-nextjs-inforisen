import type { HeroSocialIcon } from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type ContactDetailCardData = {
  borderColor: string;
  darkOverlaySrc: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  detailLabel?: string;
  detailValue?: string;
  detailValueClassName?: string;
  buttonLabel?: string;
  buttonClassName?: string;
};

type ContactUsPageData = {
  seo: SEO;
  hero: {
    bg: 'section-1';
    variant: 'wide-responsive';
    decoration: 'contact';
    leftColumnClassName: string;
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
  contactDetails: {
    cards: ContactDetailCardData[];
  };
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

export const data: ContactUsPageData = {
  seo: {
    title: 'Contact TrendEvo | SMM Panel Support in Bangladesh',
    description:
      'Need help with TrendEvo? Contact our SMM panel support team in Bangladesh for order help, payment support, service questions, reseller guidance, and account assistance.',
    canonical: '/contact-us',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide-responsive',
    decoration: 'contact',
    leftColumnClassName: 'gap-6 lg:gap-8 lg:self-center',
    title: "Need Help with TrendEvo? gt<We're Here to Support You>",
    titleClassName:
      'text-[28px] font-semibold leading-[1.35] tracking-tight text-[#071431] sm:text-4xl md:text-5xl',
    description:
      'Whether you need help with an order, payment, service, or account setup, lnk</about-us|TrendEvo> support is ready to assist. We make lnk</|SMM panel BD> support simple for creators, businesses, agencies, and resellers who want smooth social media growth in Bangladesh.',
    descriptionClassName:
      'max-w-2xl text-base leading-relaxed text-[#343e56] sm:text-base md:text-lg',
    primaryButtonLabel: 'Get Started Now',
    illustration: {
      src: '/images/contact-us/email-address.webp',
      alt: 'TrendEvo support specialist pointing to contact options',
      width: 583,
      height: 648,
      maxWidthClassName: 'max-w-[583px]',
    },
    socialIcons: heroSocialIcons,
  },

  contactDetails: {
    cards: [
      {
        borderColor: 'border-[#695dd8]',
        darkOverlaySrc:
          '/images/contact-us/contact-us-contact-card-overlay-email-dark-decoration.svg',
        iconSrc: '/images/contact-us/contact-us-email-icon.webp',
        iconAlt: 'Email',
        title: 'Email Address',
        description:
          "Got a question or need support? Email us, and we'll get back to you as soon as possible.",
        detailValue: 'info@trendevo.com',
        detailValueClassName:
          'font-semibold text-[#8f2acd] dark:text-[#ae4de8]',
        buttonLabel: 'Contact us with Email',
        buttonClassName: 'bg-[#675bd7] dark:bg-[rgba(103,91,215,0.85)]',
      },
      {
        borderColor: 'border-[#1fd863]',
        darkOverlaySrc:
          '/images/contact-us/contact-us-contact-card-overlay-whatsapp-dark-decoration.svg',
        iconSrc: '/images/contact-us/contact-us-whatsapp-icon.webp',
        iconAlt: 'WhatsApp',
        title: 'WhatsApp Us',
        description:
          'Would you prefer a quick chat? Send us a message on WhatsApp for prompt assistance.',
        detailValue: '+880 1888 8887 7777',
        detailValueClassName:
          'font-semibold text-[#25d365] dark:text-[rgba(37,211,101,0.8)]',
        buttonLabel: 'Contact us on WhatsApp',
        buttonClassName:
          'bg-[linear-gradient(107.46deg,#20da65_2.7%,#12be51_86.61%)]',
      },
      {
        borderColor: 'border-[#8f2acd]',
        darkOverlaySrc:
          '/images/contact-us/contact-us-contact-card-overlay-business-hours-dark-decoration.svg',
        iconSrc: '/images/contact-us/contact-us-business-hours-icon.webp',
        iconAlt: 'Business hours',
        title: 'Business Hours',
        description: 'Assistance Hours',
        detailValue: 'Monday to Sunday: 24 Hours',
        detailValueClassName:
          'font-semibold text-[#8f2acd] dark:text-[#ae4de8]',
      },
    ],
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
  },
};
