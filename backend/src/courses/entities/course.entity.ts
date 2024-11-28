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

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  courseName: string;

  @Column({ type: 'text', nullable: true })
  courseDescription: string;

  @Column()
  ownerId: string;


  @Column({ length: 255, nullable: true })
  ownerEmail: string;

  @Column({ default: true })
  isActivated: boolean;

  @Column({ default: false })
  pendingApproval: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
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

  @Column({ length: 100, nullable: true })
  platform: string;

  @Column({ length: 50, default: 'English' })
  language: string;

  @Column({ type: 'json', nullable: true })
  category: string;

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

  @ManyToOne(()=> Course, (course) => course.id)
  parentCourse: Course;
}
