import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let subTotal = 0;
  let pQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    pQuantity = pQuantity + product.quantity;
    subTotal = subTotal + product.price * product.quantity;
  }

  let shipping = subTotal > 50 ? 15 : 0;
  let totalBeforeTax = subTotal + shipping;
  let tax = totalBeforeTax * 0.1;
  let total = totalBeforeTax + tax;

  return (
    <div className="cart">
      <div className="cart-title">
        <h1>Order Summary : </h1>
        <h2>Items Ordered: {pQuantity}</h2>
      </div>
      <div className="cart-details">
        <h3>Items : {subTotal.toFixed(2)}</h3>
        <h3>Total Before Tax : {totalBeforeTax.toFixed(2)}</h3>
        <h3>Estimated Tax : {tax.toFixed(2)}</h3>
        <h2>Order Total : {total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
