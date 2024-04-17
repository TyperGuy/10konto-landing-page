'use client';

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
            <mark>simples</mark>
          </HeroTitle>
          <HeroText>
            Uma plataforma onde podes encontrar as melhores ofertas nos mercados
          </HeroText>
          <HeroTextContainerButtons>
            <HeroButton>
              <PiMouseSimpleDuotone fontSize='1.4em' />
              <span> Saber mais</span>
            </HeroButton>
            <SecondayHeroButton>Baixar a APP</SecondayHeroButton>
          </HeroTextContainerButtons>
        </HeroTextContainer>
        <HeroImageContainer >
          <img src='/hero-image.png' alt='' data-aos='zoom-y-out' />
        </HeroImageContainer>
      </HeroContentContainer>
    </HeroContainer>
  );
};
