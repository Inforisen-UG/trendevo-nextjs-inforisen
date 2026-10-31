import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';
import type { ThingsToKnowSectionData } from '@/components/sections/things-to-know-section';
import type { WhoShouldBuySectionData } from '@/components/sections/who-should-buy-section';
import type { ServiceLeadingContent } from '@/components/serviceSmmPanel/service-leading-content';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type InstagramStoryViewsPageData = {
  seo: SEO;
  hero: {
    bg: 'section-1';
    variant: 'wide';
    trustLabel: string;
    title: string;
    description: string;
    descriptionSecondary: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
    trustBadgeBase: {
      avatarSrcs: string[];
      ratingIconSrc: string;
      rating: string;
    };
    illustration: {
      src: string;
      alt: string;
      width: number;
      height: number;
      maxWidthClassName: string;
      unoptimized: boolean;
    };
  };
  orderForm: {
    badge: string;
    serviceLabel: string;
    serviceTypeLabel: string;
    urlFieldLabel: string;
    urlPlaceholder: string;
    submitLabel: string;
  };
  whyChoose: ServiceLeadingContent;
  whoShouldBuy: WhoShouldBuySectionData;
  workingProcess: {
    badge: string;
    underlineSrc: string;
    underlineWidth: number;
    title: string;
    subtitle: string;
    titleClassName: string;
    subtitleClassName: string;
    steps: ServiceWorkingProcessStep[];
  };
  thingsToKnow: ThingsToKnowSectionData;
  faq: FaqSectionData;
  relatedServices: ServiceLeadingContent & {
    ctaLabel: string;
  };
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

export const data: InstagramStoryViewsPageData = {
  seo: {
    title: 'Buy Instagram Story Views in Bangladesh | TrendEvo',
    description:
      'Buy Instagram Story Views in Bangladesh with TrendEvo. Improve story reach, daily visibility, and audience activity using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-instagram-story-views',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Brands & Agencies',
    title: 'Buy gt<Instagram Story Views> in Bangladesh for Better Daily Visibility',
    description:
      'Instagram Stories are one of the fastest ways to stay visible in front of your audience. When your Stories get more views, your daily updates, offers, behind-the-scenes content, polls, and announcements look more active and worth checking. TrendEvo helps creators, influencers, eCommerce brands, restaurants, agencies, startups, SMEs, and local businesses buy Instagram Story Views in Bangladesh through an easy lnk<Instagram SMM Panel|/instagram-smm-panel> with local payment support and secure delivery.',
    descriptionSecondary:
      'Our Instagram Story Views Service is made for users who want stronger daily content performance, better audience reach, and more visible activity on temporary posts. As a lnk<best SMM Panel BD|/> choice for Instagram growth, TrendEvo lets you choose a suitable Story Views package, pay through bKash, Nagad, Rocket, or other supported methods, and support your Instagram marketing without sharing your password.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    trustBadgeBase: {
      avatarSrcs: [
        '/images/reviews/home-hero-hero-1-avatar.png',
        '/images/reviews/home-hero-hero-2-avatar.png',
        '/images/reviews/home-hero-hero-3-avatar.png',
        '/images/reviews/home-hero-hero-4-avatar.png',
        '/images/reviews/home-hero-hero-5-avatar.png',
        '/images/reviews/home-hero-hero-3-avatar.png',
      ],
      ratingIconSrc: '/images/icons/home-hero-trust-star-rating-icon.png',
      rating: '(4.8)',
    },
    illustration: {
      src: '/images/subservice/buy-instagram-story-views/buy-instagram-story-views-in-bangladesh-for-better-daily-visibility.webp',
      alt: 'Buy Instagram Story Views in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Instagram Services',
    serviceLabel: 'Story Views',
    serviceTypeLabel: 'Story Views',
    urlFieldLabel: 'Instagram Story or Profile URL',
    urlPlaceholder: 'https://instagram.com/yourprofile',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Instagram Story Views> in Bangladesh',
    subtitle:
      'For Bangladeshi users, Instagram Stories often work as a quick trust point before customers visit a profile, reply to an offer, or check a product. lnk<TrendEvo|/about-us> makes Story Views easier to manage with local payment support, clear order updates, and a simple lnk<SMM Panel dashboard|signup> for creators, brands, influencers, agencies, and resellers.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Story View Delivery',
        description:
          'Your Instagram Story Views order starts after you submit it from the dashboard. Delivery speed may depend on the story status, package size, and current order volume, but TrendEvo keeps the process smooth for daily content activity.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Story View Packages',
        description:
          'You can buy Instagram Story Views in Bangladesh without using a large promotion budget. Our packages work well for creators, online shops, fashion pages, restaurants, cafés, startups, agencies, freelancers, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right Instagram Story Views package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
        icon: '/images/subservice/shared/24-7-support-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[167%] max-w-none object-cover -translate-x-[34%] -translate-y-[13%]',
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Local Payment Options',
        description:
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Instagram Marketing Bangladesh easier for users who prefer trusted local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Daily Visibility Focus',
        description:
          'TrendEvo focuses on Instagram Story Views that support audience reach, profile activity, and brand presence. You can start with a small order, test the service, and increase your story visibility based on your content plan.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Instagram Story Views',
    title: 'Who Should Buy gt<Instagram Story Views> in Bangladesh?',
    subtitle:
      'Instagram Story Views help short-term content look more active before it disappears. TrendEvo’s Story engagement service is useful for Bangladeshi users who want better daily visibility, stronger customer attention, and more active audience touchpoints.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Content Creators and Influencers',
        description:
          'Creators use Stories to share daily updates, behind-the-scenes clips, polls, Q & A, lifestyle moments, and collaboration notices. Food reviewers, fashion influencers, travel creators, educators, musicians, fitness coaches, and entertainment pages can use Story Views to keep their audience presence stronger.',
      },
      {
        title: 'E-commerce Stores and Fashion Brands',
        description:
          'Online shops in Bangladesh often use Stories for flash sales, new arrivals, limited stock alerts, customer reviews, size charts, and delivery updates. Clothing stores, beauty brands, gadget sellers, jewelry pages, and handmade product businesses can buy Instagram Story Views to make daily promotions look more visible.',
      },
      {
        title: 'Restaurants, Cafés, and Local Businesses',
        description:
          'Restaurants, cafés, cloud kitchens, salons, gyms, training centers, and service providers can use Instagram Story Views for menu updates, booking reminders, discount offers, opening hours, event clips, and customer moments.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often manage daily story campaigns for clients. TrendEvo helps them place Instagram Story Views orders from one dashboard with clear pricing, local payment options, and reseller-friendly access.',
      },
      {
        title: 'Startups, Personal Brands, and Institutions',
        description:
          'Startups, public figures, personal brands, NGOs, and educational institutions need regular visibility for quick updates. Instagram Story Views can support course reminders, launch countdowns, awareness updates, event notices, and community messages.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Instagram Story Views on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Instagram Story Views in Bangladesh should be simple and quick. TrendEvo keeps the process easy, so creators, business owners, influencers, agencies, freelancers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse Instagram SMM Panel services, compare Story Views packages, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Instagram Story Views order.',
      },
      {
        number: '03',
        title: 'Choose Instagram Story Views Service',
        description:
          'Go to the Instagram services section and select the Story Views package that matches your content goal. You can choose a starter package, a daily visibility package, or a larger option for brand and client campaigns.',
      },
      {
        number: '04',
        title: 'Enter Your Instagram Story Link or Profile Details',
        description:
          'Submit the required Instagram story link, profile link, or public username based on the selected service rules, choose the quantity, and place the order. You do not need to share your Instagram password. TrendEvo processes the service using public information only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Instagram Story Views>',
    image: {
      src: '/images/subservice/buy-instagram-story-views/things-to-know-before-you-buy-instagram-story-views.png',
      alt: 'Things to Know Before You Buy Instagram Story Views',
    },
    paragraphs: [
      'Buying Instagram Story Views can help your daily content look more active, but the best result comes when your Stories have a clear purpose. Before placing an order on TrendEvo, make sure your Instagram account is public, your submitted details are correct, and your selected package matches your story activity.',
      'You do not need to share your Instagram password to buy Instagram Story Views in Bangladesh. TrendEvo only needs the required public story or profile information to process the service. This keeps the process safer and easier for creators, businesses, influencers, agencies, and resellers.',
      'For a natural appearance, avoid very large view orders on an account with weak posting habits or empty highlights. Start with a suitable package, post useful Stories, and keep your updates consistent. This helps your story activity look more believable to Bangladeshi viewers.',
      'Instagram Story Views can support visibility, but they work best with content people want to tap through. Use polls, questions, product updates, countdowns, price details, customer feedback, location tags, and short captions so your daily Stories feel worth watching.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Instagram Story Views> in Bangladesh',
    subtitle:
      'Find clear answers about buying Instagram Story Views in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support daily Instagram visibility.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Instagram Story Views from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only provide the required public Instagram story or profile information. We never ask for your Instagram password, so your login details stay private.',
      },
      {
        question: 'Can I buy Instagram Story Views in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Instagram Story Views order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, influencers, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Instagram password?',
        answer:
          'No, you do not need to share your password. To buy Instagram Story Views, you only need to provide the required public story link, profile link, or username based on the service instructions.',
      },
      {
        question: 'How fast will my Instagram Story Views order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, story availability, account status, and current order volume.',
      },
      {
        question: 'Can I track my Instagram Story Views order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Instagram Story Views order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy views for daily Instagram Stories?',
        answer:
          'Yes, you can buy Instagram Story Views for daily Stories when the selected service supports your content type. This is useful for creators and businesses that post regular updates.',
      },
      {
        question: 'Do Instagram Story Views help with audience retention?',
        answer:
          'Instagram Story Views can support daily visibility and keep your content looking active. Audience retention also depends on your story sequence, hooks, stickers, offers, polls, replies, and how useful your updates are.',
      },
      {
        question: 'Will buying Instagram Story Views help my business promotion?',
        answer:
          'Instagram Story Views can make offers, product updates, menu posts, and event reminders look more noticed. For stronger results, combine Story Views with clear pricing, strong visuals, quick CTAs, and regular customer replies.',
      },
      {
        question: 'Who can use TrendEvo’s Instagram Story Views service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, influencers, eCommerce stores, fashion brands, restaurants, cafés, freelancers, startups, public figures, educational institutions, digital agencies, and SMM resellers who want stronger Instagram Story visibility.',
      },
    ],
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Contact US',
    ctaButtonHref: '/contact-us',
  },

  relatedServices: {
    badge: 'RELATED SERVICE',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 198,
    title: 'Related Services You gt<Might Also Need>',
    subtitle:
      'Instagram Story Views help your daily updates get more attention, but stronger growth comes when your posts and profile also build trust. TrendEvo offers related Instagram SMM services in Bangladesh to support visibility, credibility, and content performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Views',
        description:
          'Increase visibility for your Instagram Reels and videos with more views. This service helps product videos, creator clips, campaign reels, and brand content look more active to new viewers.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Instagram Likes',
        description:
          'Improve the trust signal of your Instagram posts and Reels with more likes. Instagram likes help product photos, carousels, offers, and daily updates look more popular to visitors.',
        icon: '/images/subservice/shared/buy-facebook-comments-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
    ],
    bottomRowFeatures: [],
    ctaLabel: 'Sign Up Now',
  },

  cta: {
    title: 'Ready to Grow with the gt<Cheapest SMM Panel BD>?',
    description:
      'Join TrendEvo and manage your Instagram, Facebook, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Instagram Services',
    secondaryButtonHref: '/instagram-smm-panel',
  },
};
