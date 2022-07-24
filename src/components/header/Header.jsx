import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="headerContainer">
      <Container>
        <Navbar.Brand className="headerTitle">FINO</Navbar.Brand>
        <Nav className="me-auto" style={{ marginLeft: "60%" }}>
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
          <Nav.Link href="/products">PRODUCTS</Nav.Link>
          <Nav.Link href="/contactus">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
