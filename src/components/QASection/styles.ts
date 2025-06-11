import styled from 'styled-components';
import {
  CONTAINER_DEFAULT_PROPS,
  CONTENT_MAX_WIDTH,
  HORIZONTAL_PADDING,
  PADDINGS,
} from '~/constants/sizes';

export const QASectionContainer = styled.section`
  width: 100%;
  ${PADDINGS};
  margin-bottom: 50px;

  ${CONTAINER_DEFAULT_PROPS}

  @media (max-width: 1150px) {
    padding-left: 34px;
    padding-right: 34px;
  }

  @media (max-width: 950px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const QASectionMainContentContainer = styled.section`
  width: 100%;
  ${CONTENT_MAX_WIDTH}
  display: flex;
  flex-direction: column;
`;

export const QASectionContentContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const QASectionTitle = styled.h2`
  color: #003c2f;
  font-family: 'Public Sans';
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 90px;
  margin-bottom: 70px;

  @media (max-width: 950px) {
    padding-left: 34px;
    padding-right: 34px;
    font-size: 48px;
    margin-bottom: 32px;
  }
`;

export const QASectionList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media (max-width: 950px) {
    padding-left: 34px;
    padding-right: 34px;
  }
`;

export const QASectionItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 22px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--Gray-700, #e7e9e8);
  max-width: 638px;

  @media (max-width: 1506px) {
    max-width: 550px;
  }

  @media (max-width: 1287px) {
    max-width: 400px;
  }

  @media (max-width: 1150px) {
    width: 350px;
  }

  @media (max-width: 950px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const QASectionItemButton = styled.div`
  cursor: pointer;
`;

export const QASectionItemTitle = styled.h2`
  color: var(--Gray-100, #0f2016);
  font-family: 'Public Sans';
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.44px;

  @media (max-width: 1150px) {
    font-size: 20px;
  }
`;

export const QASectionItemDescription = styled.p`
  color: var(--Gray-300, #57635c);
  font-family: 'Public Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.4px;
  transition: 0.5s;

  @media (max-width: 1150px) {
    font-size: 22px;
  }

  a {
    color: var(--Blue-dark, #1c65e8);
    font-family: 'Public Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: -0.4px;
    text-decoration-line: underline;
  }
`;

export const QASectionCard = styled.div`
  width: 550px;
  height: auto;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 1394px) {
    width: 500px;
  }

  @media (max-width: 950px) {
    margin-top: 96px;
    width: 100%;
    border-radius: 0px;
  }
  

  .card-bottom-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: 155px;
    padding: 32px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 0px 0px 24px 24px;
    border-right: 2px solid var(--Gray-700, #e7e9e8);
    border-bottom: 2px solid var(--Gray-700, #e7e9e8);
    border-left: 2px solid var(--Gray-700, #e7e9e8);
   
    @media (max-width: 950px) {
      border-radius: 0px;
      border: none;
    }

    @media (max-width: 496px) {
      flex-direction: column-reverse;
      gap: 32px;
      margin-top: 32px;
    }
  }
`;

export const QASectionCardDemoImage = styled.div`
  border-radius: 24px 24px 0px 0px;
  border-top: 1px solid var(--Green-light, #e6f1ed);
  border-right: 1px solid var(--Green-light, #e6f1ed);
  border-left: 1px solid var(--Green-light, #e6f1ed);
  width: 100%;

  img  {
    width: 100%;
  }

  @media (max-width: 1394px) {
    width: 100%;

    img {
      width: 100%;
    }
  }

  @media (max-width: 950px) {
    border-radius: 0px;
    width: 100%;
    border: none;
  }
`;

export const QASectionCardButton = styled.button`
  display: flex;
  width: 245px;
  height: 55px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 80px;
  background: var(--Gray-100, #0f2016);
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Public Sans';
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 109.091% */
  letter-spacing: -0.44px;

  @media (max-width: 950px) {
  }
`;

export const QASectionContactsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  list-style: none;
`;

export const QASectionContactsListItem = styled.li`
  border-radius: 56px;
  border: 3px solid var(--Background-Light, #f1f2f6);
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  margin-left: -20px;
  position: relative;

  .pic {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .dot {
    width: 9px;
    height: 9px;
    background-color: #FF464A;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 5px;
  }
`;
