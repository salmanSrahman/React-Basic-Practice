import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const auth = getAuth();

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const toggleLogin = (e) => {
    e.preventDefault();
    setIsLogIn(e.target.checked);
  };

  const handleRegistraition = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Should Have At Least 6 Character");
      return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      setError(
        "Password Should Have At Least One Uppercase & Lowercase Letter"
      );
      return true;
    }

    isLogIn ? logInOldUser(email, password) : createNewUser(email, password);
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        emailVerification();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logInOldUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };

  return (
    <div>
      <Container>
        <h1 className="text-success">
          Please {isLogIn ? "LogIn" : "Register"}
        </h1>
        <form onSubmit={handleRegistraition}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onBlur={handleEmail}
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
            />
          </Form.Group>
          <Form.Text
            id="passwordHelpBlock"
            className="text-danger fw-bold mb-5"
          >
            {error}
          </Form.Text>
          <Form.Group className="my-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Already Registered?"
              onChange={toggleLogin}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {isLogIn ? "Login" : "Register"}
          </Button>
          <Button
            variant="danger"
            className="ms-2"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default LoginForm;
