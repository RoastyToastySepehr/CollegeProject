import React from "react";

import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import Add from "../components/Add";
import List from '../components/ListCard'

const EditPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <Tabs
              defaultActiveKey="add"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="add" title="اضافه کردن">
                <Add/>
              </Tab>
              <Tab eventKey="list" title="لیست مکان ها">
                <List/>
              </Tab>
            </Tabs>
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditPage;
