import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import firebaseAuthentication from "../../Firebase/Firebase.init";
import "./Contact.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

firebaseAuthentication();

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Should Be At Least 6 Characters.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (result) => result.user
    );
    setError("");
  };

  return (
    <div className="contact-part">
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <Form onSubmit={handleRegistration}>
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
              <Form.Text className="text-danger fw-bold">{error}</Form.Text>
              <Form.Group className="my-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Already registered" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
