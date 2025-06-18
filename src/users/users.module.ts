import {Module} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/userEntity';
import { Profile } from 'src/typeorm/entities/profile';
import { Post } from 'src/typeorm/entities/Post';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
