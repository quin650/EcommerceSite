import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productReducers';
import cartSlice from './reducers/cartReducers';

export const store = configureStore({
	reducer: {
		product: productSlice.reducer,
		cart: cartSlice.reducer,
	},
});

export default store;