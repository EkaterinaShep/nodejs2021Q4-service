import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { BoardEntity } from './board.entity';
import TaskEntity from './task.entity';

@Entity()
export class ColumnEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: string;

  @ManyToOne(() => BoardEntity, (board) => board.id, {
    onDelete: 'CASCADE',
  })
  board!: BoardEntity;

  @OneToMany(() => TaskEntity, (task) => task.column)
  tasks!: TaskEntity[];
}
