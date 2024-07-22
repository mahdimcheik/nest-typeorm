import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/enteties/Profile';
import { User } from 'src/typeorm/enteties/User';
import { CreateUserProfileParams } from 'src/users/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}
  async createUserProfile(id: number, userProfile: CreateUserProfileParams) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException('User Not found ', HttpStatus.NOT_FOUND);
    }
    const newProfil = this.profileRepository.create(userProfile);
    const savedProfil = await this.profileRepository.save(newProfil);
    user.profile = savedProfil;
    return this.userRepository.save(user);
  }
}
