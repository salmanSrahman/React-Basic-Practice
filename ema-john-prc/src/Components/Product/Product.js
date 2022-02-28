import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, star, stock } = props.product;

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
        <Rating
          className="rating-style"
          initialRating={star}
          readonly
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
        />
        <button
          class="btn-regular"
          onClick={() => {
            props.handleShop(props.product);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
