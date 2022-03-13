import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-img">
        <img src={logo} alt="" />
      </div>
      <div className="header-part">
        <div className="nav-part">
          <Link to="shop">Shop</Link>
          <Link to="orderreview">Order Review</Link>
          <Link to="inventory">Inventory</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
