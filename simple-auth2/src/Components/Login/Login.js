import React from "react";
import { Button, Container } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { user, signInUsingGoogle } = useFirebase();
  return (
    <div>
      <Container>
        <div className="mx-auto text-center">
          {user?.email ? (
            <h1>User: {user.displayName}</h1>
          ) : (
            <div>
              <h3>Please login</h3>
              <Button variant="warning" onClick={signInUsingGoogle}>
                Google Sign In
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Login;
