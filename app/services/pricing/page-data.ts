export type PricingPlatform = {
  id: string;
  label: string;
  icon: string;
  iconClassName?: string;
  composedIcon?: boolean;
};

export type ServicePricingRow = {
  id: string;
  serviceName: string;
  ratePer1000: string;
  minOrder: string;
  maxOrder: string;
  averageTime: string;
  description?: string;
};

export type ServicePricingGroup = {
  id: string;
  title: string;
  platformId: string;
  platformIcon: string;
  rows: ServicePricingRow[];
};

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type ServicesPricingPageData = {
  seo: SEO;
  heading: {
    title: string;
  };
  pricingPlatforms: PricingPlatform[];
  pricingGroups: ServicePricingGroup[];
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

const sampleRow: Omit<ServicePricingRow, 'id'> = {
  serviceName: 'Facebook Views /Plays for video/Reel -Mixed Regions...',
  ratePer1000: '$0.05',
  minOrder: '100',
  maxOrder: '5,000',
  averageTime: '1 hr 45 min',
};

const premiumRows: ServicePricingRow[] = Array.from({ length: 5 }, (_, index) => ({
  id: `premium-${index + 1}`,
  ...sampleRow,
}));

export const data: ServicesPricingPageData = {
  seo: {
    title: 'Services & Pricing | TrendEvo',
    description:
      'Discover TrendEvo full social media services and pricing guide across Facebook, Instagram, YouTube, TikTok, and more.',
    canonical: '/services/pricing',
  },

  heading: {
    title:
      "Discover gt<TrendEvo's> Full Social Media Services & Pricing Guide",
  },

  pricingPlatforms: [
    {
      id: 'facebook',
      label: 'Facebook',
      icon: '/images/our-services/platforms/facebook-platform-icon.webp',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: '/images/our-services/platforms/instagram-platform-icon.webp',
    },
    {
      id: 'twitter',
      label: 'X (Twitter)',
      icon: '/images/our-services/platforms/x-twitter-platform-icon.png',
      iconClassName: 'scale-150',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      icon: '/images/our-services/platforms/youtube-platform-icon.webp',
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      icon: '/images/our-services/platforms/tiktok-platform-icon.webp',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: '/images/our-services/platforms/linkedin-platform-icon.webp',
    },
    {
      id: 'telegram',
      label: 'Telegram',
      icon: '/images/our-services/platforms/telegram-platform-icon.webp',
    },
    {
      id: 'discord',
      label: 'Discord',
      icon: '/images/our-services/platforms/discord-platform-icon.webp',
    },
    {
      id: 'spotify',
      label: 'Spotify',
      icon: '/images/our-services/platforms/spotify-platform-icon.webp',
    },
    {
      id: 'soundcloud',
      label: 'SoundCloud',
      icon: '/images/our-services/platforms/soundcloud-platform-icon.png',
      composedIcon: true,
    },
    {
      id: 'snapchat',
      label: 'Snapchat',
      icon: '/images/our-services/platforms/snapchat-platform-icon.webp',
    },
    {
      id: 'website-traffic',
      label: 'Website Traffic',
      icon: '/images/our-services/platforms/website-traffic-platform-icon.png',
      composedIcon: true,
    },
  ],

  pricingGroups: [
    {
      id: 'premium-mixed-regions',
      title: 'Premium Facebook Video Views | Mixed Regions',
      platformId: 'facebook',
      platformIcon:
        '/images/our-services/platforms/facebook-platform-icon.webp',
      rows: premiumRows,
    },
    {
      id: 'premium-mixed-regions-2',
      title: 'Premium Facebook Video Views | Mixed Regions',
      platformId: 'facebook',
      platformIcon:
        '/images/our-services/platforms/facebook-platform-icon.webp',
      rows: premiumRows,
    },
    {
      id: 'standard-global',
      title: 'Standard Facebook Video Views | Global',
      platformId: 'facebook',
      platformIcon:
        '/images/our-services/platforms/facebook-platform-icon.webp',
      rows: premiumRows,
    },
    {
      id: 'economy-local',
      title: 'Economy Facebook Video Views | Local',
      platformId: 'facebook',
      platformIcon:
        '/images/our-services/platforms/facebook-platform-icon.webp',
      rows: premiumRows,
    },
    {
      id: 'economy-local-2',
      title: 'Economy Facebook Video Views | Local',
      platformId: 'facebook',
      platformIcon:
        '/images/our-services/platforms/facebook-platform-icon.webp',
      rows: premiumRows,
    },
  ],

  cta: {
    title: 'Ready to gt<Grow your Social Media> in Bangladesh',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Register Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
  },
};
