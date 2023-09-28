import { Dayjs } from 'dayjs';

export interface Log {
  uuid: string;
  date: Dayjs;
  type: string;
  value: 'SUCCESS' | 'ERROR';
  serviceUuid: string;
  deletedAt: null | Dayjs;
  responseTime: null | number;
}
