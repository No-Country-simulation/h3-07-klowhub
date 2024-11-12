import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

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
    enum: ['user', 'seller', 'admin'],
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
}

export const UserSchema = SchemaFactory.createForClass(User);
