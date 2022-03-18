import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useContext";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="header-part">
      <Link to="/home">Home</Link>
      <Link to="/shipping">Shipping</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <span className="fw-bold me-2">{user?.displayName}</span>
      {user?.email && (
        <Button variant="outline-danger" size="sm" onClick={logOut}>
          Log Out
        </Button>
      )}
    </div>
  );
};

export default Header;
