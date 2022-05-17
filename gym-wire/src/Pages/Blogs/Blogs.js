import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Blogs.css";
import auth from "../../images/auth.png";
import firebase1 from "../../images/firebase1.jpg";
import firebase2 from "../../images/firebase2.webp";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-container">
      <Container>
        <h3 className="my-5 title">My Blogs:</h3>
        <Row className="g-5">
          <Col md={4} xs={12}>
            <div className="blog-card">
              <div className="blog-img">
                <img src={auth} alt="" className="img-fluid" />
              </div>
              <div className="blog-des">
                <h5 className="text-primary my-2 fw-bold">
                  Difference between authentication & authorization?
                </h5>
                <h6 className="text-secondary fw-bold lh-base">
                  Firstly, Authentication is the way of verifying who the user
                  is, besides authorization is the way of verifying what exact
                  applications, files, and data a user has access & uses.
                  Authentication works by using passwords, one-time pins,
                  biometric information, or any other information provided or
                  given by the user. Authorization works through settings that
                  are implemented and maintained by the admin of that particular
                  website.
                </h6>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="blog-card">
              <div className="blog-img">
                <img src={firebase2} alt="" className="img-fluid" />
              </div>
              <div className="blog-des">
                <h5 className="text-primary my-2 fw-bold">
                 Why we use firebase & alternative of firebase for authentication:
                </h5>
                <h6 className="text-secondary fw-bold lh-base">
                  Firebase is called Backend-as-a-Service (BaaS) what is a
                  platform by Google that provides functionalities and helps
                  with the backend development of Android, iOS, or web devices.
                  We use firebase as database, as cloud storage, as cloud
                  messaging & also for remote config. The best 4 firebase
                  alternatives for authentication is - <br />
                  (1)-Back4App
                  <br />
                  (2)-Parse
                  <br />
                  (3)-AWS Amplify
                  <br />
                  (4)-Back4App
                  <br />
                  (5)-Deployd
                  <br />
                </h6>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="blog-card">
              <div className="blog-img">
                <img src={firebase1} alt="" className="img-fluid" />
              </div>
              <div className="blog-des">
                <h5 className="text-primary my-2 fw-bold">
                 Services of firebase except authentication:
                </h5>
                <h6 className="text-secondary fw-bold lh-base">
                  There are many services which Firebase provides but Most
                  useful of them are: - <br />
                  (1)-Cloud Firestore
                  <br />
                  (2)-Cloud Functions
                  <br />
                  (3)-Hosting
                  <br />
                  (4)-Cloud Storage
                  <br />
                  (5)-Google Analytics
                  <br />
                  (5)-Cloud Messaging
                  <br />
                </h6>
              </div>
            </div>
          </Col>
        </Row>
        <div className=" text-center my-5">
          <button className="custom-btn" onClick={() => navigate("/home")}>
            Back Home
          </button>
          <button
            className="ms-3 custom-btn"
            onClick={() => navigate("/services")}
          >
            See Services
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
