import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import VoteAnimations from './VoteAnimations';
import './vote.css'
import { useSelector, useDispatch } from 'react-redux';
import { votes, recalculate } from './../../actions/index';


const Vote = () =>  {
  // placements state and voteCounter state
  const placements = useSelector(state => state.recalculate);
  const voteCounter = useSelector(state => state.votes);
  // dispatch to dispatch the actions
  const dispatch = useDispatch();

  // number of select boxes
  const selectNames = ["select1", "select2","select3", "select4","select5", 
  "select6","select7", "select8","select9", "select10","select11", "select12","select13", 
  "select14","select15", "select16"];

  // options of characters
  const [options] = useState([
    {
      label: 'Bane',
      value: 'bane'
    },
    {
      label: 'Batman',
      value: 'batman'
    },
    {
      label: 'Darkseid',
      value: 'darkseid'
    },    
    {
      label: 'Doctor Strange',
      value: 'doctorstrange',
    },
    {
      label: 'Flash',
      value: 'flash'
    },
    {
      label: 'Green Goblin',
      value: 'greengoblin',
    },
    {
      label: 'Iron Man',
      value: 'ironman',
    },
    {
      label: 'Joker',
      value: 'joker'
    },
    {
      label: 'Lex Luthor',
      value: 'lex'
    },
    {
      label: 'Magneto',
      value: 'magneto',
    },
    {
      label: 'Red Skull',
      value: 'redskull',
    },
    {
      label: 'Spider-Man',
      value: 'spiderman',
    },
    {
      label: 'Superman',
      value: 'superman'
    },
    {
      label: 'Thanos',
      value: 'thanos',
    },
    {
      label: 'Wolverine',
      value: 'wolverine',
    },
    {
      label: 'Wonder Woman',
      value: 'wonder'
    }
  ]);

  // options that are currently picked
  const [chosenOptions, setChosenOptions] = useState({});

  // check if another box has the option selected
  // if it does then remove the option
  const isChosenByOther = (optionValue, selectName) => {
    for (let key in chosenOptions) {
        if (key !== selectName) {
            if (chosenOptions[key] === optionValue) {
                return true;
            }
        }
    }
    return false;
  };

  // update values of chosenOptions
  const handleChange = (e) => {
    setChosenOptions({...chosenOptions, [e.target.name]: e.target.value});
  };

  // increase the number of votes by 1 for each submit
  const incrementVotes = () =>{
    dispatch(votes());
  }

  // check if all boxes have been selected, if not then remain on page
  const validateSelect = (e) => {
    // stay on page
    e.preventDefault();

    // get all select tags and put them in an array
    let input = document.getElementsByTagName("select");
    let inputList = Array.prototype.slice.call(input);

    //if one value is length 0 then we end the loop and return
    let isEmpty = false;

    //iterate through each select to check if it's empty
    for(let i = 0; i < selectNames.length; i++){
      if(inputList[i].value.length === 0){
        isEmpty = true;
        break;
      }
    }

    // if one select box is empty then return
    if(isEmpty){
      return
    }

    // Increase the votes by 1
    incrementVotes();

    // Send the order of the list to update placements
    updatePlacements(inputList);
  };


  // get each element from select boxes going from top to bottom
  const updatePlacements = (inputList) => {
    // store it in an array
    let orderPlacements = [];

    // add the text from each select box in order of top to bottom
    for(let i = 0; i < selectNames.length; i++){
      orderPlacements.push(inputList[i].options[inputList[i].selectedIndex].text)
    }

    // send array and votes to recalculate to return updated values
    dispatch(recalculate(orderPlacements, voteCounter + 1));
  };


  return (
    <VoteAnimations>
      <div className="vote-container">
        {/* Buttons to go to marvel, home, and DC page */}
        <Link className="vote-marvel" to='/marvel' >
          Marvel
        </Link>
        <Link className="vote-home" to='/' >
          Home
        </Link>
        <Link className="vote-dc" to='/dc' >
          DC
        </Link>
        <div className="vote-choose">
          <form className="form" action="/action_page.php">
            <label className="vote-label">Most to least favourite</label>
            <div id="myForm">
              {/*Map every single select box with all the available options*/}
              {selectNames.map((name, index) => {
                    return (
                        <select name={name} key={index} onChange={handleChange} 
                        value={chosenOptions[name]} required={index === 0}>
                          {/*Start with empty option*/}
                          <option value=''></option>
                          {/*Filter through values to only show options that have 
                          not been used*/}
                          {options.filter(({value}) => !isChosenByOther(value, name))
                              .map(({label, value}) =>
                                  <option className={name} value={value} key={value}>{label}</option>)
                          }
                        </select>
                    )
                })}
            </div>
            {/* Button that gets new average placements */}
            <button className="button"
            onClick={(e) => validateSelect(e)} type="submit">
              Submit
            </button>
          </form>
          <div className="placements">
            Name Average Placement
            {/* map through the placements state and show the character name
            and their average placement */}
            {placements.map((char, i) => {
                    return (<div className="averagePlacements" key={i}>
                            <pre className="placementName">{char.name}</pre>
                            <pre className="placementNumber">{char.placement.toFixed(1)}</pre>
                            </div>)
                          }
                    )
            }
          </div>
        </div>
      </div>
    </VoteAnimations>
  )
}

export default Vote