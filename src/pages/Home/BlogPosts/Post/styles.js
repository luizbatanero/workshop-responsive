import styled, { css } from 'styled-components';
import { below } from 'styles/media';

export const Container = styled.a`
  width: 570px;
  background: #fff;
  box-shadow: 0 20px 30px rgba(113, 89, 193, .2);
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0 15px 20px rgba(113, 89, 193, .35);
  }

  > img {
    width: 100%;
    display: block;
  }

  svg {
    color: ${({ theme }) => theme.accent};
    width: 14px;
    height: 14px;
  }

  ${below('lg', css`
    width: calc(50% - 2rem);
  `)}

  ${below(750, css`
    width: 100%;

    & + a {
      margin-top: 4rem;
    }
  `)}
`;

export const PostContent = styled.div`
  padding: 2rem;
  display: flex;

  img {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 50%;
    margin-top: -40px;
    margin-right: 2.5rem;
  }

  ${below(750, css`
    flex-direction: column;

    img {
      width: 60px;
      height: 60px;
      margin-bottom: 1.5rem;
    }
  `)}
`;

export const PostText = styled.div`
  span {
    display: flex;
    align-items: center;
    color: #666;
  }

  svg {
    margin-right: 8px;
  }

  h3 {
    color: #444;
    line-height: 1.3;
    margin-top: .75rem;
    transition: color .3s;

    ${Container}:hover & {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const PostFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  span {
    display: inline-flex;
    align-items: center;
    font-size: 1.5rem;
    color: #666;
    line-height: 1;

    &:first-child {
      width: 100px;
      justify-content: center;
      font-weight: bold;

      svg {
        ${Container}:hover & {
          transform: translateX(5px);
        }
      }
    }
  }

  svg {
    margin: 0 5px;
    font-size: 13px;
    transition: transform .2s;
  }
`;
