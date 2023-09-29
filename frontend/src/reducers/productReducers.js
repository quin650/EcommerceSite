import { createSlice } from '@reduxjs/toolkit';

const initialStateProduct = {
    loading: false,
    products: [],
    error:'',
    product: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialStateProduct,
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
        product_Details_Request(state){
            state.loading = true;
        },
        product_Details_Success(state, action){
            state.loading = false;
            state.product = action.payload
        },
        product_Details_Fail(state, action){
            state.loading = false;
            state.error = action.payload;
        },
    }, 
});

export const productReducer  = productSlice.actions;
export default productSlice;