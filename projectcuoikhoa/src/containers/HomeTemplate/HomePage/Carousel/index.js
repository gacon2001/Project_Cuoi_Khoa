import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function Carousel() {
  const [search, setSearch] = useState("")
  const handleOnChange = (event) => {
    setSearch(event.target.value)
  };
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        data-interval="4000"
        data-wrap="true"
      >
        <div className="carousel-inner fiverr__carousel">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carouselImg"
              src="../img/pic_1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carouselImg"
              src="../img/pic_2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carouselImg"
              src="../img/pic_3.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carouselImg"
              src="../img/pic_4.jpg"
              alt="Fourth slide"
            />
          </div>
        </div>
        <div className="carousel__overlay">
          <h3>
            Find the perfect <span className="overlay__text">freelance</span>
            <br />
            services for your business
          </h3>
          <div className="overlay__search">
            <input
              type="text"
              className="form-control"
              placeholder="Try building mobile app"
              name="inputWork"
              onChange={handleOnChange}
              //lay value tu input
            />
            <Link
              className="btn btn-success"
              type="button"
              to={`/listworks/${search}`}
              //nay minh truyen qua routes
            >
              Search
            </Link>
          </div>
          <div className="overlay__popular">
            <p>Popular:</p>
            <span> Website Design </span>
            <span> WordPress </span>
            <span> Logo Design </span>
            <span> Dropshipping </span>
          </div>
        </div>
      </div>
    </>
  );
}
