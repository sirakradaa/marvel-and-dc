import React from 'react'
import './choose.css'
import { Link } from 'react-router-dom';
import '../../images/Marvel/Marvel-Logo.gif';
import '../../images/Marvel/Marvel-Logo.jpg';
import '../../images/DC/DC-Logo.gif';
import '../../images/DC/DC-Logo.jpg';

const choose = () => {


  return (
    <div className = "choose-container">
      <div className="choose-left">
          <Link className="marvel-logo" to='/marvel'></Link>
      </div>
      <div className="choose-right">
        <Link className="dc-logo" to='/dc'></Link>
      </div>
          

        <Link className="button-vote" to='/vote' >
        </Link>
    </div>
  )
}

export default choose