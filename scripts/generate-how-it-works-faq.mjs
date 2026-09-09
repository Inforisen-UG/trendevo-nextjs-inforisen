import fs from 'node:fs';

const md = fs.readFileSync('how-it-works.md', 'utf8');
const lines = md.split('\n');

function clean(text) {
  return text.replace(/\*\*/g, '').replace(/\r/g, '').trim();
}

function convertLinks(text) {
  const rules = [
    [/Contact Us section/g, 'lnk<Contact Us|/contact-us> section'],
    [/Contact Us/g, 'lnk<Contact Us|/contact-us>'],
    [/Read FAQs/g, 'lnk<Read FAQs|/faq>'],
    [/Explore Services/g, 'lnk<Explore Services|/services>'],
    [/View All Services/g, 'lnk<View All Services|/services>'],
    [/Browse Services/g, 'lnk<Browse Services|/services>'],
    [/Create Your Account/g, 'lnk<Create Your Account|https://trendevo.com/signup>'],
    [/Create Free Account/g, 'lnk<Create Free Account|https://trendevo.com/signup>'],
    [/Create your account/g, 'lnk<Create your account|https://trendevo.com/signup>'],
    [/Create an account/g, 'lnk<Create an account|https://trendevo.com/signup>'],
    [/Get Started Free/g, 'lnk<Get Started Free|https://trendevo.com/signup>'],
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

let inFaq = false;
let currentQ = null;
let answerLines = [];
const items = [];

function flushAnswer() {
  if (!currentQ) return;
  items.push({
    question: clean(currentQ),
    answer: answerLines.join('\n').trim(),
  });
  currentQ = null;
  answerLines = [];
}

for (const rawLine of lines) {
  const line = rawLine.trimEnd();
  if (line.startsWith('## **Frequently Asked Questions')) {
    inFaq = true;
    continue;
  }
  if (!inFaq) continue;
  if (line.startsWith('## **Need Help')) break;
  if (line.startsWith('### **')) {
    flushAnswer();
    currentQ = clean(line.replace(/^### /, ''));
    continue;
  }
  if (currentQ && line !== '---') {
    answerLines.push(line);
  }
}
flushAnswer();

const out = `import type { FaqItem } from '@/components/sections/faq-section';

export const howItWorksFaqItems: FaqItem[] = [
${items
  .map(
    (item) => `  {
    question: ${toTsString(item.question)},
    answer: ${toTsString(item.answer.replace(/^\* /gm, '• '))},
  },`,
  )
  .join('\n')}
];
`;

fs.writeFileSync('app/how-it-works/how-it-works-faq.ts', out);
console.log('FAQ items:', items.length);
