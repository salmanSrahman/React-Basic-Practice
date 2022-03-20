import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
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
