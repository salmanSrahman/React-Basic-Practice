import React from "react";
import "./NotFound.css";
import notFound from "../../images/404.gif";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <img src={notFound} alt="" className="img-fluid mx-auto" />
          </Col>
        </Row>
        <Button variant="dark"
          className="mx-auto d-block"
          onClick={() => navigate("/home")}
        >
          Go Back Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
