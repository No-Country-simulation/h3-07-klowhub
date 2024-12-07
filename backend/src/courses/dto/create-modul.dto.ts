import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateModulDto {
  @IsNotEmpty()
  @IsString()
  modulName: string;

  @IsNotEmpty({ message: 'Description is required' })
  @IsString()
  modulDescription: string;
}
