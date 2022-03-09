import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-part pt-3 pb-5">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/registration">Register</Link>
      <Link to="/login">Login</Link>
      <Button variant="primary">Logout</Button>
    </div>
  );
};

export default Header;
