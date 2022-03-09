import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-part py-2 mb-5">
        <Container>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/registration">Register</Link>
          <Link to="/login">Login</Link>
          <Button variant="primary">Logout</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
