import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useContext";
import "./Login.css";

const Login = () => {
  const { useGoogleSignIn } = useAuth()
  return (
    <div className="my-5">
      <h2>Please Login</h2>
      <Button className="my-3" onClick={useGoogleSignIn}>
        Google Sign in
      </Button>
      <br />
      <Link to="/register">New user?</Link>
    </div>
  );
};

export default Login;
