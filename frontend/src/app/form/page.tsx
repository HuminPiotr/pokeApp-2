import Link from 'next/link'
import React from 'react'

import Form from '../components/Form'

export default function FormPage() {
  return (
    <div className='formPage'>
      <Link href="/" className='formPage__back'>&lt; &nbsp;Powrót</Link>
      <h2 className="formPage__header">Stwórz swojego pokemona</h2>
      <Form />
    </div>
  )
}
