import { OmitType } from '@nestjs/mapped-types';
import { UpdateAbilityDto } from './update-ability.dto';

export class CreateAbilityDto extends OmitType(UpdateAbilityDto, [
  'id',
] as const) {}
