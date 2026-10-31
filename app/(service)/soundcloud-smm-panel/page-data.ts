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

type SoundcloudSmmPanelPageData = {
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

const soundcloudFaqItems = [
  {
    question: 'What is a SoundCloud SMM Panel?',
    answer:
      'A SoundCloud SMM Panel is a platform where artists, DJs, producers, podcasters, agencies, and resellers can order SoundCloud promotion services. These services may include plays, followers, likes, reposts, comments, downloads, playlist activity, podcast promotion, and profile growth.',
  },
  {
    question: 'How does a SoundCloud SMM Panel work?',
    answer:
      'You select a SoundCloud service, add your track, profile, playlist, podcast, or audio link, choose the order amount, pay securely, and submit the order. After that, you can check the progress from your TrendEvo dashboard.',
  },
  {
    question: 'Which SoundCloud services can I buy from TrendEvo?',
    answer:
      'TrendEvo offers SoundCloud plays, followers, likes, reposts, comments, downloads, playlist promotion, podcast promotion, profile growth, and complete SoundCloud music promotion packages.',
  },
  {
    question: 'Is it safe to use a SoundCloud SMM Panel?',
    answer:
      'A SoundCloud SMM Panel is safer when the platform gives clear service information, secure payment options, and proper order handling. TrendEvo focuses on simple ordering, transparent service selection, and easy campaign tracking for Bangladeshi users.',
  },
  {
    question: 'Do I need to give my SoundCloud password?',
    answer:
      'No. TrendEvo does not ask for your SoundCloud password. You only need to provide the public SoundCloud link of the track, profile, playlist, podcast, or audio content you want to promote.',
  },
  {
    question: 'Can I promote only one SoundCloud track?',
    answer:
      'Yes. You can promote one track only. Many artists use this for new releases, demos, remixes, podcast episodes, beat previews, or campaign testing before promoting a full profile.',
  },
  {
    question: 'How long does a SoundCloud SMM order take to start?',
    answer:
      'The starting time depends on the selected service, order size, and current order volume. Some services may start faster, while others may need more time. You can check service details before ordering.',
  },
  {
    question: 'Can I track the progress of my SoundCloud order?',
    answer:
      'Yes. Once your order is placed, you can track the progress inside your TrendEvo dashboard. This helps artists, agencies, and resellers manage several SoundCloud campaigns without confusion.',
  },
  {
    question: 'What payment methods do you accept in Bangladesh?',
    answer:
      'TrendEvo supports bKash, Nagad, Rocket, and other supported payment methods in Bangladesh. This makes SoundCloud promotion easier for local artists, DJs, producers, podcasters, agencies, and resellers.',
  },
  {
    question: 'Can agencies and resellers use your SoundCloud SMM Panel?',
    answer:
      'Yes. Agencies, freelancers, music promoters, and resellers can use TrendEvo to manage SoundCloud growth for multiple artists or clients. The dashboard helps organize orders and track campaign progress more easily.',
  },
];

export const data: SoundcloudSmmPanelPageData = {
  seo: {
    title: 'Best SoundCloud SMM Panel in Bangladesh | TrendEvo',
    description:
      'Promote tracks faster with TrendEvo’s SoundCloud SMM Panel in Bangladesh. Get SoundCloud plays, followers, likes, reposts, comments, and music engagement with bKash, Nagad, and Rocket.',
    canonical: '/soundcloud-smm-panel',
  },

  schema: {
    name: 'SoundCloud SMM Panel',
    description:
      'Promote tracks faster with TrendEvo’s SoundCloud SMM Panel in Bangladesh. Get SoundCloud plays, followers, likes, reposts, comments, and music engagement with bKash, Nagad, and Rocket.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/soundcloud-smm-panel',
  },

  hero: {
    title: 'Grow Faster with a Trusted gt<SoundCloud SMM Panel> in Bangladesh',
    description:
      'TrendEvo helps Bangladeshi singers, DJs, beat makers, podcasters, remix artists, labels, agencies, and resellers promote SoundCloud content with better control. Whether you are pushing a new track, building an artist profile, or increasing attention around a podcast episode, our lnk<best smm panel bd|/> helps you manage plays, followers, likes, reposts, comments, and music engagement from one simple dashboard.',
    descriptionSecondary:
      'Use TrendEvo to support your SoundCloud promotion with affordable pricing, bKash, Nagad, Rocket payment options, and services made for artists who want stronger audio visibility in Bangladesh.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service/soundcloud-smm-panel/grow-faster-with-a-trusted-soundcloud-smm-panel-in-bangladesh.webp',
      alt: 'Grow faster with TrendEvo SoundCloud SMM Panel in Bangladesh',
      width: 687,
      height: 648,
    },
  },

  socialServices: {
    title: 'SoundCloud SMM Panel Services gt<Built for Bangladesh>',
    subtitle:
      'lnk<TrendEvo|/about-us> gives Bangladeshi audio creators and music marketers a practical way to grow SoundCloud without handling everything manually. From underground rap to electronic mixes, podcast episodes, cover songs, beat packs, and independent releases, our SoundCloud SMM Panel in Bangladesh helps you add the right activity around your content at the right time.',
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service/soundcloud-smm-panel/soundcloud-smm-panel-services-built-for-bangladesh-decorative-left.svg',
      width: 255,
      height: 257,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[150px] lg:block xl:w-[255px]',
    },
    decorativeRight: {
      src: '/images/service/soundcloud-smm-panel/soundcloud-smm-panel-services-built-for-bangladesh-decorative-left.svg',
      width: 255,
      height: 257,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[160px] -scale-x-100 lg:block xl:w-[255px]',
    },
    services: [
      {
        title: 'SoundCloud Plays',
        description:
          'Get more lnk<SoundCloud plays|/buy-soundcloud-plays>, remixes, beats, DJ sets, podcasts, and spoken audio. This service helps new uploads look more active when listeners open your track page for the first time.',
        icon: '/images/our-services/platforms/soundcloud-platform-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Followers',
        description:
          'Grow your profile with more lnk<soundcloud followers|/buy-soundcloud-followers>. This is useful for artists, producers, DJs, and podcasters who want their profile to look more credible to listeners, labels, and collaborators.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Likes',
        description:
          'Add stronger interest signals to your tracks with SoundCloud likes. Likes help songs, mixes, instrumentals, and audio episodes feel more accepted by the audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Reposts',
        description:
          'Use reposts to spread your track through more SoundCloud feeds. This works well for new releases, remix drops, beat previews, podcast promotions, and artist campaigns.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Comments',
        description:
          'Make your track page feel more alive with comments. This is useful for demos, music launches, freestyle uploads, DJ sets, podcasts, and audio content where listener response matters.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Track Downloads',
        description:
          'Support downloadable content with more download activity where the option is available. This fits free beats, sample packs, DJ edits, promotional songs, and exclusive audio files.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Playlist Promotion',
        description:
          'Promote SoundCloud playlists, music collections, DJ sessions, and curated audio projects. Playlist promotion helps listeners notice a full collection instead of only one track.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Podcast Promotion',
        description:
          'Bring more activity to podcast episodes, interviews, storytelling content, educational audio, and niche shows. This helps podcasters improve content visibility on SoundCloud.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'SoundCloud Music Promotion Packages',
        description:
          'Combine plays, followers, likes, reposts, comments, downloads, playlist activity, and profile growth in one campaign. These packages are helpful for artists, agencies, resellers, and music promoters who need balanced SoundCloud growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    ctaLabel: 'See All Services',
    ctaHref: '/services',
  },

  advantages: {
    title: 'Why Bangladeshi Artists Use a gt<SoundCloud SMM Panel> for Faster Growth',
    subtitle:
      'SoundCloud is different from regular social media. People come here to discover tracks, beats, mixes, podcasts, and raw creative audio. A SoundCloud SMM Panel helps Bangladeshi artists, DJs, producers, podcasters, and music agencies create stronger activity around their content so listeners take the profile more seriously.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Better First Impression for New Tracks',
        description:
          'When a listener opens a track with no plays or response, they may skip quickly. More plays, likes, comments, and reposts can make the track page feel more active and worth checking.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '02',
        title: 'Stronger Profile Value for Artists',
        description:
          'A SoundCloud profile works like a music portfolio. Followers, active uploads, and visible engagement help artists show that their work is not sitting unnoticed.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '03',
        title: 'More Reach Through Repost Activity',
        description:
          'Reposts are important on SoundCloud because they can move your track into more listener feeds. This is helpful for underground artists, DJs, remix creators, and beat makers who want more discovery.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Useful for Testing New Audio Content',
        description:
          'Artists often test demos, beat ideas, podcast formats, or remix styles before a bigger release. SoundCloud promotion can help you understand which content deserves more attention.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
      {
        step: '05',
        title: 'Easier Campaign Handling for Agencies',
        description:
          'Music agencies and resellers may manage several artists at the same time. TrendEvo helps them organize SoundCloud plays, followers, reposts, comments, and playlist promotion from one dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
      {
        step: '06',
        title: 'Bangladesh-Friendly Payment System',
        description:
          'Local creators should not struggle with foreign cards just to promote music. TrendEvo supports bKash, Nagad, Rocket, and other local payment methods for easy SoundCloud promotion.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
      },
    ],
  },

  workingProcess: {
    title: 'How TrendEvo gt<SoundCloud SMM Panel> Works',
    subtitle:
      'TrendEvo keeps SoundCloud promotion simple for Bangladeshi users. You choose the service that matches your goal, submit your SoundCloud link, complete payment, and manage the lnk<order from your dashboard|signup>.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Create a TrendEvo account and open your SoundCloud SMM Panel dashboard. The dashboard is made for artists, producers, DJs, podcast creators, music marketers, agencies, and resellers.',
      },
      {
        number: '02',
        title: 'Choose the Right SoundCloud Service',
        description:
          'Pick the service based on what you want to grow. You can order SoundCloud plays, followers, likes, reposts, comments, downloads, playlist promotion, podcast promotion, or full music promotion packages.',
      },
      {
        number: '03',
        title: 'Add Your Link & Confirm Order',
        description:
          'Paste your SoundCloud track, profile, playlist, DJ mix, podcast episode, or audio link. Choose the quantity, check the order details, and confirm the request before payment.',
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
    title: 'Why Choose TrendEvo for gt<SoundCloud SMM Panel Services> in Bangladesh',
    subtitle:
      'TrendEvo is built for Bangladeshi audio creators who need simple, affordable, and organized SoundCloud promotion. From solo artists to music agencies, our platform helps users manage SoundCloud growth without confusing tools, slow communication, or difficult payment systems.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Music-Focused Order Support',
        description:
          'SoundCloud promotion often depends on timing. TrendEvo helps you support new songs, remixes, DJ sets, podcast episodes, playlists, and artist profiles when the content needs attention most.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Easy Local Payments',
        description:
          'Pay with bKash, Nagad, Rocket, and other supported payment options. This makes SoundCloud promotion easier for Bangladeshi artists, freelancers, labels, agencies, and resellers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Affordable Audio Promotion',
        description:
          'TrendEvo offers budget-friendly SoundCloud SMM Panel services for independent musicians, beat makers, remix creators, DJs, podcasters, playlist owners, and music promoters.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Clean Dashboard Management',
        description:
          'Manage SoundCloud plays, followers, likes, reposts, comments, downloads, playlist activity, podcast promotion, and package orders from one simple dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Useful for Artists, Agencies & Resellers',
        description:
          'TrendEvo works for personal music projects and client campaigns. Whether you are promoting your own SoundCloud profile or managing orders for artists, the platform helps you work with better speed and control.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions About SoundCloud SMM Panel>',
    subtitle:
      'Find clear answers to common questions about SoundCloud promotion, available services, local payments, order tracking, and account safety on TrendEvo.',
    bg: 'section-7',
    items: soundcloudFaqItems,
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '/contact-us',
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on SoundCloud, Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your social media with TrendEvo',
    className: 'mt-16',
  },
};
