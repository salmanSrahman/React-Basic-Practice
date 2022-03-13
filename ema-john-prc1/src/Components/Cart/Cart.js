import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let productPrice = 0;
  for (const product of cart) {
    productPrice = productPrice + product.price;
  }

  const Shipping = productPrice > 50 ? 15 : 0;
  const totalBeforeTax = Shipping + productPrice;
  const tax = totalBeforeTax * 0.1;
  const total = totalBeforeTax + tax;

  return (
    <div>
      <div style={{ textAlign: "center", borderBottom: "1px solid gray" }}>
        <h2>Order Summary : </h2>
        <h4>Items ordered : {cart.length}</h4>
      </div>
      <div style={{ padding: "10px" }}>
        <h4>Item Price: {productPrice.toFixed(2)}</h4>
        <h4>Shipping & Handling: : {Shipping.toFixed(2)}</h4>
        <h4>Total Before ax : {totalBeforeTax.toFixed(2)}</h4>
        <h4>Estimated Tax: {tax.toFixed(2)}</h4>
        <h2 style={{ color: "red", fontWeight: "bold" }}>
          Order Total : {total.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
