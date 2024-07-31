import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Pokemon } from '../pokemon/pokemon.entity';

@Entity()
export class Ability extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @OneToMany(() => Pokemon, (pokemon: Pokemon) => pokemon.ability)
  pokemon: Pokemon[];
}
