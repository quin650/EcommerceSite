import { createSlice } from '@reduxjs/toolkit';

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialStateCart = {
    cartItems: cartItemsFromStorage,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialStateCart,
    reducers: {
        cart_add_item(state, action){
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)
            if (existItem){
                state.cartItems = state.cartItems.map(x => 
                    x.product === existItem.product ? item : x)
            } else {
                    state.cartItems.push(item)
                }
            }
        },
    },
);
export const cartReducer  = cartSlice.actions;
export default cartSlice;