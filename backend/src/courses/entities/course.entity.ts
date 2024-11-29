import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120 })
  courseName: string;

  @Column({ type: 'text', nullable: true })
  courseDescription: string;

  @Column({ type: 'varchar', length: 20 })
  ownerId: string;

  @Column({ type: 'varchar', length: 120 })
  ownerEmail: string;

  @Column({ default: true })
  isActivated: boolean;

  @Column({ default: false })
  pendingApproval: boolean;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date;

  @Column({ type: 'date', nullable: true })
  deletedAt: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  coursePrice: number;

  @Column({ type: 'enum', enum: ['course', 'lesson'], default: 'course' })
  courseType: string;

  @Column({
    type: 'enum',
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner',
  })
  courseLevel: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  platform: string;

  @Column({ type: 'varchar', length: 50, default: 'English' })
  language: string;

  @ManyToOne(() => Category)
  category: Category;

  @Column({ type: 'simple-array', nullable: true })
  contentTypes: string[];

  @Column({ type: 'simple-array', nullable: true })
  tools: string[];

  @Column({ type: 'simple-array', nullable: true })
  hashtags: string[];

  @Column({ type: 'json', nullable: true })
  functionalities: Record<string, any>;

  @Column({ type: 'boolean', default: false })
  isFree: boolean;

  @Column({ type: 'text', nullable: true })
  previewVideoUrl: string;

  @Column({ type: 'json', nullable: true })
  promotionalPackages: {
    includedCourses: number[];
    discountPercentage: number;
  }[];

  @Column({ type: 'text', nullable: true })
  whatYouWillLearn: string;

  @Column({ type: 'text', nullable: true })
  requirements: string;

  @Column({ type: 'text', nullable: true })
  deatailDescription: string;

  @Column({ type: 'text', nullable: true })
  coverImageUrl: string;

  @ManyToOne(() => Course, (course) => course.id)
  parentCourse: Course;
}