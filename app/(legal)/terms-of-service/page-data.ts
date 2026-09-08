import type { FaqSectionData } from '@/components/sections/faq-section';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type LegalPageHero = {
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  lastUpdated: string;
};

type TermsOfServicePageData = {
  seo: SEO;
  hero: LegalPageHero;
  faq: FaqSectionData;
};

export const data: TermsOfServicePageData = {
  seo: {
    title: 'Terms of Service | TrendEvo',
    description:
      'Read the TrendEvo Terms of Service before creating an account or placing an order. Plain-language rules for using our SMM panel.',
    canonical: '/terms-of-service',
  },

  hero: {
    titlePrefix: 'Terms Of',
    titleHighlight: 'Services',
    description:
      'Before registering and ordering services, it is important to read and understand the Terms of Service carefully. By using the services offered by smmxp.org, you agree to abide by these terms.',
    lastUpdated: '24/03/2026',
  },

  faq: {
    label: 'FAQ',
    title: 'gt<Frequently> Asked Questions',
    subtitle:
      'Answers to common questions about using TrendEvo under our Terms of Service, including accounts, orders, and prohibited activity.',
    bg: 'section-7',
    items: [
      {
        question: 'Who is eligible to create and use a TrendEvo account?',
        answer:
          'Anyone who meets TrendEvo’s account requirements and agrees to the Terms of Service may create and use an account. Users must provide accurate information and use the platform responsibly.',
      },
      {
        question:
          'Am I responsible for entering the correct link or username when placing an order?',
        answer:
          'Yes. You are responsible for providing the correct profile, post, page, or channel link. TrendEvo may not be able to reverse or refund an order submitted with incorrect information.',
      },
      {
        question: 'Can I use TrendEvo services for my clients or as a reseller?',
        answer:
          'Yes. Agencies, freelancers, and resellers may use TrendEvo services for their clients as long as they follow the Terms of Service and applicable platform rules.',
      },
      {
        question: 'What activities are prohibited when using TrendEvo?',
        answer:
          'You must not use TrendEvo for illegal, fraudulent, abusive, deceptive, or harmful activities. Misuse of the platform may result in account restrictions or termination.',
      },
      {
        question: 'Can TrendEvo suspend or terminate my account?',
        answer:
          'Yes. TrendEvo may suspend or terminate accounts that violate the Terms of Service, misuse services, or engage in suspicious or prohibited activity.',
      },
      {
        question: 'What happens to my balance if my account is terminated?',
        answer:
          'Any remaining balance will be handled according to TrendEvo’s Terms of Service and the reason for the account termination.',
      },
      {
        question:
          'Does TrendEvo guarantee specific social media growth or business results?',
        answer:
          'No. TrendEvo provides social media marketing services but does not guarantee sales, revenue, engagement, rankings, or long-term organic growth.',
      },
      {
        question:
          'What happens if a social media platform changes its rules or algorithms?',
        answer:
          'Social media platforms can change their policies, algorithms, and systems at any time. TrendEvo cannot control or guarantee results affected by those external changes.',
      },
    ],
  },
};
