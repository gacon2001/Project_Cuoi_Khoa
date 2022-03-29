import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Jobs(props) {
  const history = useHistory();
  const { jobs } = props;
  //
  return (
    <>
      <ul className="">
        <Link to={`/subtypejobs/${jobs._id}`}>{jobs.name}</Link>
      </ul>
    </>
  );
}
