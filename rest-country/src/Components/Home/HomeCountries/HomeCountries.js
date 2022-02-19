import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import HomeCountry from "../HomeCountry/HomeCountry";

const HomeCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 9)));
  });

  return (
    <div>
      <div className="country-container">
        <Container>
          <Row xs={1} md={4} className="g-4">
            {countries.map((country) => (
              <HomeCountry country={country}></HomeCountry>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeCountries;
