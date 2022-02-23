import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Details.css";

const Details = (props) => {
  console.log(props.country);

  let navigate = useNavigate();

  const { name, flags, capital, region, population, subregion, languages } =
    props.country;
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="details-card">
        <img src={flags.png} alt="" />
        <div className="details-text">
          <h3>{name.common}</h3>
          <h6>Capital : {capital}</h6>
          <h6>Region : {region}</h6>
          <h6>Subregion : {subregion}</h6>
          <h6>Population : {population}</h6>
          <h5>Language : {languages.fra}</h5>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/home");
            }}
          >
            Back Home
          </Button>
          <Button className="ms-2" variant="outline-warning">
            Back Countries
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
