import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, price, description } = service;
  const navigate = useNavigate();
  return (
    <div>
      <Col>
        <div className="service-card">
          <img src={img} alt="" className="img-fluid w-100" />
          <h4>{name}</h4>
          <h5>${price}</h5>
          <p>{description}</p>
          <div>
            <Button
              variant="dark"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Select One
            </Button>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Service;
