import { styled } from 'styled-components';
import {
  CONTAINER_DEFAULT_PROPS,
  CONTENT_MAX_WIDTH,
  DESKTOP_MAX_WIDTH,
  HORIZONTAL_PADDING,
} from '~/constants/sizes';

export const NavbarContainer = styled.section`
  ${CONTAINER_DEFAULT_PROPS}
`;

export const NavbarContentContainer = styled.section`
  width: 100%;
  height: auto;
  background-color: #fcfffd;
  display: flex;
  flex-direction: row;
  padding-left: ${HORIZONTAL_PADDING}px;
  padding-right: ${HORIZONTAL_PADDING}px;
  padding-top: 80px;
  justify-content: space-between;

  .navbar-content {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ${CONTENT_MAX_WIDTH}

  @media (max-width: 1340px) {
    padding-left: 41px;
    padding-right: 41px;
    padding-top: 29px;
  }

  .logo-desktop {
    display: flex;
    @media (max-width: 1190px) {
      display: none;
    }
  }

  .logo-mobile {
    display: none;
    @media (max-width: 1190px) {
      display: flex;
    }
  }
`;

export const Logo = styled.div`
  width: auto;
  height: auto;
  margin-right: 75px;
  max-width: 288px;

  @media (max-width: 1190px) {
    width: 240px;
    margin-right: 30px;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;

  @media (max-width: 1080px) {
    display: none;
  }
`;

interface IMenuItem {
  active?: boolean;
}

export const MenuItem = styled.li<IMenuItem>`
  margin-right: 32px;
  color: #000;
  text-align: center;
  font-family: 'Inter';
  font-size: 20px;
  font-style: normal;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  line-height: 30px;
`;

export const ButtonLogin = styled.button`
  display: flex;
  width: 145px;
  height: 56px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 54px;
  background: #29ba66;
  outline: none;
  border: none;
  color: #fff;
  text-align: center;
  font-family: 'Public Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

interface HMButtonProps {
  isOpen: boolean;
}

export const ButtonMenuMobile = styled.button<HMButtonProps>`
  position: ${({ isOpen }) => (isOpen ? 'fixed' : 'absolute')};
  z-index: 12;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  right: 41px;
  height: 45px;

  @media (min-width: 960px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 22px;
    background: #2b3f6c;
    margin: 2px 0;
    transition: 0.4s;
    border-radius: 5px;
  }

  span:nth-child(2) {
    width: 15px;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 6px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -5px);
    }
  `}

  @media (max-width: 1080px) {
    display: flex;
  }
`;

interface MMProps {
  menuOpen: boolean 
}

export const MenuMobileContainer = styled.div<MMProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  padding-left: 41px;
  padding-top: 39px;
  left: ${({ menuOpen })=> menuOpen ? "0" : "-100%"} ;
  transition: all.5s;
  z-index:8;
  padding-right: 41px;
`;

export const MenuMobile = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 67px;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 60px;
`;

export const MenuMobileItem = styled(MenuItem)``;

export const MenuMobileTitle = styled.h1`
  color: var(--Gray-100, #0f2016);
  font-family: 'Public Sans';
  font-size: 27px;
  font-style: normal;
  font-weight: 900;
  line-height: 32px;
`;
