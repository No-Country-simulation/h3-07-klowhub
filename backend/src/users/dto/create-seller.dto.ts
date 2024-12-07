import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateSellerDto {
  @IsNotEmpty()
  @IsString()
  profileName: string; // Nombre del perfil de venta

  @IsOptional()
  @IsString()
  profileDescription?: string; // Descripción personalizada del perfil

  @IsNotEmpty()
  @IsEnum([
    'Desarrollador de apps',
    'Creador de contenido educativo',
    'Equipo de desarrollo',
    'AppSheet Expert',
  ])
  sellerType: string;

  @IsOptional()
  @IsUrl()
  portfolioWebLink?: string; // Enlace al portafolio web

  @IsNotEmpty()
  @IsString()
  @IsEnum(['Crypto', 'Paypal', 'Stripe'], { each: true })
  receivePayments: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  idImageFront: string; // Imagen frontal del documento de identidad

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  idImageBack: string; // Imagen trasera del documento de identidad
}
