'use client';

import { useState } from 'react';
import {
  QASectionCard,
  QASectionCardButton,
  QASectionCardDemoImage,
  QASectionContactsList,
  QASectionContactsListItem,
  QASectionContainer,
  QASectionItem,
  QASectionItemButton,
  QASectionItemDescription,
  QASectionItemTitle,
  QASectionList,
  QASectionTitle,
  QASectionContentContainer,
  QASectionMainContentContainer,
} from './styles';
import { QAItem } from './qa-item';
import faqs from './faqs.json';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ChakraProvider,
} from '@chakra-ui/react';

export const QASection = () => {
  return (
    <QASectionContainer id='faqs'>
      <QASectionMainContentContainer>
        <QASectionTitle
          data-aos='fade-up'
          data-aos-anchor-placement='top-bottom'
        >
          Tem alguma dúvida ?
        </QASectionTitle>
        <QASectionContentContainer>
          <ChakraProvider>
            <Accordion
              width='100%'
              maxWidth='500px'
              defaultIndex={[0]}
              allowMultiple={false}
              allowToggle
            >
              {faqs.map((item) => (
                <QAItem {...item} key={item.id} />
              ))}
            </Accordion>
          </ChakraProvider>
          <QASectionCard>
            <QASectionCardDemoImage
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
            >
              <img src='/contact.png' />
            </QASectionCardDemoImage>
            <div
              className='card-bottom-container'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
            >
              <QASectionCardButton>Falar com um agente</QASectionCardButton>
              <img
                src='/speakers.png'
                style={{
                  width: '200px',
                }}
              />
            </div>
          </QASectionCard>
        </QASectionContentContainer>
      </QASectionMainContentContainer>
    </QASectionContainer>
  );
};
