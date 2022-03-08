import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div className="header-part">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/register">Register</Link>

      {user?.email ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;
