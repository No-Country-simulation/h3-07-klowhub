import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserSchema } from 'src/auth/models/user.model';
import { SellerSchema } from 'src/auth/models/seller.model';
import { PlanSchema } from 'src/plans/models/plan.model';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      {
        name: 'Seller',
        schema: SellerSchema,
      },
      { name: 'Plan', schema: PlanSchema },
    ]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: config.get<string | number>('JWT_EXPIRES') },
      }),
    }),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService, UsersService, EmailService],
})
export class NotificationsModule {}