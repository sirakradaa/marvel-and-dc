export const recalculateReducer = (state = 0, action) =>{
    switch(action.type){
        case 'RECALCULATE':
            return state + 1;
        default:
            return state;
    }
};