import './marvel.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MarvelAnimations from './MarvelAnimations';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MarvelHeroes } from './../characters/marvel/marvel-heroes';
import { MarvelVillains } from './../characters/marvel/marvel-villains';

// Marvel side which displays heros on the right and villains on the left
// with a description of the character, affiliations, opponents and rank
const marvel = () =>  {

  return (
    <MarvelAnimations>
      <div className = "mar-container">
        {/* Buttons to go to vote, home, and DC page */}
        <Link className="marvel-vote" to='/vote' >
          Vote
        </Link>
        <Link className="marvel-home" to='/' >
          Home
        </Link>
        <Link className="marvel-dc" to='/dc' >
          DC
        </Link>
        <div className="mar-box">
          {/*Hero carousel contains image, legend(name), and description*/}
          <Carousel className="mar-slide">
            {MarvelHeroes().map((hero) => (
              <div className="mar-image-container-hero"  key="marvel-hero-slide-container">
                  <img className="mar-img" src={ hero.img } alt="" />
                  <p className="legend">{ hero.name }</p>
                  <div className="mar-desc-hero">
                    <strong>Description:</strong> { hero.description } <br /> <br />
                    <strong>Affiliations:</strong> { hero.affiliations }
                  </div>
              </div>
            ))}
        </Carousel>
        {/*Villain carousel contains image, legend(name), and description*/}
        <Carousel className="mar-slide">
          {MarvelVillains().map((villain) => (
                <div className="mar-image-container-hero"  key="marvel-villain-slide-container">
                    <img className="mar-img" src={ villain.img } alt="" />
                    <p className="legend">{ villain.name }</p>
                    <div className="mar-desc-hero">
                      <strong>Description:</strong> { villain.description } <br /> <br />
                      <strong>Affiliations:</strong> { villain.affiliations }
                    </div>
                </div>
              ))}
        </Carousel>
        </div>
      </div>
    </MarvelAnimations>
  )
}

export default marvel