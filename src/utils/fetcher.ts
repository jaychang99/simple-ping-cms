import { clientAxios } from 'utils/commonAxios';

export interface FetcherArgs {
  url: string;
  query?: Record<string, unknown>;
}

export async function fetcher({ url, query }: FetcherArgs) {
  return (
    await clientAxios.get(url, {
      params: query,
    })
  ).data;
}
