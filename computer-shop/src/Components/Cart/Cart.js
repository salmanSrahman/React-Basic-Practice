import React from "react";
import CartDetails from "../CartDetails/CartDetails";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Selected Product: {cart.length} </h3>
      <div>
        {cart.map((product) => (
          <CartDetails key={product.key} product={product}></CartDetails>
        ))}
      </div>
    </div>
  );
};

export default Cart;
