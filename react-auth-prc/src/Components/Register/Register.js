import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <h2>Please Register.</h2>
      <form>
        <input type="email" />
        <br /> <br />
        <input type="password" />
        <br /> <br />
        <input type="submit" value="submit" />
        <br />
        <br />
        <Link to="/login">Already Registered?</Link>
      </form>
    </div>
  );
};

export default Register;
