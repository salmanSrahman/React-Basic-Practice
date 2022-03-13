import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, category, stock } = props.product;
  return (
    <div className="product-container">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h3 style={{ color: "blue" }}> {name}</h3>
        <h5>By: {seller}</h5>
        <h5>Price: {price}</h5>
        <h5>Category :{category}</h5>
        <h5>only {stock} left in stock - order soon</h5>
        <button
          className="btn-regular"
          onClick={() => props.handleAddToCart(props.product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
