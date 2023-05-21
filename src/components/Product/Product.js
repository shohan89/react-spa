import React from 'react';
import './Product.css';

const Product = ( { product, handleAddToCart } ) => {

  const { category, name, img, price, seller, ratings } = product;

  // receiving handleAddToCart event handler from shop component
  // const handleAddToCart = props.handleAddToCart;

  return (
    <div className='product'>
      <img src={ img } alt="" />
      <div className="product-info">
        <p className='product-name'>{ name }</p>
        <p>Price: ${ price }</p>
        <p><small>Seller: { seller }</small></p>
        <p><small>Ratings: { ratings } stars</small></p>
      </div>
      <button onClick={ ()=> handleAddToCart( product ) } className='btn-cart'>
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default Product;