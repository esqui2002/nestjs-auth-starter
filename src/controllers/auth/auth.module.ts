import { Module } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
require('dotenv').config();

@Module({
  imports: [
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: process.env.SECRET_KEY,
    signOptions: {
      expiresIn: 3600,
    },
  }),
    UserModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy
  ],
  exports: [
    JwtStrategy
  ]
})
export class AuthModule {
}
