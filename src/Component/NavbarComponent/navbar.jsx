import React from "react";
import { Navbar,Nav,Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const NavbarComponent=()=>{
    const location =useLocation();
    const ishome=location.pathname === "/";

return (
    <Navbar
        expand="lg"
        fixed="top"
        className={ishome ?"transparent-navbar": "solid-navbar"}
    >
        <Container>
            <Navbar.Brand href="/">Digital Card</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/Galley">Galley</Nav.Link>
                    <Nav.Link href="/Contact">Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>
);
};
export default NavbarComponent;