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
  IsInt,
} from 'class-validator';
import { ModulsDto } from './moduls.dto';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  courseName: string;

  @IsString({ message: 'La descripción del curso debe ser un texto' })
  courseDescription: string;

  @IsString()
  @IsEnum(['AppSheet', 'PowerApps'])
  @IsNotEmpty({
    message:
      'La plataforma del curso no puede estar vacia, Enum: Mobile, Web, Desktop',
  })
  platform: string;

  @IsString()
  @IsEnum(['English', 'Spanish', 'Portuguese', 'French'])
  @IsNotEmpty({ message: 'El idioma del curso no puede estar vacio' })
  language: string;

  @IsEnum(['beginner', 'intermediate', 'advanced'])
  @IsNotEmpty({ message: 'El nivel del curso no puede estar vacio' })
  courseLevel: string;

  @IsBoolean()
  @IsOptional()
  isFree?: boolean;

  @IsNumber()
  @IsNotEmpty({ message: 'El precio del curso no puede estar vacio' })
  coursePrice: number;

  @IsEnum(['course', 'lesson'])
  @IsNotEmpty({ message: 'El tipo de curso no puede estar vacio' })
  courseType: string;

  @IsArray()
  @IsOptional()
  contentTypes?: string[];

  @IsString()
  @IsNotEmpty()
  pilar: string;

  @IsArray()
  tools?: string[];

  @IsArray()
  hashtags: string[];

  @IsArray()
  functionalities: string[];

  @IsInt()
  @IsNotEmpty({ message: 'El numero de sector no puede estar vacio' })
  sectorId: number;

  @IsString()
  whatYouWillLearn: string;

  @IsString()
  requirements: string;

  @IsArray()
  detailedDescription: string[];

  @IsArray()
  benefits: string[];

  @IsString()
  coverImageUrl: string;
  @IsArray()
  @ValidateNested({ each: true }) // Validar cada módulo
  @Type(() => ModulsDto) // Especificar el tipo de los módulos
  @IsOptional()
  modules?: ModulsDto[];

  /* 
  @IsObject()
  @IsOptional()
  promotionalPackages?: {
    includedCourses: number[];
    discountPercentage: number;
  }[]; */
}
