import './dc.css';
import React from 'react';
import AnimationsPage from './../AnimationsPage';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { DCHeroes } from './../characters/dc/dc-heroes';
import { DCVillains } from './../characters/dc/dc-villains';

// DC side which displays heros on the right and villains on the left
// with a description of the character, affiliations, opponents and rank
const dc = () =>  {

  return (
    <AnimationsPage>
      <div className = "dc-container">
        <div className="dc-box">
          {/*Hero carousel contains image, legend(name), and description*/}
          <Carousel className="dc-slide">
            {DCHeroes().map((hero) => (
              <div className="dc-image-container-hero" key="dc-hero-slide-container">
                  <img className="dc-img" src={ hero.img } alt="" />
                  <p className="legend">{ hero.name }</p>
                  <div className="dc-desc-hero">
                    <strong>Description:</strong> { hero.description } <br /> <br />
                    <strong>Affiliations:</strong> { hero.affiliations }
                  </div>
              </div>
            ))}
        </Carousel>
        {/*Villain carousel contains image, legend(name), and description*/}
        <Carousel className="dc-slide">
          {DCVillains().map((villain) => (
                <div className="dc-image-container-hero" key="dc-villain-slide-container">
                    <img className="dc-img" src={ villain.img } alt="" />
                    <p className="legend">{ villain.name }</p>
                    <div className="dc-desc-hero">
                    <strong>Description:</strong> { villain.description } <br /> <br />
                    <strong>Affiliations:</strong> { villain.affiliations }</div>
                </div>
              ))}
        </Carousel>
        </div>
      </div>
    </AnimationsPage>
  )
}

export default dc