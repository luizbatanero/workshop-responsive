import styled from 'styled-components';

import Center from 'components/Center';

export const Container = styled.div`
  background: ${({ theme }) => theme.primary};
`;

export const Wrapper = styled(Center)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14rem 0;
`;

export const BannerText = styled.div`
  margin-right: 5rem;
  color: #fff;

  h1 {
    font-weight: 700;
    font-size: 5.4rem;
    line-height: 1.1;
  }

  p {
    font-size: 1.7rem;
    max-width: 30em;
    margin-top: 1rem;
    opacity: .8;
  }
`;

export const BannerImage = styled.img`
  height: 300px;
  flex-shrink: 0;
`;
