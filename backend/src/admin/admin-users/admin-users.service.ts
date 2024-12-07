import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async authorizeSeller(email, action) {
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }

      if (action === 'approve') {
        user.role = 'seller';
        await user.save();
        return { message: 'Usuario autorizado como vendedor' };
      } else if (action === 'reject') {
        return { message: 'Solicitud de vendedor rechazada' };
      } else {
        throw new BadRequestException('Acción inválida');
      }
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
