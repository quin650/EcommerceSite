import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productReducers';
import cartSlice from './reducers/cartReducers';
import userSlice from './reducers/userReducers';

export const store = configureStore({
	reducer: {
		product: productSlice.reducer,
		cart: cartSlice.reducer,
		user: userSlice.reducer,
	},
});

export default store;