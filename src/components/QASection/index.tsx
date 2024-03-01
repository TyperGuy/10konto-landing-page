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

export const QASection = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Como faço para ser parceiro ?',
      description:
        'Para ser parceiro do 10Konto basta entrar em contcto com a nossa equipe comercial <a href="#">clicando aqui.</a>',
    },
    {
      id: 1,
      title: 'Como faço para ser parceiro ?',
      description:
        'Para ser parceiro do 10Konto basta entrar em contcto com a nossa equipe comercial clicando aqui.',
    },
    {
      id: 1,
      title: 'Como faço para ser parceiro ?',
      description:
        'Para ser parceiro do 10Konto basta entrar em contcto com a nossa equipe comercial clicando aqui.',
    },
    {
      id: 1,
      title: 'Como faço para ser parceiro ?',
      description:
        'Para ser parceiro do 10Konto basta entrar em contcto com a nossa equipe comercial clicando aqui.',
    },
  ]);

  const avatars = [1, 2, 3, 4];
  const lastAvatar = avatars.length - 1;

  return (
    <QASectionContainer>
      <QASectionMainContentContainer>
        <QASectionTitle>Tem alguma dúvida ?</QASectionTitle>
        <QASectionContentContainer>
          <QASectionList>
            {data.map((item) => (
              <QAItem {...item} key={item.id} />
            ))}
          </QASectionList>
          <QASectionCard>
            <QASectionCardDemoImage>
              <img src='/contact.png' />
            </QASectionCardDemoImage>
            <div className='card-bottom-container'>
              <QASectionCardButton>Falar com um agente</QASectionCardButton>
              <QASectionContactsList>
                {avatars.map((item, index) => (
                  <QASectionContactsListItem>
                    <img src='/pic.svg' className='pic' alt='' />
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
