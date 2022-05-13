import './marvel.css';
import React from 'react';
import AnimationsPage from './../AnimationsPage';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MarvelHeroes } from './../characters/marvel/marvel-heroes';
import { MarvelVillains } from './../characters/marvel/marvel-villains';

// Marvel side which displays heros on the right and villains on the left
// with a description of the character, affiliations, opponents and rank
const marvel = () =>  {

  return (
    <AnimationsPage>
      <div className = "mar-container">
        <div className="mar-box">
          {/*Hero carousel contains image, legend(name), and description*/}
          <Carousel className="mar-slide">
            {MarvelHeroes().map((hero) => (
              <div className="mar-image-container-hero"  key="marvel-hero-slide-container">
                  <img className="mar-img" src={ hero.img } alt="" />
                  <p className="legend">{ hero.name }</p>
                  <div className="mar-desc-hero">HERE</div>
              </div>
            ))}
        </Carousel>
        {/*Villain carousel contains image, legend(name), and description*/}
        <Carousel className="mar-slide">
          {MarvelVillains().map((villain) => (
                <div className="mar-image-container-hero"  key="marvel-villain-slide-container">
                    <img className="mar-img" src={ villain.img } alt="" />
                    <p className="legend">{ villain.name }</p>
                    <div className="mar-desc-hero">HERE</div>
                </div>
              ))}
        </Carousel>
        </div>
      </div>
    </AnimationsPage>
  )
}

export default marvel