import { Characters } from './../components/characters/characters';

// function to update the average placements of each character
const updatePlacements = (state, action) => {
    for(let i = 0; i < action.payload.placements.length; i++){
        Characters().forEach((entry, j) => {
            // find the object that has the same name as the current placement
            if (entry.name === action.payload.placements[i]){
                // then update the total (Which is all the placements together)
                state[j].total = state[j].total + i + 1;
                // and then divide it by the number of votes to get the average placement
                state[j].placement = state[j].total / action.payload.votes;
            }
        });
    }
    return state;
}

export const recalculateReducer = (state = Characters(), action) =>{
    switch(action.type){
        case 'RECALCULATE':
            state = updatePlacements(state, action);
            return state;
        default:
            return state;
    }
};