import {
  ReviewsScrollControllerButton,
  ReviewsScrollControllerContainer,
} from './styles';
import RightIcon from '~/assets/Right.svg';
import LeftIcon from '~/assets/Left.svg';

export const SliderControlButtons = ({
  handlePrev,
  handleNext,
}: {
  handlePrev: () => void;
  handleNext: () => void;
}) => {
  return (
    <ReviewsScrollControllerContainer>
      <ReviewsScrollControllerButton onClick={handlePrev}>
        <LeftIcon />
      </ReviewsScrollControllerButton>
      <ReviewsScrollControllerButton onClick={handleNext}>
        <RightIcon />
      </ReviewsScrollControllerButton>
    </ReviewsScrollControllerContainer>
  );
};
