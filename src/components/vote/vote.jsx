import React from 'react'
import AnimationsPage from './../AnimationsPage';
import './vote.css'

const vote = () =>  {
  return (
    <AnimationsPage>
      <div className="vote-container">
        <div className="ranking">
        <form action="/action_page.php">
          <label for="characters">Most to least favourite: </label>
          <select id="characters" name="characters">
            <option value="Batman">Batman</option>
            <option value="Superman">Superman</option>
            <option value="Wonder">Wonder Woman</option>
            <option value="Flash">Flash</option>
            <option value="Batman">Joker</option>
            <option value="Lex">Lex Luthor</option>
            <option value="Darkseid">Darkseid</option>
            <option value="Bane">Bane</option>
          </select>
          <input type="submit"/>
        </form>
        </div>
      </div>
    </AnimationsPage>
  )
}

export default vote