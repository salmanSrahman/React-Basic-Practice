import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Selected Product: {cart.length} </h3>
    </div>
  );
};

export default Cart;
