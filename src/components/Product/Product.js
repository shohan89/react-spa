import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ( { product, handleAddToCart } ) => {

  const { category, name, img, price, seller, ratings, shipping } = product;

  // receiving handleAddToCart event handler from shop component
  // const handleAddToCart = props.handleAddToCart;

  return (
    <div className='product'>
      <img src={ img } alt="" />
      <div className="product-info">
        <p className='product-name'>{ name }</p>
        <p>Price: ${ price }</p>
        <p>Shipping: ${ shipping }</p>
        <p><small>Seller: { seller }</small></p>
        <p><small>Ratings: { ratings } stars</small></p>
      </div>
      <button onClick={ ()=> handleAddToCart( product ) } className='btn-cart'>
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={ faShoppingCart }></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;