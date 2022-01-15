import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BoardEntity } from './board.entity';
import { ColumnEntity } from './column.entity';
import UserEntity from './user.entity';

@Entity()
export default class TaskEntity extends BaseEntity {
  @PrimaryColumn('uuid')
  id!: string;

  @Column('text')
  title!: string;

  @Column('int')
  order!: number;

  @Column('text')
  description!: string;

  @Column('uuid', { nullable: true })
  userId!: string | null;

  @ManyToOne(() => UserEntity, (user) => user.tasks, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user!: UserEntity;

  @Column('uuid')
  boardId!: string;

  @ManyToOne(() => BoardEntity, (board) => board.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'boardId', referencedColumnName: 'id' })
  board!: BoardEntity;

  @Column('uuid', { nullable: true })
  columnId!: string | null;

  @ManyToOne(() => ColumnEntity, (column) => column.tasks, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'columnId', referencedColumnName: 'id' })
  column!: ColumnEntity;
}
