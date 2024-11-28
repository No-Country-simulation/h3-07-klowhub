import { Column, Entity } from 'typeorm';

@Entity()
export class Moduls {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ length: 255 })
  modulName: string;

  @Column({ type: 'text', nullable: true })
  modulDescription: string;

  @Column({ type: 'text', nullable: true })
  lessonTitle: string;

  @Column({ type: 'text', nullable: true })
  lessonDescription: string;

  @Column({ type: 'text', nullable: true })
  lessonContent: string;

  @Column({ type: 'text', nullable: true })
  lessonVideo: string;

}
