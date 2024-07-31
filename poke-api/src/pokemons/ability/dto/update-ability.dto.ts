import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateAbilityDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
