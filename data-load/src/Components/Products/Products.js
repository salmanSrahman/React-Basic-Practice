import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Row md={2}>
              {products.map((product) => (
                <Product product={product}></Product>
              ))}
            </Row>
          </Col>
          <Col>
            <h1>Cart</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
