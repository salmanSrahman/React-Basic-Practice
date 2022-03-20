import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="text-center">
      <h1>Please Log In.</h1>
      <Button variant="success">Google Sign In</Button>
      <Link to="/register" className="d-block mt-3">
        Not Registered User?
      </Link>
    </div>
  );
};

export default LogIn;
