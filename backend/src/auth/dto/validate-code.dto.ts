import { IsEmail, IsNotEmpty } from 'class-validator';

export class ValidateCode {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly code: string;
}
