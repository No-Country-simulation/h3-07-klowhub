import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/auth/models/user.model';
import { Model } from 'mongoose';
import { EmailService } from 'src/email/email.service';
import { CreateAdminNotificationDto } from './dto/createAdminNotification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly emailService: EmailService,
  ) {}
  async newCourseNotification(createNotificationDto: CreateNotificationDto) {
    const admins = await this.userModel.find({ role: 'admin' });

    for (const admin of admins) {
      if (admin.notifications) {
        admin.notifications.push({
          message: `El usuario ${createNotificationDto.userName} ha creado el curso "${createNotificationDto.courseName}".`,
          type: 'Curso Creado',
          createdAt: new Date(),
          read: false,
        });
        //sendEmailNotification
        await this.emailService.sendEmailNotification(
          admin.email,
          `El usuario ${createNotificationDto.userName} ha creado el curso "${createNotificationDto.courseName}".`,
        );
      }
      // Guarda los cambios en la base de datos
      await admin.save();
    }
  }

  async newAdminNotification(
    createAdminNotificationDto: CreateAdminNotificationDto,
    emailHtml: any,
  ) {
    const admins = await this.userModel.find({ role: 'admin' });
    for (const admin of admins) {
      if (admin.notifications) {
        admin.notifications.push({
          message: `${createAdminNotificationDto.userName} ${createAdminNotificationDto.message}`,
          type: `${createAdminNotificationDto.type}`,
          createdAt: new Date(),
          read: false,
        });
        //sendEmailNotification
        await this.emailService.sendToAdminEmailNotification(
          admin.email,
          `Nueva notificacion del usuario:  ${createAdminNotificationDto.userName}". Accion: ${createAdminNotificationDto.message} Tipo: ${createAdminNotificationDto.type}`,
          emailHtml,
        );
      }
      // Guarda los cambios en la base de datos
      await admin.save();
    }
  }

  findAll() {
    return `This action returns all notifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
