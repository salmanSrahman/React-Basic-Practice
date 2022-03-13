import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const { img, name, price, seller, category, stock } = product;
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
      </div>
    </div>
  );
};

export default Product;
