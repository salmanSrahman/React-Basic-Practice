import { getAuth } from "firebase/auth";
import React from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../Firebase.config";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const handleGoogleSign = () => {
    signInWithGoogle()
    .then(() => {
    navigate(from, { replace: true });
    })
    
  };

  return (
    <div>
      <Container>
        <Button onClick={handleGoogleSign} className="mx-auto">
          Google SignIn
        </Button>
        <div className="w-50 mx-auto">
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
