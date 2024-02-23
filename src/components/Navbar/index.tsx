'use client';

import KontoLogo from '~/assets/logo.svg';
import Link from 'next/link';
import {
  NavbarContainer,
  Logo,
  MenuContainer,
  MenuItem,
  ButtonLogin,
} from './styles';
import { useState } from 'react';

const menu = [
  {
    title: 'Inicio',
    link: '/',
  },
  {
    title: 'Beneficios',
    link: '#beneficios',
  },
  {
    title: 'Funcionamento',
    link: '#funcionamento',
  },
  {
    title: 'Opiniões',
    link: '#opinioes',
  },
  {
    title: 'FAQs',
    link: '#faqs',
  },
];

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState(menu[0]);

  return (
    <NavbarContainer>
      <div className='navbar-content'>
        <Logo>
          <KontoLogo />
        </Logo>

        <MenuContainer>
          {menu.map((item) => (
            <Link key={item.title} href={item.link}>
              <MenuItem
                onClick={() => setActiveItem(item)}
                active={activeItem.title === item.title}
              >
                {item.title}
              </MenuItem>
            </Link>
          ))}
        </MenuContainer>
      </div>

      <ButtonLogin>Criar conta</ButtonLogin>
    </NavbarContainer>
  );
};
