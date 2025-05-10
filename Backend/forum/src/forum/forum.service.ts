/* eslint-disable */

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './entitites/comments.entity';
import { Posts } from './entitites/posts.entity';
import { CommentsEntity } from './interfaces/comments.interface';
import { CommentInput } from './interfaces/input/comment-input.interface';
import { CommentUpdateInput } from './interfaces/input/comment-update-input.interface';

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(Comments)
    private readonly commentsRepository: Repository<Comments>,
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>,
  ) {}

  async create(postId: number, comment: CommentInput): Promise<CommentsEntity> {
    // Find the post first
    const post = await this.postsRepository.findOne({ where: { id: postId } });

    // If post doesn't exist, throw error
    if (!post) {
      throw new NotFoundException(`Post with ID ${postId} not found`);
    }

    // Create new comment and associate with post
    const newComment = this.commentsRepository.create({
      ...comment,
      post: post,
    });

    // Save and return the comment
    return this.commentsRepository.save(newComment);
  }

  async findOne(id: number): Promise<CommentsEntity | null> {
    return this.commentsRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<CommentsEntity[]> {
    return this.commentsRepository.find();
  }

  async update(
    id: number,
    comment: Partial<CommentUpdateInput>,
  ): Promise<CommentsEntity | null> {
    const existingComment = await this.commentsRepository.findOne({
      where: { id },
    });
    if (!existingComment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    if ('name' in comment) {
      throw new NotFoundException('You cannot update the name you fucker !!!!');
    }
    const { text } = comment;
    await this.commentsRepository.update(id, { text });
    return this.commentsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}
