import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Left Section - Logo */}
        <Navbar.Brand href="/" className="navbar-brand">UNIQUE</Navbar.Brand>

        {/* Right Section - Nav Links & Login */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/" className="nav-item">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-item">About</Nav.Link>
            <Nav.Link href="/gallery" className="nav-item">Gallery</Nav.Link>
            <Nav.Link href="/contact" className="nav-item">Contact</Nav.Link>
            <Nav.Link href="/login" className="nav-item">login</Nav.Link>
            {/* Login Button */}
            {/* <Button href="/login" variant="outline-dark" className="login-btn">Login</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
