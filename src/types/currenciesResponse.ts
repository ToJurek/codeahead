export interface ICurrenciesResponse {
  last_updated: number;
  base: string;
  exchange_rates: { [key: string]: number };
}
