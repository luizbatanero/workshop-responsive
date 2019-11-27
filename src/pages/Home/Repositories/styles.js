import styled, { css } from 'styled-components';
import { below } from 'styles/media';

import Center from 'components/Center';

export const Container = styled.div`
  background: #eee;
  text-align: center;
  padding: 6rem 0;
`;

export const Wrapper = styled(Center)`
  display: flex;
  flex-wrap: wrap;

  > a {
    width: 280px;
    margin: 0 1rem 2rem;
  }
`;
