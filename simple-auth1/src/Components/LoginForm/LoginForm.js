import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/Firebase.Init";

firebaseAuthentication();

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();

  const handleToggleLogin = (e) => {
    e.preventDefault();
    setIsLogin(e.target.checked);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Should Be At Least 6 Characters");
      return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      setError("Password Should Have At Least One UpperCase & LowerCase.");
      return;
    }

    isLogin ? loginUser(email, password) : createNewUser(email, password);
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="mt-5">
      <h1>Please {isLogin ? "Login" : "Register"}</h1>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onBlur={handleEmail}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onBlur={handlePassword}
            required
          />
        </Form.Group>
        <Form.Text className="text-danger fw-bold">{error}</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onChange={handleToggleLogin}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isLogin ? "Login" : "Register"}
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
