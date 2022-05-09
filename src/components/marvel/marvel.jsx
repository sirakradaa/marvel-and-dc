import React from 'react'
import AnimationsPage from './../AnimationsPage';
import './marvel.css'

// Marvel side which displays characters with 
const marvel = () => {
  return (
  <AnimationsPage>
    <div className = "marvel-container">Marvel
      <div className="marvel-characters"></div>
    </div>
  </AnimationsPage>
    
  )
}

export default marvel
