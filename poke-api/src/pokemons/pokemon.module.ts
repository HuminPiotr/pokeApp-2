import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon/pokemons.controller';
import { PokemonService } from './pokemon/pokemon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon/pokemon.entity';
import { Ability } from './ability/ability.entity';
import { AbilityController } from './ability/abilities.controller';
import { AbilityService } from './ability/ability.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Ability])],
  controllers: [PokemonController, AbilityController],
  providers: [PokemonService, AbilityService],
})
export class PokemonModule {}
