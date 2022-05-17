import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../../images/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about_part">
      <Container>
        <Row>
          <Col md={5}>
            <div>
              <div className="shape-6"></div>
              <div className="shape-7"></div>
              <div className="about_img d-flex justify-content-end">
                <img src={profile} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="about_text">
              <h2>
                About <span>Me</span>
              </h2>
              <h3>I'm Salman S. Rahman. </h3>
              <div className="typed-strings1">
                <h3>
                  I'm a <span>Passionate Web</span> Designer.
                </h3>
              </div>
              <span className="typed1"></span>
              <p className="text-secondary fs-6 font-italic">
                Although I am a web desginer now but, my dream is to be a full
                stack web developer. Recently I'm learning web development from
                webprogrammingHero.com what is mainly focusd in front end
                development specialized with React Js framework.
                I am working hard to learn web development with full
                dedication and passion. My dream is to get a job in any
                international company as a web developer and I am fully confident that within next 3-4 months I will touch my dream.
                That's my mission.
              </p>
              <a href="#"> Download Resume</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
