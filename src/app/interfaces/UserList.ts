import { User } from './User';

export interface UserList {
  data: Array<User>;
  total: number;
  page: number;
  limit: number;
}
