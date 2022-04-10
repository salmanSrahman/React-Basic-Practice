import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "./firebase.Config";
const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password must have at least 1 uppercase");
      return;
    }
    if (!/(?=.*?[a-z])/.test(password)) {
      setError("Password must have at least 1 lowercase");
      return;
    }
    if (!/(?=.*?[0-9])/.test(password)) {
      setError("Password must have at least 1 digit");
      return;
    }
    setValidated(true);
    setError("");
    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          verifiedEmail();
          console.log(user);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const verifiedEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then(() => {});
  };
  const handleRegistration = (event) => {
    setRegistered(event.target.checked);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Container>
        <div className="w-50 mx-auto">
          <h2 className="text-danger">
            Please {registered ? "Login" : "Register"}
          </h2>
          <Form noValidate validated={validated} onSubmit={handleForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onBlur={handleEmail}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
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
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <p className="text-danger">{error}</p>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Already Registered?"
                onChange={handleRegistration}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {registered ? "Login" : "Register"}
            </Button>
            <Button
              variant="success"
              type="submit"
              className="ms-2"
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default App;
