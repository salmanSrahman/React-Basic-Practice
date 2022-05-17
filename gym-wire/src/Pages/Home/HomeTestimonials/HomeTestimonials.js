import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeTestimonial from "../HomeTestimonial/HomeTestimonial";
import "./HomeTestimonials.css";

const HomeTestimonials = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.slice(0, 3)));
  }, []);
  return (
    <div>
      <Container>
        <h2 className="my-5 title">What My Amazing Clients Say</h2>
        <Row xs={1} xl={3} className="g-3">
          {testimonials.map((testimonial) => (
            <HomeTestimonial
              key={testimonial.id}
              testimonial={testimonial}
            ></HomeTestimonial>
          ))}
        </Row>
        <button
          className="d-block mx-auto my-5 custom-btn"
          onClick={() => navigate("/testimonials")}
        >
          See All Testimonial
        </button>
      </Container>
    </div>
  );
};

export default HomeTestimonials;
