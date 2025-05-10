/* eslint-disable */

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comments } from './comments.entity';
import { Exclude } from 'class-transformer';
import { PostsEntity } from '../interfaces/posts.interface';

@Entity()
export class Posts implements PostsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  text: string;
  //   createdAt: Date;
  //     updatedAt: Date;
  @OneToMany(() => Comments, (comment) => comment.post)
  comments: Comments[];
}
