import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import DetailJobPage from "../DetailJobPage";
import { actFetchDetailUserBookingApi, actFetchListBookingJobsApi } from "./modules/actions";

export default function ListBookingJobs() {
  const {_id} = useParams();
  const dispatch = useDispatch();
  const listBookingJobs = useSelector(
    (state) => state.fetchlistBookingJobsReducer.listBookingJobs
  );
  const detailUserBooking = useSelector((state)=> state.fetchlistBookingJobsReducer.detailUserBooking);

  useEffect(()=>{
    // lấy data từ trong localStorage (string)
    // JSON.parse(data) -> object data
    // data.user._id
    dispatch(actFetchListBookingJobsApi());
    dispatch(actFetchDetailUserBookingApi(_id));
  }, [])

  const renderListBookingJobs = () => {
    return listBookingJobs?.map(() => {
      return (
        //!Lấy chi tiết ng dùng _id riêng có những jobs đc booking 
        <div>
          <DetailJobPage/>
        </div> 
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
