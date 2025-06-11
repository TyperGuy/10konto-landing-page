'use client';

import Link from 'next/link';
import {
  HeroContainer,
  HeroContentContainer,
  HeroImageContainer,
  HeroText,
  HeroTextContainer,
  HeroTextContainerButtons,
  HeroTitle,
  HeroButton,
  SecondayHeroButton,
} from './styles';
import { PiMouseSimpleDuotone } from 'react-icons/pi';

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContentContainer>
        <HeroTextContainer>
          <HeroTitle>
            Encontrar produtos baratos em <mark>Angola</mark> nunca foi tão{' '}
            <mark>simples</mark> com MarcheApp.
          </HeroTitle>
          <HeroText>
            Uma plataforma onde podes encontrar as melhores ofertas nos mercados
          </HeroText>
          <HeroTextContainerButtons>
            <Link href={'#download'} passHref>
              {' '}
              <HeroButton>Baixar a APP</HeroButton>
            </Link>
            <Link href={'#funcionamento'} passHref>
              <SecondayHeroButton>
                <PiMouseSimpleDuotone fontSize='1.4em' />
                <span> Saber mais</span>
              </SecondayHeroButton>
            </Link>
          </HeroTextContainerButtons>
        </HeroTextContainer>
        <HeroImageContainer>
          <img src='/hero-section.svg' alt='' data-aos='zoom-y-out' />
        </HeroImageContainer>
      </HeroContentContainer>
    </HeroContainer>
  );
};
