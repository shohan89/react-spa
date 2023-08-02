import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [ cart, setCart ] = useState( initialCart );
  // Remove Item event handler
  const handleRemoveItem = ( id ) => {
    const remainingItems = cart.filter( product => product.id !== id );
    setCart( remainingItems );
    removeFromDb( id );
  }
  return (
    <div>
      <div className='shop-container'>
        <div className='orders-container'>
          {
            cart.map( product => <ReviewItem key={ product.id } product={ product } handleRemoveItem= { handleRemoveItem } /> )
          }
          {
            cart.length === 0 && <h2>No Item to review. Please <Link to='/shop'>shop</Link> something</h2>
          }
        </div>
        <div className='Cart-container'>
          <Cart cart={ cart } />
        </div>

      </div>
    </div>
  );
};

export default Orders;