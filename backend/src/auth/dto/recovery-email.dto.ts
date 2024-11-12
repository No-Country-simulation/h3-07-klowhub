import { IsEmail, IsNotEmpty } from 'class-validator';

export class ResetEmail {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
