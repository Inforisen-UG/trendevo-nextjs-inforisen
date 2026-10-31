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

type InstagramFollowersPageData = {
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

export const data: InstagramFollowersPageData = {
  seo: {
    title: 'Buy Instagram Followers in Bangladesh | TrendEvo',
    description:
      'Buy Instagram Followers in Bangladesh with TrendEvo. Grow profile trust, brand credibility, and audience presence using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-instagram-followers',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Influencers & Brands',
    title: 'Buy gt<Instagram Followers> in Bangladesh for Stronger Profile Growth',
    description:
      'Instagram users often decide within seconds whether a profile feels worth following. A profile with a stronger follower base can look more trusted, more active, and more established. TrendEvo helps creators, influencers, small businesses, eCommerce stores, agencies, startups, freelancers, and personal brands buy Instagram followers in Bangladesh with simple ordering, local payment support, and secure delivery.',
    descriptionSecondary:
      'Our Instagram Followers Service is made for profiles that need better social proof, stronger brand authority, and a more professional first impression. You can choose a suitable package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your Instagram presence without sharing your password.',
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
      src: '/images/subservice/buy-instagram-followers/buy-instagram-followers-in-bangladesh-for-stronger-profile-growth.webp',
      alt: 'Buy Instagram Followers in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Instagram Services',
    serviceLabel: 'Followers',
    serviceTypeLabel: 'Followers',
    urlFieldLabel: 'Instagram Profile URL',
    urlPlaceholder: 'https://instagram.com/yourprofile',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Instagram Followers> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> gives Bangladeshi Instagram users a simple way to build early profile trust without complex steps. With local payment options, clear order tracking, and a user-friendly dashboard, TrendEvo works as the lnk<best SMM Panel BD|/> choice for creators, online brands, agencies, and resellers managing Instagram follower growth.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Growth Support',
        description:
          'Your Instagram followers order starts after you submit it from the dashboard. Delivery speed may depend on the package size, but TrendEvo is designed for smooth and quick order processing.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Follower Packages',
        description:
          'You can buy Instagram followers in Bangladesh without spending a big budget. Our packages are suitable for new creators, online shops, fashion brands, cafés, educators, public figures, startups, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Friendly Support Team',
        description:
          'Need help choosing the right Instagram Followers Panel service? TrendEvo support can guide you with package selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Instagram Marketing Bangladesh easier for users who prefer local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Profile Credibility Focus',
        description:
          'TrendEvo focuses on Instagram growth services that support profile trust and audience perception. You can start with a small package, review the result, and scale your Instagram followers based on your growth plan.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Instagram Followers',
    title: 'Who Should Buy gt<Instagram Followers> in Bangladesh?',
    subtitle:
      'Instagram followers can make a profile look more reliable when people visit from reels, stories, ads, hashtags, influencer mentions, or local search. TrendEvo’s lnk<Instagram SMM Panel|/instagram-smm-panel> service is useful for Bangladeshi users who want stronger profile trust, better brand value, and a smoother base before posting regularly or running promotions.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Content Creators and Influencers',
        description:
          'Bangladeshi creators often need a solid profile impression before brands, viewers, and collaborators take them seriously. Reel makers, travel vloggers, beauty creators, food reviewers, musicians, gamers, fitness trainers, and lifestyle influencers can use Instagram followers to make their profile look more active and collaboration-ready.',
      },
      {
        title: 'Small Businesses and Local Brands',
        description:
          'Many local businesses in Bangladesh use Instagram as a product showcase and customer communication channel. Boutiques, salons, cafés, gyms, coaching centers, restaurants, and service-based brands can buy Instagram followers to build stronger page confidence before visitors check their posts, highlights, or inbox.',
      },
      {
        title: 'E-commerce Stores and Fashion Brands',
        description:
          'Bangladeshi online shoppers often judge a store by its follower count before asking about price or delivery. Fashion pages, skincare brands, gadget sellers, home decor shops, jewellery stores, and handmade product sellers can use Instagram followers to improve social proof and support buyer confidence.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies, freelancers, and SMM resellers in Bangladesh need simple Instagram growth support for client work. TrendEvo helps them place Instagram follower orders from one dashboard with transparent pricing, local payment options, and reseller-friendly access for campaign-based projects.',
      },
      {
        title: 'Startups, Public Figures, and Institutions',
        description:
          'Startups, public figures, trainers, NGOs, schools, and education brands need a trusted Instagram presence to reach the right audience. A stronger follower count can support launch campaigns, personal branding, admission promotions, social awareness, public updates, and community engagement across Bangladesh.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Instagram Followers on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Instagram followers in Bangladesh should feel easy. TrendEvo keeps the full process simple, so creators, business owners, agencies, influencers, freelancers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'lnk<Sign up|signup> with basic details and enter the TrendEvo dashboard. From there, you can browse Instagram SMM Panel services, check prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Instagram followers order.',
      },
      {
        number: '03',
        title: 'Choose Instagram Followers Service',
        description:
          'Go to the Instagram services section and select the follower package that matches your goal. You can choose a starter package, a creator growth package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your Instagram Profile URL',
        description:
          'Paste the correct Instagram profile link or username, select the quantity, and submit the order. You do not need to share your Instagram password. TrendEvo processes the order using your public profile information only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Instagram Followers>',
    image: {
      src: '/images/subservice/buy-instagram-followers/things-to-know-before-you-buy-instagram-followers.png',
      alt: 'Things to Know Before You Buy Instagram Followers',
    },
    paragraphs: [
      'Buying Instagram followers can help your profile look more credible, but the best results come when your profile is ready for visitors. Before placing an order on TrendEvo, make sure your Instagram account is public, your profile link or username is correct, and your selected package fits your current profile size.',
      'You do not need to share your Instagram password to buy Instagram followers in Bangladesh. TrendEvo only needs your public profile link or username to process the order. This keeps your account safer and makes the process simple for creators, businesses, influencers, agencies, and resellers.',
      'For a natural profile appearance, avoid sudden oversized orders on a profile with no posts, weak bio, or empty highlights. Start with a suitable quantity, improve your profile look, and grow step by step. This helps your account look more believable to Bangladeshi visitors.',
      'Instagram followers can support social proof, but they work best with strong content. Post reels, carousels, product photos, behind-the-scenes clips, testimonials, offers, and story highlights so new visitors have a reason to follow and trust your profile.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Instagram Followers> in Bangladesh',
    subtitle:
      'Find clear answers about buying Instagram followers in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support Instagram profile growth.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Instagram followers from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public Instagram profile link or username. We never ask for your Instagram password, so your login details stay private.',
      },
      {
        question: 'Can I buy Instagram followers in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Instagram followers order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, influencers, businesses, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Instagram password?',
        answer:
          'No, you do not need to share your password. To buy Instagram followers, you only need to provide the correct Instagram profile link or username and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Instagram followers order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, profile status, and current order volume.',
      },
      {
        question: 'Can I track my Instagram followers order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Instagram followers order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy followers for a new Instagram account?',
        answer:
          'Yes, new Instagram accounts can order followers. For a natural appearance, it is better to start with a smaller package, optimize your bio, publish useful content, and increase your follower count gradually.',
      },
      {
        question: 'Do Instagram followers help with Reels growth?',
        answer:
          'Instagram followers can make your profile look stronger when people visit after watching a reel. Reels performance still depends on content quality, watch time, saves, shares, and audience response, but a trusted-looking profile can improve follow-through.',
      },
      {
        question: 'Will buying Instagram followers increase my engagement rate?',
        answer:
          'Instagram followers can improve profile trust and social proof, but engagement rate also depends on your content, captions, posting time, reels quality, and audience interaction. For better results, combine growth with consistent content.',
      },
      {
        question: 'Who can use TrendEvo’s Instagram followers service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, influencers, eCommerce stores, fashion brands, restaurants, freelancers, startups, public figures, educational institutions, digital agencies, and SMM resellers who want a stronger Instagram presence.',
      },
    ],
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Contact Support',
    ctaButtonHref: '/contact-us',
  },

  relatedServices: {
    badge: 'RELATED SERVICE',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 198,
    title: 'Related Services You gt<Might Also Need>',
    subtitle:
      'Instagram followers help your profile look more trusted, but stronger growth comes when your content also gets engagement. TrendEvo offers related Instagram SMM services in Bangladesh to support visibility, profile authority, and brand awareness.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Likes',
        description:
          'Increase the trust signal of your Instagram posts with more likes. Instagram likes help product photos, reels, carousels, offers, and brand updates look more popular to new visitors.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Instagram Comments',
        description:
          'Add more visible interaction to your Instagram content with comments. This service is useful for product launches, reels, campaign posts, influencer content, and brand announcements that need stronger audience response.',
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
    title: 'Ready to Grow with a gt<Trusted SMM Panel> in Bangladesh?',
    description:
      'Join TrendEvo and manage your Instagram, Facebook, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Instagram Services',
    secondaryButtonHref: '/instagram-smm-panel',
  },
};
