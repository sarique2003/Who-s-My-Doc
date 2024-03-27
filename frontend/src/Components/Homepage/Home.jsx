import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Home() {
  return (
    <div className="container-main">
      <Navbar expand="lg" className="bg-custom-blue">
        <Container>
          <Navbar.Brand href="#home">Whos my Doc</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#signup">Register</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-text">
        <text className="mt-8"> Your health </text>
        <text>our priority</text>
        <p class="healthcare-message">
          We Sarique, Abhik, Krishnendu, Ayush came together to create this
          healthcare management system,driven by our passion for improving
          healthcare management.Every year about 8% healthcare tragedies occur
          in our nation because of the inability of the population to reach the
          correct doctor for normally treatable health ailments.Through our
          collective efforts and utilisation of our DataBase Managmenet and
          development skills, we aim to make a positive impact on people's lives
          by providing innovative solutions and compassionate care.
        </p>
      </div>
    </div>
  );
}

export default Home;
