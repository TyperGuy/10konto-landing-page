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
`;

export const QASectionMainContentContainer = styled.section`
  ${CONTENT_MAX_WIDTH}
  display: flex;
  flex-direction: column;
`;

export const QASectionContentContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const QASectionTitle = styled.h1`
  color: #003c2f;
  font-family: 'Public Sans';
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 90px;
  margin-bottom: 70px;
`;

export const QASectionList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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
`;

export const QASectionItemButton = styled.div`
  cursor: pointer;
`;

export const QASectionItemTitle = styled.h1`
  color: var(--Gray-100, #0f2016);
  font-family: 'Public Sans';
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.44px;
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
  width: 610px;
  height: auto;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 24px;
  overflow: hidden;

  .card-bottom-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: 155px;
    padding: 10px 10px 10px 32px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 0px 0px 24px 24px;
    border-right: 2px solid var(--Gray-700, #e7e9e8);
    border-bottom: 2px solid var(--Gray-700, #e7e9e8);
    border-left: 2px solid var(--Gray-700, #e7e9e8);
  }
`;

export const QASectionCardDemoImage = styled.div`
  border-radius: 24px 24px 0px 0px;
  border-top: 1px solid var(--Green-light, #e6f1ed);
  border-right: 1px solid var(--Green-light, #e6f1ed);
  border-left: 1px solid var(--Green-light, #e6f1ed);
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
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 109.091% */
  letter-spacing: -0.44px;
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
    background-color: #29ba66;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 5px;
  }
`;
