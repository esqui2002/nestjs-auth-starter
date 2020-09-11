import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginInput{
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
