import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeCountry = (props) => {
  const { name, flags, cca2 } = props.country;
  return (
    <div className="country-card">
      <Col>
        <Card className="single-card">
          <Card.Img variant="top" src={flags.png} />
          <Card.Body>
            <Card.Title className="fs-3">{name.common}</Card.Title>
            <Link
              className="details-btn btn btn-outline-success my-2"
              to={`/country/${cca2}`}
            >
              See Details
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default HomeCountry;
