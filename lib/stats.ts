import { apiFetch } from '@/lib/api-fetch';

export type StatsData = {
  ordersAll: number;
  ordersCompleted: number;
  servicesAll: number;
  ticketsAll: number;
  usersAll: number;
  usersActive: number;
};

type StatsApiResponse = {
  data: StatsData;
};

const FALLBACK_STATS: StatsData = {
  ordersAll: 55_500,
  ordersCompleted: 48_000,
  servicesAll: 4_555,
  ticketsAll: 28_000,
  usersAll: 68_000,
  usersActive: 688_000,
};

const FALLBACK_SATISFACTION_RATE = 75;

export function formatStatCount(value: number): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    const formatted = Number.isInteger(millions)
      ? millions.toString()
      : millions.toFixed(1).replace(/\.0$/, '');

    return `${formatted}M+`;
  }

  if (value >= 10_000) {
    const thousands = value / 1_000;
    const formatted = Number.isInteger(thousands)
      ? thousands.toString()
      : thousands.toFixed(1).replace(/\.0$/, '');

    return `${formatted}K+`;
  }

  return `${value.toLocaleString('en-US')}+`;
}

export function formatUsersCount(value: number): string {
  return `${value.toLocaleString('en-US')}+`;
}

export function formatUsersTrustLabel(usersAll: number): string {
  return `Trusted by ${formatUsersCount(usersAll)} Users in Bangladesh`;
}

export function formatTestimonialsUsersTitle(usersAll: number): string {
  return `Over ${usersAll.toLocaleString('en-US')} Users Across Bangladesh gt<Trust TrendEvo>`;
}

const CTA_USERS_PLACEHOLDER = '{{usersAll}}';
const LEGACY_CTA_USERS_COUNT = '56486';

export function ctaDescriptionNeedsUserCount(description: string): boolean {
  return (
    description.includes(CTA_USERS_PLACEHOLDER) ||
    description.includes(`Join over ${LEGACY_CTA_USERS_COUNT} users`)
  );
}

export function applyUsersAllToCtaDescription(
  description: string,
  usersAll: number,
): string {
  const count = usersAll.toLocaleString('en-US');

  if (description.includes(CTA_USERS_PLACEHOLDER)) {
    return description.replaceAll(CTA_USERS_PLACEHOLDER, count);
  }

  return description.replaceAll(
    `Join over ${LEGACY_CTA_USERS_COUNT} users`,
    `Join over ${count} users`,
  );
}

export async function resolveCtaDescription(description: string): Promise<string> {
  if (!ctaDescriptionNeedsUserCount(description)) {
    return description;
  }

  const { usersAll } = await getStats();
  return applyUsersAllToCtaDescription(description, usersAll);
}

export function getSatisfactionRate(data: StatsData): number {
  if (data.ordersAll <= 0) {
    return FALLBACK_SATISFACTION_RATE;
  }

  return Math.round((data.ordersCompleted / data.ordersAll) * 100);
}

export function buildMarqueeStats(data: StatsData): string[] {
  return [
    `Total active users (${formatStatCount(data.usersAll)})`,
    `Total Services (${data.servicesAll.toLocaleString('en-US')})`,
    `Total Orders (${formatStatCount(data.ordersAll)})`,
    `Total completed orders(${formatStatCount(data.ordersCompleted)})`,
    `Total Ticket (${formatStatCount(data.ticketsAll)})`,
  ];
}

export async function getStats(): Promise<StatsData> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  if (!apiBase) {
    return FALLBACK_STATS;
  }

  try {
    const response = await apiFetch(`${apiBase}/stats`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return FALLBACK_STATS;
    }

    const json = (await response.json()) as StatsApiResponse;

    if (!json.data) {
      return FALLBACK_STATS;
    }

    return json.data;
  } catch {
    return FALLBACK_STATS;
  }
}
