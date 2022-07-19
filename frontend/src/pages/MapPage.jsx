import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../components/MapContainer";

const MapPage = () => {
  return (
    <>
      <Container fluid style={{ padding: 0 }}>
        <Row style={{margin:0}}>
          <Col xs={12} style={{padding:0}}>
            <Map />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MapPage;
