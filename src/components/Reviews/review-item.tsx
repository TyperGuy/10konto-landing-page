import {
  ReviewsItem,
  ReviewsItemHeader,
  ReviewsItemHeaderName,
  ReviewsItemHeaderOcupation,
  ReviewsItemHeaderPic,
  ReviewsItemStart,
  ReviewsItemStartsList,
  ReviewsSourceIcon,
  ReviewsSourceName,
  ReviewsText,
  ReviewsTitle,
  ReviewsSourceContainer,
} from './styles';

import Start from '~/assets/Star 1.svg';
import AppStore from '~/assets/appstore.svg';
import GooglePlay from './../../assets/google-play.svg';
import { useEffect } from 'react';

const icones = {
  'app-store': <AppStore />,
  'google-play': <GooglePlay />,
};

interface Author {
  pic: string;
  name: string;
  occupation: string;
}

export interface Review {
  id: number;
  name: string;
  profile_picture: string;
  comment: string;
  stars: number;
  platform: string;
  occupation: string;
}

interface ReviewItemProps {
  data: Review;
}

export const ReviewItem = ({ data }: ReviewItemProps) => {
  const starts = [];
  const numberOfStart = data.stars;
  for (let x = 0; x < numberOfStart; x++) {
    starts.push(x);
  }

  return (
    <ReviewsItem>
      <div className='top'>
        <ReviewsItemHeader>
          <ReviewsItemHeaderPic src='/pic.png' />
          <div>
            <ReviewsItemHeaderName>{data.name}</ReviewsItemHeaderName>
            <ReviewsItemHeaderOcupation>
              {data.occupation}
            </ReviewsItemHeaderOcupation>
          </div>
        </ReviewsItemHeader>
        <ReviewsItemStartsList>
          {starts.map((item) => (
            <ReviewsItemStart key={item}>
              <Start />
            </ReviewsItemStart>
          ))}
        </ReviewsItemStartsList>
        <ReviewsText>{data.comment}</ReviewsText>
      </div>
      <ReviewsSourceContainer>
        <div className='source-content'>
          <p className='legend'>Avaliado via</p>
          <ReviewsSourceName>{data.platform}</ReviewsSourceName>
        </div>
      </ReviewsSourceContainer>
    </ReviewsItem>
  );
};
