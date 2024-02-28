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
`;

export const Logo = styled.div`
  width: auto;
  height: auto;
  margin-right: 75px;
  max-width: 288px;
`;

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
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
`;
