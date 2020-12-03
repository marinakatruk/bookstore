const dataReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_DATA':
            return [...state, action.payload];
        case 'UPDATE_DATA':
            return action.payload;
        default:
            return state;
    }
};

export default dataReducer;