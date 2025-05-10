/* eslint-disable */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ForumModule } from './forum/forum.module';
import { Comments } from './forum/entitites/comments.entity';
import { Posts } from './forum/entitites/posts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Make sure this is 'mysql'
      host: 'localhost', // Verify this
      port: 3306, // Verify this
      username: 'root', // Verify this
      password: '', // Verify this
      database: 'TKST', // Verify this
      entities: [Posts, Comments], // Make sure entities are listed
      synchronize: true, // Usually true for dev, false for prod
      autoLoadEntities: true,
      logging: true,
    }),
    ForumModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
