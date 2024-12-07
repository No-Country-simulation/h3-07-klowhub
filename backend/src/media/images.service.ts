import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import {
  uploadCloudinary,
  uploadCloudinaryPdf,
  uploadCloudinaryVideo,
} from 'src/config/upload';

@Injectable()
export class ImagesService {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }
  
  async listImages(): Promise<string[]> {
    try {
      const result = await cloudinary.api.resources();

      return result.resources.map((image) => image.secure_url);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async uploadImage(file: any): Promise<string> {
    try {
      const result = await cloudinary.uploader.upload(file.path);
      return result.secure_url;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
  async newUploadImage(file: Express.Multer.File): Promise<string> {
    try {
      const image = await uploadCloudinary(file);

      return image.secure_url;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
  async newUploadFile(file: Express.Multer.File): Promise<string> {
    try {
      const result = await uploadCloudinaryPdf(file);

      return result.secure_url;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, 500);
    }
  }
  /* async uploadVideo(file: any): Promise<string> {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        resource_type: 'video',
      });
      return result.secure_url;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  } */
  async uploadVideo(file: Express.Multer.File): Promise<string> {
    try {
      const video = await uploadCloudinaryVideo(file);
      return video.secure_url;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async uploadPdf(file: Express.Multer.File): Promise<string> {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        resource_type: 'raw',
      });
      return result.secure_url;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
