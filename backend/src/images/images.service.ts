import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

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
}
