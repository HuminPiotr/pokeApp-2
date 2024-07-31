import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';

import { Ability } from '../ability/ability.entity';

@Entity()
export class Pokemon extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  gender: 'male' | 'female' | 'genderless';

  @ManyToOne(() => Ability, (ability: Ability) => ability.pokemon, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  ability: Ability;
}
