import styled, { css } from 'styled-components';
import { below } from 'styles/media';

import Center from 'components/Center';

export const Container = styled.div`
  background: ${({ theme }) => theme.primary};
`;

export const Wrapper = styled(Center)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14rem 0;

  ${below('lg', css `
    padding: 8rem 0;
  `)}

  ${below(710, css`
    flex-direction: column;
    padding: 6rem 0;
  `)}
`;

export const BannerText = styled.div`
  margin-right: 5rem;
  color: #fff;

  h1 {
    font-weight: 700;
    font-size: calc(1.5rem + 2vw);
    line-height: 1.1;
  }

  p {
    font-size: 1.7rem;
    max-width: 30em;
    margin-top: 1rem;
    opacity: .8;
  }

  ${below('lg', css`
    h1 {
      /* font-size: 4rem; */
    }
  `)}

  ${below(790, css`
    h1 {
      /* font-size: 3.6rem; */
    }
  `)}
`;

export const BannerImage = styled.img`
  height: 300px;
  flex-shrink: 0;

  ${below('lg', css`
    height: 200px;
  `)}

  ${below('md', css`
    height: 180px;
  `)}

  ${below(710, css`
    order: -1;
    margin-bottom: 2rem;
  `)}
`;
