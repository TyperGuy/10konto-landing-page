import styled from 'styled-components';
import {
  CONTAINER_DEFAULT_PROPS,
  CONTENT_MAX_WIDTH,
  HORIZONTAL_PADDING,
  PADDINGS,
} from '~/constants/sizes';

export const FeaturesContainer = styled.section`
  width: 100%;
  background: linear-gradient(to bottom, #0f2016 70%, #0f2016 70%, #fff 50%);
  ${CONTAINER_DEFAULT_PROPS}
  padding-top: 100px;
`;

export const FeaturesContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  ${CONTENT_MAX_WIDTH}
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 110px;

  @media (max-width: 1210px) {
    padding-left: 41px;
    padding-right: 41px;
  }

  @media (max-width: 941px) {
    flex-wrap: wrap;
    gap: 64px;
  }

  @media (max-width: 927px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FeaturesItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 22px;
  max-width: 390px;

  @media (max-width: 927px) {
    max-width: 100%;
    width: 100%;
  }
`;
export const FeaturesItemIconContainer = styled.div``;

export const FeaturesItemTitle = styled.h1`
  color: #fff;
  font-family: 'Public Sans';
  font-size: 1.3em;
  font-style: normal;
  font-weight: 900;
  line-height: 32px;
`;
export const FeaturesItemDescription = styled.p`
  color: #fff;
  font-family: 'Public Sans';
  font-size: 1.1em;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;

export const FeatureIlustrationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
  list-style: none;

  @media (max-width: 1432px) {
    padding-left: 34px;
    padding-right: 34px;
  }

  @media (max-width: 1226px) {
    grid-template-columns: 47% 47%;
    gap: 48px;
  }
`;

export const FeatureIlustrationItem = styled.li`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  border-radius: 17px;
  background: #fbfbfb;
  box-shadow: 0px 4px 31px -1px rgba(0, 0, 0, 0.16);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1226px) {
    width: 100%;
    height: 680px;
  }

  @media (max-width: 820px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
    min-height: 640px;
  }

  .card-header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 22px;
    padding: 85px 43px;
    padding-bottom: 0;

    @media (max-width: 600px) {
      flex-direction: column;
      padding: 31px 37px;
    }
  }

  .image-3 {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .image-2 {
  }

  .image-1 {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const FeatureIlustrationItemNumber = styled.p`
  color: rgba(0, 0, 0, 0.4);
  font-family: 'Public Sans';
  font-size: 1em;
  font-style: normal;
  font-weight: 900;
  line-height: 32px;
  display: flex;
  width: 30px;
  height: 30px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 90px;
  background: #73eea6;
`;

export const FeatureIlustrationItemTitle = styled.h1`
  color: #000;
  font-family: 'Public Sans';
  font-size: 1.3em;
  font-style: normal;
  line-height: 32px;
  max-width: 300px;

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;
export const FeatureIlustrationItemDescription = styled.p`
  color: #5b5c5e;
  max-width: 278px;
  font-family: 'Public Sans';
  font-size: 1.1em;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  min-height: 100px;

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const FeatureIlustrationImage = styled.div`
  margin-top: 15px;
`;

export const FeatureIlustrationListMobile = styled.div`
  width: 100%;
  max-width: 100%;
  padding-right: 34px;
  padding-left: 34px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 820px) {
  }
`;

export const SliderControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  width: 100%;
  flex-wrap: wrap;

 
`;

export const SliderControlDots = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

interface SliderControlDotProps {
  active: boolean;
}

export const SliderControlDot = styled.div<SliderControlDotProps>`
  width: ${({ active }) => (active ? '24px' : '10px')};
  height: 10px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#0F2016' : '#D9D9D9')};
  transition: 0.5s;
`;
