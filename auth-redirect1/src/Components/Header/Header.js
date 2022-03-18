import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut} = useFirebase();

  return (
    <div className="header-part">
      <Link to="/home">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      {user?.email && (
        <Button variant="outline-danger" size="sm" onClick={logOut}>
          Log Out
        </Button>
      )}
    </div>
  );
};

export default Header;
