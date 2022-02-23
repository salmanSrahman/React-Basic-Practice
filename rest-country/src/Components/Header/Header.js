import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" ClassName="text-light">
            Navbar scroll
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-style" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-style" to="/about">
                About Us
              </NavLink>
              <NavLink className="nav-style" to="/countries">
                Country
              </NavLink>
              <NavLink className="btn btn-outline-warning ms-3" to="/contact">
                Become Member / Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
