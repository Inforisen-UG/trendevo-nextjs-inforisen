import { apiFetch } from '@/lib/api-fetch';
import type { SmmPanelService } from '@/lib/smm-panel/types';

function getSmmPanelApiUrl() {
  const base =
    process.env.TRENDEVO_SMM_API_URL?.trim() ||
    process.env.NEXT_PUBLIC_PERFECT_APP_URL?.trim() ||
    'https://my.trendevo.com';

  return `${base.replace(/\/$/, '')}/api/v2`;
}

export async function fetchSmmPanelServices(): Promise<SmmPanelService[]> {
  const apiKey = process.env.TRENDEVO_SMM_API_KEY?.trim();

  if (!apiKey) {
    return [];
  }

  const body = new URLSearchParams({
    key: apiKey,
    action: 'services',
  });

  const response = await apiFetch(getSmmPanelApiUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
    next: { revalidate: 120 },
  });

  if (!response.ok) {
    throw new Error(`SMM panel services request failed (${response.status})`);
  }

  const payload = (await response.json()) as unknown;

  if (!Array.isArray(payload)) {
    throw new Error('SMM panel services response is not an array');
  }

  return payload as SmmPanelService[];
}
