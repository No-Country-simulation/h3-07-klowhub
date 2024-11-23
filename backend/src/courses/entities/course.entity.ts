import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseName: string;

  /* @Column()
  ownerId: string;

  @Column()
  isActivated: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date; */

  /*   constructor(id: number, courseName: string, ownerId: string, isActivated: boolean, createdAt: Date, updatedAt: Date, deletedAt: Date) {
    this.id = id
    this.courseName = courseName
    this.ownerId = ownerId
    this.isActivated = isActivated
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.deletedAt = deletedAt
  } */
}
