import { createGlobalStyle, css } from 'styled-components';
import { below } from 'styles/media';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::selection {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }

  html {
    font-size: 62.5%;

    ${below('lg', css`
      font-size: 58%;
    `)}

    ${below('md', css`
      font-size: 54%;
    `)}
  }

  body, input, textarea {
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.6rem;
  }
`;
