import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Card, Button } from "react-bootstrap";

import axios from 'axios';

import React, { useEffect, useState } from "react";
import MyMarker from "./Marker";
import MapBox from "./MapBox";

function MyMapContainer() {
  const [markers, setMarkers] = useState([
    {
      title: "",
      latitude: "",
      longitude: "",
      description: "",
      thumbnail: "",
      alibaba: "",
      wikipedia: "",
    },
  ]);

  useEffect(() => {
      axios.get('http://localhost:5000/api/locations').then((res) =>{
        //setMarkers(res.data)
        //console.log(res.data)
        setMarkers(res.data)
      })
      


  },[]);

  return (
    <div>
      <MapBox>
        {markers.map((mark)=>{
          return(<MyMarker markerid={mark._id} latitude={mark.latitude} longitude={mark.longitude} alibaba={mark.alibaba} wikipedia={mark.wikipedia} thumbnail={mark.thumbnail} description={mark.description} title={mark.title} ></MyMarker>)
        })}
      </MapBox>

    </div>
  );
}

export default MyMapContainer;
