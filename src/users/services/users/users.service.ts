import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/userEntity';
import { CreateUserParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    findUsers(){
        return this.userRepository.find() //you can pass in options when you want to filter.
    }

    createUser(CreateUserDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...CreateUserDetails, CreatedAt: new Date()  
        });
       return this.userRepository.save(newUser);
    }
}
