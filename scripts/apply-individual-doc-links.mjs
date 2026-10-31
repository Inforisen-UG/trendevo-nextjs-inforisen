import fs from 'fs';
import path from 'path';
import { getSignUpUrl } from './lib/perfect-app-urls.mjs';

const DOC_PATH =
  process.env.INDIVIDUAL_DOC ||
  'C:/Users/Iftekhar/Downloads/Individual Service Landing Page.md';

const SLUG_MAP = {
  'Buy Facebook Followers': 'buy-facebook-followers',
  'Buy Facebook Page Likes': 'buy-facebook-page-likes',
  'Buy Facebook Comments': 'buy-facebook-comments',
  'Buy Instagram Followers': 'buy-instagram-followers',
  'Buy Instagram Likes': 'buy-instagram-likes',
  'Buy Instagram Comments': 'buy-instagram-comments',
  'Buy Instagram Shares': 'buy-instagram-shares',
  'Buy Instagram Views': 'buy-instagram-views',
  'Buy Instagram Auto Likes': 'buy-instagram-auto-likes',
  'Buy Instagram Story Views': 'buy-instagram-story-views',
  'Buy YouTube Subscribers': 'buy-youtube-subscribers',
  'Buy YouTube Views': 'buy-youtube-views',
  'Buy YouTube Likes': 'buy-youtube-likes',
  'Buy YouTube Comments': 'buy-youtube-comments',
  'Buy Twitter Followers': 'buy-x-twitter-followers',
  'Buy Twitter Likes': 'buy-x-twitter-likes',
  'Buy TikTok Followers': 'buy-tiktok-followers',
  'Buy TikTok Likes': 'buy-tiktok-likes',
  'Buy TikTok Views': 'buy-tiktok-views',
  'Buy Spotify Followers': 'buy-spotify-followers',
  'Buy Spotify Plays': 'buy-spotify-plays',
  'Buy Spotify Monthly Listeners': 'buy-spotify-monthly-listeners',
  'Buy Telegram Members': 'buy-telegram-members',
  'Buy Snapchat Followers': 'buy-snapchat-followers',
  'Buy SoundCloud Followers': 'buy-soundcloud-followers',
  'Buy SoundCloud Plays': 'buy-soundcloud-plays',
};

function resolveHref(url) {
  const pathname = url.replace('https://trendevo.com', '') || '/';
  if (pathname === '/signup') return getSignUpUrl();
  if (pathname === '/api') return 'https://trendevo.com/api';
  return pathname;
}

function toMarker(label, url) {
  return `lnk<${label}|${resolveHref(url)}>`;
}

function norm(s) {
  return s
    .replace(/lnk<[^|>]+\|[^>]+>/g, (m) => m.match(/lnk<([^|>]+)\|/)[1])
    .replace(/gt<([^>]+)>/g, '$1')
    .replace(/[''']/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function lineToPlain(line) {
  return line
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/\\/g, '')
    .trim();
}

function applyLinkToText(text, label, url) {
  const marker = toMarker(label, url);
  if (text.includes(marker)) return text;

  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(escaped, 'i'), (match) => {
    const start = text.indexOf(match);
    const before = text.slice(Math.max(0, start - 8), start);
    if (before.includes('lnk<')) return match;
    return marker;
  });
}

function extractLinksWithContext(sectionText) {
  const results = [];
  for (const line of sectionText.split('\n')) {
    if (!line.includes('](https://trendevo.com')) continue;
    const plainLine = lineToPlain(line);
    const re = /\[([^\]]+)\]\((https:\/\/trendevo\.com[^)]+)\)/g;
    let m;
    while ((m = re.exec(line)) !== null) {
      results.push({ label: m[1], url: m[2], plainLine });
    }
  }
  return results;
}

function findBestStringLiteral(source, plainLine) {
  const plainNorm = norm(plainLine);
  const re = /'((?:\\.|[^'\\])*)'/g;
  let best = null;
  let bestScore = 0;
  let m;
  while ((m = re.exec(source)) !== null) {
    const inner = m[1].replace(/\\'/g, "'");
    if (inner.length < 30) continue;
    if (inner.startsWith('/images/')) continue;
    if (/\.(webp|png|svg|jpg)$/i.test(inner)) continue;

    const innerNorm = norm(inner);
    if (innerNorm === plainNorm) {
      return { full: m[0], inner, index: m.index };
    }

    const shorter =
      plainNorm.length < innerNorm.length ? plainNorm : innerNorm;
    const longer =
      plainNorm.length >= innerNorm.length ? plainNorm : innerNorm;
    if (!longer.includes(shorter.slice(0, Math.min(60, shorter.length)))) {
      continue;
    }

    const words = plainNorm.split(' ').filter((w) => w.length > 3);
    const score = words.filter((w) => innerNorm.includes(w)).length / words.length;
    if (score > bestScore && score >= 0.75) {
      bestScore = score;
      best = { full: m[0], inner, index: m.index };
    }
  }
  return best;
}

function applyLinkToSource(source, plainLine, label, url) {
  const marker = toMarker(label, url);
  if (source.includes(marker)) return { source, applied: false };

  const match = findBestStringLiteral(source, plainLine);
  if (!match) return { source, applied: false };

  const newInner = applyLinkToText(match.inner, label, url);
  if (newInner === match.inner) return { source, applied: false };

  const escaped = newInner.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const updated =
    source.slice(0, match.index) +
    `'${escaped}'` +
    source.slice(match.index + match.full.length);
  return { source: updated, applied: true };
}

function parseTabs(markdown) {
  const lines = markdown.split(/\r?\n/);
  const tabs = [];
  let current = null;

  for (const line of lines) {
    const tabMatch = line.match(/^# (Buy [^\n]+)$/);
    if (tabMatch && SLUG_MAP[tabMatch[1]]) {
      if (current) tabs.push(current);
      current = { title: tabMatch[1], slug: SLUG_MAP[tabMatch[1]], text: '' };
      continue;
    }
    if (current) current.text += `${line}\n`;
  }
  if (current) tabs.push(current);
  return tabs;
}

const markdown = fs.readFileSync(DOC_PATH, 'utf8');
const tabs = parseTabs(markdown);
const root = process.cwd();

let filesUpdated = 0;
let totalApplied = 0;
const missed = [];

for (const tab of tabs) {
  const links = extractLinksWithContext(tab.text);
  const filePath = path.join(
    root,
    'app/(subservice)',
    tab.slug,
    'page-data.ts',
  );
  if (!fs.existsSync(filePath)) {
    missed.push({ slug: tab.slug, reason: 'missing file' });
    continue;
  }

  let source = fs.readFileSync(filePath, 'utf8');
  const before = (source.match(/lnk</g) || []).length;
  let tabApplied = 0;

  for (const link of links) {
    const result = applyLinkToSource(
      source,
      link.plainLine,
      link.label,
      link.url,
    );
    source = result.source;
    if (result.applied) tabApplied++;
  }

  const after = (source.match(/lnk</g) || []).length;
  if (after !== before) {
    fs.writeFileSync(filePath, source);
    filesUpdated++;
    totalApplied += tabApplied;
    console.log(
      `${tab.slug}: ${links.length} doc links, applied ${tabApplied}, markers ${before}->${after}`,
    );
  } else if (links.length > 0) {
    console.log(`${tab.slug}: no changes (${links.length} doc links)`);
  }
}

console.log('\nFiles updated:', filesUpdated);
console.log('Total applies:', totalApplied);
if (missed.length) console.log('Missed:', missed);
