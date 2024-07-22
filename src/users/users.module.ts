import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/enteties/User';
import { Profile } from 'src/typeorm/enteties/Profile';
import { ProfilesController } from './controllers/profiles/profiles.controller';
import { ProfileService } from './services/profile/profile.service';
import { PostsController } from './controllers/posts/posts.controller';
import { PostService } from './services/post/post.service';
import { Post } from 'src/typeorm/enteties/Post';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post])],
  controllers: [UsersController, ProfilesController, PostsController],
  providers: [UsersService, ProfileService, PostService],
})
export class UsersModule {}
