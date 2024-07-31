import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemons')
export class PokemonController {
  private pokemonService: PokemonService;

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
  }

  @Post()
  createOne(@Body() pokemon: CreatePokemonDto) {
    return this.pokemonService.create(pokemon);
  }

  @Get()
  readAll() {
    return this.pokemonService.read();
  }

  @Get(':id')
  readOne(@Param('id', ParseIntPipe) pokemonId: number) {
    return this.pokemonService.getOneById(pokemonId);
  }

  @Put()
  updateOne(@Body() pokemon: UpdatePokemonDto) {
    return this.pokemonService.update(pokemon);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) pokemonId: number) {
    return this.pokemonService.delete(pokemonId);
  }
}
