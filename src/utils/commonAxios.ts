import axios from 'axios';
import { processEnv } from 'constants/processEnv';

// Client side에서 backend에 요청을 보내는 axios (useEffect로 api 호출할때는 이거 쓰기)
export const clientAxios = axios.create({
  baseURL: `${processEnv.NEXT_PUBLIC_API_ENDPOINT}`,
  withCredentials: true,
});
