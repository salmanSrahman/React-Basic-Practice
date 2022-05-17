import React from "react";
import { Col } from "react-bootstrap";
import "./Testimonial.css";

const Testimonial = ({ testimonial }) => {
  const { name, des } = testimonial;
  return (
    <div>
      <Col>
        <div className="testimonial-card">
          <p>{des}</p>
          <h5>{name}</h5>
        </div>
      </Col>
    </div>
  );
};

export default Testimonial;
