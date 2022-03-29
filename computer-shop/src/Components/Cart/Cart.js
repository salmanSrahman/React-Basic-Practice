import React from "react";
import { Button } from "react-bootstrap";
import CartDetails from "../CartDetails/CartDetails";

const Cart = ({ cart, handleRemove }) => {
  return (
    <div>
      <h3>Selected Product: {cart.length} </h3>
      <div>
        {cart.map((product) => (
          <CartDetails key={product.key} product={product}></CartDetails>
        ))}
      </div>
      <Button variant="outline-success">Choose One</Button>
      <Button
        variant="outline-danger"
        className="ms-2"
        onClick={() => handleRemove()}
      >
        Choose Again
      </Button>
    </div>
  );
};

export default Cart;
