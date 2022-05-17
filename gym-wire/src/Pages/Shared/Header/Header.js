import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import CustomLink from "../../../CustomLink";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import auth from "../../../Firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth).then(() => {});
  };

  return (
    <>
      <Navbar sticky="top" className="navbar" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} alt="" width="250" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-menu"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/services">Services</CustomLink>
              <CustomLink to="/blogs">Blogs</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </Nav>
            <span className="fw-bold">
              {user?.displayName && (
                <Button variant="outline-warning" className="ms-3 fw-bold">
                  <BsFillPersonCheckFill className="me-1" />
                  {user.displayName}
                </Button>
              )}
            </span>
            {!user ? (
              <Button
                variant="outline-warning"
                as={Link}
                to="/login"
                className="ms-3 fw-bold"
              >
                <FaUserPlus className="me-1 fw-bold" />
                Login
              </Button>
            ) : (
              <Button
                variant="danger"
                className="ms-3 fw-bold"
                as={Link}
                to="/home"
                onClick={handleLogOut}
              >
                <FaUserMinus className="me-1" />
                Logout
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
