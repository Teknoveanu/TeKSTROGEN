/* eslint-disable */

import { Module } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumController } from './forum.controller';
import { Posts } from './entitites/posts.entity';
import { Comments } from './entitites/comments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Posts, Comments])],
  providers: [ForumService, PostsService],
  controllers: [ForumController, PostsController],
})
export class ForumModule {}
