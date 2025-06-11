'use client';

import {
  FooterAppDescription,
  FooterContainer,
  FooterContentContainer,
  FooterLogo,
  FooterMenu,
  FooterMenuItem,
  FooterRightsContainer,
  FooterRightsContainerText,
  FooterRightsNetworks,
  FooterRightsNetworksItem,
  AppMiniPresentation,
  FooterRightsContentContainer,
} from './styles';

import Facebook from '~/assets/facebook.svg';
import Twitter from '~/assets/twitter.svg';
import Instagram from '~/assets/linkdin.svg';

import Logo from '~/assets/logo2.svg';
import { BannerDownload } from '../BannerDownload';
import Link from 'next/link';

export const Footer = () => {
  const networks = [
    <Facebook key={0} />,
    <Twitter key={2} />,
    <Instagram key={3} />,
  ];

  const menu1 = [
    { title: 'Producto', status: '' },
    { title: 'Como funciona', status: '' },
    { title: 'Funcionalidades', status: 'New' },
  ];

  const menu2 = [
    { title: 'Empresa', status: '' },
    { title: 'Sobre nós', status: '' },
    { title: 'Carreiras', status: '' },
  ];

  const menu3 = [
    { title: 'Recursos', status: '' },
    { title: 'Blog', status: '' },
    { title: 'Newsletter', status: '' },
    { title: 'Eventos', status: '' },
  ];

  return (
    <>
      <FooterContainer id='download'>
        <BannerDownload />
        <FooterContentContainer>
          <AppMiniPresentation
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
          >
            <FooterLogo>
              <img src="/logo-white.svg" />
            </FooterLogo>
            <FooterAppDescription>
              O seu assistente para compras inteligentes, descubra os melhores
              preços em todos os lugares
            </FooterAppDescription>
          </AppMiniPresentation>

          <FooterMenu data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
            {menu1.map((item) => (
              <FooterMenuItem key={item.title}>
                <a href='#'>{item.title}</a>{' '}
                {item?.status && <span>{item?.status}</span>}
              </FooterMenuItem>
            ))}
            <Link href='termos_de_uso'>
              <FooterMenuItem key={'termos'}>
                {'Termos e políticas de uso'}
              </FooterMenuItem>
            </Link>
            <Link href='politicas_de_privacidade'>
              <FooterMenuItem key={'termos'}>
                {'Politicas de privacidade'}
              </FooterMenuItem>
            </Link>
          </FooterMenu>

          <FooterMenu data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
            {menu2.map((item) => (
              <FooterMenuItem key={item.title}>
                <a href='#'>{item.title}</a>{' '}
                {item?.status && <span>{item?.status}</span>}
              </FooterMenuItem>
            ))}
          </FooterMenu>

          <FooterMenu data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
            {menu3.map((item) => (
              <FooterMenuItem key={item.title}>
                <a href='#'>{item.title}</a>{' '}
                {item?.status && <span>{item?.status}</span>}
              </FooterMenuItem>
            ))}
          </FooterMenu>
        </FooterContentContainer>
      </FooterContainer>

      <FooterRightsContainer
        data-aos='fade-up'
        data-aos-anchor-placement='top-bottom'
      >
        <FooterRightsContentContainer>
          <FooterRightsContainerText>
            © 2024 <a href=''>Andromeda Labs</a> . Todos os direitos
            reservados.
          </FooterRightsContainerText>
          <FooterRightsNetworks>
            {networks.map((item, index) => (
              <FooterRightsNetworksItem key={index + 'icone'}>
                <a href='#'>{item}</a>
              </FooterRightsNetworksItem>
            ))}
          </FooterRightsNetworks>
        </FooterRightsContentContainer>
      </FooterRightsContainer>
    </>
  );
};
