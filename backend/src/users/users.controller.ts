import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({ status: 200, description: 'Returns the user profile.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @UseGuards(AuthGuard)
  @Get()
  profile(@Req() request) {
    const userId = request.user;
    return this.usersService.getProfile(userId._id);
  }

  @UseGuards(AuthGuard)
  @Patch('updateprofile')
  @ApiOperation({ summary: 'Update user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile updated successfully.',
  })
  @ApiResponse({ status: 400, description: 'Invalid data provided.' })
  @ApiBody({ type: UpdateUserDto })
  @UseGuards(AuthGuard)
  @Patch('updateprofile')
  update(@Req() request, @Body() updateUserDto: UpdateUserDto) {
    const userId = request.user;
    return this.usersService.update(userId, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Patch('imageprofile')
  @UseInterceptors(FileInterceptor('img', { storage }))
  @ApiOperation({ summary: 'Upload user profile image' })
  @ApiResponse({ status: 201, description: 'Image uploaded successfully.' })
  @ApiResponse({ status: 400, description: 'No file uploaded.' })
  @UseGuards(AuthGuard)
  @Patch('imageprofile')
  @UseInterceptors(FileInterceptor('img', { storage }))
  async uploadImage(@UploadedFile() file: Express.Multer.File, @Req() request) {
    const userId = request.user;
    return this.usersService.uploadImage(file, userId);
  }
}
