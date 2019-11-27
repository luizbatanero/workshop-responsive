import styled, { css } from 'styled-components';
import { below } from 'styles/media';

import Center from 'components/Center';

export const Container = styled.div`
  padding: 10rem 0;

  ${below('lg', css`
    padding: 6rem 0;
  `)}
`;

export const Wrapper = styled(Center)``;

export const ContactInfo = styled.div`
  display: flex;

  > div {
    width: 33.333%;
    text-align: center;

    svg {
      width: 36px;
      height: 36px;
      color: ${({ theme }) => theme.primary};
    }

    span {
      display: block;
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;
      margin: 1em 0 .5em;
      color: ${({ theme }) => theme.accent};
    }

    p {
      font-size: 2rem;
      color: #666;
    }
  }

  ${below(890, css`
    > div {
      width: 100%;

      & + div {
        margin-top: 4rem;
      }

      p {
        font-size: 1.8rem;
      }
    }
  `)}

  ${below(750, css`
    flex-direction: column;
    align-items: center;
  `)}
`;

export const ContactForm = styled.form`
  width: 60%;
  margin: 10rem auto 0;

  input,
  textarea {
    width: 100%;
    display: block;
    background: #fff;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 1.5rem;
    outline: 0;
    transition: border .3s;
    color: #333;

    &:not([type=submit]):focus {
      border-color: ${({ theme }) => theme.primary};
    }
  }

  input {
    height: 54px;
    padding: 0 1.5em;
  }

  textarea {
    padding: 1.5em;
    height: 20rem;
    resize: none;
  }

  input[type=submit] {
    width: auto;
    margin-left: auto;
    text-transform: uppercase;
    cursor: pointer;
    background: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.primary};
    color: #fff;
    transition: background .3s, color .3s;

    &:hover {
      background: none;
      color: ${({ theme }) => theme.primary};
    }
  }

  ${below('md', css`
    width: 100%;
    max-width: 70rem;
  `)}
`;

export const FormRow = styled.div`
  display: flex;

  * + * {
    margin-left: 1rem;
  }

  & + & {
    margin-top: 1rem;
  }

  ${below(400, css`
    flex-direction: column;

    * + * {
      margin-left: 0;
      margin-top: 1rem;
    }
  `)}
`;
