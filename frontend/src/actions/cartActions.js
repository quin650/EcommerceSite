import axios from "axios";
import { cartReducer } from "../reducers/cartReducers";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    try{
        const { data } = await axios.get(`/api/products/${id}`);
        console.log(data);
        dispatch(cartReducer.cart_add_item({
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
    }));
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch(error){
            console.log(error);
    }
}