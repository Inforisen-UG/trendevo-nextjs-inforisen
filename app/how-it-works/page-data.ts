import type { FaqSectionData } from '@/components/sections/faq-section';
import type { HeroSocialIcon } from '@/components/sections/hero-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';
import { howItWorksFaqItems } from '@/app/how-it-works/how-it-works-faq';
import { heroSocialIcons } from '@/content/hero-social-icons';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

export type HowItWorksTableRow = {
  label: string;
  value: string;
};

export type HowItWorksSubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
  table?: HowItWorksTableRow[];
  tableHeaders?: [string, string];
};

export type HowItWorksContentSection = {
  id?: string;
  icon: string;
  title: string;
  intro?: string;
  subsections?: HowItWorksSubsection[];
  paragraphs?: string[];
  bullets?: string[];
};

export type HowItWorksPageData = {
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
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
    illustration: {
      src: string;
      alt: string;
      width: number;
      height: number;
      maxWidthClassName: string;
    };
    socialIcons: HeroSocialIcon[];
  };
  workingProcess: {
    badge: string;
    title: string;
    subtitle: string;
    steps: ServiceWorkingProcessStep[];
  };
  contentSections: HowItWorksContentSection[];
  mistakes: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  faq: FaqSectionData;
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

export const data: HowItWorksPageData = {
  seo: {
    title: 'How TrendEvo Works | Order SMM Services in 5 Easy Steps',
    description:
      'Learn how TrendEvo works. Create an account, add funds, choose an SMM service, place your order, and track delivery from one simple dashboard.',
    canonical: '/how-it-works',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    decoration: 'contact',
    title: 'How gt<TrendEvo Works>',
    titleClassName:
      'text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px]',
    description:
      'Ordering social media services with TrendEvo is simple. lnk<Create your account|https://trendevo.com/signup>, add funds, choose the service you need, submit the correct link and quantity, and track the order directly from your dashboard.\n\nWhether you are a creator placing your first order or an agency managing multiple clients, TrendEvo keeps the entire process in one place.',
    descriptionClassName:
      'max-w-2xl text-base leading-relaxed text-[#343e56] sm:text-base md:text-lg',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'View All Services',
    secondaryButtonHref: '/services',
    illustration: {
      src: '/images/services/services-trendevo-specialist-presenting-social-media-growth-services-illustration.webp',
      alt: 'TrendEvo specialist explaining how the SMM panel ordering process works',
      width: 583,
      height: 648,
      maxWidthClassName: 'max-w-[583px]',
    },
    socialIcons: heroSocialIcons,
  },

  workingProcess: {
    badge: 'Working Process',
    title: 'Get Started With TrendEvo gt<in 5 Simple Steps>',
    subtitle:
      'You do not need technical knowledge to use TrendEvo. The complete ordering process takes only a few simple steps.',
    steps: [
      {
        number: '01',
        title: 'Create Your Free TrendEvo Account',
        description:
          'Start by creating a TrendEvo account. Enter the required account information, choose a secure password, and access your dashboard to manage balance, services, orders, and support requests.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Before placing an order, add funds to your TrendEvo account. Choose an available payment method such as bKash, Nagad, or Rocket and follow the payment instructions shown on the dashboard.',
      },
      {
        number: '03',
        title: 'Choose the Right SMM Service',
        description:
          'Open the Services or New Order section, select your platform, and read the service information carefully. Choose the option that matches your goal instead of selecting based only on price.',
      },
      {
        number: '04',
        title: 'Enter Your Link, Quantity, and Place the Order',
        description:
          'Enter the correct social media link and quantity requested by the service. Double-check the platform, link, quantity limits, and balance before submitting your order.',
      },
      {
        number: '05',
        title: 'Track Your Order From the Dashboard',
        description:
          'After placing an order, open your TrendEvo order history to check progress. Use your Order ID to review statuses such as Pending, Processing, In Progress, Completed, Partial, or Canceled.',
      },
    ],
  },

  contentSections: [
    {
      id: 'step-1-details',
      icon: '/images/icons/site-check-icon.svg',
      title: 'Step 1: Create Your Free TrendEvo Account',
      intro:
        'Start by creating a TrendEvo account. Enter the required account information and choose a secure password. Once you sign in, you will have access to your personal dashboard where you can manage your balance, services, orders, and support requests.',
      paragraphs: [
        'Your TrendEvo dashboard becomes the main place for everything you do on the platform.',
      ],
      bullets: [
        'Browse available SMM services',
        'Check current prices',
        'Add funds',
        'Place new orders',
        'Track existing orders',
        'Review your order history',
        'Request support',
      ],
    },
    {
      id: 'step-2-details',
      icon: '/images/icons/privacy-policy-collect-info-icon.svg',
      title: 'Step 2: Add Funds to Your Balance',
      intro:
        'Before placing an order, add funds to your TrendEvo account. Choose an available payment method from the Add Funds section and follow the payment instructions shown on the dashboard.',
      paragraphs: [
        'For Bangladesh users, TrendEvo makes payments easier with familiar local payment options such as bKash, Nagad, and Rocket. Additional payment methods may also be available depending on your account and current payment options.',
        'Once your payment is confirmed, the available amount appears in your TrendEvo balance and can be used to purchase services.',
      ],
      subsections: [
        {
          title: 'What if my payment is successful but the balance does not appear?',
          paragraphs: [
            'Do not make the same payment again immediately.',
            'Check your payment history first. If the balance is still missing after the normal processing time, lnk<contact support|/contact-us> with your transaction details.',
          ],
          bullets: [
            'Payment method',
            'Amount',
            'Transaction ID',
            'Payment time',
            'Payment proof if requested',
          ],
        },
      ],
    },
    {
      id: 'step-3-details',
      icon: '/images/icons/footer-service-chevron-icon.svg',
      title: 'Step 3: Choose the Right SMM Service',
      intro:
        'Open the Services or New Order section and select the social media platform you want to work with. TrendEvo provides different services for platforms such as lnk<Instagram|/instagram-smm-panel>, lnk<Facebook|/facebook-smm-panel>, lnk<YouTube|/youtube-smm-panel>, lnk<TikTok|/tiktok-smm-panel>, lnk<Telegram|/telegram-smm-panel>, lnk<X|/x-twitter-smm-panel>, LinkedIn, lnk<Spotify|/spotify-smm-panel>, lnk<SoundCloud|/soundcloud-smm-panel>, and other supported platforms.',
      bullets: [
        'Followers',
        'Likes',
        'Views',
        'Comments',
        'Subscribers',
        'Reactions',
        'Shares',
        'Members',
        'Watch time',
        'Other engagement services',
      ],
      paragraphs: [
        'Do not choose a service based only on the lowest price. Read the service information carefully and select the option that matches your goal.',
        'If you are testing a service for the first time, starting with a smaller order can help you understand its delivery and quality before increasing your quantity.',
      ],
      subsections: [
        {
          title: 'Check These Details Before Choosing',
          table: [
            { label: 'Minimum Quantity', value: 'Shows the smallest order you can place' },
            { label: 'Maximum Quantity', value: 'Shows the highest quantity allowed' },
            { label: 'Price', value: 'Helps you calculate the total cost' },
            { label: 'Start Time', value: 'Gives an idea of when processing may begin' },
            { label: 'Delivery Speed', value: 'Helps you understand expected delivery' },
            { label: 'Refill', value: 'Shows whether eligible drops may be replaced' },
            {
              label: 'Service Instructions',
              value: 'Explains any special requirements',
            },
          ],
          tableHeaders: ['Detail', 'Why It Matters'],
        },
      ],
    },
    {
      id: 'step-4-details',
      icon: '/images/icons/terms-acceptable-use-check-icon.svg',
      title: 'Step 4: Enter Your Link, Quantity, and Place the Order',
      intro:
        'After choosing a service, enter the information requested on the order form. This usually includes the correct social media link and the quantity you want.',
      bullets: [
        'Followers may require a profile link or username.',
        'Likes may require a post or Reel link.',
        'YouTube views may require a video URL.',
        'Telegram members may require a channel or group link.',
      ],
      paragraphs: ['Always follow the exact instructions shown for the selected service.'],
      subsections: [
        {
          title: 'Double-Check Before You Submit',
          numbered: [
            'You selected the correct platform.',
            'You selected the correct service.',
            'The link is correct.',
            'The account or content is publicly accessible if required.',
            'Your quantity is within the service limits.',
            'You have enough account balance.',
          ],
          paragraphs: [
            'Once everything is correct, submit your order. The required amount will be charged from your TrendEvo balance and your order will appear in your order history.',
            'Important: Do not submit random or incorrect links. Once an order begins processing, changing the destination may no longer be possible.',
          ],
        },
      ],
    },
    {
      id: 'step-5-details',
      icon: '/images/icons/refund-policy-check-your-order-status-icon.svg',
      title: 'Step 5: Track Your Order From the Dashboard',
      intro:
        'After placing an order, you do not need to guess what is happening. Open your TrendEvo order history to check its progress. You can use your Order ID to identify a specific order and review its current status.',
      paragraphs: [
        'Do not immediately place another identical order just because the first one is still processing. Some services deliver gradually, especially for larger quantities.',
        'If an order remains delayed beyond its expected timeframe, lnk<contact support|/contact-us> with your Order ID.',
      ],
      subsections: [
        {
          title: 'Common Order Statuses',
          table: [
            { label: 'Pending', value: 'Your order was received and is waiting to start' },
            { label: 'Processing', value: 'The system is preparing your order' },
            { label: 'In Progress', value: 'Delivery is currently taking place' },
            { label: 'Completed', value: 'The order has finished processing' },
            { label: 'Partial', value: 'Only part of the requested quantity was delivered' },
            { label: 'Canceled', value: 'The order could not continue' },
          ],
          tableHeaders: ['Status', 'What It Means'],
        },
      ],
    },
    {
      id: 'after-order',
      icon: '/images/icons/refund-policy-use-your-credit-icon.svg',
      title: 'What Happens After You Place an Order?',
      intro:
        'Once you submit an order, TrendEvo sends it for processing according to the selected service.',
      paragraphs: [
        'The general process looks like this: Order Submitted → Pending → Processing → In Progress → Completed',
        'The exact timing can vary depending on the selected service, social media platform, order quantity, current order volume, platform conditions, and service availability.',
        'Some services may begin quickly, while others need more time. The estimated start time is not always the same as the completion time.',
        'For example, an order may start within a short period but continue delivering gradually until the full quantity is completed.',
      ],
    },
    {
      id: 'payments',
      icon: '/images/icons/privacy-policy-how-we-use-icon.svg',
      title: 'How TrendEvo Payments Work',
      intro:
        'TrendEvo uses an account-balance system. Instead of making a separate payment every time you order, you first add funds to your TrendEvo balance. You can then use that balance across available services.',
      paragraphs: [
        'The payment process: Choose Payment Method → Add Funds → Balance Updates → Select Service → Order',
        'This makes repeat ordering easier for regular users, freelancers, agencies, and resellers.',
        'You can also see the cost of a service before submitting the order, helping you manage your available balance more easily.',
      ],
    },
    {
      id: 'choose-service',
      icon: '/images/icons/privacy-policy-share-info-icon.svg',
      title: 'How to Choose the Right Service Before Ordering',
      intro:
        'Two services for the same platform may look similar but have different conditions. Before ordering, think about what actually matters for your campaign.',
      subsections: [
        {
          title: 'If Price Is Your Priority',
          paragraphs: [
            'Compare affordable services while still checking delivery details and refill conditions. The cheapest option is not automatically the best option for every campaign.',
          ],
        },
        {
          title: 'If Retention Is Important',
          paragraphs: [
            'Look for services that include refill protection or clearly explain their retention conditions.',
          ],
        },
        {
          title: 'If Speed Is Important',
          paragraphs: [
            'Review the estimated start and delivery information. Remember that extremely fast delivery is not always necessary for every account or campaign.',
          ],
        },
        {
          title: 'If You Manage Client Accounts',
          paragraphs: [
            'Look for predictable services with clear descriptions, order tracking, and appropriate limits. Test unfamiliar services before using them for larger client orders.',
          ],
        },
      ],
    },
    {
      id: 'before-ordering',
      icon: '/images/icons/privacy-policy-data-security-icon.svg',
      title: 'What Should You Do Before Placing an SMM Order?',
      intro: 'A few checks can prevent most common order problems.',
      subsections: [
        {
          title: 'Keep the Target Public',
          paragraphs: [
            'If the service requires access to your profile or content, keep it public until the order is completed. Making the account private during delivery can interrupt the order.',
          ],
        },
        {
          title: 'Use the Correct Link',
          paragraphs: [
            'Do not submit your homepage when the service asks for a post URL, or a profile URL when it asks for a video. Use exactly the type of link requested.',
          ],
        },
        {
          title: 'Do Not Change the Username',
          paragraphs: [
            'Changing a username while an order is active can affect delivery or make the original link inaccessible.',
          ],
        },
        {
          title: 'Do Not Delete the Content',
          paragraphs: [
            'Keep the post, video, Reel, channel, or other target available while the order is processing.',
          ],
        },
        {
          title: 'Avoid Duplicate Orders',
          paragraphs: [
            'Do not place multiple identical orders on the same link while an existing one is still running unless the service specifically allows it.',
          ],
        },
      ],
    },
    {
      id: 'drops-refills',
      icon: '/images/icons/refund-policy-allow-time-for-review-icon.svg',
      title: 'What Happens If Delivered Numbers Drop?',
      intro:
        'Social media numbers can sometimes decrease after delivery. Platforms regularly remove accounts, filter activity, update algorithms, and change public statistics. This is commonly known as a drop.',
      paragraphs: [
        'Some TrendEvo services may include refill protection. If your selected service includes a refill and an eligible drop happens during the stated refill period, you may be able to request replacement for the qualifying quantity.',
        'Refill conditions vary by service, so always check the service description before ordering.',
        'A refill may not apply when:',
      ],
      bullets: [
        'You ordered a No Refill service.',
        'The refill period expired.',
        'You changed the username.',
        'The account became private.',
        'The original link became unavailable.',
        'Another order affected the count.',
      ],
      subsections: [
        {
          title: 'Need a refill review?',
          paragraphs: [
            'If you think your order qualifies, check your dashboard or lnk<contact support|/contact-us> with the Order ID.',
          ],
        },
      ],
    },
    {
      id: 'agencies-resellers',
      icon: '/images/icons/privacy-policy-your-rights-icon.svg',
      title: 'How TrendEvo Works for Agencies and Resellers',
      intro:
        'TrendEvo is not limited to individual users. Freelancers, digital marketing agencies, social media managers, and SMM resellers can use the same dashboard to manage orders for multiple clients.',
      subsections: [
        {
          title: 'Manage Multiple Orders',
          paragraphs: [
            'Place orders for different accounts, posts, channels, and platforms from one TrendEvo balance.',
          ],
        },
        {
          title: 'Track Every Client Order',
          paragraphs: [
            'Each order has its own Order ID, helping you keep different projects organized.',
          ],
        },
        {
          title: 'Use Bulk Ordering for Larger Workloads',
          paragraphs: [
            'Users managing multiple campaigns can handle repeat orders without creating a separate account for every client.',
          ],
        },
        {
          title: 'API for Automation',
          paragraphs: [
            'If API access is available for your account, agencies and resellers can use it to automate parts of their ordering workflow. lnk<Contact TrendEvo support|/contact-us> or check your dashboard for current API availability and documentation.',
          ],
        },
      ],
    },
    {
      id: 'password-security',
      icon: '/images/icons/privacy-policy-data-retention-icon.svg',
      title: 'Do You Need to Share Your Social Media Password?',
      intro:
        'No. Standard TrendEvo services normally use a public profile, post, page, video, channel, track, or other content link.\n\nYou should never provide sensitive information such as:',
      bullets: [
        'Social media password',
        'Email password',
        'OTP',
        'Two-factor authentication code',
        'Recovery code',
        'bKash or Nagad PIN',
        'Card PIN',
        'Crypto wallet seed phrase',
      ],
      paragraphs: [
        'Your Order ID and public target link are normally enough when contacting support about an order.',
      ],
    },
    {
      id: 'user-types',
      icon: '/images/icons/privacy-policy-who-we-are-icon.svg',
      title: 'TrendEvo Works for Different Types of Users',
      intro:
        'The ordering process stays simple whether you need one campaign or regularly manage multiple accounts.',
      subsections: [
        {
          title: 'Content Creators',
          paragraphs: [
            'Use one dashboard to manage services for your posts, Reels, Shorts, videos, channels, and profiles.',
          ],
        },
        {
          title: 'Small Businesses',
          paragraphs: [
            'Choose services that support your social media campaigns and manage orders without complicated international payment processes.',
          ],
        },
        {
          title: 'Freelancers',
          paragraphs: [
            'Manage different client campaigns and keep each order organized with its own Order ID.',
          ],
        },
        {
          title: 'Digital Marketing Agencies',
          paragraphs: [
            'Handle multiple social media platforms and client accounts from a single balance and dashboard.',
          ],
        },
        {
          title: 'SMM Resellers',
          paragraphs: [
            'Use TrendEvo to manage repeat orders and build a more efficient service workflow.',
          ],
        },
      ],
    },
  ],

  mistakes: {
    title: 'Common Ordering Mistakes to Avoid',
    subtitle:
      'Most SMM order problems can be prevented before pressing the Submit button.',
    items: [
      {
        title: 'Choosing the Wrong Service',
        description: 'Read the service name and description carefully.',
      },
      {
        title: 'Submitting the Wrong Link',
        description: 'Check the URL before placing the order.',
      },
      {
        title: 'Making the Account Private',
        description: 'Keep the target publicly accessible while delivery is active.',
      },
      {
        title: 'Ordering Below the Minimum Quantity',
        description: 'Use a quantity within the stated service limits.',
      },
      {
        title: 'Placing Duplicate Orders',
        description:
          'Allow the current order to finish before placing another identical one.',
      },
      {
        title: 'Changing the Username',
        description: 'Do not change usernames or destination links during delivery.',
      },
      {
        title: 'Expecting Every Service to Have a Refill',
        description: 'Refill conditions vary. Check them before ordering.',
      },
      {
        title: 'Expecting Instant Completion',
        description: 'Start time and completion time are different. Some orders deliver gradually.',
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked Questions gt<About How TrendEvo Works>',
    subtitle:
      'Find quick answers about accounts, payments, service selection, order tracking, refills, and support.',
    items: howItWorksFaqItems,
    showCta: true,
    ctaTitle: 'Need Help With Your First Order?',
    ctaSubtitle:
      'Not sure which service to choose or what link to enter? TrendEvo support can help with service selection, payments, order links, statuses, refills, and dashboard use. You can also read our lnk</faq|FAQs> for more answers.',
    ctaButtonLabel: 'Contact Support',
    ctaButtonHref: '/contact-us',
  },

  cta: {
    title: 'Ready to gt<Start With TrendEvo>?',
    description:
      'Create your free TrendEvo account and manage your social media services from one simple dashboard. Create Account → Add Funds → Select Service → Place Order → Track Results. Start with a service that matches your goal, read the order details carefully, and track every order directly from your account.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'Explore Services',
    secondaryButtonHref: '/services',
  },
};
