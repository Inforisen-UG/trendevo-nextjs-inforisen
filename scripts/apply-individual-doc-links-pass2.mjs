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

function lineToPlain(line) {
  return line
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/\\/g, '')
    .trim();
}

function extractLinks(sectionText) {
  const results = [];
  for (const line of sectionText.split('\n')) {
    const re = /\[([^\]]+)\]\((https:\/\/trendevo\.com[^)]+)\)/g;
    let m;
    while ((m = re.exec(line)) !== null) {
      results.push({ label: m[1], url: m[2], plainLine: lineToPlain(line) });
    }
  }
  return results;
}

function parseTabs(markdown) {
  const lines = markdown.split(/\r?\n/);
  const tabs = [];
  let current = null;
  for (const line of lines) {
    const tabMatch = line.match(/^# (Buy [^\n]+)$/);
    if (tabMatch && SLUG_MAP[tabMatch[1]]) {
      if (current) tabs.push(current);
      current = { slug: SLUG_MAP[tabMatch[1]], text: '' };
      continue;
    }
    if (current) current.text += `${line}\n`;
  }
  if (current) tabs.push(current);
  return tabs;
}

function isSkippableString(inner) {
  if (inner.length < 20) return true;
  if (inner.startsWith('/images/')) return true;
  if (/\.(webp|png|svg|jpg)$/i.test(inner)) return true;
  return false;
}

function applyLabelInSource(source, label, url, plainLine) {
  const marker = toMarker(label, url);
  if (source.includes(marker)) return { source, applied: false };

  const plainNorm = plainLine.toLowerCase();
  const re = /'((?:\\.|[^'\\])*)'/g;
  let m;
  const candidates = [];

  while ((m = re.exec(source)) !== null) {
    const inner = m[1].replace(/\\'/g, "'");
    if (isSkippableString(inner)) continue;
    if (!inner.toLowerCase().includes(label.toLowerCase())) continue;
    if (inner.includes(marker)) continue;

    const innerPlain = inner
      .replace(/lnk<[^|>]+\|[^>]+>/g, (x) => x.match(/lnk<([^|>]+)\|/)[1])
      .toLowerCase();
    const score = plainNorm
      ? plainNorm.includes(innerPlain.slice(0, 40))
        ? 2
        : innerPlain.includes(plainNorm.slice(0, 40))
          ? 2
          : 1
      : 1;
    candidates.push({ full: m[0], inner, index: m.index, score });
  }

  candidates.sort((a, b) => b.score - a.score);
  const best = candidates[0];
  if (!best) return { source, applied: false };

  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const newInner = best.inner.replace(
    new RegExp(escapedLabel, 'i'),
    (match) => {
      const pos = best.inner.indexOf(match);
      const before = best.inner.slice(Math.max(0, pos - 6), pos);
      if (before.includes('lnk<')) return match;
      return marker;
    },
  );
  if (newInner === best.inner) return { source, applied: false };

  const escaped = newInner.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const updated =
    source.slice(0, best.index) +
    `'${escaped}'` +
    source.slice(best.index + best.full.length);
  return { source: updated, applied: true };
}

const markdown = fs.readFileSync(DOC_PATH, 'utf8');
const tabs = parseTabs(markdown);
const root = process.cwd();
let total = 0;

for (const tab of tabs) {
  const links = extractLinks(tab.text);
  const filePath = path.join(
    root,
    'app/(subservice)',
    tab.slug,
    'page-data.ts',
  );
  if (!fs.existsSync(filePath)) continue;

  let source = fs.readFileSync(filePath, 'utf8');
  const before = (source.match(/lnk</g) || []).length;
  let applied = 0;

  for (let pass = 0; pass < 3; pass++) {
    for (const link of links) {
      const result = applyLabelInSource(
        source,
        link.label,
        link.url,
        link.plainLine,
      );
      source = result.source;
      if (result.applied) applied++;
    }
  }

  const after = (source.match(/lnk</g) || []).length;
  if (after !== before) {
    fs.writeFileSync(filePath, source);
    total += after - before;
    console.log(`${tab.slug}: +${after - before} (${before}->${after})`);
  }
}

console.log('Added markers:', total);
