import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg" style={{
        position: "fixed",
        left:"0",
        right:"0",
        bottom:"0",
        marginTop: "166px"
        }}>
        <Container style={{ justifyContent: "space-between", minHeight:"150px"}}>
          <Navbar.Brand style={{ fontSize: "14px" }}>
            پروژه دانشجویی
            <br/>
            دانشجو سپهر سروری
            <br/>

          </Navbar.Brand>
          <Navbar.Brand style={{ fontSize: "14px" }}>
            دانشکده فنی شهید شمسی پور تهران
            <br/>
            سال تحصیلی 1400-1401
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
