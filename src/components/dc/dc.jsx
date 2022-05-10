import './dc.css';
import React from 'react';
import AnimationsPage from './../AnimationsPage';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { dcChars } from './../../images/dc-images';

// DC side which displays heros on the right and villains on the left
// with a description of the character, affiliations, opponents and rank
const dc = () =>  {
  return (
    <AnimationsPage>
      <div className = "dc-container">
        {/*Hero carousel*/}
          <Carousel className="dc-left-slide">
            <div className="dc-image-container-hero">
                <img className="dc-img-hero" src={ dcChars.Batman } alt="" />
                <p className="legend">Batman</p>
                <div className="dc-desc-hero">HERE</div>
            </div>
            <div>
                <img src="assets/2.jpeg" alt="" />
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
        {/*Villain carousel*/}
        <Carousel className="dc-right-slide">
          <div className="dc-image-container-villain">
              <p className="legend">Joker</p>
              <div className="dc-desc-villain">HERE</div>
              <img className="dc-img-villain" src={ dcChars.Joker } alt="" />
          </div>
          <div>
              <img src="assets/2.jpeg" alt="" />
              <p className="legend">Legend 2</p>
          </div>
        </Carousel>
      </div>
    </AnimationsPage>
  )
}

export default dc