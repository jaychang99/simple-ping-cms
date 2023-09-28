import { User } from 'types/api/user';
import { useConditionalSWR } from 'hooks/useConditionalSWR';

/**
 * @description 본인 정보 조회
 */
const useGetMe = ({ shouldFetch = true }) => {
  return useConditionalSWR<User>({ url: '/users/me' }, shouldFetch);
};

export default useGetMe;
