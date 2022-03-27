import { User } from './User';

export interface Post {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: Array<string>;
  publishDate: string;
  owner: User;
}
