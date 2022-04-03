import React from "react";
import { Link } from "react-router-dom";

export default function SubImg(props) {
  const { sub } = props;

  return (
    <>
      <div className="subtypejob__item">
        <Link to={``}>
          <img src={sub.image} />
          <p className="subtypejob__text">{sub.name}</p>
        </Link>
      </div>
    </>
  );
}
