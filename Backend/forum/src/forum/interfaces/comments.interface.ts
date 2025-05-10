/* eslint-disable */

import { Posts } from '../entitites/posts.entity';

export interface CommentsEntity {
  id: number;
  name: string;
  text: string;
  post: Posts;
  // createdAt: Date;
  // updatedAt: Date;
}
