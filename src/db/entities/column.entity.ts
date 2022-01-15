import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BoardEntity } from './board.entity';

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
}
