/* eslint-disable */

import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './entitites/posts.entity';
import { PostsEntity } from './interfaces/posts.interface';
import { PostInput } from './interfaces/input/posts-input.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPost(@Body() post: PostInput): Promise<PostsEntity> {
    return this.postsService.create(post);
  }
}
