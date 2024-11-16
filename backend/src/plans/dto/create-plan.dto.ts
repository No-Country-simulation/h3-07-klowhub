import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class CourseFeaturesDto {
  @IsBoolean()
  canUpload: boolean;

  @IsBoolean()
  canSell: boolean;

  @IsOptional()
  @IsBoolean()
  limitContentHours?: boolean;

  @IsOptional()
  @IsBoolean()
  videoFormatsOptimized?: boolean;

  @IsOptional()
  @IsBoolean()
  includeSubtitles?: boolean;
}

class ApplicationsFeaturesDto {
  @IsBoolean()
  canUpload: boolean;

  @IsBoolean()
  canSell: boolean;
}

class ProjectsFeaturesDto {
  @IsBoolean()
  canSell: boolean;
}

class ProfileFeaturesDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsBoolean()
  available: boolean;
}

class FeaturesDto {
  @ValidateNested()
  @Type(() => CourseFeaturesDto)
  courses: CourseFeaturesDto;

  @ValidateNested()
  @Type(() => ApplicationsFeaturesDto)
  applications: ApplicationsFeaturesDto;

  @ValidateNested()
  @Type(() => ProjectsFeaturesDto)
  projects: ProjectsFeaturesDto;

  @ValidateNested()
  @Type(() => ProfileFeaturesDto)
  profile: ProfileFeaturesDto;

  @IsBoolean()
  consulting: boolean;

  @IsBoolean()
  technicalArticles: boolean;

  @IsBoolean()
  prioritySupport: boolean;
}

export class CreatePlanDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  //@IsPositive()
  price: number;

  @ValidateNested()
  @Type(() => FeaturesDto)
  features: FeaturesDto;

  @IsOptional()
  @IsNumber()
  maxCourses: number;
}
