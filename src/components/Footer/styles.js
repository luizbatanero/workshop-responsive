import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.primary};
  padding: 9rem 0;
  text-align: center;

  svg path {
    fill: #000;
    opacity: .3;
  }
`;
