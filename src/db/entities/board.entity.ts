import { Entity, Column, PrimaryColumn, OneToMany, BaseEntity } from 'typeorm';
import { ColumnEntity } from './column.entity';
import TaskEntity from './task.entity';

@Entity()
export class BoardEntity extends BaseEntity {
  @PrimaryColumn('uuid')
  id?: string;

  @Column()
  title?: string;

  @OneToMany(() => ColumnEntity, (column) => column.board, {
    cascade: true,
  })
  columns?: ColumnEntity[];

  @OneToMany(() => TaskEntity, (task) => task.board)
  tasks?: TaskEntity[];
}
