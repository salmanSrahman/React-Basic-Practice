import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary">Hello</Button>
        <Button variant="danger" className="ms-2">
          Reset Password
        </Button>
      </Form>
    </Container>
  );
};

export default AdmissionForm;
