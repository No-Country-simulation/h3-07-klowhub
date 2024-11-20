import { Injectable } from '@nestjs/common';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/auth/models/user.model';

@Injectable()
export class AdminUsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async deactivateInactiveUsers(months: number) {
    const cutoffDate = new Date();
    cutoffDate.setMonth(cutoffDate.getMonth() - months);

    const result = await this.userModel.updateMany(
      { lastLogin: { $lt: cutoffDate }, isActive: true },
      { $set: { isActive: false } },
    );

    return {
      message: `${result.modifiedCount} users were deactivated.`,
    };
  }

 
}
