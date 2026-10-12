import {
  data as staticPricingPageData,
  type ServicePricingGroup,
} from '@/app/services/pricing/page-data';
import { fetchSmmPanelServices } from '@/lib/smm-panel/fetch-services';
import { mapSmmServicesToPricingGroups } from '@/lib/smm-panel/map-pricing';

export async function getServicesPricing(): Promise<ServicePricingGroup[]> {
  try {
    const services = await fetchSmmPanelServices();

    if (services.length === 0) {
      return staticPricingPageData.pricingGroups;
    }

    return mapSmmServicesToPricingGroups(
      services,
      staticPricingPageData.pricingPlatforms,
    );
  } catch (error) {
    console.error('[getServicesPricing] Falling back to static data', error);
    return staticPricingPageData.pricingGroups;
  }
}
