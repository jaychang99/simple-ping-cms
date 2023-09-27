import useSWRMutation from 'swr/mutation';
import { clientAxios } from 'utils/commonAxios';

type FetcherKey = readonly [[string, string]];
type FetcherArg = {
  name: string;
  url: string;
};

const fetcher = async (
  _: FetcherKey,
  { arg: service }: { arg: FetcherArg },
) => {
  const result = await clientAxios.post('/services', service);
  return result.data;
};

export const useCreateService = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [['POST', '/services']],
    fetcher,
  );
