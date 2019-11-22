import React from 'react';
import { FaCalendarAlt, FaArrowRight, FaComments } from 'react-icons/fa';

import { Container, PostContent, PostText, PostFooter } from './styles';

import space from 'assets/images/space.jpg';
import avatar from 'assets/images/avatar.png';

function Post() {
  return (
    <Container href="#">
      <img src={space} alt="Blog Post" />

      <PostContent>
        <img src={avatar} alt="Avatar" />

        <PostText>
          <span>
            <FaCalendarAlt />
            29 de Agosto de 2019
          </span>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos hic accusantium.
          </h3>
        </PostText>
      </PostContent>

      <PostFooter>
        <span>
          LEIA MAIS
          <FaArrowRight />
        </span>
        <span>
          <FaComments />
          16 comentários
        </span>
      </PostFooter>
    </Container>
  );
}

export default Post;
