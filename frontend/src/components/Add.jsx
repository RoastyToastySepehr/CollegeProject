import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add() {
  const [location, setLocation] = useState({
    title: "",
    latitude: "",
    longitude: "",
    description: "",
    thumbnail: "",
    alibaba: "",
    wikipedia: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setLocation({ ...location, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/save", location)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        toast("مکان جدید به دیتابیس اضافه شد");

        setLocation({
          title: "",
          latitude: "",
          longitude: "",
          description: "",
          thumbnail: "",
          alibaba: "",
          wikipedia: "",
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col style={{ display: "grid", rowGap: "1em" }}>
            <ToastContainer />
            <Form style={{ display: "grid", rowGap: "1em" }}>
              <input
                type="text"
                name="title"
                value={location.title}
                placeholder="عنوان مکان"
                onChange={handleChange}
              ></input>
              <Row>
                <Col xs={6}>
                  <input
                    type="text"
                    name="latitude"
                    value={location.latitude}
                    placeholder="Latitude"
                    onChange={handleChange}
                  ></input>
                </Col>
                <Col xs={6}>
                  <input
                    type="text"
                    name="longitude"
                    value={location.longitude}
                    placeholder="Longitude"
                    onChange={handleChange}
                  ></input>
                </Col>
              </Row>

              <textarea
                name="description"
                placeholder="توضیحات مکان"
                rows="4"
                cols="50"
                value={location.description}
                onChange={handleChange}
              ></textarea>
              <input
                name="thumbnail"
                className="d-flex"
                type="text"
                placeholder="لینک تصویر"
                value={location.thumbnail}
                onChange={handleChange}
              />
              <input
                type="text"
                name="alibaba"
                value={location.alibaba}
                placeholder="لینک وبسایت علی بابا"
                onChange={handleChange}
              ></input>
              <input
                type="text"
                name="wikipedia"
                value={location.wikipedia}
                placeholder="لینک ویکی پدیا"
                onChange={handleChange}
              ></input>
              <Button variant="success" onClick={handleSubmit}>ذخیره</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Add;
