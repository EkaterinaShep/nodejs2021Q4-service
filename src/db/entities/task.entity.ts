import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export default class TaskEntity {
  @PrimaryColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;

  @Column()
  description!: string;

  @Column({ nullable: true, type: 'text' })
  userId!: string | null;

  @Column({ nullable: true, type: 'text' })
  boardId!: string | null;

  @Column({ nullable: true, type: 'text' })
  columnId!: string | null;
}
