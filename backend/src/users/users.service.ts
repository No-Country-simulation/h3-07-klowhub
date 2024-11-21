import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/auth/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { UserResponseDto } from './dto/profile-response.dto';
import * as bcrypt from 'bcrypt';
import { Seller, SellerDocument } from 'src/auth/models/seller.model';
import { CreateSellerDto } from './dto/create-seller.dto';
import { Plan, PlanDocument } from 'src/plans/models/plan.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Seller.name) private sellerModel: Model<SellerDocument>,
    @InjectModel(Plan.name) private planModel: Model<PlanDocument>,
  ) {}

  async getProfile(user: UserResponseDto) {
    try {

      let result;

      if (user.role === 'seller') {
        result = await this.userModel
          .findById({ _id: user._id })
          .select('-password')
          .populate({
            path: 'seller',
            populate: {
              path: 'plan',
            },
          });
          console.log(result);
      } else {
        result = await this.userModel
          .findById({ _id: user._id })
          .select('-password');
          console.log(user);
      }

      if (!result) {
        throw new HttpException('User not found', 404);
      }

      return result;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(user: UserResponseDto, updateUserDto: UpdateUserDto) {
    try {
      if (updateUserDto.password) {
        const saltRounds = 10; // Puedes ajustar el número de saltos
        updateUserDto.password = await bcrypt.hash(
          updateUserDto.password,
          saltRounds,
        );
      }

      return this.userModel.findByIdAndUpdate(
        { _id: user._id },
        updateUserDto,
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async uploadImage(file: Express.Multer.File, user: UserResponseDto) {
    if (!file) {
      throw new HttpException('Please upload file', 400);
    }
    const result = await this.userModel.findByIdAndUpdate(
      { _id: user._id },
      { profileImage: file.path },
      { new: true },
    );

    return { imageUrl: file.path };
  }

  async upgradeToSeller(user: UserResponseDto, sellerData: CreateSellerDto) {
    try {
      const existingUser = await this.userModel.findById(user._id);
      if (!existingUser) throw new NotFoundException('User not found');
      if (existingUser.role === 'seller') {
        throw new BadRequestException('User is already a seller');
      }
      const starterPlan = await this.planModel.findOne({ name: 'Starter' });
      if (!starterPlan) throw new NotFoundException('Starter plan not found');

      const newSeller = new this.sellerModel({
        user: existingUser._id,
        plan: starterPlan._id, // Asignar plan Starter posteriormente
        profileName: sellerData.profileName,
        profileDescription: sellerData.profileDescription || null,
        sellerType: sellerData.sellerType,
        portfolioWebLink: sellerData.portfolioWebLink || null,
        receivePayments: sellerData.receivePayments,
        idImageFront: sellerData.idImageFront,
        idImageBack: sellerData.idImageBack,
        courses: [],
        applications: [],
        projects: [],
        totalSales: 0,
        totalRevenue: 0,
      });

      const savedSeller = await newSeller.save();

      // Actualizar el usuario
      existingUser.role = 'seller';
      existingUser.seller = savedSeller._id;

      await existingUser.save();

      return {
        message: 'User upgraded to seller successfully',
        seller: savedSeller,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
  }
}
