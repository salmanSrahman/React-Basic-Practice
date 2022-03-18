import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <h2>Please Login</h2>
      <button>Google Sign in</button>
      <br />
      <Link to="/register">New user?</Link>
    </div>
  );
};

export default Login;
