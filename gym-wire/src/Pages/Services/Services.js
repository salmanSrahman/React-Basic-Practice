import React from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();
  const [services] = useServices([]);

  return (
    <div>
      <Container>
        <h2 className="my-5 title">My Best Services</h2>
        <Row xs={1} md={3} className="g-3">
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Row>
        <button
          className="d-block mx-auto my-5 custom-btn"
          onClick={() => navigate("/home")}
        >
          Back Home
        </button>
      </Container>
    </div>
  );
};

export default Services;
