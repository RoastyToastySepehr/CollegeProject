import React from "react";
import { Card,Button } from "react-bootstrap";
import axios from 'axios';

async function getWeatherData(latitude, longitude){
  try {
    let res = await axios({
         url: 'https://community-open-weather-map.p.rapidapi.com/weather',
         params: {
          lat: latitude,
          lon: longitude,
          //callback: 'test',
          //id: '2172797',
          lang: 'en',
          units: 'metric',
          mode: 'json'
         },
         method: 'get',
         timeout: 8000,
         headers: {
          'X-RapidAPI-Key': '4f24c03ab7msh625b89ba2208e93p1614eajsn22d3d4a31d51',
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
     })    
     return res.data
 }
 catch (err) {
     console.error(err);
 }
}
function PopupCard(props) {
  let weatherdata = {};
  let markerid = props.markerid;
  getWeatherData(props.latitude, props.longitude)
  .then(res => {
    if(res == null || res == undefined)
      return;
    weatherdata = res;
    if(weatherdata.weather != null && weatherdata.weather[0].icon != null){
      var iconcode = weatherdata.weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      document.querySelector("div[data-key='" + markerid + "'] img[data-weather]").src = iconurl;
    }
    if(weatherdata.main != null && weatherdata.main.temp != null)
      document.querySelector("div[data-key='" + markerid + "'] p[data-temp] span").innerText = "دمای هوا: " + weatherdata.main.temp + "°";
  });  
  return (
    <>
      <Card data-key={markerid} style={{ border: "none", textAlign: 'right', direction: 'rtl'}}>
        <Card.Img
          variant="top"
          src={props.thumbnail}
          style={{borderRadius: '20px'}}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text data-temp><span></span><img data-weather/></Card.Text>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Text>
            {weatherdata.temp}
          </Card.Text>
          <div
            style={{
              flexDirection: "row-reverse",
              display: "flex",
              justifyContent: "space-between",
            }}
          >            
            <a style={{color: 'white'}} href={props.alibaba} className="btn btn-success">رفتن به علی بابا</a>
            <a style={{color: 'white'}} href={props.wikipedia} className="btn btn-success">اطلاعات بیشتر در ویکی پدیا</a>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default PopupCard;