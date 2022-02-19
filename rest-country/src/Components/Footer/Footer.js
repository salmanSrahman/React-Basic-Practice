import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-part">
      <Container>
        <div className="d-flex justify-content-around">
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink className="footer-style" to="/home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-style" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-style" to="/countries">
                    Country
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-style" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink className="footer-style" to="/home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-style" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-style" to="/countries">
                    Country
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-style" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink className="footer-style" to="/home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-style" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-style" to="/countries">
                    Country
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-style" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
