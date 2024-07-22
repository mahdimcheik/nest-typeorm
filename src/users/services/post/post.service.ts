import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/enteties/Post';
import { User } from 'src/typeorm/enteties/User';
import { CreatePostParams } from 'src/users/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createPost(id: number, createPost: CreatePostParams) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new HttpException('User Not found ', HttpStatus.NOT_FOUND);
    }
    const newPost = this.postRepository.create({ ...createPost, user });
    return await this.postRepository.save(newPost);
  }
}
