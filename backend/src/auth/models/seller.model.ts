import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.model';
import { Plan } from '../../plans/models/plan.model';

export type SellerDocument = Seller & Document;

@Schema()
export class Seller {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User; // Relación con el usuario propietario

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: false })
  plan: Plan; // Plan contratado

  @Prop({ required: true })
  profileName: string; // Nombre del perfil de venta

  @Prop({ default: null })
  profileDescription: string; // Descripción personalizada del perfil

  @Prop({
    type: String,
    enum: [
      'Desarrollador de apps',
      'Creador de contenido educativo',
      'Equipo de desarrollo',
      'AppSheet Expert',
    ],
    required: true,
  })
  sellerType: string; // Tipo de vendedor

  @Prop({ default: null })
  portfolioWebLink: string; // Enlace al portafolio web

  @Prop({
    type: [String],
    enum: ['Crypto', 'Paypal', 'Stripe'],
    required: true,
  })
  receivePayments: string[]; // Métodos de pago aceptados

  @Prop({ required: true })
  idImageFront: string; // Imagen frontal del documento de identidad

  @Prop({ required: true })
  idImageBack: string; // Imagen trasera del documento de identidad

  @Prop({ default: [] })
  courses: string[]; // IDs o referencias a cursos creados

  @Prop({ default: [] })
  applications: string[]; // IDs o referencias a aplicaciones creadas

  @Prop({ default: [] })
  projects: string[]; // IDs o referencias a proyectos vendidos

  @Prop({ default: 0 })
  totalSales: number; // Total de ventas realizadas

  @Prop({ default: 0 })
  totalRevenue: number; // Total de ingresos generados

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
