import React, { useState } from 'react';

import { Container, Wrapper, Title, Nav, NavToggle, Link } from './styles';

function Header() {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <Container>
      <Wrapper>
        <Title>Rocketseat</Title>
        <Nav open={open}>
          <Link active>Home</Link>
          <Link>Sobre</Link>
          <Link>Tecnologias</Link>
          <Link>Blog</Link>
          <Link type="button">Contato</Link>
        </Nav>
        <NavToggle open={open} onClick={handleToggle}>
          <span></span>
        </NavToggle>
      </Wrapper>
    </Container>
  );
}

export default Header;
