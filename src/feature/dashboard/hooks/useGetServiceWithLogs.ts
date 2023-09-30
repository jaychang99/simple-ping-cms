import { useConditionalSWR } from 'hooks/useConditionalSWR';
import { ServiceWithLogs } from 'types/api/service';

export type TUseGetServiceWithLogsFetcherArg = {
  startDate: string;
  endDate: string;
} & {
  shouldFetch: boolean;
};

/**
 * @description 로그를 포함한 서비스 목록 조회
 */
const useGetServiceWithLogs = (args: TUseGetServiceWithLogsFetcherArg) => {
  return useConditionalSWR<ServiceWithLogs[]>(
    {
      url: '/services/logs',
      query: { startDate: args.startDate, endDate: args.endDate },
    },
    args.shouldFetch,
  );
};

export default useGetServiceWithLogs;
