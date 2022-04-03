import React, { useEffect } from "react";
export default function SearchJobs({ jobs }) {
  return (
    <>
      <div className="card listworks__item">
        <img src={jobs.image} className="card-img-top" alt="..." />
        <div className="listworks__avatar">
          <h6 className="card-title"></h6>
        </div>
        <p className="">{jobs.name}</p>
      </div>
    </>
  );
}
