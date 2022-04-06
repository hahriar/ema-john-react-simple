import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    const shipping = total > 0 ? 15: 0;
    const tax = (total + shipping) * 0.10;
    const gandTotal = total + shipping + tax;

    return (
        <div>
        <h3>Order Summery</h3>
            <h5>Items Ordered: {props.cart.length} </h5>
            <br />
            <p>Total : {total}$</p>
            <p>Shipping: {shipping}$</p>
            <p>tax: {tax}$</p>
            <p>grand Total: {gandTotal}$</p>
        </div>
    );
};

export default Cart;