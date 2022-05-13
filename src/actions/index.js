// Recalculate action to get new average placements
export const recalculate = (Placements, Votes) => {
    return{
        type: 'RECALCULATE',
        payload: {placements: Placements, 
            votes: Votes},
    }
}

// votes action to increase the number of votes
export const votes = () => {
    return{
        type: 'INCREMENT'
    }
}