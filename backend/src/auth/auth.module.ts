import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';
import { EmailService } from 'src/email/email.service';
import { SellerSchema } from './models/seller.model';
import { PlanSchema } from '../plans/models/plan.model';

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
  controllers: [AuthController],
  providers: [AuthService, EmailService],
  exports: [AuthService],
})
export class AuthModule {}
