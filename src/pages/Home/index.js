import React from 'react';

import Banner from './Banner';
import Repositories from './Repositories';
import BlogPosts from './BlogPosts';
import Contact from './Contact';

function Home() {
  return (
    <>
      <Banner />
      <BlogPosts />
      <Repositories />
      <Contact />
    </>
  );
}

export default Home;
