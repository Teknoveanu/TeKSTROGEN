/* eslint-disable */

import { Comments } from '../entitites/comments.entity';

export interface PostsEntity {
  id: number;
  title: string;
  text: string;
  // createdAt: Date;
  // updatedAt: Date;
  comments: Comments[];
}
