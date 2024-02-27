import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  width: 1354px;
  height: 427px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
  border-radius: 32px;
  background: linear-gradient(
    255deg,
    #29ba66 -27.38%,
    #73eea6 30.45%,
    #e2fff0 100.92%
  );
  position: relative;
  overflow: hidden;
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
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: -0.96px;
  max-width: 647px;
  z-index: 2;
`;

export const BannerDescription = styled.p`
  color: var(--Gray-100, #0f2016);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  z-index: 2;
`;

export const BannerGroupButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  gap: 32px;
  z-index: 2;
`;

export const BannerButton = styled.a`
  outline: none;
  border: none;
  text-decoration: none;
`;
