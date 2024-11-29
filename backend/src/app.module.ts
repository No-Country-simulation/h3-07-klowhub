import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ImagesModule } from './media/images.module';
import { PlansModule } from './plans/plans.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardModule } from './admin/dashboard/dashboard.module';

import { AdminUsersModule } from './admin/admin-users/admin-users.module';
import { GateWayModule } from './websockets/websocket.module';
import { NotificationsModule } from './notifications/notifications.module';
import { CoursesModule } from './courses/courses.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    AuthModule,
    UsersModule,
    ImagesModule,
    PlansModule,
    DashboardModule,
    NotificationsModule,
    AdminUsersModule,
    GateWayModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
