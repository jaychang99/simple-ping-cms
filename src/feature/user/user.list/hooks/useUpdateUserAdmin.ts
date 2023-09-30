import useSWRMutation from 'swr/mutation';
import { clientAxios } from 'utils/commonAxios';

type FetcherKey = readonly [[string, string]];
type FetcherArg = {
  uuid: string;
  isAdmin: boolean;
};

const fetcher = async (_: FetcherKey, { arg: user }: { arg: FetcherArg }) => {
  const { uuid, isAdmin } = user;
  const url = `/users/${uuid}/role`;
  const result = await clientAxios.patch(url, { isAdmin });
  return result.data;
};

export const useUpdateUserAdmin = () =>
  useSWRMutation<any, any, FetcherKey, FetcherArg>(
    [['PATCH', '/users/:id/role']],
    fetcher,
  );
