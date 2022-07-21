import React from 'react';
import Announce from './../components/Announce';
import Navbar from './../components/Navabar';
import Slider from './../components/Slider';

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
    </div>
  );
}

export default Home;
