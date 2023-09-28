import { Dayjs } from 'dayjs';
import { Log } from 'types/api/log';

export interface Service {
  uuid: string;
  name: string;
  url: string;
  deletedAt: Dayjs | null;
}

export interface ServiceWithLogs extends Service {
  logs: Log[];
}
