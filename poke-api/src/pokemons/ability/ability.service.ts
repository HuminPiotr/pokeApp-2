import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  Controller,
  forwardRef,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import { Ability } from './ability.entity';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { UpdateAbilityDto } from './dto/update-ability.dto';
import { PokemonService } from '../pokemon/pokemon.service';

@Controller('abilities')
export class AbilityService {
  constructor(
    @InjectRepository(Ability)
    private abilityRepository: Repository<Ability>,
    @Inject(forwardRef(() => PokemonService))
    private readonly pokemonService: PokemonService,
  ) {}

  async create(ability: CreateAbilityDto): Promise<Ability> {
    const newAbility = this.abilityRepository.create(ability);
    return this.abilityRepository.save(newAbility);
  }

  read(): Promise<Ability[]> {
    return this.abilityRepository.find({ relations: ['pokemon'] });
  }

  async getOneById(abilityId: number): Promise<Ability> {
    const ability = await this.abilityRepository.findOne({
      where: { id: abilityId },
      relations: ['pokemon'],
    });

    if (!ability) {
      throw new NotFoundException('Ability not found');
    }
    return ability;
  }

  async getOneByName(abilityName: string): Promise<Ability> | null {
    const ability = await this.abilityRepository.findOne({
      where: { name: abilityName },
      relations: ['pokemon'],
    });

    if (!ability) {
      return null;
    }
    return ability;
  }

  async update(ability: UpdateAbilityDto) {
    await this.getOneById(ability.id);
    return this.abilityRepository.update(ability.id, ability);
  }

  async delete(abilityId: number): Promise<Ability> {
    const abilityToRemove = await this.getOneById(abilityId);
    return this.abilityRepository.remove(abilityToRemove);
  }
}
