import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> {

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect( () => {
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product => product.
                    key === key);
                    storedCart.push(addedProduct);
             }
             setCart(storedCart);
        }    
    }, [products])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        // Save To Local Storage
        
        addToDb(product.key);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
            
            {
                products.map(product => <Product
                    key={product.key} 
                    product ={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
            }

        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
            
        </div>
    );
};

export default Shop;