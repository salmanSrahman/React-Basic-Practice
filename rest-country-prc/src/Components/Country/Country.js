import React from "react";
import { Col } from "react-bootstrap";
import "./Country.css";

const Country = (props) => {
  console.log(props.country);
  const { name, flags, capital, region } = props.country;

  return (
    <Col>
      <div className="country-container">
        <img src={flags.png} className="img-fluid w-100" alt="" />
        <h4>{name}</h4>
        <h5>Capital: {capital}</h5>
        <h5>Region: {region}</h5>
      </div>
    </Col>
  );
};

export default Country;
