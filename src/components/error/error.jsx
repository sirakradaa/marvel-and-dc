import React from 'react'
import './error.css'
import { Link } from 'react-router-dom';


const error = () =>  {
  return (
    <div className="error-container">      
        {/* Button to go home*/}
        <Link className="error-home" to='/' >
          Click To Return Home
        </Link>
      </div>
  )
}

export default error