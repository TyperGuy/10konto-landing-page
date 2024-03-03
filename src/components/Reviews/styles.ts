import styled from 'styled-components';
import {
  CONTAINER_DEFAULT_PROPS,
  CONTENT_MAX_WIDTH,
  PADDINGS,
} from '~/constants/sizes';

export const ReviewsContainer = styled.section`
  margin-top: 150px;
  ${PADDINGS}
  width: 100%;
  margin-bottom: 100px;

  ${CONTAINER_DEFAULT_PROPS}

  @media (max-width: 906px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`;

export const ReviewsContentContainer = styled.div`
  width: 100%;
  ${CONTENT_MAX_WIDTH}
`;

export const ReviewsTitle = styled.h1`
  color: #003c2f;
  font-family: 'Public Sans';
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 90px;
  letter-spacing: -1.44px;

  @media (max-width: 906px) {
    font-size: 48px;
    padding-right: 34px;
    padding-left: 34px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: -0.96px;
    margin-bottom: 32px;
  }
`;

export const ReviewsList = styled.ul`
  margin-top: 68px;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;

  @media (max-width: 906px) {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 0;
  }
`;

export const ReviewsItem = styled.div`
  display: flex;
  width: 462px;
  min-height: 558px;
  padding: 48px;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #e6f1ed;
  background: #fff;
  box-shadow: 0px 0px 9px -1px rgba(0, 0, 0, 0.07);
  margin-right: 44px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 906px) {
    width: 100%;
  }
`;

export const ReviewsItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

export const ReviewsItemHeaderPic = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 100%;
`;

export const ReviewsItemHeaderName = styled.h1`
  color: #0f2016;
  font-family: 'Public Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

export const ReviewsItemHeaderOcupation = styled.p`
  color: #57635c;
  font-family: 'Public Sans';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const ReviewsItemStartsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ReviewsItemStart = styled.div``;

export const ReviewsText = styled.p`
  color: #000;
  font-family: 'Public Sans';
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  min-height: 260px;
  max-width: 100%;
`;

export const ReviewsSourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  .source-content {
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .legend {
    color: #57635c;
    font-family: 'Public Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }
`;

export const ReviewsSourceIcon = styled.div`
 
`;

export const ReviewsSourceName = styled.h5`
  color: #1c65e8;
  font-family: 'Public Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const ReviewsScrollContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 68px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 62px;
  height: 10px;

  .line {
    width: 97%;
    flex-shrink: 0;
    height: 6px;
    background-color: #e6f1ed;

    border-radius: 10px;
    position: absolute;

    @media (min-width: 1650px) {
      width: 95%;
    }

    @media (max-width: 1259px) {
      width: 100%;
    }
  }
`;

interface RSTProps {
  scrollPosition: number;
}

export const ReviewsScrollTrack = styled.div<RSTProps>`
  height: 10px;
  background-color: #29ba66;
  border-radius: 10px;
  width: 200px;
  z-index: 3;
  position: absolute;

  left: ${({ scrollPosition }) => `${scrollPosition}%`};
`;

export const ReviewsScrollControllerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ReviewsScrollControllerButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
