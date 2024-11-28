import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
  IsArray,
  IsDecimal,
  IsNumber,
  IsObject,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { ModulsDto } from './moduls.dto';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  courseName: string;

  @IsString()
  @IsOptional()
  courseDescription?: string;

  @IsString()
  @IsOptional()
  platform?: string;

  @IsString()
  @IsOptional()
  language?: string;

  @IsEnum(['beginner', 'intermediate', 'advanced'])
  @IsOptional()
  courseLevel?: string;

  @IsBoolean()
  @IsOptional()
  isFree?: boolean;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  coursePrice?: number;

  @IsEnum(['course', 'lesson'])
  @IsOptional()
  courseType?: string;

  @IsArray()
  @IsOptional()
  contentTypes?: string[];

  @IsArray()
  @IsOptional()
  tools?: string[];

  @IsArray()
  @IsOptional()
  hashtags?: string[];

  @IsObject()
  @IsOptional()
  functionalities?: Record<string, any>;

  @IsObject()
  @IsOptional()
  promotionalPackages?: {
    includedCourses: number[];
    discountPercentage: number;
  }[];

  @IsObject()
  @IsOptional()
  category?: {
    mainCategory: string;
    subCategories: string[];
  };

  @IsArray()
  @ValidateNested({ each: true }) // Validar cada módulo
  @Type(() => ModulsDto) // Especificar el tipo de los módulos
  @IsOptional()
  modules?: ModulsDto[];
}
