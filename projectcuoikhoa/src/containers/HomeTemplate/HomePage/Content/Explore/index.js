import React from "react";
import {
  FaPen,
  FaDesktop,
  FaBook,
  FaFilm,
  FaMicrophone,
  FaCode,
  FaHandshake,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";

export default function Explore() {
  return (
    <>
      <div className="explore">
        <div className="explore__title">
          <h5>Explore the marketplace</h5>
        </div>
        <div className="explore__content">
          <div className="explore__item">
            <div className="explore__icon">
              <FaPen />
            </div>
            <p>Graphic & Design</p>
          </div>
          <div className="explore__item">
            <div className="explore__icon">
              <FaDesktop />
            </div>
            <p>Digitial Marketing</p>
          </div>
          <div className="explore__item">
            <div className="explore__icon">
              <FaBook />
            </div>
            <p>Writting & Translation</p>
          </div>
          <div className="explore__item">
            <div className="explore__icon">
              <FaFilm />
            </div>
            <p>Video & Animation </p>
          </div>
          <div className="explore__item">
            <div className="explore__icon">
              <FaMicrophone />
            </div>
            <p>Music & Audio</p>
          </div>
          <div className="explore__item">
            <div className="explore__icon">
              <FaCode />
            </div>
            <p>Programming & Tech</p>
          </div>
          <div className="explore__item">
            <div className="explore__icon">
              <FaHandshake />
            </div>
            <p>Business</p>
          </div>
          <div className="explore__item">
            <div className="explore__icon">
              <FaUsers />
            </div>
            <p>Lifestyle</p>
          </div>
          <div className="explore__item">
            <div className="explore__icon">
              <FaDatabase />
            </div>
            <></>
            <p>Data</p>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}
