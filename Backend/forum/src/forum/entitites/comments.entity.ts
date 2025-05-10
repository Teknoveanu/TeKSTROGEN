/* eslint-disable */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Posts } from './posts.entity';
import { CommentsEntity } from '../interfaces/comments.interface';

@Entity()
export class Comments implements CommentsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  text: string;

  @ManyToOne(() => Posts, (post) => post.comments) // Define the relationship
  post: Posts; // Property to hold the related Post entity

  // createdAt: Date;
  // updatedAt: Date;
}
