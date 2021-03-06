import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const exist = cart.find((prd) => prd.key === product.key);
    let newCart = [];
    if (exist) {
      const rest = cart.filter((prd) => prd.key !== product.key);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const searchText = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDisplayProducts(searchText);
  };

  return (
    <>
      <div className="search-container">
        <input type="text" onChange={handleSearch} />
      </div>
      <div className="shop-container">
        <div className="products-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              handleAddToCart={handleAddToCart}
              product={product}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link
              to="/orderreview"
              className="btn-regular"
              style={{ textDecoration: "none", color: "black" }}
            >
              Review Your Order
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};
export default Shop;
