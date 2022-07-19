import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, Button } from "react-bootstrap";

function MapBox(props) {
  return (
    <>
      <MapContainer
        center={[32.654629, 51.667984]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.children}
      </MapContainer>
    </>
  );
}

export default MapBox