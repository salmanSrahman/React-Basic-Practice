import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Container>
        <div className="mx-auto text-center">
          <h3>Please login</h3>
          <Button variant="warning">Google Sign In</Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
