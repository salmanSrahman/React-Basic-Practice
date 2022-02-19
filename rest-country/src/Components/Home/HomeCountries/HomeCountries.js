import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeCountry from "../HomeCountry/HomeCountry";

const HomeCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 6)));
  });
  return (
    <div className="country-container">
      <Container>
        <Row xs={1} md={3} className="g-4">
          {countries.map((country) => (
            <HomeCountry country={country}></HomeCountry>
          ))}
        </Row>
        <Button variant="primary" className="text-center mt-3 mx-auto d-block">
          <Link
            to="/countries"
            className="text-light fw-bold text-decoration-none"
          >
            See More Country
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default HomeCountries;
