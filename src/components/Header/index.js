import React from 'react';

import { Container, Wrapper, Title, Nav, Link } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <Title>Rocketseat</Title>
        <Nav>
          <Link active>Home</Link>
          <Link>Sobre</Link>
          <Link>Tecnologias</Link>
          <Link>Blog</Link>
          <Link type="button">Contato</Link>
        </Nav>
      </Wrapper>
    </Container>
  );
}

export default Header;
