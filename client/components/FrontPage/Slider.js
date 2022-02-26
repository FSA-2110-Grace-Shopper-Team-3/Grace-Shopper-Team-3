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
        <div data-src="images/guitar-slider.jpg">
          <div className="sl-info">
            <div className="sl-info-wrap">
              <h1>GRANDIOSE</h1>
            </div>
            <div className="sl-info-wrap">
              <h1>GUITARS</h1>
            </div>
          </div>
        </div>
        <div data-src="images/drums-slider.jpg">
          {' '}
          <div className="sl-info">
            <div className="sl-info-wrap">
              <h1>DAUNTLESS</h1>
            </div>
            <div className="sl-info-wrap">
              <h1>DRUMS</h1>
            </div>
          </div>
        </div>
        <div data-src="images/cello-slider.jpg">
          {' '}
          <div className="sl-info-cello">
            <div className="sl-info-wrap">
              <h1>CLASSICAL</h1>
            </div>
            <div className="sl-info-wrap">
              <h1>CELLOS</h1>
            </div>
          </div>
        </div>
        <div data-src="images/piano-slider.jpg">
          {' '}
          <div className="sl-info">
            <div className="sl-info-wrap">
              <h1>PINNACLE</h1>
            </div>
            <div className="sl-info-wrap">
              <h1>PIANOS</h1>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
