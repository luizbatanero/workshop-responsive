import React from 'react';

import Post from './Post';
import { Container } from './styles';

function BlogPosts() {
  return (
    <Container>
      <Post />
      <Post />
    </Container>
  )
}

export default BlogPosts;
