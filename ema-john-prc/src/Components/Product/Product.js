import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { img, name, price, seller, stock } = props.product;
  return (
    <div className="product-container">
      <div className="product img">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <h5>By: {seller}</h5>
        <h5>${price}</h5>
        <h5>only {stock} left in stock - order soon</h5>
        <Rating initialRating={3} readonly />
        <button class="btn-regular">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
