import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">سایت گردشگری</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0" }}>
            <Nav className="me-auto">
              <Nav.Link href="/">صفحه اصلی</Nav.Link>
              <Nav.Link href="/map">نقشه</Nav.Link>
              <Nav.Link href="/edit">اضافه کردن اطلاعات</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
