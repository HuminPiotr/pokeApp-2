'use client'
import "./styles.scss";

import React, {useState, useEffect} from 'react'
import { usePokemon } from "@/app/context/PokemonContext";

import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import RadioField from "./components/RadioField";

import { AbilityType, GenderType } from "@/app/types/pokemon";

const Form = () => {
    const [name, setName] = useState('');
    const [abilities, setAbilities] = useState<AbilityType[]>([]);
    const [selectedAbility, setSelectedAbility] = useState<AbilityType>({id:0, name:""});
    const [gender, setGender] = useState<GenderType>('male');

    const {addPokemon} = usePokemon();


// Pobieranie opcji dla Umiejętności
  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/abilities`);
        if (!response.ok) {
          throw new Error(`Failed to fetch abilities: ${response.statusText}`);
        }
        const data = await response.json();
        setAbilities(data);
      } catch (error) {
        console.error('Error fetching abilities:', error);
      }
    };

    fetchAbilities();
  }, []);

  // Funkcja wysyłajaca dane z formularza do bazy danych
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(addPokemon)
    await addPokemon({name, ability: selectedAbility, gender})
  };


  return (
    <form className='form' onSubmit={handleSubmit}>
        <InputField 
            title="Imię"
            name="pokemon_name"
            value={name} 
            placeholder="Imię twojego pokemona"
            onChange={(e) => setName(e.target.value)}
            required 
        />
        <SelectField 
            label="Umiejętność"
            options={abilities}
            value={selectedAbility}
            onChange={(e) => setSelectedAbility({id: Number(e.target.id), name: e.target.value})}
            required
        />
        <RadioField
            name="gender"
            label="Płeć"
            selectedValue={gender}
            onChange={(e) => setGender(e.target.value as GenderType)}
        />

        <input type="submit" value="Zapisz" className='form__button' />
    </form >
  )
}

export default Form;