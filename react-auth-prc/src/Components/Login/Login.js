import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();

  return (
    <div>
      <h2>Please Log In.</h2>
      <br />
      <button onClick={signInUsingGoogle}>Google Sign In</button>
      <br />
      <br />
      <Link to="/register">New User?</Link>
    </div>
  );
};

export default Login;
