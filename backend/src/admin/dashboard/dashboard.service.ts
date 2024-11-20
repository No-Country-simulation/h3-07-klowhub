import { HttpException, Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/auth/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Seller, SellerDocument } from 'src/auth/models/seller.model';
import { Plan, PlanDocument } from 'src/plans/models/plan.model';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Seller.name) private sellerModel: Model<SellerDocument>,
    @InjectModel(Plan.name) private planModel: Model<PlanDocument>,
  ) {}


  async findAll() {
    try {
      return await this.userModel.find().populate({
        path: 'seller',
        populate: {
          path: 'plan',
        },
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getTotalUsers() {
    try {
      const totalUsers = await this.userModel.countDocuments();
      const activeUsers = await this.userModel.countDocuments({
        isActive: true,
      });
      return { totalUsers, activeUsers };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getNewUsersByPeriod(startDate: Date, endDate: Date) {
    try {
      const newUsers = await this.userModel.countDocuments({
        createdAt: { $gte: startDate, $lte: endDate },
      });
      return { newUsers };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getSalesStats() {
    try {
      const sales = await this.sellerModel.aggregate([
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: '$revenue' },
            totalSales: { $sum: '$salesCount' },
          },
        },
      ]);
      return sales[0] || { totalRevenue: 0, totalSales: 0 };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getContentStats() {
    try {
      const courses = await this.planModel.countDocuments({ type: 'course' });
      const apps = await this.planModel.countDocuments({ type: 'application' });
      return { courses, apps };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
