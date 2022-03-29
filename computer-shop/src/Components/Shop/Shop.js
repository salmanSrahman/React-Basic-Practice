import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import toast, { Toaster } from "react-hot-toast";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  const notify3 = () => toast("You Didn't Add Any Product.");

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const handleSelect = () => {
    let selectItem = [];
    const items = cart;
    var item = [Math.floor(Math.random() * items.length)];
    if ((selectItem = cart[item])) {
      setItems(selectItem);
    } else {
      notify3();
    }
  };

  const handleRemove = () => {
    setCart([]);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xl={9}>
            <Row xl={3} className="g-3">
              {products.map((product) => (
                <Product
                  key={product.key}
                  product={product}
                  handleAddToCart={handleAddToCart}
                ></Product>
              ))}
              <Toaster />
            </Row>
          </Col>
          <Col xl={3}>
            <Cart
              cart={cart}
              handleRemove={handleRemove}
              handleSelect={handleSelect}
              items={items}
            ></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
