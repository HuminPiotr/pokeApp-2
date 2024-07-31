import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './pokemon.entity';
import { AbilityService } from '../ability/ability.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
    @Inject(forwardRef(() => AbilityService))
    private readonly abilityService: AbilityService,
  ) {}

  async create(pokemon: CreatePokemonDto): Promise<Pokemon> {
    // Sprawdzenie, czy Ability o podanej nazwie już istnieje
    let ability = await this.abilityService.getOneByName(pokemon.ability.name);
    if (!ability) {
      ability = await this.abilityService.create({
        ...ability,
        name: pokemon.ability.name,
      });
    }
    // Tworzenie nowego Pokemona
    const newPokemon = this.pokemonRepository.create({
      ...pokemon,
      ability: ability,
    });
    return this.pokemonRepository.save(newPokemon);
  }

  read(): Promise<Pokemon[]> {
    return Pokemon.find({ relations: ['ability'] });
  }

  async getOneById(id: number): Promise<Pokemon> {
    const pokemon = await Pokemon.findOne({
      where: { id },
      relations: ['ability'],
    });
    if (!pokemon) {
      throw new NotFoundException('Pokemon not found');
    }
    return pokemon;
  }

  async update(pokemon: UpdatePokemonDto): Promise<Pokemon> {
    const pokemonToUpdate = await this.getOneById(pokemon.id);
    Object.assign(pokemonToUpdate, pokemon);
    return pokemonToUpdate.save();
  }

  async delete(pokemonId: number): Promise<Pokemon> {
    const pokemonToRemove = await this.getOneById(pokemonId);
    return pokemonToRemove.remove();
  }
}
