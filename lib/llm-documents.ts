import { data as home } from '@/app/(home)/page-data';
import { data as about } from '@/app/about-us/page-data';
import { data as contact } from '@/app/contact-us/page-data';
import { data as services } from '@/app/services/page-data';
import { data as privacy } from '@/app/(legal)/privacy-policy/page-data';
import { data as refund } from '@/app/(legal)/refund-policy/page-data';
import { data as terms } from '@/app/(legal)/terms-of-service/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { getAiResourceOrigin, LLMS_PATH } from '@/lib/ai-resources';

function resourceUrl(path: string): string {
  const origin = getAiResourceOrigin();
  if (!path || path === '/') return origin;
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
}

function absoluteFromHref(href: string): string {
  const trimmed = href.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return resourceUrl(trimmed.startsWith('/') ? trimmed : `/${trimmed}`);
}

/** Turn homepage markup tokens into Markdown without dropping the linked URL. */
export function markupToMarkdown(value: string): string {
  return value
    .replace(/gt<([^>]+)>/g, '$1')
    .replace(/lnk<([^>]+)>/g, (_match, inner: string) => {
      const pipe = inner.indexOf('|');
      if (pipe === -1) return inner;

      const left = inner.slice(0, pipe);
      const right = inner.slice(pipe + 1);
      const rightIsHref = /^https?:\/\//i.test(right) || right.startsWith('/');
      const leftIsHref =
        /^https?:\/\//i.test(left) || left === '' || left.startsWith('/');

      if (rightIsHref) {
        return `[${left}](${absoluteFromHref(right)})`;
      }

      if (leftIsHref) {
        const href = left === '' ? resourceUrl('/') : absoluteFromHref(left);
        return `[${right}](${href})`;
      }

      return left;
    });
}

export function buildIndexMarkdown(): string {
  const origin = getAiResourceOrigin();
  const platforms = home.ourServices.platforms
    .map((platform) => {
      const description = markupToMarkdown(platform.description);
      return `- [${platform.marketingTitle}](${resourceUrl(platform.exploreHref)}): ${description}`;
    })
    .join('\n');

  const steps = home.workingProcess.steps
    .map((step, index) => `${index + 1}. **${step.title}.** ${step.description}`)
    .join('\n');

  const audiences = [...home.advantages.leftItems, ...home.advantages.rightItems]
    .map((item) => `- **${item.title}.** ${item.description}`)
    .join('\n');

  const differences = [...home.whyChooseUs.leftFeatures, ...home.whyChooseUs.rightFeatures]
    .map((item) => `- **${item.title}.** ${item.description}`)
    .join('\n');

  const faqs = (home.faq.items ?? [])
    .map((item) => `### ${item.question}\n\n${item.answer}`)
    .join('\n\n');

  const prices = home.pricing.platforms
    .flatMap((platform) =>
      platform.plans.map(
        (plan) =>
          `- ${plan.serviceName}: from ${plan.startingPrice} per the homepage pricing table ([${plan.buyLabel}](${resourceUrl(plan.buyHref)}))`,
      ),
    )
    .join('\n');

  const signupLine =
    signUpUrl && signUpUrl !== '#'
      ? `- Create an account: ${signUpUrl}`
      : '- Create an account from the Get Started action on the homepage.';

  return `# TrendEvo — SMM Panel in Bangladesh

${home.seo.description}

URL: ${origin}

This file is the Markdown version of the TrendEvo homepage. For the wider site index, use ${resourceUrl(LLMS_PATH)}.

## What TrendEvo is

${markupToMarkdown(home.hero.description)}

${home.footer.blurb}

${home.hero.promo}

## Who it is for

${markupToMarkdown(home.advantages.heading.subtitle)}

${audiences}

## How ordering works

${markupToMarkdown(home.workingProcess.heading.subtitle)}

${steps}

More detail: [How TrendEvo works](${resourceUrl('/how-it-works')}).

## Payments

${markupToMarkdown(home.paymentMethods.heading.subtitle)}

Homepage pricing features:

${home.pricing.features.map((feature) => `- ${feature}`).join('\n')}

## Platforms

${markupToMarkdown(home.ourServices.heading.subtitle)}

${platforms}

## Homepage starting prices

These rates are the starting prices published on the homepage. Confirm the live rate on the linked service page before ordering.

${prices}

Full pricing guide: [Services and pricing](${resourceUrl('/services/pricing')}).

## Why the homepage says TrendEvo is different

${markupToMarkdown(home.whyChooseUs.heading.subtitle)}

${differences}

## Frequently asked questions

${faqs}

More answers: [FAQ](${resourceUrl('/faq')}).

## More on this site

- [Services](${resourceUrl('/services')}): ${services.seo.description}
- [About TrendEvo](${resourceUrl('/about-us')}): ${about.seo.description}
- [Contact](${resourceUrl('/contact-us')}): ${contact.seo.description}
- [Blog](${resourceUrl('/blog')}): ${markupToMarkdown(home.blog.heading.subtitle)}
- [Terms of Service](${resourceUrl('/terms-of-service')}): ${terms.seo.description}
- [Privacy Policy](${resourceUrl('/privacy-policy')}): ${privacy.seo.description}
- [Refund Policy](${resourceUrl('/refund-policy')}): ${refund.seo.description}
- [Sitemap](${resourceUrl('/sitemap.xml')}): every public HTML URL, including blog posts and author pages
- [LLMs.txt](${resourceUrl(LLMS_PATH)}): agent index for this site

## Contact and getting started

${signupLine}
- Email: info@trendevo.com
- Phone: +880 1888 8887 7777
- Support hours published on the contact page: Monday to Sunday, 24 hours
- Homepage call to action: ${markupToMarkdown(home.cta.description)}
`;
}
