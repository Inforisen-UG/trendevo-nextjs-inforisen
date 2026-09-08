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

type PrivacyPolicyPageData = {
  seo: SEO;
  hero: LegalPageHero;
  faq: FaqSectionData;
};

export const data: PrivacyPolicyPageData = {
  seo: {
    title: 'Privacy Policy | TrendEvo',
    description:
      'Read the TrendEvo Privacy Policy to understand what personal data we collect, how we use it, who we share it with, and your rights.',
    canonical: '/privacy-policy',
  },

  hero: {
    titlePrefix: 'Privacy',
    titleHighlight: 'Policy',
    description:
      'Your privacy matters to us. This page explains what personal information we collect, how we use it, and what rights you have over your own data.',
    lastUpdated: '24/03/2026',
  },

  faq: {
    label: 'FAQ',
    title: 'gt<Frequently> Asked Questions',
    subtitle:
      'Answers to common questions about how TrendEvo collects, uses, shares, and protects your personal information under our Privacy Policy.',
    bg: 'section-7',
    items: [
      {
        question: 'What personal information does TrendEvo collect from me?',
        answer:
          'TrendEvo may collect your name, email address, account details, order information, transaction records, IP address, and website usage data.',
      },
      {
        question: 'Does TrendEvo need or store my social media passwords?',
        answer:
          'No. TrendEvo does not require your social media password to process standard SMM orders. You should never share your social media password when placing an order.',
      },
      {
        question:
          'Does TrendEvo store my bKash, Nagad, card, or payment credentials?',
        answer:
          'TrendEvo may keep transaction records, but sensitive payment credentials are generally processed through the relevant payment provider rather than stored directly by TrendEvo.',
      },
      {
        question:
          'Why does TrendEvo collect my social media profile or post URL?',
        answer:
          'TrendEvo needs the relevant profile, post, video, page, or channel URL to deliver the service to the correct destination.',
      },
      {
        question: 'Does TrendEvo sell my personal information to advertisers?',
        answer:
          'No. TrendEvo does not sell your personal information to advertisers for their independent marketing purposes.',
      },
      {
        question: 'Who can TrendEvo share my information with?',
        answer:
          'Information may be shared with trusted service providers when necessary for payments, security, website operation, customer support, legal compliance, or service delivery.',
      },
      {
        question:
          'How long does TrendEvo keep my personal information and order history?',
        answer:
          'TrendEvo may retain information as long as reasonably necessary for service operation, transaction records, dispute resolution, fraud prevention, and legal requirements.',
      },
      {
        question:
          'Can I request access to, correction of, or deletion of my personal data?',
        answer:
          'Yes. You may contact TrendEvo to request access to or correction of your information. Deletion requests may be considered where permitted by applicable law.',
      },
      {
        question: 'How does TrendEvo protect my personal information?',
        answer:
          'TrendEvo uses reasonable technical and organizational security measures to protect user information from unauthorized access, misuse, or disclosure.',
      },
      {
        question:
          'What should I do if I think my TrendEvo account has been accessed without permission?',
        answer:
          'Change your password immediately and contact TrendEvo customer support so the team can review the suspicious activity.',
      },
    ],
  },
};
