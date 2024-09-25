import { combineReducers } from 'redux';

const initialState = {
    products: [],
    cart: []
};

const productsReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
};

const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProduct = state.find(item => item.id === action.payload.id);
            if (existingProduct) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);
        case 'UPDATE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});