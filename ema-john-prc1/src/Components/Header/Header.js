import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header-part">
      <div className="header img">
        <img src={logo} alt="" />
      </div>
      <div className="header-part">
         <Link to=""></Link>
      </div>
    </div>
  );
};

export default Header;
