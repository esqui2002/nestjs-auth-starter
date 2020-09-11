import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';


export class SignUpInput{
  @IsNotEmpty()
  username: string

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
