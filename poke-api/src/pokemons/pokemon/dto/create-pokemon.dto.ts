import { OmitType } from '@nestjs/mapped-types';
import { UpdatePokemonDto } from './update-pokemon.dto';

export class CreatePokemonDto extends OmitType(UpdatePokemonDto, [
  'id',
] as const) {}
