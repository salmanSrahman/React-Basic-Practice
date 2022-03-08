import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-part">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <button>Logout</button>
    </div>
  );
};

export default Header;
