import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productReducers';

export const store = configureStore({
	reducer: {
		product: productSlice.reducer,
	},
});

export default store;