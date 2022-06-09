import React from "react";
import { Button, Col } from "react-bootstrap";
import { addToDb } from "../../utilities/fakeDb";
import "./Product.css";

const Product = (props) => {
  const { id, img, name, price } = props.product;

  const addToCart = (id) => {
    addToDb(id);
  };

  return (
    <Col>
      <img src={img} alt="" className="img-fluid" />
      <h4>{name.slice(0, 18)}</h4>
      <h4>Price: {price}</h4>
      <Button onClick={() => addToCart(id)}>Buy This</Button>
    </Col>
  );
};

export default Product;
