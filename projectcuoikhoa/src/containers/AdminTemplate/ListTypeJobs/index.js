import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import NavbarJobs from "../_components/NavbarJobs";
import { actFetchListTypeJobsApi } from "./modules/actions";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { actDeleteJobsApi } from "../ListJobsPage/modules/actions";
import { actBookingJobsApi } from "../ListJobsPage/modules/actions";

export default function ListTypeJobs() {
    const dispatch = useDispatch();
    const listTypeJobs = useSelector((state)=> state.fetchListTypeJobsReducer.listTypeJobs);
    const {IDType} = useParams();
    const history = useHistory();
    const renderListTypeJobs = () => {
        return listTypeJobs?.map((type)=>{
            return (
                <div className="card text-left">
                <img className="card-img-top" src={type.image} alt={type.name} />
                <div className="card-body">
                  <Link to="/detail-job">{type.name}</Link>
                    <div>{type.rating}</div>
                  <div>{type.price}</div>
                  {/* <div>{type.usersBooking}</div> */}
                  {/* <div>{type.proServices}</div> */}
                </div>
      
                {/* <Link to="/edit-jobs" className="btn btn-success">Edit</Link> */}
                <button className="btn btn-success" onClick={()=> history.push(`/edit-jobs/${type._id}`)}>Edit</button>
            <button className="btn btn-danger" onClick={()=> dispatch(actDeleteJobsApi(type._id))}>Delete</button>
            <button className="btn btn-warning" onClick={()=> dispatch(actBookingJobsApi(type._id))}>Booking</button>
              </div>
            )
        })
    }

    useEffect(()=>{
        dispatch(actFetchListTypeJobsApi(IDType));
    }, []);

  return (
    <div>
        <NavbarJobs/>
      <h3>ListTypeJobs</h3>

      <div className="container">
          <div className="row">
              {renderListTypeJobs()}
          </div>
      </div>
    </div>
  );
}
