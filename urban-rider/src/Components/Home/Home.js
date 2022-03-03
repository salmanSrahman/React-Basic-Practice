import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Transport from "../Transport/Transport";
import t1 from "../../images/Frame-1.png";
import t2 from "../../images/Frame-2.png";
import t3 from "../../images/Frame.png";
import t4 from "../../images/Group.png";

const transportInfo = [
  {
    id: 1,
    carName: "Roley",
    img: t1,
  },
  {
    id: 2,
    carName: "Alys",
    img: t2,
  },
  {
    id: 3,
    carName: "Quint",
    img: t3,
  },
  {
    id: 4,
    carName: "Adair",
    img: t4,
  },
];

const Home = () => {
  return (
    <div>
      <section className="nav-part">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Destination</Nav.Link>
                <Nav.Link href="#action2">Blog</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
                <Nav.Link href="#action2" className="btn btn-warning fw-bold">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <section className="banner-part">
        <Container>
          <div className="row">
            {transportInfo.map((transport) => (
              <Transport transport={transport}></Transport>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
