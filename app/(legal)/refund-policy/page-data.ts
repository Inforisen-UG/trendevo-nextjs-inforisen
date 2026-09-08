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

type RefundPolicyPageData = {
  seo: SEO;
  hero: LegalPageHero;
  faq: FaqSectionData;
};

export const data: RefundPolicyPageData = {
  seo: {
    title: 'Refund Policy | TrendEvo',
    description:
      'Read the TrendEvo Refund Policy to understand when refunds apply, how to request one, and what to expect from our support team.',
    canonical: '/refund-policy',
  },

  hero: {
    titlePrefix: 'Refund',
    titleHighlight: 'Policy',
    description:
      'At Trend Evo, your satisfaction is our priority. Our transparent Refund Policy ensures hassle-free returns and reliable support, giving you confidence with every service.',
    lastUpdated: '24/03/2026',
  },

  faq: {
    label: 'FAQ',
    title: 'gt<Frequently> Asked Questions',
    subtitle:
      'Answers to common questions about TrendEvo refunds, partial orders, refills, cancellations, and how to request a review.',
    bg: 'section-7',
    items: [
      {
        question: 'When am I eligible for a refund from TrendEvo?',
        answer:
          'Failed, canceled, or undelivered orders may qualify for a refund depending on the order status and the conditions stated in TrendEvo’s Refund Policy.',
      },
      {
        question: 'What happens if my order is only partially delivered?',
        answer:
          'If an order is marked partial, the value of the undelivered quantity may be returned to your TrendEvo account balance.',
      },
      {
        question: 'Can I get a refund if my order has already been completed?',
        answer:
          'Generally, no. Completed orders are usually not eligible for a refund because the purchased service has already been delivered.',
      },
      {
        question: 'Can I cancel an order after delivery has started?',
        answer:
          'Usually, orders cannot be canceled once processing or delivery has started. Cancellation availability may depend on the specific service.',
      },
      {
        question: 'Can I get a refund if I entered the wrong link or username?',
        answer:
          'Usually not. Customers are responsible for checking their order details before submitting an order.',
      },
      {
        question:
          'What happens if my followers, likes, or views drop after delivery?',
        answer:
          'If the service includes refill protection and the drop meets the refill conditions, you may request a refill. Services without refill coverage may not qualify.',
      },
      {
        question:
          'Can I withdraw unused TrendEvo balance to bKash, Nagad, or another payment method?',
        answer:
          'Account balance is generally intended for purchasing TrendEvo services. Withdrawal eligibility depends on TrendEvo’s Refund Policy and the specific circumstances.',
      },
      {
        question: 'How do I request a refund from TrendEvo?',
        answer:
          'Contact TrendEvo customer support with your order ID and details of the issue. The team will review the order and determine refund eligibility.',
      },
      {
        question: 'How long does TrendEvo take to review a refund request?',
        answer:
          'Review time can vary depending on the order, service, and issue. Providing complete order details can help the review process.',
      },
      {
        question: 'What is the difference between a refund and a refill?',
        answer:
          'A refund returns the eligible value of an order or undelivered portion. A refill replaces eligible followers, likes, views, or other engagement that dropped after delivery.',
      },
    ],
  },
};
