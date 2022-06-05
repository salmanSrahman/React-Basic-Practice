import { useEffect, useState } from "react";
import Country from "./Components/Country/Country";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Counter from "./Components/Counter/Counter";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <Counter />
      <h1 className="text-center">All Countries</h1>
      <Container>
        <Row md={3} className="g-2">
          {countries.map((country) => (
            <Country country={country}></Country>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
