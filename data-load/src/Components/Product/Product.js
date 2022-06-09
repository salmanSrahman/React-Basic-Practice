import React from "react";
import { Col } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
  const { id, img, name, price } = props.product;

  return (
    <Col>
      <img src={img} alt="" className="img-fluid" />
      <h4>{name.slice(0, 18)}</h4>
      <h4>Price: {price}</h4>
    </Col>
  );
};

export default Product;
