import React from 'react';

import Repository from './Repository';
import { Container, Wrapper } from './styles';

import data from 'data/repositories.json';

function Repositories() {
  return (
    <Container>
      <Wrapper>
        {data.map(repo => (
          <Repository key={repo.url} repo={repo} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Repositories;
