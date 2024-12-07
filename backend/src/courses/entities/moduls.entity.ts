import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Entity,
  OneToMany,
} from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Moduls {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  modulName: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  modulDescription: string;

  @ManyToOne(() => Course, (course) => course.moduls)
  courses: Course;

  @OneToMany(() => Lesson, (lesson) => lesson.modul)
  Lesson: Lesson[];
}

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60, nullable: true })
  lessonTitle: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  lessonDescription: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  lessonContent: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  lessonVideo: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  lessonImage: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  lessonPdf: string;

  @ManyToOne(() => Moduls, (moduls) => moduls.Lesson, {
    eager: true,
    cascade: true,
  })
  modul: Moduls;
}
