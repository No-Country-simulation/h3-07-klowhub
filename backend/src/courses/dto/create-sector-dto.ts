import { IsEnum, IsString } from 'class-validator';

export class CreateSectorDto {
  @IsEnum(['DEVELOPMENT', 'AUTOMATION', 'ANALYTICS', 'DESIGN', 'MONETIZATION'])
  @IsString({ message: 'Name must be a string' })
  name: string;
}
