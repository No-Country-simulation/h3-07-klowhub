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

  @Post('upload-pdf')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPdf(@UploadedFile() file: Express.Multer.File) {
    return this.imagesService.newUploadFile(file);
  }

  @Post('upload-video')
  @UseInterceptors(FileInterceptor('file'))
  async uploadVideo(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    return this.imagesService.uploadVideo(file);
  }

  /*   @Post('upload-pdf')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPdf(@UploadedFile() file: Express.Multer.File): Promise<string> {
    return this.imagesService.uploadPdf(file);
  } */
}
