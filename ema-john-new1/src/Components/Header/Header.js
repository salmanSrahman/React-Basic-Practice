import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-part">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand to="/home" as={NavLink}>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-menu"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/order">Order Review</NavLink>
              <NavLink to="/inventory">Manage Inventory</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
