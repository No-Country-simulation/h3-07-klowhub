const toStream = require('buffer-to-stream');
import { v2 as cloudinary } from 'cloudinary';
import { HttpException } from '@nestjs/common';
import { v2 } from 'cloudinary';

export const uploadCloudinary = async (
  file: Express.Multer.File,
): Promise<{ secure_url: string }> => {
  if (!file || !file.buffer) {
    throw new Error(
      'El archivo no se ha recibido correctamente o no contiene un buffer.',
    );
  }
  return new Promise((resolve, reject) => {
    const upload = v2.uploader.upload_stream((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
    toStream(file.buffer).pipe(upload);
  });
};

const MAX_VIDEO_SIZE = 50 * 1024 * 1024;

export const uploadCloudinaryVideo = async (file: Express.Multer.File): Promise<{ secure_url: string }> => {
  // Validar el tamaño del archivo
  if (file.size > MAX_VIDEO_SIZE) {
    throw new HttpException('El archivo excede el tamaño máximo permitido de 50MB.', 400);
  }

  // Validar el formato del archivo (solo mp4)
  if (file.mimetype !== 'video/mp4') {
    throw new HttpException('El formato de video no es compatible. Solo se permite mp4.', 400);
  }

  return new Promise((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      { resource_type: 'video' }, // Especificar que es un video
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result as { secure_url: string });
        }
      },
    );
    toStream(file.buffer).pipe(upload);
  });
};