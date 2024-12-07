/* import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @ManyToMany(() => Course, (course) => course.tags)
  courses: Course[];
} */
