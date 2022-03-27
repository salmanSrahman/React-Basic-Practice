import React from "react";
import { Button, Col } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const { img, key, name, price, star, starCount, stock } = product;
  return (
    <div>
      <Col>
        <div className="product-details">
          <img src={img} alt="" className="img-fluid" />
          <h4>{name}</h4>
          <h5>Price: ${price}</h5>
          <h5>
            Only {stock} left in stock - <span>order soon</span>
          </h5>
          <Button>Add To Cart</Button>
        </div>
      </Col>
    </div>
  );
};

export default Product;
