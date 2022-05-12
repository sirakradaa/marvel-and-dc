import React from 'react'
import { useState } from 'react'
import AnimationsPage from './../AnimationsPage';
import './vote.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './../../actions/index';

const Vote = () =>  {
  const placements = useSelector(state => state.placements);
  const recalculate = useSelector(state => state.recalculate);
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
            <input  type="submit"/>
          </form>
          <div className="placements">
            options
          </div>
        </div>
      </div>
    </AnimationsPage>
  )
}

export default Vote