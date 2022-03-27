import { Post } from './Post';

export interface PostList {
  data: Array<Post>;
  total: number;
  page: number;
  limit: number;
}
