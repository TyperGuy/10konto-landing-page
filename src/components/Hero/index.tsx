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

import MouseIcon from '~/assets/Up.svg';
import MouseIcon2 from '~/assets/float-icon.svg';

import AppDemoImage from '~/assets/app.svg'


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
            Encontrar ótimas ofertas nos supermercados em Angola agora é mais
            fácil do que nunca! Uma plataforma onde podes encontrar as melhores
            ofertas nos mercados
          </HeroText>
          <HeroTextContainerButtons>
            <HeroButton>
              <MouseIcon /> Saber mais
            </HeroButton>
            <SecondayHeroButton>Baixar a APP</SecondayHeroButton>
            <div className='mobile-mouse-icon'>
              <MouseIcon2 />
            </div>
          </HeroTextContainerButtons>
        </HeroTextContainer>
        <HeroImageContainer>
          <img src='/app.png' alt='' />
        </HeroImageContainer>
      </HeroContentContainer>
    </HeroContainer>
  );
};
