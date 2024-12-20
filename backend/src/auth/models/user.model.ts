import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Seller } from './seller.model';

export type UserDocument = User & Document;

@Schema()
export class Notification {
  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  type: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: false })
  read: boolean;
}
const NotificationSchema = SchemaFactory.createForClass(Notification);

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  description: string;

  @Prop({
    type: String,
    enum: ['user', 'seller', 'admin', 'superAdmin'],
    default: 'user',
  })
  role: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: null })
  deletedAt: Date;

  @Prop({ default: false })
  isDeleted: boolean;

  @Prop({ default: false })
  isBlocked: boolean;

  @Prop({ default: false })
  isEmailVerified: boolean;

  @Prop({ default: false })
  isPhoneVerified: boolean;

  @Prop({ default: null })
  emailVerificationToken: string;

  @Prop({ required: false })
  recoveryCode: string;

  @Prop({ required: false })
  profileImage: string;

  // Relación con el esquema Seller
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seller', default: null })
  seller: mongoose.Types.ObjectId | null;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: Date.now })
  lastLogin: Date;

  @Prop({ type: [NotificationSchema], default: [] })
  notifications: Notification[];
}

export const UserSchema = SchemaFactory.createForClass(User);
