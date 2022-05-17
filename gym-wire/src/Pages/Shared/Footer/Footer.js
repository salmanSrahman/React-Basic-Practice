import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-part bg-light">
      <Container>
        <Row className="g-5">
          <Col md={4} sm={6} xs={12}>
            <div className="footer-title pb-4">
              <h4 className="text-uppercase">About Us</h4>
            </div>
            <div className="footer-first-text">
              <p>
                <span className="orange-color fw-bold fs-5">RCoterill</span> Is An Online
                Review Platform Which Will Give You The Suggestion Of Best
                Computer That Suit Your Choice & Budget.
              </p>
            </div>
            <div className="footer-first-social pt-4">
              <a href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div className="footer-title pb-4">
              <h4 className="text-uppercase">Quicklinks</h4>
            </div>
            <div className="footer-second-side">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/login">Login</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div className="footer-title pb-4">
              <h4 className="text-uppercase">Address</h4>
            </div>
            <div className="footer-second-side">
              <p>
                <span className="orange-color fw-bold">RCoterill</span>
                <span className="d-block">
                  {" "}
                  House: 740 Level: 7, Lift -7 Suvastu Arcade ( ICT Bhaban)
                </span>
                <span className="d-block">
                  New Elephants Road Dhaka-1205, Bangladesh (Tuesday Closed)
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
