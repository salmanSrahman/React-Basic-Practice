import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Country.css";

const Country = (props) => {
  console.log(props.country);
  const { altSpellings, flags } = props.country;
  return (
    <div className="country-card">
      <Col>
        <Card>
          <Card.Img variant="top" src={flags.png} />
          <Card.Body>
            <Card.Title className="fs-3">{altSpellings[0]}</Card.Title>
            <Button variant="outline-primary" className="fw-bold d-block my-2">
              See Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Country;
