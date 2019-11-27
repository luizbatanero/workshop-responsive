import styled, { css } from 'styled-components';
import { below, above } from 'styles/media';

import Center from 'components/Center';

export const Container = styled.header`
  position: relative;
  width: 100%;
  height: 10rem;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0 , 0, .16);
  z-index: 2;
`;

export const Wrapper = styled(Center)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  ${below('md', css`
    display: none;
  `)}

  ${({ open }) => open && below('md', css`
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
    flex-direction: column;
    justify-content: center;
  `)}
`;

export const Link = styled.a.attrs({
  href: '#'
})`
  position: relative;
  color: #777;
  transition: color .3s;

  & + a {
    margin-left: 2em;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  ${({ active, theme }) => active && css`
    color: ${theme.primary};
    font-weight: 700;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      bottom: -2px;
      background: ${theme.accent};
    }
  `}

  ${({ type, theme }) => type === 'button' && css`
    background: ${theme.accent};
    border: 2px solid ${theme.accent};
    padding: .3em 1em;
    border-radius: 4px;
    color: #fff;
    transition: background .3s, color .3s;

    &:hover {
      background: none;
      color: ${theme.accent};
    }
  `}

  ${below('md', css`
    font-size: 2.4rem;

    & + a {
      margin-left: 0;
      margin-top: 2rem;
    }
  `)}
`;

export const NavToggle = styled.button`
  width: 30px;
  height: 20px;
  background: none;
  border: 0;
  position: relative;
  outline: 0;

  span {
    display: block;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.primary};

    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      background: inherit;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }

  ${above('md', css`
    display: none;
  `)}

  ${({ open }) => open && below('md', css`
    position: fixed;
    right: 5%;
  `)}
`;
