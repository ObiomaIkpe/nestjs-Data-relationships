import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/userEntity';
import { Profile } from './typeorm/entities/profile';
import { Post } from './typeorm/entities/Post';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'myuser',
    password: 'mypassword',
    database: 'mydb',
    entities: [User, Profile, Post],
    synchronize: true, 
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
