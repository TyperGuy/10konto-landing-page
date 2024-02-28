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

export const Footer = () => {
  const networks = [<Facebook />, <Twitter />, <Instagram />];

  const menu1 = [
    { title: 'Producto' },
    { title: 'Como funciona' },
    { title: 'Funcionalidades', status: 'New' },
    { title: 'Ajudas' },
  ];

  const menu2 = [
    { title: 'Empresa' },
    { title: 'Sobre nós' },
    { title: 'Carreiras' },
  ];

  const menu3 = [
    { title: 'Recursos' },
    { title: 'Blog' },
    { title: 'Newsletter' },
    { title: 'Eventos' },
  ];

  return (
    <>
      <FooterContainer>
        <BannerDownload />
        <FooterContentContainer>
          <AppMiniPresentation>
            <FooterLogo>
              <Logo />
            </FooterLogo>
            <FooterAppDescription>
              O seu assistente para compras inteligentes, descubra os melhores
              preços em todos os lugares
            </FooterAppDescription>
          </AppMiniPresentation>

          <FooterMenu>
            {menu1.map((item) => (
              <FooterMenuItem key={item.title}>
                <a href='#'>{item.title}</a>{' '}
                {item?.status && <span>{item?.status}</span>}
              </FooterMenuItem>
            ))}
          </FooterMenu>

          <FooterMenu>
            {menu2.map((item) => (
              <FooterMenuItem key={item.title}>
                <a href='#'>{item.title}</a>{' '}
                {item?.status && <span>{item?.status}</span>}
              </FooterMenuItem>
            ))}
          </FooterMenu>

          <FooterMenu>
            {menu3.map((item) => (
              <FooterMenuItem key={item.title}>
                <a href='#'>{item.title}</a>{' '}
                {item?.status && <span>{item?.status}</span>}
              </FooterMenuItem>
            ))}
          </FooterMenu>
        </FooterContentContainer>
      </FooterContainer>

      <FooterRightsContainer>
        <FooterRightsContentContainer>
          <FooterRightsContainerText>
            © 2024 <a href=''>Andromeda Labs</a> . Todos os direitos
            reservados.
          </FooterRightsContainerText>
          <FooterRightsNetworks>
            {networks.map((item, index) => (
              <FooterRightsNetworksItem key={index}>
                <a href='#'>{item}</a>
              </FooterRightsNetworksItem>
            ))}
          </FooterRightsNetworks>
        </FooterRightsContentContainer>
      </FooterRightsContainer>
    </>
  );
};
