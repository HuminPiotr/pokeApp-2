import './styles.scss';

import React, { ReactNode} from 'react'
import Link from 'next/link';

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({children, href}) => {
  return (
    <Link href={href} className="buttonLink">
      {children}
    </Link>
  )
}

export default ButtonLink;