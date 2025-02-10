import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'applications' })
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 20 })
  studentId: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ length: 100 })
  major: string;

  @Column({ length: 10 })
  grade: string;

  @Column({ length: 20 })
  status: string;

  @Column({ type: 'text' })
  part: string;

  @Column({ type: 'text' })
  question1: string;

  @Column({ type: 'text' })
  question2: string;

  @Column({ type: 'text' })
  question3: string;

  @Column({ type: 'text' })
  question4: string;

  @Column({ nullable: true })
  portfolio: string;

  @CreateDateColumn()
  createdAt: Date;
}
