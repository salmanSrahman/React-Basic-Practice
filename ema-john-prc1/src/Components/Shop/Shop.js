import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  const handleAddToCart = (product) => {
    const newProduct = [...cart, product];
    setCart(newProduct);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="search-container">
        <input type="text" onChange={handleSearch} />
      </div>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.key}
              handleAddToCart={handleAddToCart}
              product={product}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
