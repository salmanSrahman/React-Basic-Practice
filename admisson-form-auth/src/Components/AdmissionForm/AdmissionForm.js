import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import firebaseInitialization from "../../Firebase/furebase.init";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./AdmissionForm.css";


firebaseInitialization();

const AdmissionForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
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
    setIsLogin(e.target.checked);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Should Have At Least 6 Characters.");
      return;
    }
    if (!/(?=.*[A-Z])(?=.*[a-z])/.test(password)) {
      setError("Password Should Have At Least One Uppercase & Lowercase.");
      return true;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleRegistration}>
        <Form.Text id="passwordHelpBlock" className="fs-1 text-dark fw-lighter">
          Please {isLogin ? "Login" : "Register"}
        </Form.Text>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onBlur={handleEmail}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onBlur={handlePassword}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Text
            id="passwordHelpBlock"
            className="text-danger fs-6 fw-bold"
          >
            {error}
          </Form.Text>
          <Form.Check
            type="checkbox"
            label="Check me out"
            onChange={toggleLogin}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isLogin ? "Login" : "Registration"}
        </Button>
        <Button variant="danger" type="submit" className="ms-2">
          Reset Password
        </Button>
      </Form>
    </Container>
  );
};

export default AdmissionForm;
