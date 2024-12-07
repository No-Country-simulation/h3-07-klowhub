import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { request } from 'http';
import { GetUserDto } from './dto/get-user.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('create-new-course')
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.newCourseNotification(
      createNotificationDto,
    );
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Req() request) {
    const user = request.user;
    return this.notificationsService.findAll(user);
  }

  @UseGuards(AuthGuard)
  @Patch('mark-as-read/:id')
  updateNotification(@Req() request, @Param('id') notificationId: string) {
    const user = request.user;
    return this.notificationsService.readNotification(user,notificationId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return this.notificationsService.update(+id, updateNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(+id);
  }
}
