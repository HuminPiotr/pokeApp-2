'use client'
import "./styles.scss";

import React, {useState, useEffect} from 'react'
import { useRouter } from "next/navigation";

import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import RadioField from "./components/RadioField";

import { AbilityType } from "@/app/types/pokemon";

const Form = () => {
    const [name, setName] = useState('');
    const [abilities, setAbilities] = useState<AbilityType[]>([]);
    const [selectedAbility, setSelectedAbility] = useState<AbilityType>({id:0, name:""});
    const [gender, setGender] = useState<string>('male');

    const router = useRouter();

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
    try {
      const newPokemon = {
        name,
        ability: selectedAbility,
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
    
      router.push('/');

      
    } catch (error) {
      console.error('Error adding new pokemon:', error);
    }
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
            onChange={(e) => setGender(e.target.value)}
        />

        <input type="submit" value="Zapisz" className='form__button' />
    </form >
  )
}

export default Form;