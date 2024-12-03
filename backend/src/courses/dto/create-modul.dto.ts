import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateModulDto {
  @IsNotEmpty()
  @IsString()
  modulName: string;

  @IsOptional()
  @IsString()
  modulDescription?: string;

  @IsOptional()
  @IsString()
  lessonTitle?: string;

  @IsOptional()
  @IsString()
  lessonDescription?: string;

  @IsOptional()
  @IsString()
  lessonContent?: string;

  @IsOptional()
  @IsString()
  lessonVideo?: string;
}
