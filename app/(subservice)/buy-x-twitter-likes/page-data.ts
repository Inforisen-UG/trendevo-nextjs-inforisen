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

type TwitterLikesPageData = {
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
    platformLabel: string;
    orderPrefix: string;
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

export const data: TwitterLikesPageData = {
  seo: {
    title: 'Buy X (Twitter) Likes in Bangladesh | TrendEvo',
    description:
      'Buy X (Twitter) Likes in Bangladesh with TrendEvo. Improve tweet engagement, post credibility, and audience trust using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-x-twitter-likes',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Brands & Agencies',
    title: 'Buy gt<X (Twitter) Likes> in Bangladesh for Stronger Tweet Engagement',
    description:
      'Twitter, now known as X, moves fast. A post can get attention within minutes, but it can also disappear quickly if it looks inactive. Likes help a tweet look more valuable, trusted, and worth reading. TrendEvo helps entrepreneurs, creators, journalists, startups, public figures, digital agencies, and local businesses buy X (Twitter) likes in Bangladesh with simple ordering, local payment support, and secure delivery.',
    descriptionSecondary:
      'Our X (Twitter) Likes Service is made for posts that need stronger engagement, better social proof, and a more credible public response. You can choose a suitable likes package, pay through bKash, Nagad, Rocket, or other supported methods, and improve your X post activity without sharing your password.',
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
      src: '/images/subservice/buy-x-twitter-likes/buy-x-twitter-likes-in-bangladesh-for-stronger-tweet-engagement.webp',
      alt: 'Buy X (Twitter) Likes in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'X (Twitter) Services',
    platformLabel: 'X (Twitter)',
    orderPrefix: 'Order X (Twitter)',
    serviceLabel: 'Likes',
    serviceTypeLabel: 'Likes',
    urlFieldLabel: 'X (Twitter) Post URL',
    urlPlaceholder: 'https://x.com/username/status/123456789',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<X (Twitter) Likes> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is built for Bangladeshi users who want a simple way to improve tweet engagement and post credibility. From local payment support to clear order tracking, the lnk<best SMM Panel in bangladesh|/> helps creators, brands, entrepreneurs, agencies, and resellers manage X (Twitter) likes from one clean dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Like Processing',
        description:
          'Your X (Twitter) likes order starts after you submit it from the dashboard. Delivery speed may depend on the post link, package size, and current order volume, but TrendEvo keeps the process smooth and easy to follow.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Like Packages',
        description:
          'You can buy X (Twitter) likes in Bangladesh without using a large promotion budget. Our packages work well for startup founders, creators, journalists, public figures, business owners, freelancers, agencies, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right X (Twitter) Like Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes X Marketing Bangladesh easier for users who prefer trusted local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Engagement-Focused Growth',
        description:
          'TrendEvo focuses on X (Twitter) likes that support post trust, audience response, and content credibility. You can start with a small package, review the result, and increase likes based on your post strategy.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy X (Twitter) Likes',
    title: 'Who Should Buy gt<X (Twitter) Likes> in Bangladesh?',
    subtitle:
      'X (Twitter) likes help posts look more accepted when people see them in feeds, replies, quote posts, search results, trending topics, or profile timelines. TrendEvo’s lnk<X (Twitter) SMM Panel|/x-twitter-smm-panel> is useful for Bangladeshi users who want stronger tweet credibility, better audience confidence, and more visible interaction around important posts.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Entrepreneurs and Startup Founders',
        description:
          'Bangladeshi founders use X to share product updates, launch news, hiring posts, funding stories, and market opinions. More likes can help these posts look more serious when potential customers, investors, partners, and media people see them.',
      },
      {
        title: 'Creators, Writers, and Personal Brands',
        description:
          'Creators need likes to make posts, threads, opinions, tips, and announcements look more valuable. Tech creators, finance writers, designers, podcasters, lifestyle voices, and niche influencers can use X (Twitter) likes to improve post appeal and profile trust.',
      },
      {
        title: 'Journalists, Public Figures, and Professionals',
        description:
          'Journalists, speakers, consultants, public figures, researchers, and industry experts often use X to share news, views, and professional insights. Likes can support stronger visibility and make their posts look more relevant in public conversations.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often manage X engagement for client campaigns. TrendEvo helps them place X (Twitter) likes orders from one dashboard with clear pricing, local payment support, and reseller-friendly access.',
      },
      {
        title: 'SMEs, Local Businesses, and Community Pages',
        description:
          'Local businesses, eCommerce brands, NGOs, community pages, and service providers can use X for updates, offers, announcements, and customer communication. X (Twitter) likes can help these posts look more active and trusted to new viewers.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy X (Twitter) Likes on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying X (Twitter) likes in Bangladesh should be simple and clear. TrendEvo keeps the full process easy, so creators, business owners, founders, agencies, freelancers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'lnk<Sign up|signup> with basic details and enter the TrendEvo dashboard. From there, you can browse X (Twitter) SMM Panel services, compare prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your X (Twitter) likes order.',
      },
      {
        number: '03',
        title: 'Choose X (Twitter) Likes Service',
        description:
          'Go to the Twitter or X services section and select the likes package that matches your post goal. You can choose a starter package, a campaign package, or a larger package for client posts.',
      },
      {
        number: '04',
        title: 'Enter Your X (Twitter) Post URL',
        description:
          'Paste the correct X post link, select the quantity, and submit the order. You do not need to share your X password. TrendEvo processes the order using the public post URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<X (Twitter) Likes>',
    image: {
      src: '/images/subservice/buy-x-twitter-likes/things-to-know-before-you-buy-x-twitter-likes.png',
      alt: 'Things to Know Before You Buy X (Twitter) Likes',
    },
    paragraphs: [
      'Buying X (Twitter) likes can help your post look more engaging, but the best result comes when your content is ready for attention. Before placing an order on TrendEvo, make sure your X post is public, your post link is correct, and your selected package fits your current post activity.',
      'You do not need to share your X (Twitter) password to buy X (Twitter) likes in Bangladesh. TrendEvo only needs your public post URL to process the order. This keeps the process safer and easier for creators, businesses, entrepreneurs, agencies, and resellers.',
      'For a natural post appearance, avoid sudden oversized orders on a post with weak wording, no context, or very low activity. Start with a suitable quantity, improve your post message, and grow engagement step by step. This helps your tweet look more believable to Bangladeshi viewers.',
      'X (Twitter) likes can support social proof, but they work best with strong content. Share useful threads, clear opinions, product updates, market insights, short tips, news reactions, and community posts so people have a real reason to read, like, and reply.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy X (Twitter) Likes> in Bangladesh',
    subtitle:
      'Find clear answers about buying X (Twitter) likes in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support X post engagement.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy X (Twitter) likes from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public X post link. We never ask for your Twitter or X password, so your login details stay private.',
      },
      {
        question: 'Can I buy X (Twitter) likes in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your X (Twitter) likes order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, entrepreneurs, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my X (Twitter) password?',
        answer:
          'No, you do not need to share your password. To buy X (Twitter) likes, you only need to provide the correct X post URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my X (Twitter) likes order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, post status, and current order volume.',
      },
      {
        question: 'Can I track my X (Twitter) likes order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your X (Twitter) likes order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy likes for a new X post?',
        answer:
          'Yes, new X posts can receive likes. For a natural appearance, it is better to start with a smaller package, write a clear post, and increase engagement gradually.',
      },
      {
        question: 'Do X (Twitter) likes help with post credibility?',
        answer:
          'Yes, likes can make a post look more accepted and valuable when people see it in their feed or visit your profile. Long-term credibility also depends on content quality, timing, and consistency.',
      },
      {
        question: 'Will buying X (Twitter) likes increase my reach?',
        answer:
          'X (Twitter) likes can support visible engagement, but reach also depends on reposts, replies, profile strength, topic relevance, posting time, and audience interest.',
      },
      {
        question: 'Who can use TrendEvo’s X (Twitter) likes service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, entrepreneurs, startups, journalists, public figures, local businesses, SMEs, NGOs, digital agencies, freelancers, and SMM resellers who want stronger X post engagement.',
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
      'X (Twitter) likes help your posts look more trusted, but stronger growth comes when your profile also builds authority and wider distribution. TrendEvo offers related X SMM services in Bangladesh to support post visibility, profile trust, and audience engagement.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy X (Twitter) Followers',
        description:
          'Grow your profile authority with more X (Twitter) followers. This service helps creators, entrepreneurs, brands, and public figures build a stronger first impression when people visit after reading a post.',
        icon: '/images/subservice/shared/buy-facebook-comments-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy X (Twitter) Retweets',
        description:
          'Increase the distribution of your X posts with more retweets. This service is useful for startup news, public updates, offers, awareness posts, launches, and content that needs wider reach.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
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
    title: 'Ready to Grow with a gt<Trusted SMM Panel> in Bangladesh?',
    description:
      'Join TrendEvo and manage your X (Twitter), Instagram, Facebook, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All X (Twitter) Services',
    secondaryButtonHref: '/x-twitter-smm-panel',
  },
};
