import { IsEmail, IsNotEmpty, Max, MaxLength } from 'class-validator';

export class ValidateEmailCode {
  @IsNotEmpty()
  @MaxLength(6)
  readonly code: string;
}
