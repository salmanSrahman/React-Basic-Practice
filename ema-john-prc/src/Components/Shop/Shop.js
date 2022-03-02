import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("/products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  useEffect(() => {
    const savedCart = getStoredCart();
    if (products.length) {
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
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const searchText = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDisplayProducts(searchText);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Your Product"
          onChange={handleSearch}
        />
      </div>
      <div className="shop-container">
        <div className="products-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
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
