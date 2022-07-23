import React from "react";

const CardBody = (props) => {
  return (
    <>
      <div className="card-body">
        <h2 className="d-flex gap-2 text-center justify-content-center mt-5">
          <i className="fa-solid fa-street-view"></i>
          {props.cityname},{props.country}
        </h2>
        <h2 className="d-flex gap-2 justify-content-center mt-4">
          <i className="fa-solid fa-temperature-full"></i>
          {props.temp}°cel
        </h2>
        <p className="text-center mt-1">
          <i className="fa-solid fa-temperature-arrow-up"></i> {props.tempM} °cel |{" "}
          <i className="fa-solid fa-temperature-arrow-down"></i> {props.tempL} °cel
        </p>
      </div>
      <div className="box justify-content-center">
        <div className="row mt-3">
          <div className="col-4 col-md-4">
            <p className="text-center">{props.weather}</p>
            <p className="text-center">weather</p>
          </div>
          <div className="col-4 col-md-4">
            <p className="text-center">{props.humidity} %</p>
            <p className="text-center">humidity</p>
          </div>
          <div className="col-4 col-md-4">
            <p className="text-center">{props.wind} km/h</p>
            <p className="text-center">wind speed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBody;
