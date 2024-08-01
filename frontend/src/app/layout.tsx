import './styles/app.scss';

import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import { PokemonProvider } from './context/PokemonContext';

import Logo from './components/Logo';

const poppins = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'],     
})

export const metadata: Metadata = {
  title: "PokeApp",
  description: "Złapie wszystkie!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PokemonProvider>
    <html lang="pl">
      <body className={poppins.className}>
        <Logo />
        {children}
      </body>
    </html>
    </PokemonProvider>
  );
}
