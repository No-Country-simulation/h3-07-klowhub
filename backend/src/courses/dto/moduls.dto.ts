import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class ModulsDto {
  @IsNumber()
  @IsOptional() 
  id?: number;

  @IsString()
  @IsNotEmpty()
  modulName: string;

  @IsString()
  @IsOptional()
  modulDescription?: string;

  @IsString()
  @IsOptional()
  lessonTitle?: string;

  @IsString()
  @IsOptional()
  lessonDescription?: string;

  @IsString()
  @IsOptional()
  lessonContent?: string;

  @IsString()
  @IsOptional()
  lessonVideo?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  courseId?: number;
}
