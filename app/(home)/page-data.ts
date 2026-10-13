import type { FaqSectionData } from '@/components/sections/faq-section';
import type { TestimonialsSectionData } from '@/components/sections/testimonials-section';

import type { SectionBgKey } from '@/components/sections/primary-section';

type SEO = {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
};

type SectionHeadingData = {
  badge?: string;
  title: string;
  subtitle: string;
  underlineSrc?: string;
  underlineWidth?: number;
  align?: 'left' | 'center';
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
};

type HomeHeroTrustBadge = {
  avatarSrcs: string[];
  ratingIconSrc: string;
  rating: string;
  promoIconSrc: string;
};

type HomeHeroData = {
  trustBadge: HomeHeroTrustBadge;
  heading: string;
  description: string;
  promo: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
  illustration: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type HomeStatKey =
  | 'ordersCompleted'
  | 'servicesAll'
  | 'usersAll'
  | 'satisfaction';

type HomeStatItem = {
  key: HomeStatKey;
  label: string;
  icon: string;
  width: number;
  height: number;
  displayWidth: number;
  mobileDisplayWidth: number;
  tabletDisplayWidth: number;
};

type HomeServiceItem = {
  number: string;
  title: string;
  description: string;
};

type HomePlatformService = {
  id: string;
  label: string;
  icon: string;
  iconClassName?: string;
  decorationImage: string;
  marketingTitle: string;
  description: string;
  services: HomeServiceItem[];
  exploreLabel: string;
  exploreHref: string;
};

type HomeWorkingProcessStep = {
  number: string;
  title: string;
  description: string;
  highlighted: boolean;
  corner?: 'tl' | 'br';
};

type HomeWhyChooseUsFeature = {
  title: string;
  description: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

type HomePlatformMarqueeItem = {
  name: string;
  icon: string;
  iconSize?: number;
  fullFrame?: boolean;
};

type HomeAdvantageItem = {
  title: string;
  description: string;
};

type HomePricingPlan = {
  startingPrice: string;
  serviceName: string;
  buyLabel: string;
  buyHref: string;
};

type HomePricingPlatform = {
  id: string;
  label: string;
  icon: string;
  plans: HomePricingPlan[];
};

type HomeTestimonialsData = TestimonialsSectionData;

type HomePageData = {
  seo: SEO;
  hero: HomeHeroData;
  stats: {
    items: HomeStatItem[];
  };
  ourServices: {
    heading: SectionHeadingData;
    platforms: HomePlatformService[];
  };
  about: {
    heading: SectionHeadingData;
    features: string[];
    trustPoints: string[];
    ctaLabel: string;
    ctaHref: string;
    image: {
      src: string;
      alt: string;
    };
  };
  workingProcess: {
    heading: SectionHeadingData;
    steps: HomeWorkingProcessStep[];
  };
  whyChooseUs: {
    heading: SectionHeadingData;
    leftFeatures: HomeWhyChooseUsFeature[];
    rightFeatures: HomeWhyChooseUsFeature[];
    timelineSteps: string[];
  };
  paymentMethods: {
    heading: SectionHeadingData;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  platformMarquee: {
    platforms: HomePlatformMarqueeItem[];
  };
  advantages: {
    heading: SectionHeadingData;
    leftItems: HomeAdvantageItem[];
    rightItems: HomeAdvantageItem[];
    image: {
      src: string;
      alt: string;
    };
    sectionBg?: SectionBgKey;
    sectionClassName?: string;
  };
  pricing: {
    heading: SectionHeadingData;
    features: string[];
    platforms: HomePricingPlatform[];
  };
  testimonials: HomeTestimonialsData;
  faq: FaqSectionData;
  blog: {
    heading: SectionHeadingData;
  };
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
  footer: {
    blurb: string;
  };
};

export type {
  HomeHeroData, HomePageData, HomePlatformMarqueeItem, HomePlatformService, HomePricingPlan, HomePricingPlatform, HomeStatItem,
  HomeStatKey, HomeWhyChooseUsFeature,
  HomeWorkingProcessStep, SectionHeadingData
};

export const data: HomePageData = {
  seo: {
    title: 'Cheapest SMM Panel in Bangladesh Pay with bKash | TrendEvo',
    description:
      'TrendEvo is a trusted SMM Panel Bangladesh platform for Facebook, Instagram, YouTube, TikTok, and more. Pay easily with bKash, Nagad, or Rocket.',
    canonical: '/',
  },

  hero: {
    trustBadge: {
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
      promoIconSrc: '/images/icons/home-hero-hero-fire-icon-illustration.png',
    },
    heading: 'Cheapest SMM Panel in Bangladesh With gt<Fast & Secure Services>',
    description:
      'TrendEvo is a trusted and cheapest SMM Panel in Bangladesh platform built for businesses, creators, agencies, freelancers, and resellers. Order Facebook, Instagram, YouTube, TikTok, Telegram, and more from one simple dashboard. Add funds with bKash, Nagad, or Rocket and track every order easily.',
    promo: 'Instant delivery on selected SMM services with affordable pricing.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See Our Services',
    secondaryButtonHref: '/services',
    illustration: {
      src: '/images/home/cheapest-smm-panel-in-bangladesh-with-fast-and-secure-services.png',
      alt: 'TrendEvo platform user with social media icons and analytics',
      width: 669,
      height: 728,
    },
  },

  stats: {
    items: [
      {
        key: 'ordersCompleted',
        label: 'Total Completed Orders',
        icon: '/images/stats/total-completed-orders-icon.png',
        width: 167,
        height: 150,
        displayWidth: 111,
        mobileDisplayWidth: 80,
        tabletDisplayWidth: 96,
      },
      {
        key: 'servicesAll',
        label: 'Total Services Available',
        icon: '/images/stats/total-services-available-icon.png',
        width: 152,
        height: 150,
        displayWidth: 101,
        mobileDisplayWidth: 73,
        tabletDisplayWidth: 87,
      },
      {
        key: 'usersAll',
        label: 'Total Users',
        icon: '/images/stats/total-users-icon.png',
        width: 188,
        height: 150,
        displayWidth: 125,
        mobileDisplayWidth: 90,
        tabletDisplayWidth: 108,
      },
      {
        key: 'satisfaction',
        label: 'Customer Satisfaction Rate',
        icon: '/images/stats/customer-satisfaction-rate-icon.png',
        width: 144,
        height: 150,
        displayWidth: 96,
        mobileDisplayWidth: 69,
        tabletDisplayWidth: 83,
      },
    ],
  },

  ourServices: {
    heading: {
      badge: 'Our Services',
      title: 'All-in-One SMM Panel gt<Services in Bangladesh>',
      subtitle:
        'TrendEvo helps businesses, creators, agencies, and resellers lnk</services|buy SMM services in Bangladesh> for Facebook, Instagram, YouTube, TikTok, and more. Get fast delivery, secure order tracking, affordable pricing, and easy payments with bKash, Nagad, or Rocket.',
      titleClassName: 'text-2xl sm:text-[28px] lg:text-[36px]',
      subtitleClassName: 'text-sm sm:text-base md:text-lg',
    },
    platforms: [
      {
        id: 'facebook',
        label: 'Facebook',
        icon: '/images/our-services/platforms/facebook-platform-icon.webp',
        decorationImage: '/images/our-services/decorations/facebook-decoration.webp',
        marketingTitle: 'Facebook SMM Panel Services',
        description:
          'Use TrendEvo’s lnk</facebook-smm-panel|Facebook SMM Panel> Services to build social proof, improve post activity, and support page growth in Bangladesh. Perfect for businesses, creators, agencies, resellers, and local brands that want faster Facebook visibility.',
        exploreLabel: 'Explore Facebook Services',
        exploreHref: '/facebook-smm-panel',
        services: [
          { number: '01', title: 'Facebook Post Likes', description: 'Improve post engagement and make your updates look more active.' },
          { number: '02', title: 'Facebook Page Likes', description: 'Build a stronger page presence for your business, brand, or community.' },
          { number: '03', title: 'Facebook Comments', description: 'Add relevant activity to posts and create better audience interaction.' },
          { number: '04', title: 'Facebook Shares', description: 'Help your content reach more people through wider post distribution.' },
          { number: '05', title: 'Facebook Video Views', description: 'Increase visibility for product videos, reels, reviews, and campaigns.' },
          { number: '06', title: 'Facebook Reactions', description: 'Make your Facebook posts look more natural with mixed reactions.' },
        ],
      },
      {
        id: 'instagram',
        label: 'Instagram',
        icon: '/images/our-services/platforms/instagram-platform-icon.webp',
        decorationImage: '/images/our-services/decorations/instagram-decoration.png',
        marketingTitle: 'Instagram SMM Panel Services',
        description:
          'Use our lnk</instagram-smm-panel|Instagram SMM Panel> Services to grow your profile, improve content reach, and build stronger social proof in Bangladesh. Ideal for creators, influencers, online shops, agencies, resellers, and brands that want better Instagram visibility.',
        exploreLabel: 'Explore Instagram Services',
        exploreHref: '/instagram-smm-panel',
        services: [
          { number: '01', title: 'Instagram Followers', description: 'Build a stronger profile presence and make your account look more trusted.' },
          { number: '02', title: 'Instagram Likes', description: 'Improve post engagement for photos, reels, product posts, and brand updates.' },
          { number: '03', title: 'Instagram Comments', description: 'Add useful activity to posts and support better audience interaction.' },
          { number: '04', title: 'Instagram Reels Views', description: 'Increase reach for short videos, trending content, and promotional reels.' },
          { number: '05', title: 'Instagram Story Views', description: 'Boost visibility for daily updates, offers, launches, and announcements.' },
          { number: '06', title: 'Instagram Saves', description: 'Help important posts look more valuable and useful to your audience.' },
        ],
      },
      {
        id: 'twitter',
        label: 'X (Twitter)',
        icon: '/images/our-services/platforms/x-twitter-platform-icon.png',
        iconClassName: 'scale-150',
        decorationImage: '/images/our-services/decorations/x-twitter-decoration.png',
        marketingTitle: 'X (Twitter) SMM Panel Services',
        description:
          'Use the best lnk</x-twitter-smm-panel|X (Twitter) SMM Panel> Services to improve profile activity, post engagement, and brand visibility in Bangladesh. Best for creators, startups, agencies, resellers, public figures, and businesses that want faster reach on X.',
        exploreLabel: 'Explore X (Twitter) Services',
        exploreHref: '/x-twitter-smm-panel',
        services: [
          { number: '01', title: 'X (Twitter) Followers', description: 'Build a stronger profile base and make your account look more active.' },
          { number: '02', title: 'X (Twitter) Post Likes', description: 'Improve engagement on tweets, updates, offers, and campaign posts.' },
          { number: '03', title: 'X (Twitter) Retweets', description: 'Help your posts reach more people through wider content sharing.' },
          { number: '04', title: 'X (Twitter) Comments', description: 'Add visible activity and support better discussion on important posts.' },
          { number: '05', title: 'X (Twitter) Views', description: 'Increase visibility for tweets, videos, and promotional content.' },
          { number: '06', title: 'X (Twitter) Poll Votes', description: 'Support poll activity for campaigns, feedback, and audience research.' },
        ],
      },
      {
        id: 'youtube',
        label: 'YouTube',
        icon: '/images/our-services/platforms/youtube-platform-icon.webp',
        decorationImage: '/images/our-services/decorations/youtube-decoration.png',
        marketingTitle: 'YouTube SMM Panel Services',
        description:
          'Use TrendEvo’s lnk</youtube-smm-panel|YouTube SMM Panel> Services to support channel growth, video reach, and viewer trust in Bangladesh. This service is useful for Bangladeshi creators, educators, reviewers, agencies, and brands that want more visibility from a reliable SMM Panel BD platform.',
        exploreLabel: 'Explore YouTube Services',
        exploreHref: '/youtube-smm-panel',
        services: [
          { number: '01', title: 'YouTube Subscribers', description: 'Build a stronger channel base for new videos, tutorials, reviews, and brand content.' },
          { number: '02', title: 'YouTube Views', description: 'Improve video visibility for product videos, music videos, courses, and local campaigns.' },
          { number: '03', title: 'YouTube Likes', description: 'Add stronger engagement signals and make your content look more trusted.' },
          { number: '04', title: 'YouTube Comments', description: 'Create active discussion around videos, reviews, launches, and creator content.' },
          { number: '05', title: 'YouTube Watch Time', description: 'Support longer viewing activity for channels working on growth goals.' },
          { number: '06', title: 'YouTube Shorts Views', description: 'Increase reach for short videos, trends, reels-style clips, and quick promotions.' },
        ],
      },
      {
        id: 'tiktok',
        label: 'TikTok',
        icon: '/images/our-services/platforms/tiktok-platform-icon.webp',
        decorationImage: '/images/our-services/decorations/tiktok-decoration.png',
        marketingTitle: 'TikTok SMM Panel Services',
        description:
          'Use TrendEvo’s lnk</tiktok-smm-panel|TikTok SMM Panel> Services to support short-video reach, profile activity, and content visibility in Bangladesh. It is helpful for creators, online shops, influencers, agencies, and resellers who want faster TikTok growth from a simple SMM panel dashboard.',
        exploreLabel: 'Explore TikTok Services',
        exploreHref: '/tiktok-smm-panel',
        services: [
          { number: '01', title: 'TikTok Followers', description: 'Build a stronger profile base for creators, shops, influencers, and personal brands.' },
          { number: '02', title: 'TikTok Likes', description: 'Improve engagement on videos, trends, product clips, and campaign content.' },
          { number: '03', title: 'TikTok Views', description: 'Increase visibility for short videos, viral-style content, and local promotions.' },
          { number: '04', title: 'TikTok Comments', description: 'Add active discussion and make videos feel more engaging.' },
          { number: '05', title: 'TikTok Shares', description: 'Help your content reach more users through wider video sharing.' },
          { number: '06', title: 'TikTok Live Views', description: 'Support live sessions, product showcases, creator events, and real-time campaigns.' },
        ],
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        icon: '/images/our-services/platforms/linkedin-platform-icon.webp',
        decorationImage: '/images/our-services/decorations/linkedin-decoration.png',
        marketingTitle: 'LinkedIn SMM Panel Services',
        description:
          'The best LinkedIn SMM Panel Services to improve professional visibility, company page trust, and content engagement. This service is useful for Bangladeshi startups, agencies, consultants, recruiters, B2B brands, and professionals who want a stronger LinkedIn presence.',
        exploreLabel: 'Explore LinkedIn Services',
        exploreHref: '/buy-linkedin-followers',
        services: [
          { number: '01', title: 'LinkedIn Followers', description: 'Build a stronger profile or company page presence for professional branding.' },
          { number: '02', title: 'LinkedIn Page Followers', description: 'Grow your business page and make your brand look more established.' },
          { number: '03', title: 'LinkedIn Post Likes', description: 'Improve engagement on business updates, hiring posts, and industry content.' },
          { number: '04', title: 'LinkedIn Comments', description: 'Add useful interaction to posts, announcements, and professional discussions.' },
          { number: '05', title: 'LinkedIn Shares', description: 'Help important posts reach more people through wider content distribution.' },
          { number: '06', title: 'LinkedIn Views', description: 'Increase visibility for profiles, posts, videos, and company updates.' },
        ],
      },
      {
        id: 'telegram',
        label: 'Telegram',
        icon: '/images/our-services/platforms/telegram-platform-icon.webp',
        decorationImage: '/images/our-services/decorations/telegram-decoration.png',
        marketingTitle: 'Telegram SMM Panel Services',
        description:
          'Grow Telegram channels and groups with our lnk</telegram-smm-panel|Telegram SMM panel> in Bangladesh. Useful for course groups, news channels, reseller communities, crypto updates, agencies, and digital sellers. Add funds with bKash, Nagad, or Rocket and manage every order from one dashboard.',
        exploreLabel: 'Explore Telegram Services',
        exploreHref: '/telegram-smm-panel',
        services: [
          { number: '01', title: 'Telegram Members', description: 'Grow channels and groups with a stronger member base.' },
          { number: '02', title: 'Telegram Subscribers', description: 'Build trust for updates, offers, news, and announcements.' },
          { number: '03', title: 'Telegram Post Views', description: 'Increase visibility on important posts and pinned messages.' },
          { number: '04', title: 'Telegram Reactions', description: 'Make channel posts look more active and engaging.' },
          { number: '05', title: 'Telegram Poll Votes', description: 'Support feedback, voting, and community decisions.' },
          { number: '06', title: 'Telegram Group Members', description: 'Grow niche groups for learning, business, and discussions.' },
        ],
      },
      {
        id: 'discord',
        label: 'Discord',
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        decorationImage: '/images/our-services/decorations/discord-decoration.png',
        marketingTitle: 'Discord SMM Panel Services',
        description:
          'Build stronger Discord servers with TrendEvo’s SMM panel in Bangladesh. Useful for gaming groups, crypto communities, NFT projects, course servers, agencies, and online brands. Add funds with bKash, Nagad, or Rocket and manage Discord orders from one dashboard.',
        exploreLabel: 'Explore Discord Services',
        exploreHref: '/buy-discord-members',
        services: [
          { number: '01', title: 'Discord Members', description: 'Grow servers with a stronger member base.' },
          { number: '02', title: 'Discord Online Members', description: 'Make your server look more active in real time.' },
          { number: '03', title: 'Discord Reactions', description: 'Add engagement to posts, updates, and announcements.' },
          { number: '04', title: 'Discord Server Boosts', description: 'Improve server appearance and unlock better features.' },
          { number: '05', title: 'Discord Friend Requests', description: 'Support profile growth and networking activity.' },
          { number: '06', title: 'Discord Message Activity', description: 'Add visible movement to selected server channels.' },
        ],
      },
      {
        id: 'spotify',
        label: 'Spotify',
        icon: '/images/our-services/platforms/spotify-platform-icon.webp',
        decorationImage: '/images/our-services/decorations/spotify-decoration.png',
        marketingTitle: 'Spotify SMM Panel Services',
        description:
          'Promote Spotify tracks, artists, and playlists with lnk</spotify-smm-panel|Spotify SMM panel> in Bangladesh. Useful for musicians, labels, podcast creators, agencies, and music promoters. Add funds with bKash, Nagad, or Rocket and manage Spotify growth from one dashboard.',
        exploreLabel: 'Explore Spotify Services',
        exploreHref: '/spotify-smm-panel',
        services: [
          { number: '01', title: 'Spotify Plays', description: 'Increase track plays for songs, podcasts, and new releases.' },
          { number: '02', title: 'Spotify Followers', description: 'Build a stronger artist, playlist, or profile presence.' },
          { number: '03', title: 'Spotify Monthly Listeners', description: 'Support artist visibility with better listener activity.' },
          { number: '04', title: 'Spotify Playlist Followers', description: 'Grow playlists for music promotion and curation.' },
          { number: '05', title: 'Spotify Saves', description: 'Help tracks look more valuable to new listeners.' },
          { number: '06', title: 'Spotify Podcast Plays', description: 'Increase reach for podcast episodes and audio content.' },
        ],
      },
      {
        id: 'soundcloud',
        label: 'SoundCloud',
        icon: '/images/our-services/platforms/soundcloud-platform-icon.png',
        decorationImage: '/images/our-services/decorations/soundcloud-decoration.png',
        marketingTitle: 'SoundCloud SMM Panel Services',
        description:
          'Grow SoundCloud tracks, profiles, and music pages with lnk</soundcloud-smm-panel|SoundCloud SMM Panel> BD. Useful for independent artists, DJs, producers, podcast creators, agencies, and music promoters. Add funds with bKash, Nagad, or Rocket and manage SoundCloud orders easily.',
        exploreLabel: 'Explore SoundCloud Services',
        exploreHref: '/soundcloud-smm-panel',
        services: [
          { number: '01', title: 'SoundCloud Plays', description: 'Increase plays for songs, mixes, podcasts, and new releases.' },
          { number: '02', title: 'SoundCloud Followers', description: 'Build a stronger artist profile and listener base.' },
          { number: '03', title: 'SoundCloud Likes', description: 'Improve track engagement and make music look more trusted.' },
          { number: '04', title: 'SoundCloud Reposts', description: 'Help tracks reach more listeners through wider sharing.' },
          { number: '05', title: 'SoundCloud Comments', description: 'Add activity to songs, mixes, and audio content.' },
          { number: '06', title: 'SoundCloud Downloads', description: 'Support track interest with better download activity.' },
        ],
      },
      {
        id: 'snapchat',
        label: 'Snapchat',
        icon: '/images/our-services/platforms/snapchat-platform-icon.webp',
        decorationImage: '/images/our-services/decorations/snapchat-decoration.png',
        marketingTitle: 'Snapchat SMM Panel Services',
        description:
          'Grow Snapchat profiles and content reach with lnk</snapchat-smm-panel|Snapchat SMM panel> in Bangladesh. Useful for creators, lifestyle brands, ecommerce shops, influencers, agencies, and youth-focused campaigns. Add funds with bKash, Nagad, or Rocket and manage Snapchat orders easily.',
        exploreLabel: 'Explore Snapchat Services',
        exploreHref: '/snapchat-smm-panel',
        services: [
          { number: '01', title: 'Snapchat Followers', description: 'Build a stronger profile base for creators and brands.' },
          { number: '02', title: 'Snapchat Story Views', description: 'Increase visibility for stories, offers, updates, and launches.' },
          { number: '03', title: 'Snapchat Spotlight Views', description: 'Support short video reach on Spotlight content.' },
          { number: '04', title: 'Snapchat Shares', description: 'Help selected content reach more users through sharing.' },
          { number: '05', title: 'Snapchat Reactions', description: 'Add engagement signals to stories and spotlight posts.' },
          { number: '06', title: 'Snapchat Profile Visits', description: 'Improve profile activity for campaigns and promotions.' },
        ],
      },
      {
        id: 'website-traffic',
        label: 'Website Traffic',
        icon: '/images/our-services/platforms/website-traffic-platform-icon.png',
        decorationImage: '/images/our-services/decorations/website-traffic-decoration.png',
        marketingTitle: 'Website Traffic SMM Panel Services',
        description:
          'Send traffic to websites, blogs, landing pages, and product pages with TrendEvo’s SMM panel in Bangladesh. Useful for ecommerce brands, agencies, affiliate marketers, freelancers, and businesses testing online campaigns. Add funds with bKash, Nagad, or Rocket and manage traffic orders easily.',
        exploreLabel: 'Explore Website Traffic Services',
        exploreHref: '/services',
        services: [
          { number: '01', title: 'Website Traffic', description: 'Increase visits to websites, blogs, stores, and landing pages.' },
          { number: '02', title: 'Targeted Traffic', description: 'Send visitors based on selected country or campaign needs.' },
          { number: '03', title: 'Organic Traffic', description: 'Support natural-looking visit activity for selected pages.' },
          { number: '04', title: 'Referral Traffic', description: 'Get traffic from different source types for testing and tracking.' },
          { number: '05', title: 'Social Traffic', description: 'Send visitors from social platforms to offers and content pages.' },
          { number: '06', title: 'Mobile Traffic', description: 'Support mobile-focused campaigns, apps, and product pages.' },
        ],
      }
    ],
  },

  about: {
    heading: {
      badge: 'About US',
      title: 'Your Trusted SMM Panel gt<in Bangladesh>',
      subtitle:
        'TrendEvo helps local businesses, creators, freelancers, agencies, and resellers grow faster with lnk</about-us|trusted SMM Panel in Bangladesh>. From social proof to campaign visibility, our panel makes social media growth easier with bKash, Nagad, Rocket, and a simple dashboard.',
      align: 'left',
      underlineWidth: 114,
      titleClassName:
        'max-w-[642px] text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[642px] text-sm font-medium sm:text-base md:text-lg lg:text-[22px] lg:leading-[1.5]',
    },
    features: [
      'Fast delivery with stable order processing',
      'Real engagement options for better social proof',
      'Secure orders with no password required',
    ],
    trustPoints: [
      'Trusted by Growing Businesses',
      'Reliable Social Media Growth Solutions',
      'Fast Delivery & Easy Dashboard',
      'Dedicated Customer Support',
    ],
    ctaLabel: 'About Us',
    ctaHref: '/about-us',
    image: {
      src: '/images/about/your-trusted-smm-panel-in-bangladesh.webp',
      alt: 'TrendEvo growth partner',
    },
  },

  workingProcess: {
    heading: {
      badge: 'Working Process',
      title: 'Start Getting Results in gt<4 Easy Steps>',
      subtitle:
        'TrendEvo keeps SMM panel ordering simple for Bangladesh users. lnk<Create a free account|https://trendevo.com/signup>, add funds with local payment methods, choose a service, and track every order from one clean dashboard.',
      underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
      underlineWidth: 216,
      titleClassName:
        'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[868px] px-1 text-center text-sm text-[#4f586d] sm:px-0 sm:text-base md:text-lg',
      className: 'gap-3 sm:gap-4',
    },
    steps: [
      {
        number: '01',
        title: 'Create Free Account',
        description:
          'Sign up on TrendEvo and get access to your SMM panel dashboard. No technical skill is needed. You can manage services, balance, and orders from one place.',
        highlighted: true,
        corner: 'tl',
      },
      {
        number: '02',
        title: 'Add Funds',
        description:
          'Recharge your account with bKash, Nagad, or Rocket. Your balance updates quickly, so you can start ordering Facebook, Instagram, YouTube, TikTok, and other services.',
        highlighted: false,
      },
      {
        number: '03',
        title: 'Select Service',
        description:
          'Choose the SMM service that matches your goal. Pick followers, likes, views, comments, subscribers, traffic, or other services with clear pricing and order details.',
        highlighted: false,
      },
      {
        number: '04',
        title: 'Place Your Order',
        description:
          'Enter the correct link, select quantity, and submit your order. TrendEvo processes your request securely and lets you track progress directly from the dashboard.',
        highlighted: true,
        corner: 'br',
      },
    ],
  },

  whyChooseUs: {
    heading: {
      badge: 'Why Choose Us',
      title: 'What Makes TrendEvo Different from Other SMM Panels gt<in Bangladesh>',
      subtitle:
        'TrendEvo is built for people who need a reliable SMM panel in Bangladesh without confusing steps, hidden delays, or payment trouble. From local creators to agencies, every order is easier to place, fund, and track.',
      underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
      underlineWidth: 169,
      titleClassName:
        'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[924px] text-sm font-medium leading-normal text-[#4f586d] sm:text-base md:text-lg',
    },
    leftFeatures: [
      {
        title: 'Affordable Price in Bangladesh',
        description:
          'Get budget-friendly SMM services for Facebook, Instagram, YouTube, TikTok, and more. TrendEvo keeps pricing practical for local businesses, freelancers, creators, and resellers.',
        icon: '/images/why-choose-us/what-makes-trendevo-different-from-other-smm-panels-in-bangladesh-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Real-Time Order Tracking',
        description:
          'Check your order status directly from the dashboard. You can see what is pending, processing, completed, or needs attention without contacting support every time.',
        icon: '/images/why-choose-us/real-time-order-tracking-icon.webp',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Fast & Stable Delivery',
        description:
          'Selected services start quickly after order placement. TrendEvo focuses on smooth processing, stable delivery, and clear service details before you buy.',
        icon: '/images/why-choose-us/fast-and-stable-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Bulk Order Support',
        description:
          'Manage multiple orders for clients, campaigns, pages, and platforms from one account. This helps agencies and resellers save time while handling repeat work.',
        icon: '/images/why-choose-us/bulk-order-support-icon.png',
        iconWidth: 46,
        iconHeight: 40,
      },
      {
        title: 'Multiple SMM Services',
        description:
          'Order services for Facebook, Instagram, YouTube, TikTok, Telegram, LinkedIn, Spotify, SoundCloud, Snapchat, Discord, and website traffic from one panel.',
        icon: '/images/why-choose-us/multiple-smm-services-icon.webp',
        iconWidth: 57,
        iconHeight: 30,
      },
      {
        title: '24/7 Bangla & English Support',
        description:
          'Get help with payments, order links, service selection, and dashboard use whenever you need it. Our support is made for both beginners and regular SMM users.',
        icon: '/images/why-choose-us/24-7-bangla-and-english-support-icon.webp',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
    timelineSteps: ['01', '02', '03'],
  },

  paymentMethods: {
    heading: {
      badge: 'Payment Methods',
      title: 'Easy SMM Panel Payments for gt<Bangladesh Users>',
      subtitle:
        'Many SMM panels are difficult for Bangladesh users because adding funds often means using international cards, dollar payments, or crypto methods that feel risky and confusing. TrendEvo removes that barrier.\n\nWith TrendEvo, you can add funds to your SMM panel account using the payment methods you already use in Bangladesh. Add funds through bKash, Nagad, or Rocket, then order our affordable SMM services from one simple dashboard.',
      underlineSrc: '/images/payment-methods/payment-methods-section-underline.svg',
      underlineWidth: 193,
      titleClassName:
        'max-w-[1000px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[924px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    },
    image: {
      src: '/images/payment-methods/easy-smm-panel-payments-for-bangladesh-users.png',
      alt: 'Supported payment methods including Visa, bKash, Nagad, Bitcoin, Mastercard, and more',
      width: 1920,
      height: 470,
    },
  },

  platformMarquee: {
    platforms: [
      {
        name: 'Instagram',
        icon: '/images/platform-marquee/platform-marquee-instagram-platform-icon.webp',
        iconSize: 20,
      },
      {
        name: 'Instagram',
        icon: '/images/platform-marquee/platform-marquee-instagram-platform-icon-2.webp',
        iconSize: 25,
      },
      {
        name: 'X (Twitter)',
        icon: '/images/platform-marquee/platform-marquee-x-twitter-platform-icon.png',
        iconSize: 25,
      },
      {
        name: 'YouTube',
        icon: '/images/platform-marquee/platform-marquee-youtube-platform-icon.webp',
        iconSize: 25,
      },
      {
        name: 'TikTok',
        icon: '/images/platform-marquee/platform-marquee-tiktok-platform-icon.webp',
        iconSize: 25,
      },
      {
        name: 'LinkedIn',
        icon: '/images/platform-marquee/platform-marquee-linkedin-platform-icon.webp',
        iconSize: 25,
      },
      {
        name: 'Telegram',
        icon: '/images/platform-marquee/platform-marquee-telegram-platform-icon.webp',
        iconSize: 25,
      },
      {
        name: 'Discord',
        icon: '/images/platform-marquee/platform-marquee-discord-platform-icon.webp',
        iconSize: 25,
      },
      {
        name: 'Spotify',
        icon: '/images/platform-marquee/platform-marquee-spotify-platform-icon.webp',
        iconSize: 25,
      },
      {
        name: 'Snapchat',
        icon: '/images/platform-marquee/platform-marquee-snapchat-platform-icon.webp',
        iconSize: 25,
      },
      {
        name: 'SoundCloud',
        icon: '/images/platform-marquee/platform-marquee-soundcloud-platform-icon.svg',
        fullFrame: true,
      },
    ],
  },

  advantages: {
    heading: {
      badge: 'Who Uses TrendEvo',
      title: 'TrendEvo Works for Everyone gt<in Bangladesh>',
      subtitle:
        'TrendEvo is built for local businesses, content creators, freelancers, ecommerce brands, agencies, and resellers in Bangladesh. From simple orders to bulk SMM campaigns, everything is easy to manage with local payments, fast delivery, and clear tracking.',
      underlineSrc: '/images/advantages/who-uses-trendevo-section-underline.svg',
      underlineWidth: 150,
      titleClassName:
        'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    },
    leftItems: [
      {
        title: 'Small Business Owners',
        description:
          'Your Facebook page, Instagram profile, or TikTok account may be active, but reaching the right people takes time. TrendEvo helps local shops, restaurants, salons, ecommerce stores, and service businesses in Bangladesh improve social proof with fast and affordable SMM services.',
      },
      {
        title: 'Digital Marketing Agencies',
        description:
          'Agencies need speed, control, and clear order tracking when handling multiple client campaigns. TrendEvo gives Bangladeshi agencies a simple SMM panel dashboard to manage Facebook, Instagram, YouTube, TikTok, and other platform orders from one place.',
      },
    ],
    rightItems: [
      {
        title: 'Content Creators & YouTubers',
        description:
          'Creators work hard on videos, reels, shorts, and posts, but good content often needs an early push. TrendEvo helps Bangladeshi content creators improve visibility with followers, views, likes, comments, watch time, and engagement services.',
      },
      {
        title: 'Freelancers & SMM Resellers',
        description:
          'Freelancers and resellers need reliable pricing, easy payments, and repeat order support. TrendEvo works as a reseller-friendly SMM Panel BD platform where you can buy services, serve clients, and manage orders with bKash, Nagad, or Rocket.',
      },
    ],
    image: {
      src: '/images/advantages/trendevo-works-for-everyone-in-bangladesh.png',
      alt: 'SMM panel advantages illustration',
    },
    sectionBg: 'section-15',
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
  },

  pricing: {
    heading: {
      badge: 'Pricing',
      title: 'Affordable SMM Panel Pricing gt<for Bangladesh>',
      subtitle:
        'TrendEvo keeps SMM pricing simple for creators, small businesses, freelancers, agencies, and resellers in Bangladesh. Choose the platform you need, check clear rates, add funds with bKash, Nagad, or Rocket, and order without hidden costs.',
      underlineSrc: '/images/pricing/pricing-section-underline.svg',
      underlineWidth: 90,
      titleClassName:
        'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[1090px] text-center text-sm leading-normal text-[#404a60] sm:text-base md:text-lg',
    },
    features: [
      'Fast Delivery',
      'Live Order Tracking',
      '100% Non Drop',
      '24/7 Bangla & English Support',
      'You Can Pay Easily with bKash, Nagad, Rocket or Upay No dollar Card Needed',
    ],
    platforms: [
      {
        id: 'facebook',
        label: 'Facebook',
        icon: '/images/pricing/facebook-platform-icon.webp',
        plans: [
          { startingPrice: '$0.29', serviceName: 'Facebook Followers', buyLabel: 'Buy Facebook Followers', buyHref: '/buy-facebook-followers' },
          { startingPrice: '$0.19', serviceName: 'Facebook Likes', buyLabel: 'Buy Facebook Likes', buyHref: '/buy-facebook-page-likes' },
          { startingPrice: '$0.45', serviceName: 'Facebook Reels Views', buyLabel: 'Buy Facebook Reels Views', buyHref: '/services' },
        ],
      },
      {
        id: 'instagram',
        label: 'Instagram',
        icon: '/images/pricing/instagram-platform-icon.webp',
        plans: [
          { startingPrice: '$0.35', serviceName: 'Instagram Followers', buyLabel: 'Buy Instagram Followers', buyHref: '/buy-instagram-followers' },
          { startingPrice: '$0.25', serviceName: 'Instagram Likes', buyLabel: 'Buy Instagram Likes', buyHref: '/buy-instagram-likes' },
          { startingPrice: '$0.05', serviceName: 'Instagram Views', buyLabel: 'Buy Instagram Views', buyHref: '/buy-instagram-views' },
        ],
      },
      {
        id: 'youtube',
        label: 'YouTube',
        icon: '/images/pricing/youtube-platform-icon.webp',
        plans: [
          { startingPrice: '$0.85', serviceName: 'YouTube Views', buyLabel: 'Buy YouTube Views', buyHref: '/buy-youtube-views' },
          { startingPrice: '$3.85', serviceName: 'YouTube Likes', buyLabel: 'Buy YouTube Likes', buyHref: '/buy-youtube-likes' },
          { startingPrice: '$18', serviceName: 'YouTube Subscribers', buyLabel: 'Buy YouTube Subscribers', buyHref: '/buy-youtube-subscribers' },
        ],
      },
      {
        id: 'twitter',
        label: 'X (Twitter)',
        icon: '/images/our-services/platforms/x-twitter-platform-icon.png',
        plans: [
          { startingPrice: '$5.78', serviceName: 'Twitter Followers', buyLabel: 'Buy Twitter Followers', buyHref: '/buy-x-twitter-followers' },
          { startingPrice: '$2.83', serviceName: 'Twitter Likes', buyLabel: 'Buy Twitter Likes', buyHref: '/buy-x-twitter-likes' },
          { startingPrice: '$2.83', serviceName: 'X (Twitter) Tweet Views', buyLabel: 'Buy X (Twitter) Tweet Views', buyHref: '/services' },
        ],
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        icon: '/images/our-services/platforms/linkedin-platform-icon.webp',
        plans: [
          { startingPrice: '$23.20', serviceName: 'LinkedIn Page Followers', buyLabel: 'Buy LinkedIn Page Followers', buyHref: '/buy-linkedin-followers' },
          { startingPrice: '$13.98', serviceName: 'LinkedIn Post Likes', buyLabel: 'Buy LinkedIn Post Likes', buyHref: '/buy-linkedin-likes' },
          { startingPrice: '$5.98', serviceName: 'LinkedIn Views', buyLabel: 'Buy LinkedIn Views', buyHref: '/buy-linkedin-likes' },
        ],
      },
      {
        id: 'telegram',
        label: 'Telegram',
        icon: '/images/our-services/platforms/telegram-platform-icon.webp',
        plans: [
          { startingPrice: '$0.99', serviceName: 'Telegram Members', buyLabel: 'Buy Telegram Members', buyHref: '/buy-telegram-members' },
          { startingPrice: '$0.03', serviceName: 'Telegram Mix Reaction', buyLabel: 'Buy Telegram Mix Reaction', buyHref: '/buy-telegram-members' },
          { startingPrice: '$0.01', serviceName: 'Telegram Post Views', buyLabel: 'Buy Telegram Post Views', buyHref: '/buy-telegram-members' },
        ],
      },
      {
        id: 'spotify',
        label: 'Spotify',
        icon: '/images/our-services/platforms/spotify-platform-icon.webp',
        plans: [
          { startingPrice: '$0.12', serviceName: 'Spotify Plays', buyLabel: 'Buy Spotify Plays', buyHref: '/buy-spotify-plays' },
          { startingPrice: '$0.63', serviceName: 'Spotify Premium Plays', buyLabel: 'Buy Spotify Premium Plays', buyHref: '/buy-spotify-plays' },
          { startingPrice: '$0.89', serviceName: 'Spotify Premium Playlist Plays', buyLabel: 'Buy Spotify Premium Playlist Plays', buyHref: '/buy-spotify-plays' },
        ],
      },
      {
        id: 'twitch',
        label: 'Twitch',
        icon: '/images/service-smm-panel/twitch-smm-panel/twitch-effect.svg',
        plans: [
          { startingPrice: '$2.12', serviceName: 'Twitch Followers', buyLabel: 'Buy Twitch Followers', buyHref: '/buy-twitch-followers' },
          { startingPrice: '$1.63', serviceName: 'Twitch Video Views', buyLabel: 'Buy Twitch Video Views', buyHref: '/buy-twitch-viewers' },
          { startingPrice: '$1.89', serviceName: 'Twitch Clip Views', buyLabel: 'Buy Twitch Clip Views', buyHref: '/buy-twitch-viewers' },
        ],
      },
      {
        id: 'soundcloud',
        label: 'SoundCloud',
        icon: '/images/our-services/platforms/soundcloud-platform-icon.png',
        plans: [
          { startingPrice: '$12.12', serviceName: 'SoundCloud Followers', buyLabel: 'Buy SoundCloud Followers', buyHref: '/buy-soundcloud-followers' },
          { startingPrice: '$1.63', serviceName: 'SoundCloud Plays', buyLabel: 'Buy SoundCloud Plays', buyHref: '/buy-soundcloud-plays' },
          { startingPrice: '$11.39', serviceName: 'SoundCloud Playlist Likes', buyLabel: 'Buy SoundCloud Playlist Likes', buyHref: '/buy-soundcloud-plays' },
        ],
      },
      {
        id: 'discord',
        label: 'Discord',
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        plans: [
          { startingPrice: '$4.15', serviceName: 'Discord Send Reactions', buyLabel: 'Buy Discord Send Reactions', buyHref: '/buy-discord-members' },
          { startingPrice: '$5.63', serviceName: 'Discord Add Reactions', buyLabel: 'Buy Discord Add Reactions', buyHref: '/buy-discord-members' },
          { startingPrice: '$6.39', serviceName: 'Discord Online Members', buyLabel: 'Buy Discord Online Members', buyHref: '/buy-discord-members' },
        ],
      },
      {
        id: 'tiktok',
        label: 'TikTok',
        icon: '/images/pricing/tiktok-platform-icon.webp',
        plans: [
          { startingPrice: '$8.15', serviceName: 'TikTok Followers', buyLabel: 'Buy TikTok Followers', buyHref: '/buy-tiktok-followers' },
          { startingPrice: '$0.63', serviceName: 'TikTok Likes', buyLabel: 'Buy TikTok Likes', buyHref: '/buy-tiktok-likes' },
          { startingPrice: '$0.06', serviceName: 'TikTok Views', buyLabel: 'Buy TikTok Views', buyHref: '/buy-tiktok-views' },
        ],
      },
      {
        id: 'website-traffic',
        label: 'Website Traffic',
        icon: '/images/our-services/platforms/website-traffic-platform-icon.png',
        plans: [
          { startingPrice: '$0.15', serviceName: 'Website Traffic', buyLabel: 'Buy Website Traffic', buyHref: '/services' },
          { startingPrice: '$0.63', serviceName: 'Mix Website Traffic', buyLabel: 'Buy Mix Website Traffic', buyHref: '/services' },
          { startingPrice: '$0.06', serviceName: 'USA Website Traffic', buyLabel: 'Buy USA Website Traffic', buyHref: '/services' },
        ],
      }
    ],
  },

  testimonials: {
    sectionBackground:
      'linear-gradient(68.23deg, rgb(241, 219, 255) 3.62%, rgb(255, 255, 255) 28.7%, rgb(255, 242, 251) 53.08%, rgb(255, 255, 255) 73.06%, rgb(250, 232, 255) 98.62%)',
    badge: 'Customer Reviews',
    title: 'Over 0 Users Across Bangladesh gt<Trust TrendEvo>',
    subtitle:
      'Read what real customers say about their experience with TrendEvo. These are genuine reviews from people who have used our services.',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
    underlineWidth: 169,
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: {
      starIconSrc: '/images/testimonials/testimonials-star-rating-icon.svg',
      verifyBadgeSrc: '/images/testimonials/testimonials-verified-badge.svg',
      customerReviewTabIconSrc: '/images/testimonials/testimonials-customer-review-icon.svg',
      videoReviewTabIconSrc: '/images/testimonials/testimonials-clapperboard-icon.svg',
      quoteOpenSrc: '/images/testimonials/testimonials-quote-mark-2.svg',
      quoteCloseSrc: '/images/testimonials/testimonials-quote-mark.svg',
      playIconSrc: '/images/testimonials/testimonials-video-play-icon.svg',
      playOrbSrc: '/images/testimonials/testimonials-video-play-orb.webp',
    },
    leftTextReviews: [
      {
        id: 'left-1',
        name: 'Ariyan Khan',
        role: 'Ecommerce Business Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote:
          'TrendEvo made SMM orders much easier for my online shop. I can add funds with bKash, choose the service, and track everything from the dashboard.',
      },
      {
        id: 'left-2',
        name: 'Nadia Ahmed',
        role: 'SMM Freelancer',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote:
          'As a freelancer, I need fast delivery and clear order status for client work. TrendEvo helps me manage Facebook and Instagram orders without wasting time.',
      },
    ],
    rightTextReviews: [
      {
        id: 'right-1',
        name: 'Seam Rahman',
        role: 'Digital Marketing Agency Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote:
          'The dashboard is simple and the pricing works well for Bangladesh clients. It is useful when we manage multiple campaigns for different pages.',
      },
      {
        id: 'right-2',
        name: 'Farhana Islam',
        role: 'Content Creator',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote:
          'I use TrendEvo for YouTube and TikTok campaigns. The local payment options and support make the process easier than many foreign SMM panels.',
      },
    ],
    featuredReview: {
      name: 'Ariyan Khan',
      role: 'Ecommerce Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote:
        'TrendEvo made SMM orders much easier for my online shop. I can add funds with bKash, choose the service, and track everything from the dashboard.',
    },
    videoReviews: [],
    defaultTab: 'customer',
    showTabSwitcher: false,
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Got Questions About TrendEvo? gt<We Have Answers>',
    subtitle:
      'If you are new to SMM panels or have specific questions about our services, find your answers below. You can also lnk</contact-us|contact our dedicated support team> anytime via WhatsApp or Email.',
    bg: 'section-7',
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you need? Contact our support team and get help with payments, orders, services, or dashboard use.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '/contact-us',
    items: [
      {
        question: 'What is an SMM panel?',
        answer:
          'An SMM panel is an online platform where users can order social media services such as followers, likes, views, comments, subscribers, and website traffic. TrendEvo makes this easier for Bangladesh users with local payment options, clear pricing, and simple order tracking.',
      },
      {
        question: 'Can I use TrendEvo as a reseller?',
        answer:
          'Yes. TrendEvo is suitable for freelancers, agencies, and SMM resellers in Bangladesh. You can add funds with bKash, Nagad, or Rocket, place orders for clients, track progress from the dashboard, and manage repeat campaigns from one account.',
      },
      {
        question: 'How is TrendEvo different from other SMM panels available in Bangladesh?',
        answer:
          'TrendEvo focuses on simple ordering, local payment support, affordable pricing, secure orders, and fast service management. It is built for Bangladeshi businesses, creators, freelancers, agencies, and resellers who want an SMM panel that feels easy to use, not confusing.',
      },
      {
        question: 'Can I pay with bKash, Nagad, or Rocket?',
        answer:
          'Yes. TrendEvo supports bKash, Nagad, and Rocket, making it a convenient choice for users looking for a reliable bKash SMM panel in Bangladesh. This allows customers to add funds easily and place orders without facing international payment issues or complicated payment methods.',
      },
      {
        question: 'Do I need to share my password?',
        answer:
          'No. For standard SMM services, you only need to submit the correct public link. TrendEvo does not ask for your social media password.',
      },
      {
        question: 'Which is the best SMM panel in Bangladesh?',
        answer:
          'TrendEvo is one of the fastest-growing SMM panels in Bangladesh, offering high-quality social media services, competitive pricing, fast delivery, and reliable customer support. With a wide range of services for Facebook, Instagram, TikTok, YouTube, and more, TrendEvo has become a trusted choice for creators, businesses, and resellers looking to grow their online presence.',
      },
      {
        question: 'Who can use TrendEvo?',
        answer:
          'TrendEvo is useful for local businesses, content creators, freelancers, ecommerce brands, digital agencies, and SMM resellers in Bangladesh.',
      },
      {
        question: 'How fast does delivery start?',
        answer:
          'Delivery time depends on the selected service. Many services start quickly, and every order includes clear status updates inside the dashboard.',
      },
      {
        question: 'Can agencies place bulk orders?',
        answer:
          'Yes. TrendEvo supports bulk-friendly order management for agencies, freelancers, and resellers handling multiple client campaigns.',
      },
      {
        question: 'What should I do if I enter the wrong link?',
        answer:
          'Contact support as soon as possible. If the order has not started yet, the team may help you correct the issue based on service rules.',
      },
    ],
  },

  blog: {
    heading: {
      title: 'Latest SMM Tips gt<for Bangladesh Marketers>',
      subtitle:
        'Read practical guides on SMM panels, social media growth, local marketing, creator strategy, and reseller business ideas for Bangladesh. Learn how to use Facebook, Instagram, YouTube, TikTok, and other platforms with better planning.',
      underlineSrc: '/images/blog/latest-smm-tips-for-bangladesh-marketers-section-underline.svg',
      underlineWidth: 60,
      titleClassName:
        'max-w-[961px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[996px] text-sm font-normal text-[#404a60] sm:text-base md:text-lg',
    },
  },

  cta: {
    title: 'Ready to gt<Grow with a Trusted SMM Panel> in Bangladesh?',
    description:
      'Join TrendEvo and manage your Facebook, Instagram, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
  },

  footer: {
    blurb:
      'TrendEvo is a trusted SMM panel in Bangladesh for businesses, creators, freelancers, agencies, and resellers. Order social media services for Facebook, Instagram, YouTube, TikTok, Telegram, LinkedIn, Spotify, SoundCloud, and more with easy payments through bKash, Nagad, or Rocket.',
  },
};