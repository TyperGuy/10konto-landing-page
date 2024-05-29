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
            A maior plataforma de <mark>comparação de preços</mark> em{' '}
            <mark>Angola</mark>{' '}
          </HeroTitle>
          <HeroText>
            Uma plataforma onde podemos encontrar as melhores ofertas em mais de
            10 super mercados
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
          <img src='/hero-image.png' alt='' data-aos='zoom-y-out' />
        </HeroImageContainer>
      </HeroContentContainer>
    </HeroContainer>
  );
};
