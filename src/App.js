import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import CardBody from "./CardBody";
import { useState } from "react";
const App = () => {
  const key = "43eaa6aaf035ba03fe2fa5706b566c27";
  const [data, setData] = useState({
    name:"",
    weather: "",
    country: "",
    temp: 0,
    tempmin: 0,
    tempmax: 0,
    humidity: 0,
    windspeed: 0,
  });
  const [city, setCity] = useState();
  const [show,setShow] = useState(false)
  const clickEv = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    const res = await axios.get(url);
    setShow(true);
    // console.log(res.data);
    setData({
      name:res.data.name,
      weather: res.data.weather.length>1 ?res.data.weather[1].main : res.data.weather[0].main,
      country: res.data.sys.country,
      temp: res.data.main.temp.toFixed(2),
      tempmin: res.data.main.temp_min.toFixed(2),
      tempmax: res.data.main.temp_max.toFixed(2),
      humidity: res.data.main.humidity,
      windspeed: res.data.wind.speed,
    });
    
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-10 col-md-3">
          <div className="card">
            <div className="d-flex gap-2">
              <input
                type="text"
                placeholder="Enter the City"
                className="form-control"
                name="city"
                vlaue={city}
                autoComplete="off"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <button className="btn btn-outline-success" onClick={clickEv}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            {show?(<CardBody
              cityname={data.name}
              temp={data.temp}
              country={data.country}
              tempL={data.tempmin}
              tempM= {data.tempmax}
              weather={data.weather}
              humidity={data.humidity}
              wind={data.windspeed}
            />):(<CardBody
              cityname="Kolkata"
              temp="30.97"
              country="IN"
              tempL="30.97"
              tempM= "30.97"
              weather= "Rain"
              humidity="79"
              wind="4.12"
            />)}
            {/* <CardBody
              cityname={data.name}
              temp={data.temp}
              country={data.country}
              tempL={data.tempmin}
              tempM= {data.tempmax}
              weather={data.weather}
              humidity={data.humidity}
              wind={data.windspeed}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
