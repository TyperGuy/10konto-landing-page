'use client';
import Cart1Icon from '~/assets/Cart.svg';
import OrcamentoIcon from '~/assets/orcamento.svg';
import Cart2Icon from '~/assets/cesta.svg';
import {
  FeaturesContainer,
  FeatureIlustrationImage,
  FeatureIlustrationItem,
  FeatureIlustrationItemDescription,
  FeatureIlustrationItemNumber,
  FeatureIlustrationItemTitle,
  FeatureIlustrationList,
  FeaturesItem,
  FeaturesItemDescription,
  FeaturesItemIconContainer,
  FeaturesItemTitle,
  FeaturesList,
  FeaturesContentContainer,
  FeaturesTitle,
  FeaturesText,
  FeaturesTextContainer,
} from './styles';

import React from 'react';

import { useWindowSize } from '~/hooks/useMediaQuery';
import CustomSlider from './slider';

const data = [
  {
    icon: <Cart1Icon />,
    title: 'Controle  de orçamento',
    description:
      'Com a funcionalidade de lista de compras você pode controlar o valor da sua cesta básica',
  },
  {
    icon: <OrcamentoIcon />,
    title: 'O melhor custo',
    description:
      'Achamos para ti o melhor preço do mercado casando informações como preço e distância ',
  },

  {
    icon: <Cart2Icon />,
    title: 'Fique atento',
    description:
      'Nós garantimos que não perca nenhuma promoção ligada ao produto que tu tanto amas',
  },
];

const dataScreens = [
  {
    number: 1,
    image: '/home.png',
    title: 'Procure pelo producto que precisa',
    description: 'De forma simples e intuitiva encontre o producto que precisa',
  },
  {
    number: 2,
    image: '/search.png',
    title: 'Escolha entre as variadas possibilidades',
    description: 'Identifique o melhor custo beneficio para o seu bolso',
  },

  {
    number: 3,
    image: '/product.png',
    title: 'Analise as especificações do produto',
    description:
      'Descubra tudo sobre o produto, e tome a melhor decisão para o seu bolso',
  },
];

export const Features = () => {
  const { width: screenWidth } = useWindowSize();
  const isMobile = screenWidth <= 830;

  let dotItems = [];
  const numberOfStart = dataScreens.length;
  for (let x = 0; x < numberOfStart; x++) {
    dotItems.push(x);
  }

  const cardsItem = dataScreens.map((item) => (
    <FeatureIlustrationItem
      key={item.number}
      data-aos='zoom-in'
      data-aos-anchor-placement='top-bottom'
      data-aos-easing='ease-in-out'
      data-aos-delay={300 * item.number}
      data-aos-duration={500}
    >
      <div className='card-header'>
        <FeatureIlustrationItemNumber>
          {item.number}
        </FeatureIlustrationItemNumber>
        <div>
          <FeatureIlustrationItemTitle>
            {item.title}
          </FeatureIlustrationItemTitle>
          <FeatureIlustrationItemDescription>
            {item.description}
          </FeatureIlustrationItemDescription>
        </div>
      </div>
      <FeatureIlustrationImage className={`image-il image-${item.number}`}>
        <img src={item.image} alt='' />
      </FeatureIlustrationImage>
    </FeatureIlustrationItem>
  ));

  return (
    <FeaturesContainer id='funcionamento'>
      <FeaturesContentContainer>
        <FeaturesTextContainer>
          <FeaturesTitle
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
          >
            Como funciona o 10konto
          </FeaturesTitle>
          <FeaturesText
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
          >
            De forma muito simples e prática. Basta acessar o aplicativo e
            começar a comprar de forma economica.
          </FeaturesText>
        </FeaturesTextContainer>

        {!isMobile && (
          <FeatureIlustrationList>{cardsItem}</FeatureIlustrationList>
        )}
        {isMobile && (
          <>
            <CustomSlider slides={cardsItem} />
          </>
        )}
      </FeaturesContentContainer>
    </FeaturesContainer>
  );
};
