import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
  const products = useLoaderData();

  // Calling a new state for handle cart calculation
  const [ cart, setCart ]= useState([]);

  

  // Save cart data from localStorage 
  useEffect( ()=>{
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find( product => product.id === id );
      if( addedProduct ){
        const quantity = storedCart[ id ];
        addedProduct.quantity = quantity;
        savedCart.push( addedProduct );
      }
    }
    setCart( savedCart );
  }, [ products ] );

  // send handleAddToCart event handler to product component
  const handleAddToCart = selectedProduct =>{
    console.log( selectedProduct );
    let newCart = [];
    const exists = cart.find( product => product.id === selectedProduct)
    if( !exists ){
      selectedProduct.quantity = 1;
      newCart = [ ...cart, selectedProduct ];
    }
    else{
      const rest = cart.filter( product => product.id !== selectedProduct.id );
      exists.quantity = exists.quantity + 1;
      newCart = [ ...rest, exists ];
    }
    setCart( newCart );
    addToDb( selectedProduct.id );
  }
  return (
    <div className='shop-container'>
      {/* Product container holding all product components */}
      <div className="products-container">
        {
          products.map( product => <Product key={ product.id } product={ product } handleAddToCart={ handleAddToCart }></Product> )
        }
      </div>

      {/* Order summary section */}
      <div className="Cart-container">
        <Cart cart={ cart }></Cart>
      </div>

    </div>
  );
};

export default Shop;