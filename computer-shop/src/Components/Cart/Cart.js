import React from "react";
import { Button } from "react-bootstrap";
import CartDetails from "../CartDetails/CartDetails";

const Cart = ({ cart, handleRemove, handleSelect, items }) => {
  console.log(items);
  return (
    <div>
      <h3>Selected Product: {cart.length} </h3>
      <div>
        {cart.map((product) => (
          <CartDetails key={product.key} product={product}></CartDetails>
        ))}
      </div>
      <div>
        {items.name && (
          <div>
            <h4>Selected Product For You:</h4>
            <div className="d-flex justify-content-center align-items-center cart-details">
              <div className="mx-2">
                <img src={items.img} alt="" />
              </div>
              <div>
                <h6>{items.name}</h6>
                <h6>${items.price}</h6>
              </div>
            </div>
          </div>
        )}
      </div>
      <Button variant="outline-success" onClick={() => handleSelect()}>
        Choose One
      </Button>
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
