'use client';
import './styles.scss';

import React from 'react'
import TableItem from './TableItem';
import { usePokemon } from '@/app/context/PokemonContext';

const Table: React.FC = () => {
    const { pokemons, removePokemon } = usePokemon();
    console.log(pokemons);
    const tableItemList =  pokemons.map((pokemon) => 
    <TableItem 
        name={pokemon.name} 
        ability={pokemon.ability.name}
        id={pokemon.id} 
        key={pokemon.id} 
        removeFunction={removePokemon} 
    />);

  return (
    <>
    {pokemons.length > 0 ?
        <div className="table">
            <h2 className="table__header">Twoje pokemony</h2>
            <ul className="table__list">
                { tableItemList }
            </ul>
        </div> 
        :
        <div className='table__message'>
            <p>Nie masz pokemonów w swoim pokedexie.</p>
            <p>Stwórz nowego albo pobierz kilka.</p>
        </div>
    }
    </>
  )
}

export default Table