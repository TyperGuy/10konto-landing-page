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
import ContactImage from '~/assets/contact.svg';
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
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Como faço para ser parceiro ?',
      description:
        'Para ser parceiro do 10Konto basta entrar em contcto com a nossa equipe comercial <a href="#">clicando aqui.</a>',
    },
    {
      id: 2,
      title: 'Como faço para ser parceiro ?',
      description:
        'Para ser parceiro do 10Konto basta entrar em contcto com a nossa equipe comercial clicando aqui.',
    },
    {
      id: 3,
      title: 'Como faço para ser parceiro ?',
      description:
        'Para ser parceiro do 10Konto basta entrar em contcto com a nossa equipe comercial clicando aqui.',
    },
    {
      id: 4,
      title: 'Como faço para ser parceiro ?',
      description:
        'Para ser parceiro do 10Konto basta entrar em contcto com a nossa equipe comercial clicando aqui.',
    },
    {
      id: 5,
      title: 'Como faço para ser parceiro ?',
      description:
        'Para ser parceiro do 10Konto basta entrar em contcto com a nossa equipe comercial clicando aqui.',
    },
    {
      id: 6,
      title: 'Como faço para ser parceiro ?',
      description:
        'Para ser parceiro do 10Konto basta entrar em contcto com a nossa equipe comercial clicando aqui.',
    },
  ]);

  const avatars = [1, 2, 3, 4];
  const lastAvatar = avatars.length - 1;

  return (
    <QASectionContainer id='faqs'>
      <QASectionMainContentContainer>
        <QASectionTitle>Tem alguma dúvida ?</QASectionTitle>
        <QASectionContentContainer>
          <ChakraProvider>
            <Accordion
              width='100%'
              maxWidth='600px'
              defaultIndex={[0]}
              allowMultiple={false}
            >
              {data.map((item) => (
                <QAItem {...item} key={item.id} />
              ))}
            </Accordion>
          </ChakraProvider>
          <QASectionCard>
            <QASectionCardDemoImage>
              <img src='/contact.png' />
            </QASectionCardDemoImage>
            <div className='card-bottom-container'>
              <QASectionCardButton>Falar com um agente</QASectionCardButton>
              <QASectionContactsList>
                {avatars.map((item, index) => (
                  <QASectionContactsListItem key={item}>
                    <img src='/pic.png' className='pic' alt='' />
                    {lastAvatar === index && <div className='dot' />}
                  </QASectionContactsListItem>
                ))}
              </QASectionContactsList>
            </div>
          </QASectionCard>
        </QASectionContentContainer>
      </QASectionMainContentContainer>
    </QASectionContainer>
  );
};
