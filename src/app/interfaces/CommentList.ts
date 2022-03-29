import { Comment } from './Comment';

export interface CommentList {
  data: Array<Comment>;
  total: number;
  page: number;
  limit: number;
}
