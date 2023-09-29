import React, {useEffect} from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

function CartScreen({  }) {
    const dispatch = useDispatch();
    const navigate = useNavigate(); //history substitute for react router 6
    const params = useParams(); //match.params substitute for react router 6
    const location = useLocation(); //location substitute for react router 6
    const productId = params.id
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const cartItems = useSelector(state => state.cart.cartItems);
    console.log( "cartItems: ", cartItems)

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch,productId,qty])

    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen