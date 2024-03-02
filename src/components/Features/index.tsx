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
  FeatureIlustrationListMobile,
  SliderControlContainer,
  SliderControlDots,
  SliderControlDot,
} from './styles';

import React from 'react';

import AppHome from '~/assets/home.svg';
import AppSearch from '~/assets/search.svg';
import AppProduct from '~/assets/product.svg';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '~/hooks/useMediaQuery';
import { SliderControlButtons } from '../Reviews/utils';
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
    image: <AppHome />,
    title: 'Procure pelo producto que precisa',
    description: 'De forma simples e intuitiva encontre o producto que precisa',
  },
  {
    number: 2,
    image: <AppSearch />,
    title: 'Escolha entre as variadas possibilidades',
    description: 'Identifique o melhor custo beneficio para o seu bolso',
  },

  {
    number: 3,
    image: <AppProduct />,
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
    <FeatureIlustrationItem key={item.number}>
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
      <FeatureIlustrationImage className={'image-' + item.number}>
        {item.image}
      </FeatureIlustrationImage>
    </FeatureIlustrationItem>
  ));

  return (
    <FeaturesContainer>
      <FeaturesContentContainer>
        <FeaturesList>
          {data.map((item) => (
            <FeaturesItem key={item.title}>
              <FeaturesItemIconContainer>{item.icon}</FeaturesItemIconContainer>
              <div>
                <FeaturesItemTitle>{item.title}</FeaturesItemTitle>
                <FeaturesItemDescription>
                  {item.description}
                </FeaturesItemDescription>
              </div>
            </FeaturesItem>
          ))}
        </FeaturesList>

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
