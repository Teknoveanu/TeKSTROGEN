/* eslint-disable */

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ForumService } from './forum.service';
import { Posts } from './entitites/posts.entity';
import { Comments } from './entitites/comments.entity';
import { CommentsEntity } from './interfaces/comments.interface';
import { CommentUpdateInput } from './interfaces/input/comment-update-input.interface';

@Controller('forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @Post('post/:postId')
  async addComment(
    @Param('postId') postId: number,
    @Body() comment: Omit<Comments, 'post'>,
  ): Promise<Comments> {
    return this.forumService.create(postId, comment);
  }

  @Get('comments')
  async getAllPosts(): Promise<Comments[]> {
    return this.forumService.findAll();
  }

  @Get('comment/:id')
  async getComment(@Param('id') id: number): Promise<CommentsEntity | null> {
    return this.forumService.findOne(id);
  }

  @Put('comment/:id')
  async updateComment(
    @Param('id') id: number,
    @Body() comment: CommentUpdateInput
  ): Promise<CommentsEntity | null> {
    return this.forumService.update(id, comment);
  }

  @Delete('comment/:id')
  async removeComment(@Param('id') id: number): Promise<void> {
    return this.forumService.remove(id);
  }
}
