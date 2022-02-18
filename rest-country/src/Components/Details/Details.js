import React from "react";
import "./Details.css";

const Details = (props) => {
  console.log(props.country);
  const { name, flags, capital, region, population, subregion, languages } =
    props.country;
  return (
    <div className=" d-flex justify-content-center">
      <div className="details-card">
        <img src={flags.png} alt="" />
        <div className="details-text">
          <h3>{name.common}</h3>
          <h6>Capital : {capital}</h6>
          <h6>Region : {region}</h6>
          <h6>Subregion : {subregion}</h6>
          <h6>Population : {population}</h6>
          <h5>Language : {languages.fra}</h5>
        </div>
      </div>
    </div>
  );
};

export default Details;
