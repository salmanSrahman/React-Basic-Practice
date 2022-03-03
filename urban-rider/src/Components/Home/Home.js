import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Transport from "../Transport/Transport";

const Home = () => {
  const [transports, setTransports] = useState([]);

  useEffect(() => {
    fetch("./transport.JSON")
      .then((res) => res.json())
      .then((data) => setTransports(data));
  });

  return (
    <div>
      <section className="nav-part">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Destination</Nav.Link>
                <Nav.Link href="#action2">Blog</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
                <Nav.Link href="#action2" className="btn btn-warning fw-bold">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <section className="banner-part">
        <Container>
          <div className="row">
            {transports.map((transport) => (
              <Transport transport={transport}></Transport>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
