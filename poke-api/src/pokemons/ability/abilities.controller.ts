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
import { AbilityService } from './ability.service';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { UpdateAbilityDto } from './dto/update-ability.dto';

@Controller('abilities')
export class AbilityController {
  private abilityService: AbilityService;

  constructor(abilityService: AbilityService) {
    this.abilityService = abilityService;
  }

  @Post()
  createOne(@Body() ability: CreateAbilityDto) {
    return this.abilityService.create(ability);
  }

  @Get()
  readAll() {
    return this.abilityService.read();
  }

  @Get(':id')
  readOne(@Param('id', ParseIntPipe) abilityId: number) {
    return this.abilityService.getOneById(abilityId);
  }

  @Put()
  updateOne(@Body() ability: UpdateAbilityDto) {
    return this.abilityService.update(ability);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) abilityId: number) {
    return this.abilityService.delete(abilityId);
  }
}
