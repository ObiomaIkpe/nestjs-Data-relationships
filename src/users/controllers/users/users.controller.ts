import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { CreateUserParams } from 'src/utils/type';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}
    @Get()
  async getUsers() {
    const users = await this.userService.findUsers()
    return users;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto){
    // const {...userDetails, confirmPassword} = createUserDto;
    this.userService.createUser(createUserDto)
  }
}
