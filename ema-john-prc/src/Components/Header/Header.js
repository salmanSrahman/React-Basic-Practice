import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header-part">
      <img src={logo} alt="" />
      <nav className="nav-part">
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">Order Review</a>
        <a href="/">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
