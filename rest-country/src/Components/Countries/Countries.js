import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  });

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {countries.map((country) => (
          <Country key={country.tld} country={country}></Country>
        ))}
      </Row>
    </Container>
  );
};

export default Countries;
