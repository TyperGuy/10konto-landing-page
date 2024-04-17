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
  height: 80px;
  display: flex;
  background-color: rgb(237 253 242);
  align-items: center;
  padding-left: ${HORIZONTAL_PADDING}px;
  padding-right: ${HORIZONTAL_PADDING}px;
  justify-content: space-between;

  .navbar-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${CONTENT_MAX_WIDTH}

  @media (max-width: 1340px) {
    padding-left: 34px;
    padding-right: 34px;
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
  gap: 32px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

interface IMenuItem {
  active?: boolean;
}

export const MenuItem = styled.li<IMenuItem>`
  color: #000;
  text-align: center;
  font-family: 'Inter';
  font-size: 1.1em;
  font-style: normal;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  line-height: 30px;
  transition:.5s;
  &:hover {
    
    /* font-weight: 700; */
    color: #29ba66;
    
  
  }
`;

export const ButtonLogin = styled.button`
  cursor: pointer;
  display: flex;
  width: 145px;
  height: 48px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 54px;
  background: transparent;
  outline: none;
  border: 1.5px solid #0f2016;
  color: #0f2016;
  text-align: center;
  font-family: 'Public Sans';
  font-size:1.1em;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  transition:all ease-in-out .4s;

  @media (max-width: 1080px) {
    display: none;
  }
  &:hover {
   background-color:#0f2016;
   color: #fff;
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
  overflow-y: auto;
  padding-bottom: 20px;
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
