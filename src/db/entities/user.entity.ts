import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class UserEntity {
  @PrimaryColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  login!: string;

  @Column()
  password!: string;

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks!: TaskEntity[];
}
