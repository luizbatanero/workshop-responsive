import React from 'react';

import { Container, Wrapper, BannerText, BannerImage } from './styles';
import bannerImage from 'assets/images/banner.png';

function Banner() {
  return (
    <Container>
      <Wrapper>
        <BannerText>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam optio culpa, vitae officiis delectus aut debitis itaque in ipsum reprehenderit.</p>
        </BannerText>

        <BannerImage src={bannerImage} />
      </Wrapper>
    </Container>
  );
}

export default Banner;
