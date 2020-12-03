const cartAmountReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREASE_AMOUNT':
            return state + action.payload;
        case 'DECREASE_AMOUNT':
            return state - action.payload;
        default:
            return state;
    }
};

export default cartAmountReducer;