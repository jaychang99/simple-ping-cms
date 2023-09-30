import { User } from 'types/api/user';
import { useConditionalSWR } from 'hooks/useConditionalSWR';
import { Service } from 'types/api/service';

export type TUseGetServiceFetcherArg = {
  shouldFetch?: boolean;
};

/**
 * @description 로그를 포함한 서비스 목록 조회
 */
const useGetService = (args: TUseGetServiceFetcherArg) => {
  return useConditionalSWR<Service[]>(
    {
      url: '/services',
    },
    true,
  );
};

export default useGetService;
