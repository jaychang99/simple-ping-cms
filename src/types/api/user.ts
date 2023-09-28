import { Dayjs } from 'dayjs';

export interface User {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  googleId: number;
  isAdmin: boolean;
  deletedAt: Dayjs | null;
}
