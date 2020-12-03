export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const addData = (data) => {
    return {
        type: 'ADD_DATA',
        payload: data
    };
}

export const updateData = (data) => {
    return {
        type: 'UPDATE_DATA',
        payload: data
    };
}

export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}

export const increaseCartAmount = (sum) => {
    return {
        type: 'INCREASE_AMOUNT',
        payload: sum
    }
}

export const decreaseCartAmount = (sum) => {
    return {
        type: 'DECREASE_AMOUNT',
        payload: sum
    }
}



