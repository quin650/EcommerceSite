import axios from 'axios'
import { productReducer } from '../reducers/productReducers'
import { useParams } from 'react-router-dom'


export const listProducts = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        const loadProducts = async () => {
            const res = await axios.get('/api/products/', config);
            return res;
        };
        try {
            dispatch(productReducer.product_List_Request());
            const res = await loadProducts();
            if (res.data.error) {
                dispatch(productReducer.product_List_Fail(res.data.error));
            } else {
                dispatch(productReducer.product_List_Success(res.data));
            }
        } catch (err) {
            dispatch(productReducer.product_List_Fail(err.message));
        };
    };
};

// https://github.com/divanov11/proshop_django/blob/master/frontend/src/actions/productActions.js
// export const listProducts = () => async (dispatch) => {
//     try {
//         dispatch(productReducer.product_List_Request());
//         const { data } = await axios.get('/api/products/')
//         dispatch(productReducer.product_List_Success(data));
//     } catch (error) {
//         dispatch(productReducer.product_List_Fail(error));
//     }
// }

export const listProductDetails = (id) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        const loadProduct = async () => {
            const res = await axios.get(`/api/products/${id}`, config);
            return res;
        };
        try {
            dispatch(productReducer.product_Details_Request());
            const res = await loadProduct();
            if (res.data.error) {
                dispatch(productReducer.product_Details_Fail(res.data.error));
            } else {
                dispatch(productReducer.product_Details_Success(res.data));
            }
        } catch (err) {
            dispatch(productReducer.product_Details_Fail(err.message));
        };
    };
};