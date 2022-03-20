import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./LogIn.css";

const LogIn = () => {
  const { user, signInUsingGoogle } = useAuth();
  return (
    <div className="text-center">
      {user?.email ? (
        <div>
          <h3>Successfully Logged In</h3>
          <h3>User : {user.displayName}</h3>
        </div>
      ) : (
        <div>
          <h2>Please Log In.</h2>
          <Button variant="success" onClick={signInUsingGoogle}>
            Google Sign In
          </Button>
          <Link to="/register" className="d-block mt-3">
            Not Registered User?
          </Link>
        </div>
      )}
    </div>
  );
};

export default LogIn;
