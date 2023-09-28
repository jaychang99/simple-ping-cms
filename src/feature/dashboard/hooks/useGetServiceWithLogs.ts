import { useConditionalSWR } from 'hooks/useConditionalSWR';
import { ServiceWithLogs } from 'types/api/service';

/**
 * @description 로그를 포함한 서비스 목록 조회
 */
const useGetServiceWithLogs = ({ shouldFetch = true }) => {
  return useConditionalSWR<ServiceWithLogs[]>(
    { url: '/services/logs' },
    shouldFetch,
  );
};

export default useGetServiceWithLogs;
