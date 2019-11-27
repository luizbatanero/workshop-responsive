import styled, { css } from 'styled-components';
import { below } from 'styles/media';

import Center from 'components/Center';

export const Container = styled(Center)`
  display: flex;
  justify-content: space-between;
  padding: 8rem 0 10rem;

  ${below('lg', css`
    padding: 5rem 0 7rem;
  `)}

  ${below(600, css`
    flex-direction: column;
  `)}
`;
