import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price, stock, seller} = props.product;

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
            </div>
        </div>
    );
};

export default Product;