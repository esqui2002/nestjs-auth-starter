import { Controller, Post, Body, ValidationPipe, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/decorators/user.decorator';
import { User } from 'src/entities/user.entity';


@Controller()
export class UsersController { 
    constructor(
    ){}

    @Get('/auth/me')
    @UseGuards(AuthGuard('jwt'))
    async getMe(
        @GetUser() user: User
    ): Promise<User>{
        delete user.password;
        return user;
    }
}
