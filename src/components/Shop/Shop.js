import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [ products, setProducts ] = useState([]);

  // Calling a new state for handle cart calculation
  const [ cart, setCart ]= useState([]);

  useEffect( ()=>{
    fetch( 'products.json' )
      .then( res => res.json())
      .then( data => setProducts( data ) )
  },[] );
  // send handleAddToCart event handler to product component
  const handleAddToCart = product =>{
    console.log( product );
    const newCart = [ ...cart, product ];
    setCart( newCart );
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