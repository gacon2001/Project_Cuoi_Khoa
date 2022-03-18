import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import SearchJobsPage from "../SearchJobsPage";
import NavbarJobs from "../_components/NavbarJobs";
import { actDeleteJobsApi, actFetchListJobsApi, actBookingJobsApi } from "./modules/actions";

export default function ListJobsPage(path) {
  const listJobs = useSelector((state) => {
    return state.fetchListJobsReducer.listJobs;
  });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(actFetchListJobsApi());
  }, []);

  const renderListJobs = () => {
    return listJobs?.map((jobs) => {
      return (
        <div className="card text-left" key={jobs._id} >
          <img className="card-img-top" src={jobs.image} alt={jobs.name} />
          <div className="card-body">
            <Link to={`/detail-job/${jobs._id}`}>{jobs.name}</Link>
              <div>{jobs.rating}</div>
            <div>{jobs.price}</div>
            {/* <div>{jobs.usersBooking}</div> */}
            {/* <div>{jobs.proServices}</div> */}
          </div>

          {/* <Link to="/edit-jobs" className="btn btn-success">Edit</Link> */}
          <button className="btn btn-success" onClick={()=> history.push(`/edit-jobs/${jobs._id}`)}>Edit</button>
      <button className="btn btn-danger" onClick={()=> dispatch(actDeleteJobsApi(jobs._id))}>Delete</button>

      {/* book job này -> thêm vào listBookingJobs */}
      <button className="btn btn-warning" onClick={()=> dispatch(actBookingJobsApi(jobs._id))}>Booking</button>
        </div>
      );
    });
  };

  return (
    <div>
      {/* {path == "/list-subType-jobs" && path == "/list-type-jobs" && path == "/list-jobs" && <NavbarJobs/>} */}
      <NavbarJobs/>
      <h3>ListJobsPage</h3>
      <Link to="/add-jobs" className="btn btn-success">AddJobs</Link>

      <SearchJobsPage/>

      <div className="container">
        <div className="row">
          {renderListJobs()}
        </div>
      </div>
    </div>
  );
}
