import React, { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiLockOpenAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.config";
import toast, { Toaster } from "react-hot-toast";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";

const Login = () => {
  let errorElement;
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleSign = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  const handleFbSign = () => {
    signInWithFacebook().then(() => {
      navigate(from, { replace: true });
    });
  };
  const handleGithubSign = () => {
    signInWithGithub().then(() => {
      navigate(from, { replace: true });
    });
  };
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);

    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={7} className="mx-auto">
            <div>
              <h1 className="title mb-3">Sign In !</h1>
            </div>
            <Row className="g-3">
              <Col xs={12} xl={4} className="g-4">
                <div className="social-sign sign1" onClick={handleGoogleSign}>
                  <FcGoogle className="fs-2" />
                  <h5 className="d-inline-block ms-3 fw-bold">Google</h5>
                </div>
              </Col>
              <Col xs={12} xl={4} className="g-4">
                <div className="social-sign sign2" onClick={handleFbSign}>
                  <SiFacebook className="fs-2 text-primary" />
                  <h5 className="d-inline-block ms-3 fw-bold">Facebook</h5>
                </div>
              </Col>
              <Col xs={12} xl={4} className="g-4">
                <div className="social-sign sign3" onClick={handleGithubSign}>
                  <ImGithub className="fs-2" />
                  <h5 className="d-inline-block ms-3 fw-bold">Github</h5>
                </div>
              </Col>
            </Row>
            <div className="or-style py-3">
              <p className="text-center fs-5 fw-bold">OR</p>
            </div>
          </Col>
          <Row>
            <Col md={7} className="mx-auto mt-3">
              <div className="login-form">
                <Form onSubmit={handleLogin}>
                  <Form.Group
                    className="mb-4 form-inner"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="form-icon">
                      <MdOutlineMarkEmailUnread className="fs-1 text-primary font-weight-light" />
                    </Form.Label>
                    <Form.Control
                      type="email"
                      autoComplete="off"
                      spellCheck="false"
                      placeholder="Enter Your Email Address"
                      name="email"
                      ref={emailRef}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4 form-inner"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="form-icon">
                      <BiLockOpenAlt className="fs-1 text-primary font-weight-light" />
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Your Secret Password"
                      name="password"
                      ref={passwordRef}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-block w-100 mt-4 d-flex justify-content-between px-4"
                  >
                    <span>Sign In</span>
                    <span>
                      <BsArrowRight className="fs-2" />
                    </span>
                  </Button>
                </Form>
                {errorElement}
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => handleResetPassword()}
                    className="btn btn-link"
                  >
                    Forget Password?
                  </button>
                  <Link to="/register">New User?</Link>
                </div>
              </div>
            </Col>
          </Row>
          <div>
            <Toaster />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
