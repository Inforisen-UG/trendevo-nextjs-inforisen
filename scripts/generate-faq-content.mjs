import fs from 'node:fs';

const md = fs.readFileSync('faq.md', 'utf8');

const categoryMap = {
  'Getting Started With TrendEvo': {
    id: 'getting-started',
    shortLabel: 'Getting Started',
  },
  Orders: { id: 'orders', shortLabel: 'Orders' },
  'Delivery & Order Status': {
    id: 'delivery-status',
    shortLabel: 'Delivery & Status',
  },
  'Payments & Adding Funds': {
    id: 'payments',
    shortLabel: 'Payments',
  },
  'Drops & Refills': { id: 'drops-refills', shortLabel: 'Drops & Refills' },
  'Account, Privacy & Security': {
    id: 'account-security',
    shortLabel: 'Account & Security',
  },
  'Services & Results': {
    id: 'services-results',
    shortLabel: 'Services & Results',
  },
  'Agencies, Freelancers & Resellers': {
    id: 'resellers-agencies',
    shortLabel: 'Resellers & Agencies',
  },
  'Support & Policies': {
    id: 'support-policies',
    shortLabel: 'Support & Policies',
  },
};

function clean(text) {
  return text.replace(/\*\*/g, '').replace(/\r/g, '').trim();
}

function convertLinks(text) {
  const rules = [
    [/TrendEvo Terms of Service page/g, 'lnk<Terms of Service|/terms-of-service> page'],
    [/TrendEvo Terms of Service/g, 'lnk<Terms of Service|/terms-of-service>'],
    [/Terms of Service page/g, 'lnk<Terms of Service|/terms-of-service> page'],
    [/Terms of Service/g, 'lnk<Terms of Service|/terms-of-service>'],
    [/TrendEvo Privacy Policy/g, 'lnk<Privacy Policy|/privacy-policy>'],
    [/Privacy Policy/g, 'lnk<Privacy Policy|/privacy-policy>'],
    [/TrendEvo Refund Policy/g, 'lnk<Refund Policy|/refund-policy>'],
    [/Refund Policy/g, 'lnk<Refund Policy|/refund-policy>'],
    [/Contact Us page/g, 'lnk<Contact Us|/contact-us> page'],
    [/Contact Us/g, 'lnk<Contact Us|/contact-us>'],
    [/Sign up on TrendEvo/g, 'lnk<Sign up on TrendEvo|https://trendevo.com/signup>'],
    [/Create a free account/g, 'lnk<Create a free account|https://trendevo.com/signup>'],
    [/Create your account/g, 'lnk<Create your account|https://trendevo.com/signup>'],
    [/Create an account/g, 'lnk<Create an account|https://trendevo.com/signup>'],
    [/register first/g, 'lnk<register first|https://trendevo.com/signup>'],
  ];

  let parts = [text];

  for (const [pattern, replacement] of rules) {
    parts = parts.flatMap((part) => {
      if (part.startsWith('lnk<')) return [part];
      const converted = part.replace(pattern, replacement);
      return converted.split(/(lnk<[^>]+>)/g).filter(Boolean);
    });
  }

  return parts.join('');
}

function toTsString(value) {
  return JSON.stringify(convertLinks(clean(value)));
}

const lines = md.split('\n');
const categories = [];
let current = null;
let currentQ = null;
let answerLines = [];

function flushAnswer() {
  if (!current || !currentQ) return;
  const answer = answerLines.join('\n').trim();
  answerLines = [];
  current.items.push({ question: currentQ, answer });
  currentQ = null;
}

function flushCategory() {
  flushAnswer();
  if (current) categories.push(current);
  current = null;
}

for (const rawLine of lines) {
  const line = rawLine.trimEnd();
  if (line.startsWith('## **') && !line.startsWith('###')) {
    flushCategory();
    const title = clean(line.replace(/^## /, ''));
    if (title.startsWith('Still Have Questions') || title.startsWith('New to TrendEvo')) {
      continue;
    }
    const mapped = categoryMap[clean(title)];
    const id =
      mapped?.id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const shortLabel = mapped?.shortLabel || clean(title);
    current = { id, title: clean(title), shortLabel, subtitle: '', items: [] };
    continue;
  }
  if (!current) continue;
  if (line.startsWith('### **')) {
    flushAnswer();
    currentQ = clean(line.replace(/^### /, ''));
    continue;
  }
  if (currentQ) {
    if (line === '---') {
      flushAnswer();
      continue;
    }
    answerLines.push(line);
    continue;
  }
  if (line && !line.startsWith('**') && !line.startsWith('#') && !line.startsWith('---')) {
    if (!current.subtitle) current.subtitle = clean(line);
  }
}

flushCategory();

for (const cat of categories) {
  for (const item of cat.items) {
    item.answer = item.answer.replace(/^\* /gm, '• ');
  }
}

const platformAnswer = categories
  .flatMap((cat) => cat.items)
  .find((item) => item.question === 'Which social media platforms does TrendEvo support?');

if (platformAnswer) {
  platformAnswer.answer = platformAnswer.answer
    .replace('• Instagram', '• lnk<Instagram|/instagram-smm-panel>')
    .replace('• Facebook', '• lnk<Facebook|/facebook-smm-panel>')
    .replace('• YouTube', '• lnk<YouTube|/youtube-smm-panel>')
    .replace('• TikTok', '• lnk<TikTok|/tiktok-smm-panel>')
    .replace('• Telegram', '• lnk<Telegram|/telegram-smm-panel>')
    .replace('• X', '• lnk<X|/x-twitter-smm-panel>')
    .replace('• Spotify', '• lnk<Spotify|/spotify-smm-panel>')
    .replace('• SoundCloud', '• lnk<SoundCloud|/soundcloud-smm-panel>')
    .replace('• Snapchat', '• lnk<Snapchat|/snapchat-smm-panel>')
    .replace(
      'always check the current service list.',
      'always check the current lnk<service list|/services>.',
    );
}

const out = `import type { FaqItem } from '@/components/sections/faq-section';

export type FaqCategoryData = {
  id: string;
  title: string;
  shortLabel: string;
  subtitle: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategoryData[] = [
${categories
  .map(
    (cat) => `  {
    id: ${toTsString(cat.id)},
    title: ${toTsString(cat.title)},
    shortLabel: ${toTsString(cat.shortLabel)},
    subtitle: ${toTsString(cat.subtitle)},
    items: [
${cat.items
  .map(
    (item) => `      {
        question: ${toTsString(item.question)},
        answer: ${toTsString(item.answer)},
      },`,
  )
  .join('\n')}
    ],
  },`,
  )
  .join('\n')}
];
`;

fs.writeFileSync('app/faq/faq-content.ts', out);
console.log('Categories:', categories.length);
console.log('Total items:', categories.reduce((n, c) => n + c.items.length, 0));
