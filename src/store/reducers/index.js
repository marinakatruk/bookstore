import counterReducer from './counter'
import { combineReducers } from '@reduxjs/toolkit'
import dataReducer from './data';
import cartItemsReducer from './cartItems'
import cartAmountReducer from './cartAmount'

const allReducer = combineReducers({
    counter: counterReducer,
    data: dataReducer,
    cartItems: cartItemsReducer,
    cartAmount: cartAmountReducer
})

export default allReducer;