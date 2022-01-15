import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}
