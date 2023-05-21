import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  // console.log( cart );

  // Initialize default value of total price and shipping
  let total = 0;
  let shipping = 0;

  // Iterate all product which is stored in cart in Shop component
  for( const product of cart ){
    total += product.price;
    shipping += product.shipping;
  }
  const tax = parseFloat( ( total * 0.1 ).toFixed( 2 ) );
  const grandTotal = ( total + shipping + tax ).toFixed( 2 );
  return (
    <div className='cart'>
      <h2>Order Summary</h2>
        <p>Selected Items: { cart.length }</p>
        <p>Total Price: ${ total }</p>
        <p>Total Shipping: ${ shipping }</p>
        <p>Tax: ${ tax }</p>
        <h5>Grand Total: ${ grandTotal }</h5>
    </div>
  );
};

export default Cart;