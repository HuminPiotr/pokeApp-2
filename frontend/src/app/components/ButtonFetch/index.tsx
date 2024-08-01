'use client';

import "./styles.scss";

import React from 'react'
import { usePokemon } from "@/app/context/PokemonContext";

const ButtonFetch = () => {
    const { fetchPokemons } = usePokemon();

  return (
    <button onClick={fetchPokemons} className="buttonFetch">
        Pobierz pokemony
    </button>
  )
}

export default ButtonFetch;