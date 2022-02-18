import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);

  let { countryId } = useParams();
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/alpha/${countryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <h1>Country details Here.</h1>
      <h2>{countryId}</h2>
    </div>
  );
};

export default CountryDetails;
