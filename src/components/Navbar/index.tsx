
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
import { link } from 'fs';

const menu = [
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
  const [targetItem, setItem] = useState<string>('');

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
        <Link href='/'>
          <Logo className='logo-desktop'>
            <img width={240} src='/logo.png' alt='marcheapp' />
          </Logo>
        </Link>

        <Link href='/'>
          <Logo className='logo-mobile'>
            <img src='/logo.png' alt='marcheapp' />
          </Logo>
        </Link>

        <MenuContainer>
          {menu.map((item) => (
            <Link key={item.title} href={item.link} passHref>
              <MenuItem
                onMouseEnter={() => setItem(item.title)}
                onMouseLeave={() => setItem('')}
              >
                {item.title}
                <div
                  className='underline'
                  style={{
                    width: item.title === targetItem ? '80%' : '0',
                    height: '3px',
                    backgroundColor: '#FF464A',
                    borderRadius: '4px',
                    transition: 'all ease-in-out .4s',
                  }}
                ></div>
              </MenuItem>
            </Link>
          ))}

          <ButtonLogin>Criar conta</ButtonLogin>
        </MenuContainer>

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
            <Link key={item.title} href={item.link} passHref>
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
