import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user } = useFirebase();
  return (
    <div className="header-part">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      {user?.email && <button>Logout</button>}
    </div>
  );
};

export default Header;
