import { User } from './User';

export interface Comment {
  id: string;
  message: string;
  owner: User;
  post: string;
  publishDate: string;
}
