import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { SignUpInput } from './dto/signup.input';
import { LoginInput } from './dto/login.input';

@Controller('auth')
export class AuthController { 
    constructor(
        private authService: AuthService
    ){}

    @Post('/signup')
    async signUp(@Body(ValidationPipe) authCredentials: SignUpInput){
        return await this.authService.signUp(authCredentials);
    }

    @Post('/login')
    async login(@Body(ValidationPipe) authCredentials: LoginInput){
        return await this.authService.login(authCredentials);
    }
}
