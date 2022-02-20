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
        <div>
          <img
            src={
              'https://images.unsplash.com/photo-1509170051686-83f8efd35a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
            }
          />
        </div>
        <div>
          <img
            src={
              'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
            }
          />
        </div>
        <div>
          <img
            src={
              'https://images.unsplash.com/photo-1607104639856-dbe66d0a2507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
            }
          />
        </div>
        <div>
          <img
            src={
              'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
            }
          />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
