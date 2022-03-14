import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
   // console.log(props);
    const {name, img, price, stock, seller} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
        <div>
        <img src={img} alt="" />
        </div>
            <div>
            <h4 className='product-name'>{name}</h4>
            <p><small>By: {seller}</small></p>
            <p><strong>Price: {price}</strong></p>
            <p><small>Only {stock} left in stock - order soon</small></p>
            <button onClick={ () => props.handleAddToCart(props.product)}
            className='btn-regular'>{element} add to Cart</button>
            </div>
        </div>
    );
};

export default Product;