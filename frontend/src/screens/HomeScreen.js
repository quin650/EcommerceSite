import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'


function HomeScreen() {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);

    useEffect(()=>{
        dispatch(listProducts());
    }, [])

    return (
        <div>
            <h1>Latest Products</h1>

            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen