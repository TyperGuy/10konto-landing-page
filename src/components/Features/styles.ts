import styled from 'styled-components';
import {
  CONTAINER_DEFAULT_PROPS,
  CONTENT_MAX_WIDTH,
  HORIZONTAL_PADDING,
  PADDINGS,
} from '~/constants/sizes';

export const FeaturesContainer = styled.section`
  width: 100%;
  min-height: 700px;
  background: linear-gradient(to bottom, #0f2016 50%, #fff 50%);
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
`;
export const FeaturesItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 22px;
  max-width: 390px;
`;
export const FeaturesItemIconContainer = styled.div``;

export const FeaturesItemTitle = styled.h1`
  color: #fff;
  font-family: 'Public Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
export const FeaturesItemDescription = styled.p`
  color: #fff;
  font-family: 'Public Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;

export const FeatureIlustrationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
  list-style: none;
  /* gap: 60px; */
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

  .card-header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 22px;
    padding: 85px 43px;
    padding-bottom: 0;
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
  font-size: 19px;
  font-style: normal;
  font-weight: 900;
  line-height: 32px;

  display: flex;
  width: 37px;
  height: 37px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 90px;
  background: var(--Green, #73eea6);
`;

export const FeatureIlustrationItemTitle = styled.h1`
  color: #000;
  font-family: 'Public Sans';
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  max-width: 300px;
`;
export const FeatureIlustrationItemDescription = styled.p`
  color: #5b5c5e;
  max-width: 278px;
  font-family: 'Public Sans';
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  min-height: 100px;
`;

export const FeatureIlustrationImage = styled.div`
  margin-top: 15px;
`;
