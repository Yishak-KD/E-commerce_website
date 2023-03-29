import { BUY_ITEM } from './shopActions'

const initialState = {
    cartItems: [],
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }
        default:
            return state;
    }
}

export default shopReducer;