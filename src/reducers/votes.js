// Increase the number of votes by 1
export const votesReducer = (state = 0, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
};