import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/auth/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { UserResponseDto } from './dto/profile-response.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getProfile(user: UserResponseDto) {
    try {
      const result = await this.userModel
        .findById({ _id: user })
        .select('-password');
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
}
