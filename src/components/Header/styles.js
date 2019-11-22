import styled, { css } from 'styled-components';

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
`;
