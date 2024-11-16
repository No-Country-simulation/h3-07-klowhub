import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  SELLER = 'seller',
}

export class CreateUserDto {
  @MaxLength(20)
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @MaxLength(25)
  @IsEmail()
  readonly email: string;

  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty()
  // Al menos una letra minúscula, una letra mayúscula, un número, y un carácter especial
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
    {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  )
  readonly password: string;

}
