import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Cart : {cart.length}</h1>
    </div>
  );
};

export default Cart;
