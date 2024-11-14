import {
  Body,
  Controller,
  FileTypeValidator,
  HttpException,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import { join } from 'path';
import { extname } from 'path';
import { diskStorage } from 'multer';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage }))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    return { imageUrl: file.path };
  }

  @Post('uploadnew')
  @UseInterceptors(FileInterceptor('file'))
  async post_categories(@UploadedFile() file: Express.Multer.File) {
    return this.imagesService.newUploadImage(file);
  }

  /* @Post('uploadvideo')
  @UseInterceptors(FileInterceptor('video'))
  async uploadVideo(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          new FileTypeValidator({ fileType: 'video/mp4' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    try {
      // Cloudinary retorna automáticamente los detalles del archivo subido
      console.log('File uploaded to Cloudinary:', file);
      return { videoUrl: file.path }; // `file.path` contiene la URL del archivo en Cloudinary
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw new HttpException(error.message, 500);
    }
  } */
    @Post('upload-video')
    @UseInterceptors(FileInterceptor('file'))
    async uploadVideo(@UploadedFile() file: Express.Multer.File): Promise<string> {
      return this.imagesService.uploadVideo(file);
    }
}
