import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { useGoogleSignIn } = useFirebase();
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
