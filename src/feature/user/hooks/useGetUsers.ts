import { User } from 'types/api/user';
import { useConditionalSWR } from 'hooks/useConditionalSWR';

export type TUseGetUserFetcherArg = {
  shouldFetch: boolean;
};

/**
 * @description 로그를 포함한 서비스 목록 조회
 */
const useGetUsers = (args: TUseGetUserFetcherArg) => {
  return useConditionalSWR<User[]>(
    {
      url: '/users',
    },
    true,
  );
};

export default useGetUsers;
