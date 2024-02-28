'use client';

import { useEffect, useRef, useState } from 'react';
import { Review, ReviewItem } from './review-item';
import {
  ReviewsContainer,
  ReviewsList,
  ReviewsScrollContainer,
  ReviewsScrollControllerButton,
  ReviewsScrollControllerContainer,
  ReviewsScrollTrack,
  ReviewsTitle,
  ReviewsContentContainer,
} from './styles';
import RightIcon from '~/assets/Right.svg';
import LeftIcon from '~/assets/Left.svg';
import AppStore from '~/assets/appstore.svg';

export const Reviews = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const reviewsList = useRef<HTMLUListElement | null>(null);
  const [data, setData] = useState<Review[]>([
    {
      id: 1,
      author: {
        name: 'Batista Tone',
        occupation: 'Ministro da Economia',
        pic: '/pic.png',
      },
      stars: 3,
      source: {
        icone: <AppStore />,
        name: 'App Store',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero ipsum alias sint quibusdam et tempore adipisci. Rerum, dicta earum quasi sit harum vero accusamus explicabo impedit praesentium voluptatibus soluta esse excepturi quidem reprehenderit fugit tempora itaque ratione quia magnam unde ab numquam quae aperiam? Dolorem rem incidunt atque vero!',
    },
    {
      id: 1,
      author: {
        name: 'Batista Tone',
        occupation: 'Ministro da Economia',
        pic: '/pic.png',
      },
      stars: 3,
      source: {
        icone: <AppStore />,
        name: 'App Store',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero ipsum alias sint quibusdam et tempore adipisci. Rerum, dicta earum quasi sit harum vero accusamus explicabo impedit praesentium voluptatibus soluta esse excepturi quidem reprehenderit fugit tempora itaque ratione quia magnam unde ab numquam quae aperiam? Dolorem rem incidunt atque vero!',
    },
    {
      id: 1,
      author: {
        name: 'Batista Tone',
        occupation: 'Ministro da Economia',
        pic: '/pic.png',
      },
      stars: 3,
      source: {
        icone: <AppStore />,
        name: 'App Store',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero ipsum alias sint quibusdam et tempore adipisci. Rerum, dicta earum quasi sit harum vero accusamus explicabo impedit praesentium voluptatibus soluta esse excepturi quidem reprehenderit fugit tempora itaque ratione quia magnam unde ab numquam quae aperiam? Dolorem rem incidunt atque vero!',
    },
    {
      id: 1,
      author: {
        name: 'Batista Tone',
        occupation: 'Ministro da Economia',
        pic: '/pic.png',
      },
      stars: 3,
      source: {
        icone: <AppStore />,
        name: 'App Store',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero ipsum alias sint quibusdam et tempore adipisci. Rerum, dicta earum quasi sit harum vero accusamus explicabo impedit praesentium voluptatibus soluta esse excepturi quidem reprehenderit fugit tempora itaque ratione quia magnam unde ab numquam quae aperiam? Dolorem rem incidunt atque vero!',
    },
    {
      id: 1,
      author: {
        name: 'Batista Tone',
        occupation: 'Ministro da Economia',
        pic: '/pic.png',
      },
      stars: 3,
      source: {
        icone: <AppStore />,
        name: 'App Store',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero ipsum alias sint quibusdam et tempore adipisci. Rerum, dicta earum quasi sit harum vero accusamus explicabo impedit praesentium voluptatibus soluta esse excepturi quidem reprehenderit fugit tempora itaque ratione quia magnam unde ab numquam quae aperiam? Dolorem rem incidunt atque vero!',
    },
    {
      id: 1,
      author: {
        name: 'Batista Tone',
        occupation: 'Ministro da Economia',
        pic: '/pic.png',
      },
      stars: 3,
      source: {
        icone: <AppStore />,
        name: 'App Store',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero ipsum alias sint quibusdam et tempore adipisci. Rerum, dicta earum quasi sit harum vero accusamus explicabo impedit praesentium voluptatibus soluta esse excepturi quidem reprehenderit fugit tempora itaque ratione quia magnam unde ab numquam quae aperiam? Dolorem rem incidunt atque vero!',
    },
    {
      id: 1,
      author: {
        name: 'Batista Tone',
        occupation: 'Ministro da Economia',
        pic: '/pic.png',
      },
      stars: 3,
      source: {
        icone: <AppStore />,
        name: 'App Store',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero ipsum alias sint quibusdam et tempore adipisci. Rerum, dicta earum quasi sit harum vero accusamus explicabo impedit praesentium voluptatibus soluta esse excepturi quidem reprehenderit fugit tempora itaque ratione quia magnam unde ab numquam quae aperiam? Dolorem rem incidunt atque vero!',
    },
    {
      id: 1,
      author: {
        name: 'Batista Tone',
        occupation: 'Ministro da Economia',
        pic: '/pic.png',
      },
      stars: 3,
      source: {
        icone: <AppStore />,
        name: 'App Store',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero ipsum alias sint quibusdam et tempore adipisci. Rerum, dicta earum quasi sit harum vero accusamus explicabo impedit praesentium voluptatibus soluta esse excepturi quidem reprehenderit fugit tempora itaque ratione quia magnam unde ab numquam quae aperiam? Dolorem rem incidunt atque vero!',
    },
    {
      id: 1,
      author: {
        name: 'Batista Tone',
        occupation: 'Ministro da Economia',
        pic: '/pic.png',
      },
      stars: 3,
      source: {
        icone: <AppStore />,
        name: 'App Store',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero ipsum alias sint quibusdam et tempore adipisci. Rerum, dicta earum quasi sit harum vero accusamus explicabo impedit praesentium voluptatibus soluta esse excepturi quidem reprehenderit fugit tempora itaque ratione quia magnam unde ab numquam quae aperiam? Dolorem rem incidunt atque vero!',
    },
    {
      id: 1,
      author: {
        name: 'Batista Tone',
        occupation: 'Ministro da Economia',
        pic: '/pic.png',
      },
      stars: 3,
      source: {
        icone: <AppStore />,
        name: 'App Store',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero ipsum alias sint quibusdam et tempore adipisci. Rerum, dicta earum quasi sit harum vero accusamus explicabo impedit praesentium voluptatibus soluta esse excepturi quidem reprehenderit fugit tempora itaque ratione quia magnam unde ab numquam quae aperiam? Dolorem rem incidunt atque vero!',
    },
  ]);

  useEffect(() => {
    if (reviewsList.current === null) return;

    const handleScroll = () => {
      if (reviewsList.current === null) return;

      const currentPosition = reviewsList.current.scrollLeft;
      const maxScroll =
        reviewsList.current.scrollWidth - reviewsList.current.clientWidth;
      const indicatorPosition = (currentPosition / maxScroll) * 85;
      console.log('indicatorPosition ===> ', indicatorPosition);
      setScrollPosition(indicatorPosition);
    };

    reviewsList.current.addEventListener('scroll', handleScroll);

    return () => {
      if (reviewsList.current === null) return;

      reviewsList.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePrev = () => {
    if (reviewsList.current === null) return;
    reviewsList.current.scrollBy({
      left: -reviewsList.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const handleNext = () => {
    if (reviewsList.current === null) return;
    reviewsList.current.scrollBy({
      left: reviewsList.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const showScroll = data.length > 3;

  return (
    <ReviewsContainer>
      <ReviewsContentContainer>
        <ReviewsTitle>Opiniões daqueles que usam</ReviewsTitle>
        <ReviewsList ref={reviewsList}>
          {data.map((item) => (
            <ReviewItem key={item.id} data={item} />
          ))}
        </ReviewsList>
        {showScroll && (
          <ReviewsScrollContainer>
            <div className='line' />
            <ReviewsScrollTrack scrollPosition={scrollPosition} />
          </ReviewsScrollContainer>
        )}
        {showScroll && (
          <ReviewsScrollControllerContainer>
            <ReviewsScrollControllerButton onClick={handlePrev}>
              <LeftIcon />
            </ReviewsScrollControllerButton>
            <ReviewsScrollControllerButton onClick={handleNext}>
              <RightIcon />
            </ReviewsScrollControllerButton>
          </ReviewsScrollControllerContainer>
        )}
      </ReviewsContentContainer>
    </ReviewsContainer>
  );
};
