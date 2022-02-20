import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const LoginForm = () => {
  const handleRegistraition = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <Container>
        <form onSubmit={handleRegistraition}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
