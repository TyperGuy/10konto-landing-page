import styled from 'styled-components';
import {
  CONTAINER_DEFAULT_PROPS,
  CONTENT_MAX_WIDTH,
  PADDINGS,
} from '~/constants/sizes';

export const FooterContainer = styled.section`
  width: 100%;
  min-height: auto;
  padding-left: 187px;
  padding-right: 187px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 160px;
  background: linear-gradient(
    to bottom,
    #fff 50%,
    #0f2016 50%,
    #0f2016 50%,
    #0f2016 50%
  );

  @media (max-width: 1180px) {
    width: 100%;
    ${PADDINGS}
  }

  @media (max-width: 950px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 750px) {
    background: linear-gradient(
      to bottom,
      #fff 40%,
      #0f2016 10%,
      #0f2016 80%,
      #0f2016 80%
    );
  }

  @media (max-width: 600px) {
    background: linear-gradient(
      to bottom,
      #fff 20%,
      #0f2016 20%,
      #0f2016 80%,
      #0f2016 80%
    );
  }
`;

export const FooterMainContainer = styled.section`
  width: 100%;
  min-height: auto;
  background: linear-gradient(to bottom, #fff 50%, #0f2016 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 160px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const FooterContentContainer = styled.div`
  width: 100%;
  padding-bottom: 132px;
  display: flex;
  flex-direction: row;
  margin-top: 82px;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 1650px) {
    max-width: 1200px;
  }

  @media (max-width: 1180px) {
    width: 100%;
  }

  @media (max-width: 950px) {
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 69px;
  }
`;

export const AppMiniPresentation = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;

  @media (max-width: 950px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 750px) {
    font-size: 16px;
  }
`;

export const FooterLogo = styled.div`
  img {
    width: 200px;
  }
`;

export const FooterAppDescription = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 32px;

  @media (max-width: 950px) {
    max-width: 350px;
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 16px;
`;

export const FooterMenuItem = styled.li`
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    border-radius: 16px;
    background: var(--Success-50, #ecfdf3);
    display: flex;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    color: var(--Success-700, #027a48);
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }
`;

export const FooterRightsContainer = styled.div`
  background: #334139;
  width: 100%;
  ${CONTAINER_DEFAULT_PROPS}
`;

export const FooterRightsContentContainer = styled.div`
  background: #334139;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  align-self: stretch;
  padding: 48px 0px;
  ${PADDINGS}

  ${CONTENT_MAX_WIDTH}

  @media (max-width: 950px) {
    padding-left: 70px;
    padding-right: 70px;
  }

  @media (max-width: 700px) {
    padding: 47px 59px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterRightsContainerText = styled.p`
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 700px) {
    max-width: 250px;
  }

  a {
    color: var(--white, #fff);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-decoration-line: underline;
  }
`;

export const FooterRightsNetworks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  gap: 24px;
`;

export const FooterRightsNetworksItem = styled.li``;
