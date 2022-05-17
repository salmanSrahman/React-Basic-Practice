import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Register.css";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiLockOpenAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithGithub,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import auth from "../../Firebase.config";
import Loading from "../Loading/Loading";

const Register = () => {
  let errorElement;
  const [signInWithGoogle, loading1] = useSignInWithGoogle(auth);
  const [signInWithFacebook, loading2] = useSignInWithFacebook(auth);
  const [signInWithGithub, loading3] = useSignInWithGithub(auth);
  const [createUserWithEmailAndPassword, error, loading4] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (loading1 || loading2 || loading3 || loading4 || updating) {
    return <Loading></Loading>;
  }

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

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate(from, { replace: true });
  };
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={7} className="mx-auto">
            <div>
              <h1 className="title mb-4">Get Started For Free!</h1>
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
                <Form onSubmit={handleRegister}>
                  <Form.Group
                    className="mb-4 form-inner"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="form-icon">
                      <MdOutlineMarkEmailUnread className="fs-1 text-primary font-weight-light" />
                    </Form.Label>
                    <Form.Control
                      type="name"
                      autoComplete="off"
                      spellCheck="false"
                      placeholder="Enter Your Full Name"
                      name="name"
                    />
                  </Form.Group>
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
                      placeholder="Choose Your Password"
                      name="password"
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between">
                    <Link to="/home"></Link>
                    <Link to="/login">Already Have An Account?</Link>
                  </div>
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
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
