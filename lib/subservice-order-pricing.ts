/**
 * Order form calculator rates derived from panel pricing for quantity 100.
 * totalAmount = quantity * pricePerUnit
 */
const priceFor100Units: Record<string, number> = {
  'buy-instagram-followers': 0.52,
  'buy-instagram-views': 0.0003,
  'buy-instagram-likes': 0.0404,
  'buy-instagram-comments': 0.5,
  'buy-instagram-shares': 0.0018,
  'buy-instagram-auto-likes': 0.15,
  'buy-instagram-story-views': 0.017,
  'buy-facebook-followers': 0.0792,
  'buy-facebook-page-likes': 0.0792,
  'buy-facebook-comments': 3,
  'buy-youtube-subscribers': 3.8,
  'buy-youtube-views': 0.15,
  'buy-youtube-comments': 0.5,
  'buy-youtube-likes': 0.435,
  'buy-tiktok-followers': 0.12,
  'buy-tiktok-likes': 0.08,
  'buy-tiktok-views': 0.002,
  'buy-telegram-members': 0.25,
  'buy-x-twitter-followers': 0.3,
  'buy-x-twitter-likes': 0.15,
  'buy-threads-followers': 0.2,
  'buy-spotify-followers': 0.18,
  'buy-spotify-monthly-listeners': 0.35,
  'buy-spotify-plays': 0.05,
  'buy-linkedin-followers': 0.8,
  'buy-linkedin-likes': 0.5,
};

const DEFAULT_PRICE_FOR_100_UNITS = 120;

export function getSubservicePricePerUnit(pageSlug: string): number {
  const priceFor100 = priceFor100Units[pageSlug] ?? DEFAULT_PRICE_FOR_100_UNITS;
  return priceFor100 / 100;
}

/** Formats order totals; uses extra decimals for sub-cent panel rates (e.g. views). */
export function formatSubserviceOrderTotal(amount: number): string {
  const abs = Math.abs(amount);
  const decimals = abs === 0 || abs >= 0.01 ? 2 : 4;
  return `$${amount.toFixed(decimals)}`;
}
