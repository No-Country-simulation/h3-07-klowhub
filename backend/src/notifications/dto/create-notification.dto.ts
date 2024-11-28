import { IsOptional, IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  userName: string;

  @IsString()
  courseName: string

  @IsString()
  message: string;
  
  @IsString()
  type: string;
  /*   @IsOptional ()
  createdAt: Date;
  @IsOptional ()
  read: boolean; */
}
