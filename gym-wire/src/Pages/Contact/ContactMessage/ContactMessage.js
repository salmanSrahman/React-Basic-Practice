import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../../../images/contact3.jpg";
import "./ContactMessage.css";

const ContactMessage = () => {
  return (
    <div className="contact-part">
      <Container>
        <Row>
          <Col md={7} lg={8} className="mx-auto">
            <img src={contact} alt="" className="img-fluid" />
            <h5 className="text-secondary text-center">
              We will contact you soon !
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactMessage;
