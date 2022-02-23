import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../Details/Details";
import Preloader from "../Preloader/Preloader";
import "./CountryDetails.css";

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);
  const [preloaderVisibility, setPreloaderVisibility] = useState("block");

  let { countryId } = useParams();
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/alpha/${countryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setPreloaderVisibility("none");
      });
  });

  return (
    <div className="my-5">
      <Preloader visibility={preloaderVisibility} />
      {countries.map((country) => (
        <Details country={country}></Details>
      ))}
    </div>
  );
};

export default CountryDetails;
