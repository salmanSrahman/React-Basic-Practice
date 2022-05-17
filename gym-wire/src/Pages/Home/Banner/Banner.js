import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner-part">
      <Container>
        <Row>
          <Col xl={7}>
            <div>
              <h1>Take Your Fitness</h1>
              <h2>​To The Next Level</h2>
              <h5>
                PREMIUM ONLINE & INDIVIDUAL PERSONAL TRAINING IN FAREHAM WITH
                ROBERT COTTERILL
              </h5>
            </div>
            <button
              className="d-block my-5 custom-btn1"
              onClick={() => navigate("/services")}
            >
              Start Here
            </button>
          </Col>
          <Col xl={5}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
