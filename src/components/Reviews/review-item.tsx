import {
  ReviewsContainer,
  ReviewsItem,
  ReviewsItemHeader,
  ReviewsItemHeaderName,
  ReviewsItemHeaderOcupation,
  ReviewsItemHeaderPic,
  ReviewsItemStart,
  ReviewsItemStartsList,
  ReviewsList,
  ReviewsScrollContainer,
  ReviewsScrollControllerButton,
  ReviewsScrollControllerContainer,
  ReviewsScrollTrack,
  ReviewsSourceIcon,
  ReviewsSourceName,
  ReviewsText,
  ReviewsTitle,
  ReviewsSourceContainer,
} from './styles';

import Start from '~/assets/Star 1.svg';
import AppStore from '~/assets/appstore.svg';

interface Author {
  pic: string;
  name: string;
  occupation: string;
}

export interface Review {
  id: number;
  author: Author;
  text: string;
  source: {
    name: string;
    icone: any;
  };
  stars: number;
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
      <ReviewsItemHeader>
        <ReviewsItemHeaderPic src='/pic.png' />
        <div>
          <ReviewsItemHeaderName>{data.author.name}</ReviewsItemHeaderName>
          <ReviewsItemHeaderOcupation>
            {data.author.occupation}
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
      <ReviewsText>
        {`
         “ ${data.text} “
        `}
      </ReviewsText>
      <ReviewsSourceContainer>
        <ReviewsSourceIcon>{data.source.icone}</ReviewsSourceIcon>
        <div className='source-content'>
          <p className='legend'>Avaliado via</p>
          <ReviewsSourceName>{data.source.name}</ReviewsSourceName>
        </div>
      </ReviewsSourceContainer>
    </ReviewsItem>
  );
};
