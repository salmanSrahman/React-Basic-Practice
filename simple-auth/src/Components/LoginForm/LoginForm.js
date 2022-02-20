import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleRegistraition = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Should Have At Least 6 Character");
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div>
      <Container>
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
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default LoginForm;
