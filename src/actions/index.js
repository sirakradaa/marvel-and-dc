export const recalculate = ([[placements], votes]) => {
    return{
        type: 'RECALCULATE',
        payload: [[placements], votes],
    }
}

export const votes = () => {
    return{
        type: 'INCREMENT'
    }
}