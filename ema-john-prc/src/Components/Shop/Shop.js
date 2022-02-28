import React, { useEffect } from "react";
import "./Shop.css";

const Shop = () => {
  useEffect(() => {
    fetch("/products.JSON")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container"></div>
      <div className="cart-container"></div>
    </div>
  );
};

export default Shop;
