import React from 'react'
import './choose.css'
import { Link } from 'react-router-dom';

// Home page which allows user to choose which side they want to view
const choose = () => {

  return (
    <div className = "choose-container">
      {/*Split page into two*/}
      <div className="choose-left">
        {/*Click image to go to marvel side*/}
          <Link className="marvel-logo" to='/marvel'></Link>
      </div>
      <div className="choose-right">
        {/*Click image to go to dc side*/}
        <Link className="dc-logo" to='/dc'></Link>
      </div>
        <Link className="button-vote" to='/vote' >
          Pick your favourites!
        </Link>
    </div>
  )
}

export default choose