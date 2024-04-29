import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  max-width: 1354px;
  width: 1354px;
  height: 427px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 32px;
  background-image: url('/call-to-action-section.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 1444px) {
    width: 100%;
  }

  @media (max-width: 750px) {
    height: auto;
    padding: 30px;
  }
`;

export const BannerBackgroundIllustration = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const BannerTitle = styled.h1`
  color: var(--Gray-100, #0f2016);
  text-align: center;
  font-family: 'Public Sans';
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: -0.96px;
  max-width: 647px;
  z-index: 2;

  @media (max-width: 600px) {
    color: var(--Gray-100, #0f2016);
    text-align: center;
    font-family: 'Public Sans';
    font-size: 22px;
    font-style: normal;
    font-weight: 900;
    line-height: 27px;
    letter-spacing: -0.44px;
  }
`;

export const BannerDescription = styled.p`
  color: var(--Gray-100, #0f2016);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  z-index: 2;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const BannerGroupButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  gap: 32px;
  z-index: 2;
  padding: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 15px;
    padding: 0;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 600px) {
    .mobile {
      display: flex;
      max-width: 250px;
      display: flex;
      align-items: center;
     justify-content: center;
    }

    img {
      max-width: 250px;
      width: 70%;
    }
  }
`;

export const BannerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  text-decoration: none;
  height: 68px;
  width: 210px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: #222;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 600px) {
  }
`;
