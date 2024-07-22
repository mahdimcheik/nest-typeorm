import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CreatePostDto } from 'src/users/dtos/CreatePost.dto';
import { PostService } from 'src/users/services/post/post.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostService) {}

  @Post(':id')
  createUserPost(
    @Param('id') id: number,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postService.createPost(id, createPostDto);
  }

  @Delete(':id/user/:userId')
  deletePost(@Param('id') id: number, @Param('userId') userId: number) {
    return this.postService.deletePost(id, userId);
  }
}
