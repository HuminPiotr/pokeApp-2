'use client';
import { usePokemon } from "./context/PokemonContext";

import ButtonLink from "./components/ButtonLink";
import ButtonFetch from "./components/ButtonFetch";
import Table from "./components/Table";

export default function Home() {
  const { pokemons } = usePokemon();

  return (
    <main className="main">
      <div className="main__buttons">
        <ButtonLink href="/form">Stwórz pokemona</ButtonLink>
        <ButtonFetch />
      </div>
      <Table pokemonList={pokemons}/>
      
    </main>
  );
}
