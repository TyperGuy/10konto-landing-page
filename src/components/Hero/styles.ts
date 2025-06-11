import styled from 'styled-components';
import { CONTENT_MAX_WIDTH, HORIZONTAL_PADDING } from '~/constants/sizes';

export const HeroContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(237 253 242);
  padding-top: 26px;
`;

export const HeroContentContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  width: 100%;
  padding-left: ${HORIZONTAL_PADDING}px;
  padding-right: ${HORIZONTAL_PADDING}px;
  ${CONTENT_MAX_WIDTH}

  @media (max-width: 1340px) {
    padding-left: 34px;
    padding-right: 34px;
    padding-top: 29px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 51px;
    padding-top: 41px;
  }
`;

export const HeroTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;

  @media (max-width: 1080px) {
    margin-right: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'Public Sans';
  font-size: 3.5em;
  font-weight: 600;
  line-height: 72px;
  color: #003c2f;
  max-width: 707px;

  mark {
    background-color: transparent;
    font-weight: 900;
    color: #003c2f;
  }

  @media (max-width: 1102px) {
    font-size: 60px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    width: 100%;
    font-size: 59px;
    font-weight: 900;
  }
`;

export const HeroText = styled.p`
  font-family: 'Public Sans';
  font-size: 1.25em;
  font-style: normal;
  line-height: 32px;
  max-width: 661px;

  @media (max-width: 767px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const HeroTextContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 27px;
  margin-top: 16px;
  @media (max-width: 605px) {
    flex-direction: column;
    width: 100%;
  }

  .mobile-mouse-icon {
    display: none;

    @media (max-width: 605px) {
      display: flex;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const HeroButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  width: 190px;
  height: 56px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  color: #fff;
  text-align: center;
  font-family: 'Public Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  cursor: pointer;
  background: #FF464A;

  @media (max-width: 605px) {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    height: 56px;
    padding: 10px 16px 10px 8px;
    justify-content: center;
    align-items: center;
  }
`;

export const SecondayHeroButton = styled(HeroButton)`
  background: #0f2016;
  padding: 10px 16px;
  justify-content: center;
`;

export const HeroImageContainer = styled.div`
  width: 100%;

  img {
    width: 550px;
    height: auto;
  }

  @media (max-width: 1179px) {
    img {
      width: 400px;
      margin-left: 30px;
    }
  }

  @media (max-width: 1080px) {
    img {
      display: none;
    }
  }
`;
