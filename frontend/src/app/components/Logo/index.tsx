import "./styles.scss";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/" className='logo'>
        <Image src="/logo.svg" alt="PokeApp logo" width={51} height={51} className='logo__image' />
        <h1 className="logo__text">PokeApp</h1>
    </Link>
  )
}

export default Logo