import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty({ message: 'Lesson title is required' })
  lessonTitle: string;

  @IsString()
  @IsNotEmpty({ message: 'Lesson description is required' })
  lessonDescription: string;

  @IsString()
  @IsNotEmpty({ message: 'Lesson content is required' })
  lessonContent: string;

  @IsString()
  @IsNotEmpty({ message: 'Lesson video is required' })
  lessonVideo: string;

  @IsString()
  @IsNotEmpty({ message: 'Lesson image is required' })
  lessonImage: string;

  @IsString()
  @IsNotEmpty({ message: 'Lesson pdf is required' })
  @IsOptional()
  lessonPdf: string;
}
