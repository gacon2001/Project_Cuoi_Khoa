import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import SearchJobsPage from "../SearchJobsPage";
import { actDeleteJobsApi, actFetchListJobsApi } from "./modules/actions";

export default function ListJobsPage() {
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
        <div className="card text-left">
          <img className="card-img-top" src={jobs.image} alt={jobs.name} />
          <div className="card-body">
            <Link to="/detail-job">{jobs.name}</Link>
            <p></p>
            <div>
              <div>{jobs.rating}</div>
              <div></div>
            </div>
            <div>{jobs.price}</div>
          </div>

          {/* <Link to="/edit-jobs" className="btn btn-success">Edit</Link> */}
          <button className="btn btn-success" onClick={()=> history.push(`/edit-jobs/${jobs._id}`)}>Edit</button>
      <button className="btn btn-danger" onClick={()=> dispatch(actDeleteJobsApi(jobs._id))}>Delete</button>
        </div>
      );
    });
  };

  return (
    <div>
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
