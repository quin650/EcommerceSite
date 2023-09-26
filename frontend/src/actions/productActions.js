import axios from 'axios'
import { productReducer } from '../reducers/productReducers'

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
                dispatch(productReducer.product_List_Fail());
            } else {
                dispatch(productReducer.product_List_Success(res.data));
                // console.log('res data: ', res.data);
            }
        } catch (err) {
            dispatch(productReducer.product_List_Fail(err));
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