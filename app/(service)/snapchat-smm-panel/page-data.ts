import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';
import type { ServiceAdvantageItem } from '@/components/serviceSmmPanel/service-advantage-content';
import type { ServiceLeadingFeature } from '@/components/serviceSmmPanel/service-leading-content';
import type { SocialServiceItem } from '@/components/serviceSmmPanel/social-service-content';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type SectionHeadingData = {
  badge?: string;
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

type SnapchatSmmPanelPageData = {
  seo: SEO;
  schema: {
    name: string;
    description: string;
    areaServed: string;
    url: string;
  };
  hero: {
    title: string;
    description: string;
    descriptionSecondary: string;
    buttonLabel: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  socialServices: SectionHeadingData & {
    services: SocialServiceItem[];
    decorativeLeft: {
      src: string;
      width: number;
      height: number;
      className: string;
    };
    decorativeRight: {
      src: string;
      width: number;
      height: number;
      className: string;
    };
    ctaLabel: string;
    ctaHref: string;
  };
  advantages: SectionHeadingData & {
    leftAdvantages: ServiceAdvantageItem[];
    rightAdvantages: ServiceAdvantageItem[];
  };
  workingProcess: SectionHeadingData & {
    steps: ServiceWorkingProcessStep[];
    ctaLabel: string;
  };
  leading: SectionHeadingData & {
    topRowFeatures: ServiceLeadingFeature[];
    bottomRowFeatures: ServiceLeadingFeature[];
  };
  faq: FaqSectionData;
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
    imageSrc: string;
    imageAlt: string;
    className?: string;
  };
};

const snapchatFaqItems = [
  {
    question: 'What is a Snapchat SMM Panel?',
    answer:
      'A Snapchat SMM Panel is a platform where creators, influencers, businesses, agencies, and resellers can order Snapchat growth services. These services may include subscribers, story views, Spotlight views, video views, shares, profile visits, creator promotion, and engagement support.',
  },
  {
    question: 'How does a Snapchat SMM Panel work?',
    answer:
      'You select a Snapchat service, add your public profile, story, Spotlight video, snap, or content link, choose the order amount, pay securely, and submit the order. After that, you can check the progress from your TrendEvo dashboard.',
  },
  {
    question: 'Which Snapchat services can I buy from TrendEvo?',
    answer:
      'TrendEvo offers Snapchat subscribers, story views, Spotlight views, video views, shares, profile visits, creator promotion, engagement support, and complete Snapchat growth packages.',
  },
  {
    question: 'Is it safe to use a Snapchat SMM Panel?',
    answer:
      'A Snapchat SMM Panel is safer when the platform gives clear service details, secure payment options, and proper order handling. TrendEvo focuses on simple ordering, transparent service selection, and easy campaign tracking for Bangladeshi users.',
  },
  {
    question: 'Do I need to give my Snapchat password?',
    answer:
      'No. TrendEvo does not ask for your Snapchat password. You only need to provide the public Snapchat link of the profile, story, Spotlight video, snap, or content you want to promote.',
  },
  {
    question: 'Can I promote only one Snapchat Spotlight video?',
    answer:
      'Yes. You can promote one Spotlight video only. Many creators use this for funny clips, product videos, fashion content, travel moments, event highlights, or campaign testing.',
  },
  {
    question: 'How long does a Snapchat SMM order take to start?',
    answer:
      'The starting time depends on the selected service, order size, and current order volume. Some Snapchat services may start faster, while others may need more time. You can check service details before ordering.',
  },
  {
    question: 'Can I track the progress of my Snapchat order?',
    answer:
      'Yes. Once your order is placed, you can track the progress inside your TrendEvo dashboard. This helps creators, agencies, influencers, and resellers manage several Snapchat campaigns without confusion.',
  },
  {
    question: 'What payment methods do you accept in Bangladesh?',
    answer:
      'TrendEvo supports bKash, Nagad, Rocket, and other supported payment methods in Bangladesh. This makes Snapchat promotion easier for local creators, influencers, agencies, businesses, and resellers.',
  },
  {
    question: 'Can agencies and resellers use your Snapchat SMM Panel?',
    answer:
      'Yes. Agencies, freelancers, influencer marketers, and resellers can use TrendEvo to manage Snapchat growth for multiple creators or clients. The dashboard helps organize orders and track campaign progress more easily.',
  },
];

export const data: SnapchatSmmPanelPageData = {
  seo: {
    title: 'Best Snapchat SMM Panel in Bangladesh | TrendEvo',
    description:
      'Grow your Snapchat presence with TrendEvo’s Snapchat SMM Panel in Bangladesh. Get Snapchat subscribers, story views, Spotlight views, shares, and engagement with bKash, Nagad, and Rocket.',
    canonical: '/snapchat-smm-panel',
  },

  schema: {
    name: 'Snapchat SMM Panel',
    description:
      'Grow your Snapchat presence with TrendEvo’s Snapchat SMM Panel in Bangladesh. Get Snapchat subscribers, story views, Spotlight views, shares, and engagement with bKash, Nagad, and Rocket.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/snapchat-smm-panel',
  },

  hero: {
    title: 'Grow Faster with a Trusted gt<Snapchat SMM Panel> in Bangladesh',
    description:
      'TrendEvo makes Snapchat growth easier for Bangladeshi creators, influencers, lifestyle brands, agencies, local businesses, and resellers. You can manage subscribers, story views, Spotlight views, shares, profile activity, and engagement from one simple Snapchat lnk<SMM Panel service in BD|/services> dashboard.',
    descriptionSecondary:
      'Grow your Snapchat presence with affordable pricing, bKash, Nagad, Rocket payment options, and services built for stronger attention, better content reach, and more visible activity in Bangladesh.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service/snapchat-smm-panel/grow-faster-with-a-trusted-snapchat-smm-panel-in-bangladesh.webp',
      alt: 'Grow faster with TrendEvo Snapchat SMM Panel in Bangladesh',
      width: 687,
      height: 648,
    },
  },

  socialServices: {
    title: 'Snapchat SMM Panel Services gt<Built for Bangladesh>',
    subtitle:
      'lnk<TrendEvo|/about-us> gives Bangladeshi creators, influencers, agencies, online sellers, lifestyle pages, and resellers a simple way to grow Snapchat without managing every promotion step manually. From daily story updates to Spotlight videos, product previews, event coverage, creator snaps, and brand campaigns, our Snapchat SMM Panel in Bangladesh helps you build stronger activity around your content.',
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service/snapchat-smm-panel/snapchat-smm-panel-services-built-for-bangladesh-decorative-left.svg',
      width: 256,
      height: 258,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[150px] lg:block xl:w-[256px]',
    },
    decorativeRight: {
      src: '/images/service/snapchat-smm-panel/snapchat-smm-panel-services-built-for-bangladesh-decorative-left.svg',
      width: 256,
      height: 258,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[160px] -scale-x-100 lg:block xl:w-[256px]',
    },
    services: [
      {
        title: 'Snapchat Subscribers',
        description:
          'Grow your Snapchat profile with more subscribers. This service is useful for creators, influencers, lifestyle pages, small brands, and public profiles that want to look more established to new viewers.',
        icon: '/images/our-services/platforms/snapchat-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Story Views',
        description:
          'Bring more attention to your lnk<Snapchat followers|/buy-snapchat-followers>. Story views help daily updates, product teasers, event snaps, behind-the-scenes content, and personal brand content look more active.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Spotlight Views',
        description:
          'Increase visibility on Snapchat Spotlight videos. This is useful for short clips, creator content, funny moments, product videos, fashion reels, travel clips, and entertainment content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Shares',
        description:
          'Help your Snapchat content move beyond your own audience with more shares. This works well for Spotlight videos, public stories, campaigns, and content that needs wider attention.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Profile Visits',
        description:
          'Bring more people to your Snapchat public profile. Profile visits can support subscriber growth, improve discovery, and help new viewers explore your content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Video Views',
        description:
          'Support Snapchat videos with more views. This is helpful for creator clips, business updates, product demos, event coverage, and short-form promotional content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Snapchat Engagement',
        description:
          'Improve your overall Snapchat content activity with views, shares, subscribers, and profile interaction. This helps your public profile feel more active to new visitors.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Creator Promotion',
        description:
          'Promote creator profiles, lifestyle pages, fashion content, travel snaps, entertainment clips, and influencer campaigns. This is useful for Bangladeshi creators who want to build stronger personal visibility.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Growth Packages',
        description:
          'Combine subscribers, story views, Spotlight views, video views, shares, profile visits, and engagement support in one campaign. These packages help creators, agencies, influencers, and resellers manage balanced Snapchat growth more easily.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    ctaLabel: 'See All Services',
    ctaHref: '/services',
  },

  advantages: {
    title: 'Why Bangladeshi Creators Use a gt<Snapchat SMM Panel> for Faster Growth',
    subtitle:
      'Snapchat growth works differently because content often moves quickly and disappears fast. Stories, Spotlight videos, public profiles, and creator updates need early attention to stand out. A Snapchat SMM Panel helps Bangladeshi creators, influencers, brands, agencies, and resellers build stronger activity around content while saving time.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Better Visibility for Short-Lived Content',
        description:
          'Snapchat stories do not stay visible forever. More story views can help your daily updates, product snaps, event moments, and personal content receive attention while they are still fresh.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '02',
        title: 'Stronger Public Profile Trust',
        description:
          'When new viewers visit a Snapchat public profile, they notice activity, subscribers, and content consistency. A profile with visible engagement can look more trusted and worth following.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '03',
        title: 'More Support for Spotlight Content',
        description:
          'Spotlight gives creators a place to publish short videos. Extra views and engagement can help Spotlight clips look more active and support better discovery for creative content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Useful for Influencer & Lifestyle Branding',
        description:
          'Snapchat works well for real-time lifestyle updates, casual content, fashion moments, food snaps, travel clips, and behind-the-scenes branding. TrendEvo helps creators support these content styles with focused growth services.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
      {
        step: '05',
        title: 'Easier Campaign Handling for Agencies',
        description:
          'Agencies and resellers may manage multiple Snapchat profiles, creator campaigns, or lifestyle brands. TrendEvo helps them organize Snapchat orders, monitor progress, and manage client promotions from one dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
      {
        step: '06',
        title: 'Bangladesh-Friendly Payment System',
        description:
          'Bangladeshi users should not struggle with foreign cards to promote Snapchat content. TrendEvo supports bKash, Nagad, Rocket, and other local payment methods for easier ordering.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
      },
    ],
  },

  workingProcess: {
    title: 'How TrendEvo gt<Snapchat SMM Panel> Works',
    subtitle:
      'TrendEvo keeps Snapchat promotion simple for Bangladeshi users. You choose the service that matches your goal, submit your Snapchat link, complete payment, and manage the order from your dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'lnk<Create free account|signup> and open your Snapchat SMM Panel dashboard. The dashboard is made for creators, influencers, agencies, lifestyle brands, online sellers, and resellers who need quick campaign control.',
      },
      {
        number: '02',
        title: 'Choose the Right Snapchat Service',
        description:
          'Pick the service based on your goal. You can order Snapchat subscribers, story views, Spotlight views, video views, shares, profile visits, creator promotion, engagement support, or full Snapchat growth packages.',
      },
      {
        number: '03',
        title: 'Add Your Link & Confirm Order',
        description:
          'Paste your Snapchat public profile, story, Spotlight video, snap, video, or content link. Choose the quantity, check the order details, and confirm the request before payment.',
      },
      {
        number: '04',
        title: 'Pay Securely & Track Growth',
        description:
          'Complete your payment using bKash, Nagad, Rocket, or another supported method. After ordering, you can follow the status and progress from your TrendEvo dashboard.',
      },
    ],
    ctaLabel: 'Get Started Free',
  },

  leading: {
    title: 'Why Choose TrendEvo for gt<Snapchat SMM Panel Services> in Bangladesh',
    subtitle:
      'TrendEvo is built for Bangladeshi creators, influencers, lifestyle brands, agencies, and resellers who need simple, affordable, and organized Snapchat promotion. From public profile growth to Spotlight content support, our platform helps users manage Snapchat activity without confusing tools, slow communication, or difficult payment systems.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Short-Form Content Support',
        description:
          'Snapchat content depends on timing and fast attention. TrendEvo helps support stories, Spotlight videos, public profiles, creator snaps, and campaign content when visibility matters most.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Easy Local Payments',
        description:
          'Pay with bKash, Nagad, Rocket, and other supported payment options. This makes Snapchat promotion easier for Bangladeshi creators, influencers, agencies, online sellers, and resellers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Affordable Snapchat Growth',
        description:
          'TrendEvo offers budget-friendly Snapchat SMM Panel services for new creators, lifestyle influencers, small businesses, fashion pages, travel creators, entertainment pages, and agencies.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Clean Dashboard Management',
        description:
          'Manage Snapchat subscribers, story views, Spotlight views, video views, shares, profile visits, creator promotion, engagement support, and package orders from one simple dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Useful for Creators, Agencies & Resellers',
        description:
          'TrendEvo works for personal profiles and client campaigns. Whether you are growing your own Snapchat presence or managing orders for creators and brands, the platform helps you work with better speed and control.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions About Snapchat SMM Panel>',
    subtitle:
      'Find clear answers to common questions about Snapchat promotion, available services, local payments, order tracking, and account safety on TrendEvo.',
    bg: 'section-7',
    items: snapchatFaqItems,
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '/contact-us',
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on Snapchat, Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your social media with TrendEvo',
    className: 'mt-16',
  },
};
