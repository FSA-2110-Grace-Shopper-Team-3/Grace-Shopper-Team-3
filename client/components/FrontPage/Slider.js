import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

const Slider = () => {
  return (
    <div className="sl">
      <AwesomeSlider
        animation="foldOutAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
      >
        <div data-src="images/guitar-slider.jpg"></div>
        <div data-src="images/drums-slider.jpg"></div>
        <div data-src="images/cello-slider.jpg"></div>
        <div data-src="images/piano-slider.jpg"></div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
