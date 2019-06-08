import React from "react";
import { Navbar, NavDropdown, FormControl, Button, Nav } from "react-bootstrap";
import Form from "react-bootstrap/FormGroup";

function TopNav({ setMenu }) {
  return (
    <Navbar bg="light" expand="lg" onSelect={data => setMenu(data)}>
      <Navbar.Brand href="#home">Conversions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link eventKey="length">Length</Nav.Link>
          <Nav.Link eventKey="mass">Mass</Nav.Link>
          <Nav.Link eventKey="volume">Volume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;
