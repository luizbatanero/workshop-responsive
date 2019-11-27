import styled, { css } from 'styled-components';
import { below, above } from 'styles/media';

import Center from 'components/Center';

export const Container = styled.div`
  background: #eee;
  text-align: center;
  padding: 6rem 0;
`;

export const Wrapper = styled(Center)`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  ${above(700, css`
    > a:first-child {
      grid-column: span 2;
    }
  `)}
`;
