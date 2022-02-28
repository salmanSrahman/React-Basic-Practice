import React from "react";
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
      </div>
    </div>
  );
};

export default Product;
