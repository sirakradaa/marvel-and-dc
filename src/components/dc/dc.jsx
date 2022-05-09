import './dc.css';
import React from 'react';
import AnimationsPage from './../AnimationsPage';
import batman from '../../images/DC/batman.png';
import joker from '../../images/DC/joker.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// DC side which displays heros on the right and villains on the left
// with a description of the character, affiliations, opponents and rank
const dc = () =>  {
  return (
    <AnimationsPage>
      <div className = "dc-container">
        {/*Hero carousel*/}
          <Carousel className="dc-left-slide">
            <div>
                <img src={ batman } />
                <p className="legend">Batman</p>
            </div>
            <div className="dc-desc">HERE</div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
        {/*Villain carousel*/}
        <Carousel className="dc-right-slide">
            <div>
                <img src={ batman } />
                <p className="legend">Batman</p>
            </div>
            <div className="dc-desc">HERE</div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
      </div>
    </AnimationsPage>
  )
}

export default dc