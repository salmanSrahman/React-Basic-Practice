import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user } = useFirebase();
  return (
    <div>
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
              <NavLink to="/home" className="nav-menu">
                Home
              </NavLink>
              <NavLink to="/products" className="nav-menu">
                Products
              </NavLink>
              <NavLink to="/order" className="nav-menu">
                Order
              </NavLink>
              <NavLink to="/register" className="nav-menu">
                Home
              </NavLink>
              <span className="me-2">
                {user.displayName && user.displayName}{" "}
              </span>

              {user ? (
                <Button>Sign Out</Button>
              ) : (
                <NavLink to="/login" className="nav-menu">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
