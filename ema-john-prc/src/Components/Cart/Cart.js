import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);

  let subTotal = 0;
  for (const product of cart) {
    subTotal = subTotal + product.price;
  }

  let shipping = subTotal > 50 ? 15 : 0;
  let totalBeforeTax = subTotal + shipping;
  let tax = totalBeforeTax * 0.1;
  let total = totalBeforeTax + tax;

  return (
    <div className="cart">
      <div className="cart-title">
        <h1>Order Summary : </h1>
        <h2>Items Ordered: {cart.length}</h2>
      </div>
      <div className="cart-details">
        <h3>Items : {subTotal}</h3>
        <h3>Total Before Tax : {totalBeforeTax}</h3>
        <h3>Estimated Tax : {tax}</h3>
        <h2>Order Total : {total}</h2>
      </div>
    </div>
  );
};

export default Cart;
