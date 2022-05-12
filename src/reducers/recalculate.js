import { DCHeroes } from './../components/characters/dc/dc-heroes';
import { DCVillains } from './../components/characters/dc/dc-villains';



export const recalculateReducer = (state = DCHeroes, action) =>{
    switch(action.type){
        case 'RECALCULATE':
            return state + 1;
        default:
            return state;
    }
};