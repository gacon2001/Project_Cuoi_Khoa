import React from "react";
import { useSelector } from "react-redux";

export default function ListBookingJobs() {
    const listBookingJobs = useSelector((state)=> state.fetchlistBookingJobsReducer.listBookingJobs);


  const renderListBookingJobs = () => {
      return listBookingJobs?.map((jobs)=>{
          return (
            //!!!!!!!!!!!!!!!!!
              <div></div>
          )
      })
  };

  return (
    <div>
      <h3>ListBookingJobs</h3>

      <div className="container">
        <div className="row">{renderListBookingJobs()}</div>
      </div>
    </div>
  );
}
