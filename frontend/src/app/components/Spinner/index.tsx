'use client';
import './styles.scss';

import React from 'react'

import { usePokemon } from '@/app/context/PokemonContext';

const Spinner = () => {
const {isLoading} = usePokemon();

  return isLoading && (
    <div className='spinner'>
        <div></div>
        <div></div>
    </div>
  )
}

export default Spinner