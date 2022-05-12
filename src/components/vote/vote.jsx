import React from 'react'
import { useState } from 'react'
import AnimationsPage from './../AnimationsPage';
import './vote.css'
import { useSelector, useDispatch } from 'react-redux';
import { votes, recalculate } from './../../actions/index';


const Vote = () =>  {
  const placements = useSelector(state => state.recalculate);
  const voteCounter = useSelector(state => state.votes);
  const dispatch = useDispatch();

  // number of select boxes
  const selectNames = ["select1", "select2","select3", "select4","select5", 
  "select6","select7", "select8"];

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
        label: 'Flash',
        value: 'flash'
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
        label: 'Superman',
        value: 'superman'
    },
    {
        label: 'Wonder Woman',
        value: 'wonder'
    }
  ]);

  // options that are currently picked
  const [chosenOptions, setChosenOptions] = useState({});

  // check if another box has the option selected
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
    var input = document.getElementsByTagName("select");
    var inputList = Array.prototype.slice.call(input);

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

    incrementVotes();
  };

  // get each element from select boxes going from top to bottom
  const updatePlacements = () => {
    // store it in an array
    let orderPlacements = [];

    // go through each select element by name and push it to placements
    for(let i = 1; i <= selectNames.length; i++){
      let selectStr = 'select'.concat(i.toString());
      let currSelect = document.getElementsByName(selectStr);
      orderPlacements.push()
    }

    // send array and votes to recalculate to return new values
    dispatch(recalculate([[orderPlacements], {votes}]));
  };


  return (
    <AnimationsPage>
      <div className="vote-container">
        <div className="vote-choose">
          <form action="/action_page.php">
            <label className="vote-label">Pick your top 8 </label>
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
            <button className="button"
            onClick={(e) => validateSelect(e)} type="submit">
              Submit
            </button>
          </form>
          <div className="placements">
            {voteCounter}
          </div>
        </div>
      </div>
    </AnimationsPage>
  )
}

export default Vote