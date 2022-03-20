import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header-part">
      <Link to="/home">Home</Link>
      <Link to="/shipping">Shipping</Link>
      <Link to="/register">Register</Link>
      {user?.email ? (
        <Button onClick={logOut}>Log Out</Button>
      ) : (
        <Link to="/login">Log in</Link>
      )}
    </div>
  );
};

export default Header;
