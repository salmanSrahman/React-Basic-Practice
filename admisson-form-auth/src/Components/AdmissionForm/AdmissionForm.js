import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Container>
      <Form onSubmit={handleRegistration}>
        <Form.Text id="passwordHelpBlock" className="fs-1 text-dark fw-lighter">
          Please Register
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registration
        </Button>
        <Button variant="danger" type="submit" className="ms-2">
          Reset Password
        </Button>
      </Form>
    </Container>
  );
};

export default AdmissionForm;
