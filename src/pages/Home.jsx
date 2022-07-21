import React from 'react';
import Announce from './../components/Announce';
import Navbar from './../components/Navabar';
import Slider from './../components/Slider';
import Categories from './../components/Categories';

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
}

export default Home;
