import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col xl={9}>{
              products.map(product => )
          }</Col>
          <Col xl={3}>
            <h1>Cart</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
