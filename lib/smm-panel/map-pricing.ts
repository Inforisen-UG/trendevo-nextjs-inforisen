import type {
  PricingPlatform,
  ServicePricingGroup,
  ServicePricingRow,
} from '@/app/services/pricing/page-data';
import { data as staticPricingPageData } from '@/app/services/pricing/page-data';
import type { SmmPanelService } from '@/lib/smm-panel/types';

const PLATFORM_RULES: { id: string; patterns: RegExp[] }[] = [
  { id: 'facebook', patterns: [/facebook/i] },
  { id: 'instagram', patterns: [/instagram/i] },
  { id: 'twitter', patterns: [/twitter/i, /\bx\b/i, /\bx\s*\(/i] },
  { id: 'youtube', patterns: [/youtube/i] },
  { id: 'tiktok', patterns: [/tiktok/i] },
  { id: 'linkedin', patterns: [/linkedin/i] },
  { id: 'telegram', patterns: [/telegram/i] },
  { id: 'discord', patterns: [/discord/i] },
  { id: 'spotify', patterns: [/spotify/i] },
  { id: 'soundcloud', patterns: [/soundcloud/i] },
  { id: 'snapchat', patterns: [/snapchat/i] },
  { id: 'website-traffic', patterns: [/website traffic/i, /web traffic/i] },
];

function detectPlatformId(text: string): string {
  for (const rule of PLATFORM_RULES) {
    if (rule.patterns.some((pattern) => pattern.test(text))) {
      return rule.id;
    }
  }

  return 'facebook';
}

/** Panel sometimes duplicates categories with a trailing ᴺᴱᵂ / NEW badge. */
function normalizeCategoryName(category: string) {
  return category
    .replace(/\s*(?:ᴺᴱᵂ|NEW)\s*$/iu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}

function formatRate(rate: string) {
  const numeric = Number.parseFloat(rate);
  if (Number.isNaN(numeric)) {
    return `$${rate}`;
  }

  return `$${numeric.toFixed(2)}`;
}

function formatOrderLimit(value: number) {
  return value.toLocaleString('en-US');
}

function mapServiceToRow(service: SmmPanelService): ServicePricingRow {
  return {
    id: String(service.service),
    serviceName: service.name,
    ratePer1000: formatRate(service.rate),
    minOrder: formatOrderLimit(service.min),
    maxOrder: formatOrderLimit(service.max),
    averageTime: service.type || '—',
    description: `Refill: ${service.refill ? 'Yes' : 'No'} · Cancel: ${service.cancel ? 'Yes' : 'No'}`,
  };
}

function platformIconFor(platformId: string, platforms: PricingPlatform[]) {
  return (
    platforms.find((platform) => platform.id === platformId)?.icon ??
    platforms[0]?.icon ??
    '/images/our-services/platforms/facebook-platform-icon.webp'
  );
}

export function mapSmmServicesToPricingGroups(
  services: SmmPanelService[],
  platforms: PricingPlatform[] = staticPricingPageData.pricingPlatforms,
): ServicePricingGroup[] {
  const groups = new Map<string, ServicePricingGroup>();

  for (const service of services) {
    const categoryTitle = normalizeCategoryName(service.category);
    const platformId = detectPlatformId(categoryTitle);
    const groupKey = `${platformId}::${categoryTitle}`;

    const existing = groups.get(groupKey);
    const row = mapServiceToRow(service);

    if (existing) {
      existing.rows.push(row);
      continue;
    }

    groups.set(groupKey, {
      id: slugify(groupKey) || `group-${service.service}`,
      title: categoryTitle,
      platformId,
      platformIcon: platformIconFor(platformId, platforms),
      rows: [row],
    });
  }

  return Array.from(groups.values()).sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}

export function filterPricingGroups({
  groups,
  platformId,
  searchQuery,
  groupIds,
}: {
  groups: ServicePricingGroup[];
  platformId: string;
  searchQuery: string;
  groupIds?: string[] | null;
}) {
  const query = searchQuery.trim().toLowerCase();

  const hasGroupFilter = Boolean(groupIds && groupIds.length > 0);

  return groups
    .filter((group) => group.platformId === platformId)
    .filter((group) => !hasGroupFilter || groupIds?.includes(group.id))
    .map((group) => {
      if (!query) {
        return group;
      }

      const titleMatches = group.title.toLowerCase().includes(query);

      const rows = group.rows.filter(
        (row) =>
          row.serviceName.toLowerCase().includes(query) ||
          row.id.toLowerCase().includes(query) ||
          titleMatches,
      );

      return { ...group, rows };
    })
    .filter((group) => group.rows.length > 0);
}
