import React from 'react';
import './Laboratory.css';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Laboratory({ laboratories }) {
  return (
    <div className='laboratory'>
      <h2>Laboratories</h2>
      <div className='laboratoryContainer'>
        {laboratories.map((laboratory, index) => (
          <div className='laboratoryContainer__content' key={index}>
            <div className='laboratoryContainer__contentImage'>
              {/* <img src={laboratory?.gallery_set[0]?.image} alt='' /> */}
              <AutoplaySlider
                cssModule={AwsSliderStyles}
                animation='cubeAnimation'
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                className='awesome__slider'
                mobileTouch={true}
                buttons={false}
              >
                {laboratory?.gallery_set.map((gallery, index) => (
                  <div data-src={gallery.image} />
                ))}
              </AutoplaySlider>
              <div className='overlay'>
                <div className='overlay__text'>{laboratory.name}</div>
              </div>
            </div>
            <p>{laboratory.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Laboratory;
