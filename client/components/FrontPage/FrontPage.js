import React from 'react';
import Categories from './Categories';
import Slider from './Slider';
import Image from './Image';
import PopularItems from './PopularItems';
import NewsLetter from './NewsLetter';

const FrontPage = () => {
  return (
    <div className="fp">
      <Slider />
      <Categories />
      <PopularItems />
      <NewsLetter />
      {/* <Image /> */}
    </div>
  );
};

export default FrontPage;
