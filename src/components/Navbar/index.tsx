'use client';

import KontoLogo from '~/assets/logo.svg';
import KontoLogoMobile from '~/assets/logo-mobile.svg';

import Link from 'next/link';
import {
  NavbarContainer,
  Logo,
  MenuContainer,
  MenuItem,
  ButtonLogin,
  NavbarContentContainer,
  ButtonMenuMobile,
  MenuMobileContainer,
  MenuMobile,
  MenuMobileItem,
  MenuMobileTitle,
} from './styles';
import { useEffect, useState } from 'react';
import { BannerDownload } from '../BannerDownload';

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    const layoutContent = document.getElementById('layout-body');

    if (mobileOpen) {
      (layoutContent as any).style.overflow = mobileOpen ? 'hidden' : 'auto';
      document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
    } else {
      (layoutContent as any).style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }
  }, [mobileOpen]);

  return (
    <NavbarContainer>
      <NavbarContentContainer>
        <div className='navbar-content'>
          <Logo className='logo-desktop'>
            <KontoLogo />
          </Logo>

          <Logo className='logo-mobile'>
            <KontoLogoMobile />
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

        <ButtonMenuMobile
          isOpen={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </ButtonMenuMobile>
      </NavbarContentContainer>
      <MenuMobileContainer menuOpen={mobileOpen}>
        <MenuMobileTitle>Menu</MenuMobileTitle>

        <MenuMobile>
          {menu.map((item) => (
            <Link key={item.title} href={item.link}>
              <MenuItem
                onClick={() => {
                  closeMenu();
                  setActiveItem(item);
                }}
                active={activeItem.title === item.title}
              >
                {item.title}
              </MenuItem>
            </Link>
          ))}
        </MenuMobile>

        <BannerDownload />
      </MenuMobileContainer>
    </NavbarContainer>
  );
};
