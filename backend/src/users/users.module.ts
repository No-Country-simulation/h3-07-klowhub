import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from 'src/auth/auth.service';
import { EmailService } from 'src/email/email.service';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/auth/models/user.model';
import { ConfigService } from '@nestjs/config';
import { SellerSchema } from 'src/auth/models/seller.model';
import { PlanSchema } from 'src/plans/models/plan.model';
import { NotificationsService } from 'src/notifications/notifications.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: config.get<string | number>('JWT_EXPIRES') },
      }),
    }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      {
        name: 'Seller',
        schema: SellerSchema,
      },
      { name: 'Plan', schema: PlanSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, EmailService, AuthService, NotificationsService],
})
export class UsersModule {}
