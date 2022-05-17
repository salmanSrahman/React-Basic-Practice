import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeService from "../HomeService/HomeService";
import "./HomeServices.css";

const HomeServices = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 3)));
  }, []);

  return (
    <div>
      <Container>
        <h2 className="my-5 title">My Best Services</h2>
        <Row xs={1} md={3} className="g-3">
          {services.map((service) => (
            <HomeService key={service.id} service={service}></HomeService>
          ))}
        </Row>
        <button
          className="d-block mx-auto my-5 custom-btn"
          onClick={() => navigate("/services")}
        >
          See All Services
        </button>
      </Container>
    </div>
  );
};

export default HomeServices;
