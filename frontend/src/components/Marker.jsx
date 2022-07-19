import React from "react";
import { Card, Button } from "react-bootstrap";
import { Marker, Popup } from "react-leaflet";
import PopupCard from "./PopupCard";


function MyMarker(props) {
    const title = props.title;
    const description = props.description;
    const latitude = props.latitude;
    const longitude = props.longitude;
    const thumbnail= props.thumbnail;
    const alibaba= props.alibaba;
    const wikipedia= props.wikipedia;
    const markerid = props.markerid;



  return (
    <>
      <Marker position={[latitude,longitude]}>
        <Popup keepInView minWidth={400} closeButton={false}>           
          <PopupCard markerid={markerid} alibaba={alibaba} wikipedia={wikipedia} thumbnail={thumbnail} description={description} title={title} latitude={latitude} longitude={longitude}  />
        </Popup>
      </Marker>
    </>
  );
}

export default MyMarker;
