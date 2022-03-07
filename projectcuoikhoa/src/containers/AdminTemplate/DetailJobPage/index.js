import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actDetailJobsApi } from "./modules/actions";
import { actBookingThisJobsApi } from "./modules/actions";

export default function DetailJobPage() {
  const dispatch = useDispatch();
  const { _id } = useParams();
  // const detailJobs = useSelector(
  //   (state) => state.detailJobsReducer.detailJobs
  // );

  useEffect(() => {
    dispatch(actDetailJobsApi(_id));
  }, []);

  return (
    <div>
      <h3>DetailJobPage</h3>

      {/* ??? */}
      {/* <p>{detailJobs.name}</p> */}

  <button className="btn btn-success" onClick={()=> dispatch(actBookingThisJobsApi(_id))}>Book This Job</button>
    </div>
  );
}
