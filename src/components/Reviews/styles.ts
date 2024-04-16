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
  font-size: 48px;
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
  width: 410px;
  padding: 42px;
  flex-direction: column;
  justify-content: space-between;
  gap: 26px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #E5E9EF;
  background: #fff;
  box-shadow: 0px 0px 9px -1px rgba(0, 0, 0, 0.07);
  margin-right: 44px;

  @media (max-width: 906px) {
    width: 100%;
  }
  .top{
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
`;

export const ReviewsItemHeader = styled.div`
  display: flex;
  align-items:center;
  gap: 16px;
`;

export const ReviewsItemHeaderPic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const ReviewsItemHeaderName = styled.h1`
  color: #0f2016;
  font-family: 'Public Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;

export const ReviewsItemHeaderOcupation = styled.span`
  color: #57635c;
  font-family: 'Public Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const ReviewsItemStartsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2px;
`;

export const ReviewsItemStart = styled.div``;

export const ReviewsText = styled.p`
  color: #000;
  font-family: 'Public Sans';
  font-size: 1.1em;
  font-style: normal;
  font-weight: 300;
  line-height: 30px;
  max-width: 100%;
`;

export const ReviewsSourceContainer = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-end;
  gap: 10px;
  
  
  .source-content {
    width: 100%;
    padding: 16px 0;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid #DEDEDE;
    
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

export const ReviewsScrollControllerButton = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  border: 1px solid #E5E9EF;
  outline: none;
  border: none;
  cursor: pointer;
  
`;
