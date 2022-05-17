import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Testimonial from "./Testimonial/Testimonial";
import "./Testimonials.css";

const Testimonials = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div>
      <Container>
        <h2 className="my-5 title">What My Amazing Clients Say</h2>
        <Row xl={3} className="g-3">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              testimonial={testimonial}
            ></Testimonial>
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

export default Testimonials;
