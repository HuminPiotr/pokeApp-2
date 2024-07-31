import { IsNumber, IsString } from 'class-validator';
import { Ability } from 'src/pokemons/ability/ability.entity';

export class UpdatePokemonDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  gender: 'male' | 'female' | 'genderless';

  @IsString()
  ability: Ability;
}
