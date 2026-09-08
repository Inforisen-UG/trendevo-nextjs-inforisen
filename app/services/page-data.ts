import type { HeroSocialIcon } from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type SectionHeadingData = {
  badge?: string;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

type ServicePanelItem = {
  backgroundGradient: string;
  darkOverlaySrc: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  buttonLabel: string;
};

type ServicesPageData = {
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
    primaryButtonHref: string;
    illustration: {
      src: string;
      alt: string;
      width: number;
      height: number;
      maxWidthClassName: string;
    };
    socialIcons: HeroSocialIcon[];
  };
  servicesGrid: {
    id: string;
    heading: SectionHeadingData;
    items: ServicePanelItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

export const data: ServicesPageData = {
  seo: {
    title: 'SMM Panel Services in Bangladesh | TrendEvo',
    description:
      'TrendEvo provides reliable SMM panel services in Bangladesh for creators, businesses, agencies, freelancers, and resellers. Order Facebook, Instagram, YouTube, TikTok, Telegram, Spotify, and more from one dashboard.',
    canonical: '/services',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    decoration: 'contact',
    title: 'SMM Panel Services gt<in Bangladesh>',
    titleClassName:
      'text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px]',
    description:
      'TrendEvo provides reliable lnk</|SMM panel services in Bangladesh> for creators, businesses, agencies, freelancers, and resellers. From one simple dashboard, you can order social media growth services for Facebook, Instagram, YouTube, TikTok, Telegram, Spotify, and more.',
    descriptionClassName:
      'max-w-[762px] text-lg font-medium leading-relaxed text-[#343e56]',
    primaryButtonLabel: 'Explore Our Services',
    primaryButtonHref: '#our-smm-panel-services',
    illustration: {
      src: '/images/services/smm-panel-services-in-bangladesh.webp',
      alt: 'TrendEvo specialist presenting social media growth services',
      width: 468,
      height: 581,
      maxWidthClassName: 'max-w-[468px]',
    },
    socialIcons: heroSocialIcons,
  },

  servicesGrid: {
    id: 'our-smm-panel-services',
    heading: {
      title: 'Our SMM Panel gt<Services>',
      subtitle:
        'Choose the right service for your social media growth. TrendEvo brings all major platforms into one simple dashboard so you can grow faster, manage orders easily, and build stronger online visibility in Bangladesh.',
      titleClassName:
        'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[996px] text-sm font-normal text-[#404a60] sm:text-base md:text-lg',
    },
    items: [
      {
        backgroundGradient:
          'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(229, 239, 255, 0.46) 56.5%, rgb(128, 179, 255) 125.88%)',
        darkOverlaySrc:
          '/images/services/overlays/services-facebook-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-facebook-smm-panel-icon.png',
        iconAlt: 'Facebook',
        title: 'Facebook SMM Panel',
        description:
          'Grow your Facebook page with likes, followers, views, comments, shares, and engagement services. TrendEvo helps businesses, creators, and agencies improve Facebook visibility with fast processing and affordable pricing.',
        buttonLabel: 'Get Started Now',
      },
      {
        backgroundGradient:
          'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(255, 238, 249, 0) 56.5%, rgb(255, 102, 199) 125.88%)',
        darkOverlaySrc:
          '/images/services/overlays/services-instagram-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-instagram-smm-panel-icon.png',
        iconAlt: 'Instagram',
        title: 'Instagram SMM Panel',
        description:
          'Build a stronger Instagram profile with followers, likes, comments, views, and reel engagement. Our Instagram SMM Panel is made for creators, influencers, online shops, and brands that want better reach and social proof.',
        buttonLabel: 'Get Started Now',
      },
      {
        backgroundGradient:
          'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(255, 247, 247, 0.46) 56.5%, rgb(255, 75, 73) 125.88%)',
        darkOverlaySrc:
          '/images/services/overlays/services-youtube-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-youtube-smm-panel-icon.png',
        iconAlt: 'YouTube',
        title: 'YouTube SMM Panel',
        description:
          'Promote your YouTube channel with subscribers, views, likes, comments, and watch time support. TrendEvo helps video creators, music channels, educators, and businesses grow their YouTube presence more easily.',
        buttonLabel: 'Get Started Now',
      },
      {
        backgroundGradient:
          'linear-gradient(29.28deg, rgb(255, 255, 255) 2.55%, rgba(163, 163, 163, 0.03) 49.69%, rgb(201, 201, 201) 125.92%)',
        darkOverlaySrc:
          '/images/services/overlays/services-tiktok-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-tiktok-smm-panel-icon.png',
        iconAlt: 'TikTok',
        title: 'TikTok SMM Panel',
        description:
          'Boost your TikTok profile with followers, likes, views, and comments. TrendEvo supports short-form content creators, small businesses, influencers, and agencies that want faster attention on TikTok.',
        buttonLabel: 'Get Started Now',
      },
      {
        backgroundGradient:
          'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(229, 239, 255, 0.46) 56.5%, rgb(96, 213, 240) 125.88%)',
        darkOverlaySrc:
          '/images/services/overlays/services-telegram-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-telegram-smm-panel-icon.png',
        iconAlt: 'Telegram',
        title: 'Telegram SMM Panel',
        description:
          'Grow your Telegram channel or group with members, post views, reactions, and engagement services. This is useful for communities, ecommerce groups, course channels, crypto projects, and business updates.',
        buttonLabel: 'Get Started Now',
      },
      {
        backgroundGradient:
          'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(238, 238, 238, 0.46) 56.5%, rgb(125, 125, 125) 125.88%)',
        darkOverlaySrc:
          '/images/services/overlays/services-x-twitter-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-x-twitter-smm-panel-icon.png',
        iconAlt: 'X (Twitter)',
        title: 'X Twitter SMM Panel',
        description:
          'Improve your X Twitter profile with followers, likes, views, reposts, and engagement. TrendEvo helps brands, creators, public pages, and agencies make their posts look more active and trusted.',
        buttonLabel: 'Get Started Now',
      },
    ],
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using lnk</about-us|TrendEvo> to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services/pricing',
  },
};
