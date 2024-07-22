import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUseerProfile.dto';
import { ProfileService } from 'src/users/services/profile/profile.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfileService) {}
  @Post(':id')
  async createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() userProfile: CreateUserProfileDto,
  ) {
    return await this.profileService.createUserProfile(id, userProfile);
  }
}
