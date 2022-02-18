import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Country.css";

const Country = (props) => {
  const { altSpellings, flags, cca2 } = props.country;
  return (
    <div className="country-card">
      <Col>
        <Card>
          <Card.Img variant="top" src={flags.png} />
          <Card.Body>
            <Card.Title className="fs-3">{altSpellings[0]}</Card.Title>
            <Link to={`/country/${cca2}`}>See Details</Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Country;
