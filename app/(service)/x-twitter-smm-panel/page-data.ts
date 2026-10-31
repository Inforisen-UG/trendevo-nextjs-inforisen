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

type XTwitterSmmPanelPageData = {
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

const xTwitterFaqItems = [
  {
    question: 'What is an X (Twitter) SMM Panel?',
    answer:
      'An X (Twitter) SMM Panel is an online platform where you can order X (Twitter) growth services such as followers, likes, reposts, comments, views, impressions, video views, profile visits, and engagement. It helps businesses, creators, agencies, professionals, and resellers manage X (Twitter) growth from one dashboard.',
  },
  {
    question: 'How does an X (Twitter) SMM Panel work?',
    answer:
      'You choose an X (Twitter) service, paste the required profile, post, tweet, thread, video, or content link, select the quantity, complete payment, and place the order. After that, you can track the progress from your TrendEvo account.',
  },
  {
    question: 'Which X (Twitter) services can I buy from TrendEvo?',
    answer:
      'TrendEvo offers a wide range of X (Twitter) services, including followers, likes, reposts, comments, views, impressions, video views, profile visits, and other X (Twitter) engagement services.',
  },
  {
    question: 'Is it safe to use an X (Twitter) SMM Panel?',
    answer:
      'A trusted platform with clear service details, secure payment methods, and proper order handling is always a better choice. TrendEvo focuses on safe ordering, simple account use, and a smooth experience for Bangladeshi users.',
  },
  {
    question: 'Do I need to give my X (Twitter) password?',
    answer:
      'No. You do not need to share your X (Twitter) password. TrendEvo only needs the public link of the profile, post, tweet, thread, video, or content that you want to promote.',
  },
  {
    question: 'Can I buy X (Twitter) followers, likes, and reposts separately?',
    answer:
      'Yes. You can order each service separately based on your goal. For example, you may only need X (Twitter) followers, only post likes, only reposts, only comments, or only views for a specific campaign.',
  },
  {
    question: 'How long does an X (Twitter) SMM order take to start?',
    answer:
      'The start time depends on the selected service. Some orders may begin quickly, while others can take longer depending on service type, quantity, and current order volume. You can check service details before placing the order.',
  },
  {
    question: 'Can I track the progress of my X (Twitter) order?',
    answer:
      'Yes. After placing your order, you can monitor the progress directly from your TrendEvo dashboard. This makes it easy to manage multiple X (Twitter) campaigns from one place.',
  },
  {
    question: 'What payment methods do you accept in Bangladesh?',
    answer:
      'TrendEvo supports popular local payment methods in Bangladesh such as bKash, Nagad, and Rocket. This makes ordering X (Twitter) SMM services easier for local businesses, creators, professionals, freelancers, agencies, and resellers.',
  },
  {
    question: 'Can agencies and resellers use your X (Twitter) SMM Panel?',
    answer:
      'Yes. TrendEvo is suitable for agencies, freelancers, and resellers who manage X (Twitter) growth services for multiple clients. Our dashboard makes it easier to place, manage, and monitor several X (Twitter) orders efficiently.',
  },
];

export const data: XTwitterSmmPanelPageData = {
  seo: {
    title: 'Best X (Twitter) SMM Panel in Bangladesh | TrendEvo',
    description:
      'Grow with TrendEvo’s X (Twitter) SMM Panel in Bangladesh. Buy followers, likes, reposts, comments, views, and engagement with bKash, Nagad, and Rocket.',
    canonical: '/x-twitter-smm-panel',
  },

  schema: {
    name: 'X (Twitter) SMM Panel',
    description:
      'Grow with TrendEvo’s X (Twitter) SMM Panel in Bangladesh. Buy followers, likes, reposts, comments, views, and engagement with bKash, Nagad, and Rocket.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/x-twitter-smm-panel',
  },

  hero: {
    title: 'Grow Faster with a Trusted gt<X (Twitter) SMM Panel> in Bangladesh',
    description:
      'TrendEvo gives Bangladeshi businesses, creators, agencies, public figures, startup founders, and resellers a simple way to grow on X (Twitter). Manage followers, post likes, reposts, comments, views, impressions, and engagement through one secure dashboard.',
    descriptionSecondary:
      'Strengthen your X (Twitter) presence with affordable pricing, lnk<bKash, Nagad, Rocket payment support|signup>, and services made for brand promotion, creator growth, public reach, and social media visibility in Bangladesh.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service/x-twitter-smm-panel/grow-faster-with-a-trusted-x-twitter-smm-panel-in-bangladesh.webp',
      alt: 'Grow faster with TrendEvo X (Twitter) SMM Panel in Bangladesh',
      width: 687,
      height: 648,
    },
  },

  socialServices: {
    title: 'X (Twitter) SMM Panel Services gt<Built for Bangladesh>',
    subtitle:
      'lnk<TrendEvo|/about-us> brings all major X (Twitter) growth services into one simple dashboard for Bangladeshi businesses, creators, agencies, professionals, startup teams, and resellers. Whether you want more profile trust, post engagement, tweet visibility, campaign reach, or brand authority, our X (Twitter) lnk<SMM Panel BD|/> services help you manage growth faster and more affordably.',
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service/x-twitter-smm-panel/x-twitter-smm-panel-services-built-for-bangladesh-decorative-left.svg',
      width: 199,
      height: 205,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[135px] lg:block xl:w-[199px]',
    },
    decorativeRight: {
      src: '/images/service/x-twitter-smm-panel/x-twitter-smm-panel-services-built-for-bangladesh-decorative-left.svg',
      width: 199,
      height: 205,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[145px] -scale-x-100 lg:block xl:w-[199px]',
    },
    services: [
      {
        title: 'X (Twitter) Followers',
        description:
          'Build a stronger audience base for your lnk<X (Twitter) followers|/buy-x-twitter-followers>. This service is useful for founders, creators, agencies, journalists, influencers, local brands, and businesses that want their profile to look active and trustworthy.',
        icon: '/images/our-services/platforms/x-twitter-platform-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'X (Twitter) Likes',
        description:
          'Improve your post engagement with more lnk<X (Twitter) likes|/buy-x-twitter-likes>. Likes help your tweets, updates, opinions, campaign posts, and brand messages look more interesting when new users see them.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'X (Twitter) Reposts',
        description:
          'Expand your content reach beyond your own followers. Reposts are useful for announcements, product launches, offers, awareness campaigns, thought-leadership posts, and trending conversations.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'X (Twitter) Comments',
        description:
          'Create stronger conversations around your posts with X (Twitter) comments. This works well for brand discussions, campaign posts, product updates, public opinions, and community engagement.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'X (Twitter) Views',
        description:
          'Increase views on your X (Twitter) posts, videos, updates, and campaign content. More views help your content look active and visible in a fast-moving feed.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'X (Twitter) Impressions',
        description:
          'Support wider post visibility with impression services. This is useful when you want more people to see your tweets, threads, announcements, and promotional messages.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'X (Twitter) Video Views',
        description:
          'Increase views on X (Twitter) videos, product clips, news updates, interviews, event highlights, and promotional content. More video views help your content look more engaging and worth watching.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'X (Twitter) Profile Visits',
        description:
          'Bring more attention to your X (Twitter) profile. Profile visits help creators, professionals, and businesses improve discovery, build credibility, and support follower growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-profile-followers-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'X (Twitter) Engagement Packages',
        description:
          'Grow multiple engagement signals together with followers, likes, reposts, comments, views, impressions, video views, and profile activity. These packages help agencies, resellers, creators, and brands manage balanced X (Twitter) growth more easily.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    ctaLabel: 'See All Services',
    ctaHref: '/services',
  },

  advantages: {
    title: 'Why Bangladeshi Brands Use an gt<X (Twitter) SMM Panel> for Faster Growth',
    subtitle:
      'A reliable X (Twitter) SMM Panel helps businesses, creators, agencies, founders, and professionals grow their X (Twitter) presence with less manual effort. TrendEvo makes it easier to improve profile trust, post activity, content visibility, public engagement, and campaign reach from one simple dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Faster X (Twitter) Profile Growth',
        description:
          'Build your X (Twitter) presence faster with followers, likes, reposts, comments, and profile activity support. This helps new visitors see your profile as active, trusted, and worth following.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Better Social Proof for Audiences',
        description:
          'People often check followers, likes, reposts, comments, and views before they follow, reply, or trust a profile. Stronger engagement can make your X (Twitter) profile look more reliable to Bangladeshi audiences.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '03',
        title: 'More Support for Content Reach',
        description:
          'X (Twitter) moves quickly, and posts can disappear fast without early activity. TrendEvo helps tweets, threads, videos, and campaign posts gain engagement so your content can attract more attention.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Saves Time for Businesses & Agencies',
        description:
          'Growing on X (Twitter) manually takes time, posting consistency, and active networking. With TrendEvo, creators, freelancers, businesses, and agencies can place orders, track progress, and manage multiple X (Twitter) services from one dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
      {
        step: '05',
        title: 'Affordable Growth with Local Payment',
        description:
          'TrendEvo makes X (Twitter) marketing easier for Bangladeshi users with budget-friendly pricing and local payment support like bKash, Nagad, and Rocket. No complex payment process is needed.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
      },
      {
        step: '06',
        title: 'Useful for Brands, Creators & Resellers',
        description:
          'Our X (Twitter) lnk<SMM Panel services|/services> are suitable for personal brands, startup founders, agencies, local businesses, influencers, public figures, news pages, and reseller clients. You can manage different growth needs in one place.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },

  workingProcess: {
    title: 'How TrendEvo gt<X (Twitter) SMM Panel> Works',
    subtitle:
      'TrendEvo makes X (Twitter) growth simple for Bangladeshi users. You can choose a service, place your order, pay with local methods, and track everything from one easy dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up on TrendEvo and access your X (Twitter) SMM Panel dashboard. The process is simple, quick, and made for businesses, creators, agencies, professionals, founders, and resellers in Bangladesh.',
      },
      {
        number: '02',
        title: 'Choose the Right X (Twitter) Service',
        description:
          'Select the service you need for your goal. You can order X (Twitter) followers, likes, reposts, comments, views, impressions, video views, profile visits, or engagement packages.',
      },
      {
        number: '03',
        title: 'Add Your Link & Confirm Order',
        description:
          'Paste your X (Twitter) profile, post, tweet, thread, video, or content link. Then choose the quantity, review the details, and confirm your order before payment.',
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
    title: 'Why Choose TrendEvo for gt<X (Twitter) SMM Panel Services> in Bangladesh',
    subtitle:
      'TrendEvo helps Bangladeshi businesses, creators, agencies, professionals, founders, and resellers manage X (Twitter) growth with speed, safety, and better control. Our platform combines local payment support, affordable pricing, smooth order tracking, and reliable X (Twitter) SMM services in one simple dashboard.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Order Processing',
        description:
          'X (Twitter) campaigns often need quick engagement because conversations move fast. TrendEvo processes orders smoothly so you can support profile growth, post activity, content reach, and promotional campaigns without long delays.',
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
        title: 'Affordable X (Twitter) Growth',
        description:
          'Get budget-friendly X (Twitter) SMM Panel services without losing control over quality. Our pricing works for creators, professionals, startups, small businesses, agencies, and resellers who need scalable growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Easy Dashboard Control',
        description:
          'Manage X (Twitter) followers, likes, reposts, comments, views, impressions, video views, profile visits, and engagement orders from one clean dashboard. You can place orders, check status, and manage multiple campaigns with less effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Support for Businesses & Resellers',
        description:
          'TrendEvo is useful for both direct users and resellers. Whether you are growing your own X (Twitter) profile or managing client orders, our platform helps you handle X (Twitter) SMM services more professionally.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions About X (Twitter) SMM Panel>',
    subtitle:
      'Find clear and simple answers to the most common questions about our X (Twitter) SMM Panel, services, payments, orders, and account safety.',
    bg: 'section-7',
    items: xTwitterFaqItems,
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '/contact-us',
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on X (Twitter), Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your social media with TrendEvo',
    className: 'mt-16',
  },
};
