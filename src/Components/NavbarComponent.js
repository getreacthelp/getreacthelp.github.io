import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routingConstants } from "../utils/constants";

function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Link to="/" className="navbar-brand mx-2">
        Get React Help
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav className="me-auto">
            <Link to={routingConstants.HOME_PAGE} className="nav-link">
              Home
            </Link>
            <Link to={routingConstants.DOCS} className="nav-link">
              Docs
            </Link>
            <Link to={routingConstants.GAMES} className="nav-link">
              Games
            </Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
