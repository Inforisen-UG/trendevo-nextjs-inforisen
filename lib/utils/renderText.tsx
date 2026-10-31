import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import { signInUrl, signUpUrl } from '@/lib/auth-urls';

const AUTH_LINK_TARGETS: Record<string, string> = {
  signup: signUpUrl,
  signin: signInUrl,
  login: signInUrl,
};

export const inlineLinkClassName =
  'font-semibold text-[#8f2acd] underline decoration-[#8f2acd]/35 underline-offset-2 transition-colors hover:text-[#ae4de8] hover:decoration-[#ae4de8] dark:text-[#ae4de8] dark:decoration-[#ae4de8]/40 dark:hover:text-[#cc7aff]';

const STYLED_TOKEN =
  /(gt<[^>]+>|lnk<[^|>]+\|[^>]+>|\[[^\]]+\]\([^)]+\))/g;

function isAbsoluteHref(href: string): boolean {
  return /^https?:\/\//i.test(href.trim());
}

function parseLinkToken(part: string): { label: string; href: string } | null {
  const markdown = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  if (markdown) {
    return { label: markdown[1], href: markdown[2].trim() };
  }

  const lnk = part.match(/^lnk<(.+)>$/);
  if (!lnk) {
    return null;
  }

  const pipe = lnk[1].indexOf('|');
  if (pipe === -1) {
    return null;
  }

  const left = lnk[1].slice(0, pipe);
  const right = lnk[1].slice(pipe + 1);
  const authHref = AUTH_LINK_TARGETS[right.trim().toLowerCase()];
  if (authHref) {
    return { label: left, href: authHref };
  }

  // lnk<label|href> — href is absolute URL or path
  if (isAbsoluteHref(right) || right.startsWith('/')) {
    return { label: left, href: right };
  }

  // legacy lnk</path|label>
  if (isAbsoluteHref(left) || left === '' || left.startsWith('/')) {
    return { label: right, href: left === '' ? '/' : left };
  }

  return { label: left, href: right };
}

function InlineLink({ href, label }: { href: string; label: string }) {
  const trimmedHref = href.trim();

  if (isAbsoluteHref(trimmedHref)) {
    return (
      <a href={trimmedHref} className={inlineLinkClassName}>
        {label}
      </a>
    );
  }

  const internalHref = trimmedHref.startsWith('/')
    ? trimmedHref
    : `/${trimmedHref}`;

  return (
    <Link href={internalHref} className={inlineLinkClassName}>
      {label}
    </Link>
  );
}

function renderStyledLine(line: string, lineKey: number): ReactNode[] {
  const parts = line.split(STYLED_TOKEN);

  return parts.flatMap((part, i) => {
    const gradientMatch = part.match(/^gt<(.+)>$/);
    if (gradientMatch) {
      return (
        <span key={`${lineKey}-g-${i}`} className="text-gradient">
          {gradientMatch[1]}
        </span>
      );
    }

    const link = parseLinkToken(part);
    if (link) {
      return (
        <InlineLink
          key={`${lineKey}-l-${i}`}
          href={link.href}
          label={link.label}
        />
      );
    }

    if (!part) {
      return [];
    }

    return <Fragment key={`${lineKey}-t-${i}`}>{part}</Fragment>;
  });
}

export function renderText(text: string): ReactNode {
  const lines = text.split('\n');

  return lines.flatMap((line, i) => {
    const rendered = renderStyledLine(line, i);

    return i < lines.length - 1
      ? [...rendered, <br key={`br-${i}`} />]
      : rendered;
  });
}
