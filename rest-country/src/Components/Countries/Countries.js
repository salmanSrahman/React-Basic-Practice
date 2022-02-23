import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [displaySearch, setDisplaySearch] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setDisplaySearch(data);
      });
  }, []);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const searchCountry = countries.filter(
      (country) =>
        country.name.common.toLowerCase() === searchText.toLowerCase()
    );
    setDisplaySearch(searchCountry);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search your country by name"
          onChange={handleSearch}
        />
      </div>
      <div className="country-container">
        <Container>
          <Row xs={1} md={4} className="g-3">
            {displaySearch.map((country) => (
              <Country country={country}></Country>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Countries;
