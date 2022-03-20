import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import "./Register.css";

const Register = () => {
  const { user } = useFirebase();

  return (
    <div>
      <Container>
        {user?.email ? (
          <div className="text-center">
            <h3>You Are Already Logged In</h3>
            <h3>User : {user.displayName}</h3>
          </div>
        ) : (
          <Row>
            <h1 className="text-center">Please Register</h1>
            <Col md={6} className="mx-auto">
              <Form>
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Register;
