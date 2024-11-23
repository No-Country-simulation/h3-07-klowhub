import { IsOptional, IsString } from 'class-validator';

export class CreateAdminNotificationDto {
  @IsString()
  userName: string;

  @IsString()
  message: string;

  @IsString()
  type: string;
  /*   @IsOptional ()
  createdAt: Date;
  @IsOptional ()
  read: boolean; */
}
