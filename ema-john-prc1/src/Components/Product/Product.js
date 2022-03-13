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
        <h2> {name}</h2>
      </div>
    </div>
  );
};

export default Product;
