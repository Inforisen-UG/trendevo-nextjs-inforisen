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

type TelegramSmmPanelPageData = {
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

const telegramFaqItems = [
  {
    question: 'What is a Telegram SMM Panel?',
    answer:
      'A Telegram SMM Panel is an online platform where you can order Telegram growth services such as channel subscribers, group members, post views, reactions, poll votes, auto views, and engagement. It helps businesses, creators, agencies, community owners, and resellers manage Telegram growth from one dashboard.',
  },
  {
    question: 'How does a Telegram SMM Panel work?',
    answer:
      'You choose a Telegram service, paste the required channel, group, post, poll, or content link, select the quantity, complete payment, and place the order. After that, you can track the progress from your TrendEvo account.',
  },
  {
    question: 'Which Telegram services can I buy from TrendEvo?',
    answer:
      'TrendEvo offers a wide range of Telegram services, including channel subscribers, group members, post views, reactions, poll votes, auto views, targeted members, and other Telegram engagement services.',
  },
  {
    question: 'Is it safe to use a Telegram SMM Panel?',
    answer:
      'A trusted platform with clear service details, secure payment methods, and proper order handling is always a better choice. TrendEvo focuses on safe ordering, simple account use, and a smooth experience for Bangladeshi users.',
  },
  {
    question: 'Do I need to give my Telegram password?',
    answer:
      'No. You do not need to share your Telegram password. TrendEvo only needs the public link of the channel, group, post, poll, or content that you want to promote.',
  },
  {
    question: 'Can I buy Telegram members, subscribers, and post views separately?',
    answer:
      'Yes. You can order each service separately based on your goal. For example, you may only need Telegram group members, only channel subscribers, only post views, only reactions, or only poll votes for a specific campaign.',
  },
  {
    question: 'How long does a Telegram SMM order take to start?',
    answer:
      'The start time depends on the selected service. Some orders may begin quickly, while others can take longer depending on service type, quantity, and current order volume. You can check service details before placing the order.',
  },
  {
    question: 'Can I track the progress of my Telegram order?',
    answer:
      'Yes. After placing your order, you can monitor the progress directly from your TrendEvo dashboard. This makes it easy to manage multiple Telegram campaigns from one place.',
  },
  {
    question: 'What payment methods do you accept in Bangladesh?',
    answer:
      'TrendEvo supports popular local payment methods in Bangladesh such as bKash, Nagad, and Rocket. This makes ordering Telegram SMM services easier for local businesses, creators, community owners, freelancers, agencies, and resellers.',
  },
  {
    question: 'Can agencies and resellers use your Telegram SMM Panel?',
    answer:
      'Yes. TrendEvo is suitable for agencies, freelancers, and resellers who manage Telegram growth services for multiple clients. Our dashboard makes it easier to place, manage, and monitor several Telegram orders efficiently.',
  },
];

export const data: TelegramSmmPanelPageData = {
  seo: {
    title: 'Best Telegram SMM Panel in Bangladesh | TrendEvo',
    description:
      'Grow with TrendEvo’s Telegram SMM Panel in Bangladesh. Buy members, subscribers, post views, reactions, and engagement with bKash, Nagad, and Rocket.',
    canonical: '/telegram-smm-panel',
  },

  schema: {
    name: 'Telegram SMM Panel',
    description:
      'Grow with TrendEvo’s Telegram SMM Panel in Bangladesh. Buy members, subscribers, post views, reactions, and engagement with bKash, Nagad, and Rocket.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/telegram-smm-panel',
  },

  hero: {
    title: 'Grow Faster with a Trusted gt<Telegram SMM Panel> in Bangladesh',
    description:
      'TrendEvo makes Telegram growth easier for Bangladeshi businesses, creators, agencies, community owners, crypto groups, course sellers, and resellers. You can grow channel subscribers, group members, post views, reactions, and engagement from one secure Telegram SMM Panel dashboard.',
    descriptionSecondary:
      'Build your Telegram presence faster with affordable pricing, bKash, Nagad, Rocket payment support, and services designed for active communities, announcement channels, business updates, and audience growth in Bangladesh.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service/telegram-smm-panel/grow-faster-with-a-trusted-telegram-smm-panel-in-bangladesh.webp',
      alt: 'Grow faster with TrendEvo Telegram SMM Panel in Bangladesh',
      width: 687,
      height: 648,
    },
  },

  socialServices: {
    title: 'Telegram SMM Panel Services gt<Built for Bangladesh>',
    subtitle:
      'TrendEvo brings all major Telegram growth services into one simple dashboard for Bangladeshi businesses, creators, agencies, community owners, course sellers, and resellers. Whether you want more channel trust, group activity, post visibility, content reach, or campaign support, our Telegram lnk<BD SMM Panel|/> services help you manage growth faster and more affordably.',
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service/telegram-smm-panel/telegram-smm-panel-services-built-for-bangladesh-decorative-left.svg',
      width: 195,
      height: 192,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[130px] lg:block xl:w-[195px]',
    },
    decorativeRight: {
      src: '/images/service/telegram-smm-panel/telegram-smm-panel-services-built-for-bangladesh-decorative-left.svg',
      width: 195,
      height: 192,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[140px] -scale-x-100 lg:block xl:w-[195px]',
    },
    services: [
      {
        title: 'Telegram Channel Subscribers',
        description:
          'Build a stronger audience base for your Telegram channel. This service is useful for news pages, ecommerce stores, course sellers, crypto communities, agencies, and brands that want their channel to look active and trustworthy.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Members',
        description:
          'Grow lnk<Telegram members|/buy-telegram-members> for communities, online businesses, coaching programs, reseller networks, customer support groups, and niche discussions. More members help your group look more active and valuable to new joiners.',
        icon: '/images/our-services/platforms/telegram-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Post Views',
        description:
          'Increase views on Telegram posts, announcements, offers, updates, product drops, course notices, and promotional messages. More post views help your content look more visible and worth reading.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Telegram Reactions',
        description:
          'Add stronger engagement signals to your Telegram posts with reactions. This helps announcements, updates, polls, campaign posts, and community messages feel more active and audience-driven.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Poll Votes',
        description:
          'Support Telegram polls with more votes for feedback, product choices, community decisions, and campaign research. Poll votes can make your group or channel activity look more engaging.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Telegram Auto Views',
        description:
          'Improve visibility on new Telegram posts with auto view support. This is useful for active channels that publish regular updates, offers, news, or campaign content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Telegram Targeted Members',
        description:
          'Grow your Telegram group or channel with members based on campaign needs. This service is useful for niche communities, business groups, learning platforms, and reseller projects.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-profile-followers-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Telegram Crypto Group Growth',
        description:
          'Support crypto, trading, Web3, and finance-related Telegram communities with group members, post views, and engagement services. This helps new visitors see stronger activity before they join.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Engagement Packages',
        description:
          'Grow multiple Telegram signals together with members, subscribers, post views, reactions, poll votes, and channel activity. These packages help agencies, resellers, businesses, and community managers handle balanced Telegram growth more easily.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    ctaLabel: 'See All Services',
    ctaHref: '/services',
  },

  advantages: {
    title: 'Why Bangladeshi Brands Use a gt<Telegram SMM Panel> for Faster Growth',
    subtitle:
      'A reliable Telegram SMM Panel helps businesses, creators, agencies, and community owners grow their Telegram presence with less manual effort. lnk<TrendEvo|/about-us> makes it easier to improve channel trust, group activity, post visibility, audience engagement, and campaign support from one simple dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Faster Telegram Channel Growth',
        description:
          'Build your Telegram channel presence faster with subscribers, members, post views, and engagement support. This helps new visitors see your channel as active, trusted, and useful before they join.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Better Social Proof for Communities',
        description:
          'People often check member count, post views, and activity before joining a Telegram group or channel. Stronger engagement can make your Telegram community look more reliable to Bangladeshi audiences.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '03',
        title: 'More Support for Post Visibility',
        description:
          'Important Telegram posts can get missed when activity is low. TrendEvo helps announcements, offers, updates, polls, and campaign messages gain visibility so your content looks more active.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Saves Time for Businesses & Agencies',
        description:
          'Managing Telegram growth manually takes time. With TrendEvo, businesses, freelancers, agencies, and resellers can place orders, track progress, and manage multiple Telegram services from one dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
      {
        step: '05',
        title: 'Affordable Growth with Local Payment',
        description:
          'TrendEvo makes Telegram marketing easier for Bangladeshi users with budget-friendly pricing and local payment support like bKash, Nagad, and Rocket. No complex payment process is needed.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
      },
      {
        step: '06',
        title: 'Useful for Channels, Groups & Resellers',
        description:
          'Our Telegram SMM Panel Bangladesh services are suitable for announcement channels, ecommerce groups, course communities, crypto groups, agency clients, business networks, and reseller projects. You can manage different growth needs in one place.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },

  workingProcess: {
    title: 'How TrendEvo gt<Telegram SMM Panel> Works',
    subtitle:
      'TrendEvo makes Telegram growth simple for Bangladeshi users. You can choose a service, place your order, lnk<pay with local methods|signup>, and track everything from one easy dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'lnk<Sign up|signup> on TrendEvo and access your Telegram SMM Panel dashboard. The process is simple, quick, and made for businesses, creators, agencies, community owners, and resellers in Bangladesh.',
      },
      {
        number: '02',
        title: 'Choose the Right Telegram Service',
        description:
          'Select the service you need for your goal. You can order Telegram channel subscribers, group members, post views, reactions, poll votes, auto views, targeted members, or engagement packages.',
      },
      {
        number: '03',
        title: 'Add Your Link & Confirm Order',
        description:
          'Paste your Telegram channel, group, post, poll, or content link. Then choose the quantity, review the details, and confirm your order before payment.',
      },
      {
        number: '04',
        title: 'Pay Securely & Track Growth',
        description:
          'Complete payment with bKash, Nagad, Rocket, or other supported methods. After that, you can monitor order progress directly from your TrendEvo dashboard.',
      },
    ],
    ctaLabel: 'Get Started Free',
  },

  leading: {
    title: 'Why Choose TrendEvo for gt<Telegram SMM Panel Services> in Bangladesh',
    subtitle:
      'TrendEvo helps Bangladeshi businesses, creators, agencies, community owners, and resellers manage Telegram growth with speed, safety, and better control. Our platform combines local payment support, affordable pricing, smooth order tracking, and reliable Telegram SMM services in one simple dashboard.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Order Processing',
        description:
          'Telegram campaigns often need quick visibility. TrendEvo processes orders smoothly so you can support channel growth, group activity, post views, community reach, and promotional campaigns without long delays.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Secure Local Payments',
        description:
          'Pay easily with bKash, Nagad, Rocket, and other supported payment methods. TrendEvo is made for Bangladeshi users, so you do not need to depend on complicated international payment systems.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Affordable Telegram Growth',
        description:
          'Get budget-friendly Telegram SMM Panel services without losing control over quality. Our pricing works for small businesses, community owners, ecommerce sellers, course creators, agencies, and resellers who need scalable growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Easy Dashboard Control',
        description:
          'Manage Telegram subscribers, group members, post views, reactions, poll votes, auto views, targeted members, and engagement orders from one clean dashboard. You can place orders, check status, and manage multiple campaigns with less effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Support for Businesses & Resellers',
        description:
          'TrendEvo is useful for both direct users and resellers. Whether you are growing your own Telegram channel or managing client orders, our platform helps you handle Telegram SMM services more professionally.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions About Telegram SMM Panel>',
    subtitle:
      'Find clear and simple answers to the most common questions about our Telegram SMM Panel, services, payments, orders, and account safety.',
    bg: 'section-7',
    items: telegramFaqItems,
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '/contact-us',
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on Telegram, Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your social media with TrendEvo',
    className: 'mt-16',
  },
};
