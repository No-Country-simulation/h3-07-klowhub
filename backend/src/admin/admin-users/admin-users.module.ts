import { Module } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { AdminUsersController } from './admin-users.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerSchema } from 'src/auth/models/seller.model';
import { UserSchema } from 'src/auth/models/user.model';
import { PlanSchema } from 'src/plans/models/plan.model';
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
  controllers: [AdminUsersController],
  providers: [AdminUsersService]
})
export class AdminUsersModule {}
