/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './entitites/posts.entity';
import { Repository } from 'typeorm';
import { PostInput } from './interfaces/input/posts-input.interface';
import { PostUpdateInput } from './interfaces/input/post-update-input.interface';
import { PostsEntity } from './interfaces/posts.interface';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>,
  ) {}

  async create(post: PostInput): Promise<PostsEntity> {
    return this.postsRepository.save(post as Posts);
  }

  async findOne(id: number): Promise<PostsEntity | null> {
    return this.postsRepository.findOne({
      where: { id },
      relations: ['comments'],
    });
  }

  async update(id: number, post: PostUpdateInput): Promise<PostsEntity | null> {
    const existingPost = await this.postsRepository.findOne({ where: { id } });
    await this.postsRepository.update(id, post);
    return this.postsRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<PostsEntity[]> {
    return this.postsRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
