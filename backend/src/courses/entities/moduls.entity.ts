import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Moduls {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  modulName: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  modulDescription: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  lessonTitle: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  lessonDescription: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  lessonContent: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  lessonVideo: string;

  @ManyToOne(() => Course, (course) => course.moduls)
  courses: Course;
}
