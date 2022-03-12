import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actFetchListBookingJobsApi } from "./modules/actions";

export default function ListBookingJobs() {
  // const {_id} = useParams();
  const dispatch = useDispatch();
  const listBookingJobs = useSelector(
    (state) => state.fetchlistBookingJobsReducer.listBookingJobs
  );

  useEffect(()=>{
    // lấy data từ trong localStorage (string)
    // JSON.parse(data) -> object data
    // data.user._id
    dispatch(actFetchListBookingJobsApi());
  }, [])

  const renderListBookingJobs = () => {
    return listBookingJobs?.map(() => {
      return (
        //!!!!!!!!!!!!!!!!!
        <div></div>
        //!Lấy chi tiết ng dùng _id riêng có những jobs đc booking 
      );
    });
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
