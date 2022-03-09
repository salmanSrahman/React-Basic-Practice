import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <div className="header-part py-2 mb-5">
        <Container>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/registration">Register</Link>
          <Link to="/login">Login</Link>
          <span className="fw-bold">{user?.displayName} </span>
          {user?.email && (
            <Button variant="primary" onClick={logOut}>
              Logout
            </Button>
          )}
        </Container>
      </div>
    </>
  );
};

export default Header;
