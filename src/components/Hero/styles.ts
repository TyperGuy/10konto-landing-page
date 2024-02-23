import styled from 'styled-components';
import { HORIZONTAL_PADDING } from '~/constants/sizes';

export const HeroContainer = styled.section`
  width: 100%;
  height: auto;
  padding-top: 87px;
  padding-bottom: 147px;
  padding-left: ${HORIZONTAL_PADDING}px;
  padding-right: ${HORIZONTAL_PADDING}px;
  background-color: #FCFFFD;
`;

export const HeroContentContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

export const HeroTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 24px;
  font-family: 'Public Sans';
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 90px;
  letter-spacing: -1.44px;
  color: #003c2f;
  min-width: 707px;

  mark {
    background-color: transparent;
    font-weight: 700;
    color: #29ba66;
  }
`;

export const HeroText = styled.p`
  margin-bottom: 74px;
  color: var(--Gray-300, #57635c);
  font-family: 'Public Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  min-width: 661px;
`;

export const HeroTextContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 27px;
`;

export const HeroButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  width: 190px;
  height: 56px;
  padding: 10px 16px 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
  color: #fff;
  text-align: center;
  font-family: 'Public Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  cursor: pointer;
  background: #29ba66;
`;

export const SecondayHeroButton = styled(HeroButton)`
  background: #0f2016;
  padding: 10px 16px;
  justify-content: center;
`;

export const HeroImageContainer = styled.div`
  width: 100%;

  img {
    /* width: 650px;
    height: 650px; */
    /* object-fit: scale-down; */
  }
`;
