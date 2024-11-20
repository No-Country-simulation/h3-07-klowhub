import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PlanDocument = Plan & Document;

@Schema({ timestamps: true })
class CourseFeatures {
  @Prop({ required: true })
  canUpload: boolean;

  @Prop({ required: true })
  canSell: boolean;

  @Prop()
  limitContentHours?: boolean;

  @Prop()
  videoFormatsOptimized?: boolean;

  @Prop()
  includeSubtitles?: boolean;
}

const CourseFeaturesSchema = SchemaFactory.createForClass(CourseFeatures);

@Schema({ timestamps: true })
class Features {
  @Prop({ type: CourseFeaturesSchema, required: true })
  courses: CourseFeatures;

  @Prop({ type: Object, required: true }) // Puedes detallar más según lo necesites
  applications: Record<string, any>;

  @Prop({ type: Object, required: true })
  projects: Record<string, any>;

  @Prop({ type: Object, required: true })
  profile: Record<string, any>;

  @Prop({ required: true })
  consulting: boolean;

  @Prop({ required: true })
  technicalArticles: boolean;

  @Prop({ required: true })
  prioritySupport: boolean;
}

const FeaturesSchema = SchemaFactory.createForClass(Features);

@Schema({ timestamps: true })
export class Plan {
  @Prop({ required: true })
  name: string;

  @Prop({ type: FeaturesSchema, required: true })
  features: Features;

  @Prop()
  description: string;

  @Prop({ required: true, min: 0 })
  maxCourses: number;

  @Prop({ required: true, min: 0 })
  price: number;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
