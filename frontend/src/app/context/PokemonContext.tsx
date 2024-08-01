'use client';
import React, { createContext, useContext, useState, ReactNode } from "react";
import { PokemonType } from "../types/pokemon";

interface PokemonContextProps {
    pokemons: PokemonType[],
    fetchPokemons: () => Promise<void>;
    addPokemon?: (pokemon: PokemonType) => Promise<void>;
    removePokemon: (id: number) => Promise<void>;
}

const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const PokemonProvider: React.FC<{children: ReactNode }> = ({ children}) => {
    const [pokemons, setPokemons] = useState<PokemonType[]>([]);

    const fetchPokemons = async () => {
        const response = await fetch('http://localhost:3030/pokemons', {
            method: 'GET'
        });
        const data = await response.json();
        setPokemons(data);
    }

    const addPokemon = (pokemon: PokemonType) => {
        console.log('add');
    }

    const removePokemon = async (id: number) => {
        const response = await fetch(`http://localhost:3030/pokemons/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        setPokemons((prevPokemons) => prevPokemons.filter((pokemon) => pokemon.id !== id));
    }

    return (
        <PokemonContext.Provider value={{ pokemons, fetchPokemons, removePokemon}}>
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