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
import { SliderControlButtons } from './utils';
import { useWindowSize } from '~/hooks/useMediaQuery';
import CustomSlider from '../Features/slider';

export const Reviews = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const reviewsList = useRef<HTMLUListElement | null>(null);
  const { width } = useWindowSize();

  const isMobile = width <= 906;

  const isWideScreen = width >= 1650;
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

  const scrollBarD = () => {
    if (width <= 1100) {
      return 71;
    }
    if (width <= 1228) {
      return 80;
    }
    if (width <= 1418) {
      return 80;
    }
    if (isWideScreen) {
      return 100;
    } else {
      return 82.5;
    }
  };

  useEffect(() => {
    if (reviewsList.current === null) return;

    const handleScroll = () => {
      if (reviewsList.current === null) return;

      const currentPosition = reviewsList.current.scrollLeft;
      const maxScroll =
        reviewsList.current.scrollWidth - reviewsList.current.clientWidth;

      const indicatorPosition = (currentPosition / maxScroll) * 82.5;
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

  const listItemsReview = data.map((item) => (
    <ReviewItem key={item.id} data={item} />
  ));

  return (
    <ReviewsContainer>
      <ReviewsContentContainer>
        <ReviewsTitle>Opiniões daqueles que usam</ReviewsTitle>

        <ReviewsList ref={reviewsList}>{listItemsReview}</ReviewsList>

        {isMobile && <CustomSlider slides={listItemsReview} />}
        {showScroll && !isMobile && (
          <ReviewsScrollContainer>
            <div className='line' />
            <ReviewsScrollTrack scrollPosition={scrollPosition} />
          </ReviewsScrollContainer>
        )}
        {showScroll && !isMobile && (
          <SliderControlButtons
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
      </ReviewsContentContainer>
    </ReviewsContainer>
  );
};
