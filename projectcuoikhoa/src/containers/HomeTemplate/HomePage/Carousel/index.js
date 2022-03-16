import React from "react";

export default function Carousel() {
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
        </div>
        <div className="carousel__overlay">
            {/* <input /> */}
        </div>
      </div>
    </>
  );
}
