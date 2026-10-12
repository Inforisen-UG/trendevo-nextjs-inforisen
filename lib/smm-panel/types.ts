export type SmmPanelService = {
  service: number;
  name: string;
  type: string;
  category: string;
  rate: string;
  min: number;
  max: number;
  dripfeed?: boolean;
  refill: boolean;
  cancel: boolean;
};
