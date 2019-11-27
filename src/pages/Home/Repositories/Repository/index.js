import React from 'react';
import { GoGitBranch, GoStar } from 'react-icons/go';

import { Container, RepositoryStats } from './styles';
import avatar from 'assets/images/node.png';

function Repository({ repo }) {
  const {
    url,
    name,
    description,
    forks,
    stars,
  } = repo;

  return (
    <Container href={url}>
      <h4>
        <img src={avatar} alt="Rocketseat" />
        {name}
      </h4>
      <p>{description}</p>

      <RepositoryStats>
        <div>
          <GoGitBranch />
          <span><strong>{forks}</strong> forks</span>
        </div>
        <div>
          <GoStar />
          <span><strong>{stars}</strong> stars</span>
        </div>
      </RepositoryStats>
    </Container>
  );
}

export default Repository;
