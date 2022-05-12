import { placementsReducer } from './placements';
import { recalculateReducer } from './recalculate';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    placements: placementsReducer,
    recalculate: recalculateReducer
})
