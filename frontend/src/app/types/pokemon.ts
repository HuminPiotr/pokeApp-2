export type GenderType = 'male' | 'female' | 'genderless';

export interface PokemonType {
    id: number;
    name: string;
    gender: GenderType;
    ability: AbilityType;
}

export interface AbilityType {
    id: number;
    name: string;
    pokemon?: PokemonType[];
}