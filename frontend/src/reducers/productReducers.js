import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    products: [],
    error:'',
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        product_List_Request(state){
            state.loading = true;
            state.products = [];
        },
        product_List_Success(state, action){
            state.loading = false;
            state.products = action.payload
        },
        product_List_Fail(state, action){
            state.loading = false;
            state.error = action.payload;
        },
    }, 
});

export const productReducer  = productSlice.actions;
export default productSlice;