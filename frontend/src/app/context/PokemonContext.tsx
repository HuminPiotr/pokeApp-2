'use client';
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

import { GenderType, PokemonType } from "../types/pokemon";
import { AbilityType } from "../types/pokemon";

interface PokemonContextProps {
    pokemons: PokemonType[],
    fetchPokemons: () => Promise<void>;
    addPokemon?: (pokemon: CreateNewPokemonArguments) => Promise<void>;
    removePokemon: (id: number) => Promise<void>;
}

interface CreateNewPokemonArguments {
    name: string;
    ability: AbilityType;
    gender: GenderType;
}

const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const PokemonProvider: React.FC<{children: ReactNode }> = ({ children}) => {
    const [pokemons, setPokemons] = useState<PokemonType[]>([]);
    const router = useRouter();

    const fetchPokemons = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemons`, {
            method: 'GET'
        });
        const data = await response.json();
        setPokemons(data);
    }

    const addPokemon = async ({name, ability, gender}: CreateNewPokemonArguments) => {
        try {
            const newPokemon = {
              name,
              ability,
              gender,
            };
      
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemons`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newPokemon),
            });
      
            if (!response.ok) {
              throw new Error(`Failed to create new pokemon: ${response.statusText}`);
            }
          
            // Przekierowanie po pomyślnym dodaniu
            router.push('/');
      
          } catch (error) {
            console.error('Error adding new pokemon:', error);
          }
    }

    const removePokemon = async (id: number) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemons/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        setPokemons((prevPokemons) => prevPokemons.filter((pokemon) => pokemon.id !== id));
    }

    return (
        <PokemonContext.Provider value={{ pokemons, fetchPokemons, addPokemon, removePokemon}}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemon = (): PokemonContextProps => {
    const context = useContext(PokemonContext);
    if(context === undefined) {
        throw new Error('usePokemon must be used with a PokemonProvider');
    }
    return context;

}