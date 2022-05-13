import { recalculateReducer } from './recalculate';
import { votesReducer } from './votes';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    recalculate: recalculateReducer,
    votes: votesReducer
})
